/**
 * Facts about the club that are identical in every language: addresses,
 * account numbers, external links. Keeping them here means a change to the
 * training time or the Spond invite is a one-line edit, not a search across
 * two locales' worth of copy.
 */
export const site = {
  url: 'https://bergenhema.no',
  name: 'Bergen HEMA',
  orgNumber: '914 067 103',

  email: 'post@bergenhema.no',

  training: {
    day: { no: 'Torsdag', en: 'Thursday' },
    /** 24h, used both for display and for the JSON-LD opening hours. */
    start: '17:00',
    end: '19:00',
    /** schema.org DayOfWeek */
    schemaDay: 'https://schema.org/Thursday',
  },

  venue: {
    name: 'Gymsalen, Årstad videregående skole',
    street: 'Fjøsangerveien 38',
    postalCode: '5054',
    city: 'Bergen',
    country: 'NO',
    /** Opens the venue in the visitor's default map app. */
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Fj%C3%B8sangerveien+38%2C+5054+Bergen',
    latitude: 60.3703,
    longitude: 5.3444,
  },

  payment: {
    bankAccount: '1503.51.02563',
    vipps: '621208',
  },

  prices: {
    semester: 800,
    year: 1300,
    supporting: 100,
  },

  links: {
    spond: 'https://spond.com/invite/FUOAS',
    // The old site used the legacy /pages/Bergen-HEMA/1016746845022003 path,
    // which Facebook now redirects to this vanity URL.
    facebook: 'https://www.facebook.com/BergenHEMA',
    instagram: 'https://www.instagram.com/bergenhema/',
    bylaws: '/bergen-hema-vedtekter.pdf',
  },

  /** Elected at the most recent annual general meeting. */
  board: [
    { name: 'Rickard Falck', role: { no: 'Styreleder og hovedtrener', en: 'Chair and head coach' } },
    { name: 'Þorsteinn Thorarensen', role: { no: 'Nestleder og sekretær', en: 'Deputy chair and secretary' } },
    { name: 'Peter Petia', role: { no: 'Styremedlem, sosiale medier', en: 'Board member, social media' } },
    { name: 'Lars Sverkeli', role: { no: 'Styremedlem', en: 'Board member' } },
    { name: 'Håkon Bergsnes', role: { no: 'Styremedlem', en: 'Board member' } },
    { name: 'Thomas Sandvaag', role: { no: 'Varamedlem', en: 'Deputy board member' } },
  ],

  founders: ['Knut Bonan', 'Petter Brodin', 'Daniel Flokenes', 'Margit Reiersen'],
  foundedYear: 2014,
} as const;

export type Locale = 'no' | 'en';

export const locales = ['no', 'en'] as const;
export const defaultLocale: Locale = 'no';
