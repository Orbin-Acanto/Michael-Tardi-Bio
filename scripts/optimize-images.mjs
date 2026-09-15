#!/usr/bin/env node
/**
 * Resize and re-compress everything in public/images so the repo stays small
 * and pages load fast.
 *
 * Drop a full-resolution photo in at the right path and run this — it caps the
 * longest side, re-encodes as high-quality mozjpeg (or lossless PNG), and only
 * writes the result if it actually came out smaller.
 *
 *   npm run images              optimise public/images in place
 *   npm run images -- --dry     report what it would do, write nothing
 *
 * Per-path size caps live in TARGETS below, keyed by path prefix.
 */

import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const DIR = path.join(ROOT, 'public', 'images');
const DRY = process.argv.includes('--dry');

/* Longest-edge cap per area, in pixels. First matching prefix wins. */
const TARGETS = [
  ['images/venues/', 600],
  ['images/companies/', 600],
  ['images/portrait', 1440],
  ['images/work/', 1600],
  ['images/hero', 2000],
  ['images/cta', 2000],
];

const DEFAULT_MAX = 1920;
const QUALITY = 82;
const EXTS = new Set(['.jpg', '.jpeg', '.png']);

function maxDimFor(rel) {
  const key = rel.split(path.sep).join('/');
  const hit = TARGETS.find(([prefix]) => key.includes(prefix));
  return hit ? hit[1] : DEFAULT_MAX;
}

async function* walk(dir) {
  for (const entry of await fs.readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(full);
    else yield full;
  }
}

const mb = (n) => (n / 1048576).toFixed(2);

async function run() {
  let before = 0;
  let after = 0;
  let touched = 0;

  for await (const file of walk(DIR)) {
    const ext = path.extname(file).toLowerCase();
    if (!EXTS.has(ext)) continue;

    const rel = path.relative(ROOT, file);
    const original = (await fs.stat(file)).size;
    const max = maxDimFor(rel);

    const img = sharp(file, { failOn: 'none' });
    const meta = await img.metadata();
    const longest = Math.max(meta.width ?? 0, meta.height ?? 0);

    let pipeline = img.rotate();
    if (longest > max) pipeline = pipeline.resize({ width: max, height: max, fit: 'inside' });

    pipeline =
      ext === '.png'
        ? pipeline.png({ compressionLevel: 9, palette: true })
        : pipeline.jpeg({ quality: QUALITY, mozjpeg: true, chromaSubsampling: '4:4:4' });

    const out = await pipeline.toBuffer();

    before += original;

    if (out.length >= original) {
      after += original;
      console.log(`  skip  ${rel} (already ${mb(original)} MB)`);
      continue;
    }

    after += out.length;
    touched += 1;
    console.log(
      `  ${DRY ? 'would' : 'wrote'} ${rel}  ${mb(original)} → ${mb(out.length)} MB` +
        (longest > max ? `  (${longest}px → ${max}px)` : '')
    );

    if (!DRY) await fs.writeFile(file, out);
  }

  console.log(
    `\n${touched} file(s) ${DRY ? 'would be ' : ''}optimised.  ` +
      `${mb(before)} MB → ${mb(after)} MB`
  );
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
