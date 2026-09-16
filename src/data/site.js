/**
 * Single source of truth for every piece of copy and every image path on the
 * site. Edit this file to change content — the pages read from it and nothing
 * else hard-codes text.
 *
 * Image paths all live under /public/images. See ASSETS.md for the full list.
 */

export const site = {
  name: 'Michael Tardi',
  roles: ['Entrepreneur', 'Entertainer', 'Hospitality Executive', 'Restaurateur'],
  title: 'Entrepreneur & Hospitality Executive',
  tagline: "Don't Be Tardi for the Party.",
  email: 'mtardi@mmeink.com',
  phone: '212-971-5353',
  company: { name: 'MME Worldwide', url: 'https://www.mmeink.com' },
  social: {
    linkedin: 'https://www.linkedin.com/in/michael-tardi/',
    instagram: 'https://www.instagram.com/mmeink/',
  },
};

/* ── Home: hero ──────────────────────────────────────────────────────── */

export const hero = {
  location: 'New York',
  name: ['Michael', 'Tardi'],
  headline: 'He started with a microphone at 14.',
  body:
    'He danced on MTV. He owned an Italian restaurant in Montauk. He built an ' +
    'international events and entertainment business. Today he operates ' +
    'historic venues in Downtown Manhattan.',
  portrait: '/images/michael/hero-portrait.jpg',
  portraitAlt: 'Michael Tardi in a dark suit at one of his Manhattan venues',
  backdrop: '/images/hero.jpg',
};

export const stats = [
  { value: '32', label: 'Years On Stage & Behind It' },
  { value: '500+', label: 'Events Produced' },
  { value: '8', label: 'Venue Partners' },
  { value: '6', label: 'Companies Founded' },
];

/* ── Home + About: the story ─────────────────────────────────────────── */

export const about = {
  eyebrow: 'About Michael',
  title: 'From “MC Mikey Mike” to Manhattan entrepreneur',
  portrait: '/images/michael/story.jpg',
  portraitAlt: 'Michael Tardi at the bar of one of his venues',

  /* First two paragraphs run on the home page; all five on the about page. */
  story: [
    'Michael Tardi has been entertaining people since he was fourteen years ' +
      'old, when he became “MC Mikey Mike,” performing at Bar and Bat ' +
      'Mitzvahs throughout New York.',
    'That teenage entertainer grew into a career spanning television, dance, ' +
      'brand activations, restaurants, hospitality, live events, ' +
      'entrepreneurship, and historic New York City venues.',
    'Michael’s entertainment background includes dancing for MTV’s ' +
      'The Grind and Global Grooves, promotional entertainment connected with ' +
      'Sandals and Beaches Resorts International, and working as a ' +
      'Hewlett-Packard PhotoSmart brand ambassador.',
    'But performing was only the beginning.',
  ],

  pills: [
    'Live Events',
    'Venue Operations',
    'Hospitality',
    'Production & AV',
    'Custom Fabrication',
    'On Camera',
  ],
};

/* ── About: the entrepreneur ─────────────────────────────────────────── */

export const entrepreneur = {
  eyebrow: 'The Entrepreneur',
  title: 'From entertaining the room to building it',
  image: '/images/michael/entrepreneur.jpg',
  imageAlt: 'Michael Tardi working at a table in a Manhattan lounge',
  body: [
    'Michael transitioned from entertaining guests to building businesses and ' +
      'creating the experiences himself.',
    'His hospitality career included becoming the owner and operator of La ' +
      'Fine, an Italian restaurant in Montauk. La Fine translates to “The ' +
      'End” in Italian — an appropriate name for a restaurant located at the ' +
      'eastern end of Long Island.',
  ],
  ventures: [
    {
      name: 'MME Worldwide',
      role: 'Chief Executive Officer',
      body:
        'An events, entertainment, production, AV, staging, lighting, ' +
        'experiential and custom-fabrication company.',
    },
    {
      name: '48 Wall Street Events',
      role: 'Operator',
      body:
        'Inside the historic former Bank of New York building in Downtown ' +
        'Manhattan, hosting private celebrations, corporate events, ' +
        'productions, nonprofit functions and special experiences.',
    },
    {
      name: 'La Fine, Montauk',
      role: 'Former Owner & Operator',
      body:
        'An Italian restaurant at the eastern end of Long Island. “The End,” ' +
        'literally.',
    },
  ],
};

/* ── About: personality ──────────────────────────────────────────────── */

export const personality = {
  eyebrow: 'Personality',
  title: 'He isn’t interested in playing a television character.',
  image: '/images/michael/personality.jpg',
  imageAlt: 'Michael Tardi on the phone, mid-conversation, at a pool table',
  traits: [
    'High energy',
    'Outspoken',
    'Creative',
    'Competitive',
    'Family-oriented',
    'Entrepreneurial',
    'Very Italian',
  ],
  body: [
    'Michael is comfortable with a microphone in his hand, negotiating across ' +
      'a table, walking through a potential property, directing an event ' +
      'team, entertaining a room — or dealing with the unexpected problems ' +
      'that come with hospitality.',
    'The personality is already there.',
  ],
  aside: {
    text: 'And at 46, Michael will happily tell you that he looks 33.',
    quote: '“Thank God for La Mer cream.”',
  },
};

/* ── About: off the clock ────────────────────────────────────────────── */

export const offTheClock = {
  eyebrow: 'Off the Clock',
  title: 'Behind the businesses, there is family',
  body: [
    'Behind the businesses, events and constant activity, family is one of ' +
      'the most important parts of Michael’s life.',
    'When he actually takes time away from work, one of his favourite things ' +
      'to do is spend time with his niece and nephew.',
    'Giving back is equally important. Michael has been involved with ' +
      'nonprofit organisations and has supported charitable events through ' +
      'his Downtown New York City venues.',
  ],
  images: [
    { src: '/images/michael/family-1.jpg', alt: 'Michael Tardi with his niece and nephew' },
    { src: '/images/michael/family-2.jpg', alt: 'Michael Tardi and his niece at a laptop' },
  ],
};

/* ── About: casting snapshot ─────────────────────────────────────────── */

export const casting = {
  eyebrow: 'Casting Snapshot',
  title: 'The one-sheet',
  vitals: [
    ['Name', 'Michael Tardi'],
    ['Age', '46'],
    ['Height', '5′11″'],
    ['Weight', '185 lbs.'],
    ['Based', 'New York'],
    ['Heritage', 'Italian-American'],
  ],
  credits: [
    {
      label: 'Entertainment',
      items: ['MC “Mikey Mike”', 'MTV’s The Grind', 'Global Grooves'],
    },
    {
      label: 'Brand & Promotional',
      items: ['Hewlett-Packard PhotoSmart', 'Sandals / Beaches'],
    },
    {
      label: 'Hospitality',
      items: ['Former Owner & Operator — La Fine, Montauk'],
    },
    {
      label: 'Business',
      items: ['Chief Executive Officer — MME Worldwide'],
    },
    {
      label: 'Venue Operations',
      items: ['48 Wall Street Events, Downtown Manhattan'],
    },
    {
      label: 'On-Camera Categories',
      items: [
        'Unscripted',
        'Reality',
        'Business',
        'Hospitality',
        'Lifestyle',
        'Entertainment',
      ],
    },
  ],
  images: [
    { src: '/images/michael/casting-1.jpg', alt: 'Michael Tardi, studio portrait' },
    { src: '/images/michael/casting-2.jpg', alt: 'Michael Tardi, seated studio portrait' },
    { src: '/images/michael/casting-3.jpg', alt: 'Michael Tardi at a bank vault door' },
  ],
};

/* ── Home: what Michael does (typographic — needs no photography) ────── */

export const services = [
  {
    title: 'Events & Production',
    body:
      'Full-scale event strategy, production, AV, staging, lighting, and ' +
      'flawless on-site execution from concept to strike.',
  },
  {
    title: 'Venue Operations',
    body:
      'The systems, teams, and client experiences that drive venue ' +
      'profitability and long-term success in a competitive market.',
  },
  {
    title: 'Hospitality & F&B',
    body:
      'Food and beverage programming, restaurant operations, hospitality ' +
      'partnerships, and guest experience strategy that drives revenue.',
  },
  {
    title: 'Experiential & Fabrication',
    body:
      'Brand activations, immersive experiences, and custom fabrication — ' +
      'built in house, installed on site.',
  },
];

/* ── Home: venue network (logos only — needs no photography) ─────────── */

export const venues = [
  { name: '48 Wall Street', logo: '/images/venues/48-wall-street.png', url: 'https://www.48wall.com/' },
  { name: 'The 1912', logo: '/images/venues/the-1912.png', url: 'https://www.the1912.com/' },
  { name: 'Midtown Veranda', logo: '/images/venues/midtown-veranda.png', url: 'https://www.midtownveranda.com/' },
  { name: 'Manhattan Loft Spaces', logo: '/images/venues/manhattan-lofts.png', url: 'https://www.manhattanloftspaces.com/' },
  { name: 'The Artistry', logo: '/images/venues/the-artistry.png', url: 'https://www.theartistry.com/' },
  { name: 'FiDi Mezzanine', logo: '/images/venues/fidi-mezzanine.png', url: 'https://www.48wall.com/' },
  { name: '60 Pine Street', logo: '/images/venues/60-pine.png', url: null },
  { name: "Tardi's Cafe", logo: '/images/venues/tardis-cafe.png', url: 'https://www.mmeink.com/' },
];

/* ── Home: selected work (3 — was 16) ────────────────────────────────── */

export const work = [
  {
    name: '40/40 Club Grand Reopening',
    client: 'Jay-Z',
    type: 'Celebrity Entertainment',
    role: 'Event Producer',
    summary:
      'Production lead for the 40/40 Club grand reopening — seamless ' +
      'logistics, talent coordination, and elevated hospitality under ' +
      'intense public attention.',
    image: '/images/work/40-40-club.jpg',
  },
  {
    name: 'Swiss Re 150th Anniversary',
    client: 'Swiss Re',
    type: 'Corporate Gala',
    role: 'Producer & Venue Liaison',
    summary:
      'A landmark 150th anniversary rebranding celebration at Cipriani ' +
      'Downtown — grand-scale corporate hospitality for an international ' +
      'guest list.',
    image: '/images/work/swiss-re.jpg',
  },
  {
    name: 'Visit Mexico at 48 Wall Street',
    client: 'Government of Mexico',
    type: 'Diplomatic Event',
    role: 'Venue Operator & Producer',
    summary:
      'Two hundred government officials hosted in a high-security, ' +
      'high-prestige event — full production management, catering, and ' +
      'diplomatic hospitality.',
    image: '/images/work/visit-mexico.jpg',
  },
];

/* ── Home: testimonials ──────────────────────────────────────────────── */

export const testimonials = [
  {
    quote:
      'Michael Tardi is simply in a league of his own. His ability to ' +
      'transform a vision into a flawless, unforgettable event is unmatched. ' +
      'Every detail is considered, every guest is cared for.',
    name: 'Sarah Mitchell',
    role: 'VP of Brand Marketing, Fortune 500 Company',
  },
  {
    quote:
      'Working with Michael on our venue launch was one of the best ' +
      'decisions we made. He brought strategy, creativity, and an incredible ' +
      'network that elevated our opening beyond what we imagined.',
    name: 'James Romano',
    role: 'Venue Owner & Developer, Manhattan Hospitality Group',
  },
  {
    quote:
      'Thirty years of real experience shows in every conversation. Michael ' +
      'does not just consult, he executes. He has been an invaluable partner ' +
      'in scaling our event business.',
    name: 'Lisa Torres',
    role: 'Founder, Elite Events NYC',
  },
];

/* ── Shared: closing call to action (drawn from “The Pitch”) ─────────── */

export const cta = {
  eyebrow: 'The Pitch',
  title: 'Michael Tardi isn’t trying to become a personality for television.',
  emphasis: 'He already is one.',
  body:
    'He started with a microphone at 14. He danced on MTV. He owned an ' +
    'Italian restaurant in Montauk. He built an international events and ' +
    'entertainment business. Today he operates historic venues in Downtown ' +
    'Manhattan — and he still has the energy of MC Mikey Mike.',
  image: '/images/cta.jpg',
  imageAlt: 'An elegantly set event floor',
};

/* ── About: timeline ─────────────────────────────────────────────────── */

export const timeline = [
  {
    marker: 'Age 14',
    title: '“MC Mikey Mike”',
    body:
      'Michael starts performing at Bar and Bat Mitzvahs throughout New York.',
  },
  {
    marker: 'On Screen',
    title: 'MTV, Global Grooves & Brand Work',
    body:
      'Dancing for MTV’s The Grind and Global Grooves, promotional work ' +
      'with Sandals and Beaches Resorts International, and a run as a ' +
      'Hewlett-Packard PhotoSmart brand ambassador.',
  },
  {
    marker: 'Montauk',
    title: 'La Fine',
    body:
      'Owner and operator of an Italian restaurant at the eastern end of ' +
      'Long Island — the move from entertaining guests to serving them.',
  },
  {
    marker: 'Today',
    title: 'MME Worldwide & 48 Wall Street',
    body:
      'CEO of an international events and entertainment company, and ' +
      'operator of historic venues in Downtown Manhattan.',
  },
];

export const companies = [
  { name: 'Mikey Mike Entertainment', logo: '/images/companies/mikey-mike-entertainment.png' },
  { name: 'FiDi Hospitality', logo: '/images/companies/fidi-hospitality.png' },
  { name: 'MMEink South', logo: '/images/companies/mmeink-south.png' },
  { name: "Tardi's Catering", logo: '/images/companies/tardis-catering.png' },
  { name: 'Caviar Kart', logo: '/images/companies/caviar-kart.svg' },
  { name: "Tardi's Cafe", logo: '/images/companies/tardis-cafe.svg' },
];

/* ── Contact page ────────────────────────────────────────────────────── */

export const inquiryTypes = [
  { value: 'casting', label: 'Casting & Media' },
  { value: 'events', label: 'Events & Production' },
  { value: 'venue', label: 'Venue Booking' },
  { value: 'consulting', label: 'Consulting & Training' },
  { value: 'speaking', label: 'Speaking & Mentorship' },
  { value: 'investment', label: 'Investment & Partnership' },
  { value: 'press', label: 'Press' },
  { value: 'general', label: 'General Inquiry' },
];

export const partnerTracks = [
  {
    title: 'Casting & Media',
    body:
      'For producers, casting directors, and networks. Unscripted, reality, ' +
      'business, hospitality, lifestyle, and entertainment.',
    type: 'casting',
  },
  {
    title: 'Events & Venues',
    body:
      'For brands, corporates, and private clients booking production, ' +
      'staging, fabrication, or a Downtown Manhattan venue.',
    type: 'events',
  },
  {
    title: 'Consulting & Speaking',
    body:
      'For hospitality groups and event companies improving operations, and ' +
      'for panels and leadership sessions.',
    type: 'consulting',
  },
  {
    title: 'Investment & Partnership',
    body:
      'For real estate opportunities and hospitality concepts seeking an ' +
      'experienced operator and strategic partner.',
    type: 'investment',
  },
];
