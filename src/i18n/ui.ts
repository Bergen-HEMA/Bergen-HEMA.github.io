import type { Locale } from '../site';

/**
 * Every page keyed by a language-independent id, so the language switcher can
 * send a visitor to the *same* page in the other language rather than dumping
 * them on the front page.
 *
 * The Norwegian paths deliberately match the URLs the WordPress site already
 * uses, so existing inbound links and search rankings survive the move.
 */
export const routes = {
  home: { no: '/', en: '/en/' },
  membership: { no: '/medlemskap/', en: '/en/membership/' },
  equipment: { no: '/utstyr/', en: '/en/equipment/' },
  groups: { no: '/arrangementer/', en: '/en/groups/' },
  about: { no: '/om-klubben/', en: '/en/about/' },
  contact: { no: '/kontakt/', en: '/en/contact/' },
} as const;

export type RouteKey = keyof typeof routes;

/** Order of the main navigation. `home` is reached through the logo. */
export const navOrder: RouteKey[] = ['membership', 'equipment', 'groups', 'about', 'contact'];

type UiStrings = {
  htmlLang: string;
  /** Human name of this language, shown in the switcher. */
  langName: string;
  langSwitchLabel: string;
  skipToContent: string;
  /** Sits under the wordmark, mirroring the club's printed logo lockup. */
  tagline: string;
  /** Full page names, used in the footer and the mobile panel. */
  nav: Record<RouteKey, string>;
  /**
   * Abbreviated names for the desktop header bar. The full English labels
   * ("Training and membership", "Companies and groups") do not fit alongside
   * the logo and the join button, and pushing the CTA off the edge is worse
   * than a shorter word.
   */
  navShort: Record<RouteKey, string>;
  navMenu: string;
  navClose: string;
  joinCta: string;
  tryCta: string;
  emailUs: string;
  footer: {
    trainWithUs: string;
    practical: string;
    followUs: string;
    orgNumber: string;
    builtNote: string;
  };
  /** Renders "Torsdag 17:00–19:00" and similar. */
  trainingTime: (day: string, start: string, end: string) => string;
  /**
   * The club takes beginners in twice a year and that period is free. Kept
   * evergreen rather than naming the months, so the ticker and the CTAs never
   * go stale — the dates themselves live on the membership page and in the FAQ.
   */
  freeIntake: string;
  currency: (amount: number) => string;
  /** Labels the two halves of an equipment requirement list. */
  gearRequired: string;
  gearRecommended: string;
  externalLink: string;
  backToTop: string;
  showOnMap: string;
  bankAccount: string;
  founded: string;
};

export const ui: Record<Locale, UiStrings> = {
  no: {
    htmlLang: 'nb',
    langName: 'Norsk',
    langSwitchLabel: 'Bytt språk til engelsk',
    skipToContent: 'Gå til hovedinnhold',
    tagline: 'Historisk europeisk kampsport',
    nav: {
      home: 'Hjem',
      membership: 'Trening og medlemskap',
      equipment: 'Utstyr',
      groups: 'Bedrift og grupper',
      about: 'Om klubben',
      contact: 'Kontakt',
    },
    navShort: {
      home: 'Hjem',
      membership: 'Trening',
      equipment: 'Utstyr',
      groups: 'Bedrift',
      about: 'Om klubben',
      contact: 'Kontakt',
    },
    navMenu: 'Meny',
    navClose: 'Lukk meny',
    joinCta: 'Bli medlem',
    tryCta: 'Prøv gratis ved semesterstart',
    emailUs: 'Send oss en e-post',
    footer: {
      trainWithUs: 'Tren med oss',
      practical: 'Praktisk',
      followUs: 'Følg oss',
      orgNumber: 'Organisasjonsnummer',
      builtNote: 'Historisk europeisk kampsport i Bergen siden 2014.',
    },
    trainingTime: (day, start, end) => `${day} ${start}–${end}`,
    freeIntake: 'Gratis ved semesterstart',
    currency: (n) => `${n} kr`,
    gearRequired: 'Påkrevd',
    gearRecommended: 'Anbefalt',
    externalLink: 'åpnes i nytt vindu',
    backToTop: 'Til toppen',
    showOnMap: 'Vis i kart',
    bankAccount: 'Bankkonto',
    founded: 'Stiftet',
  },
  en: {
    htmlLang: 'en',
    langName: 'English',
    langSwitchLabel: 'Switch language to Norwegian',
    skipToContent: 'Skip to main content',
    tagline: 'Historical European martial arts',
    nav: {
      home: 'Home',
      membership: 'Training and membership',
      equipment: 'Equipment',
      groups: 'Companies and groups',
      about: 'About the club',
      contact: 'Contact',
    },
    navShort: {
      home: 'Home',
      membership: 'Training',
      equipment: 'Equipment',
      groups: 'Groups',
      about: 'About',
      contact: 'Contact',
    },
    navMenu: 'Menu',
    navClose: 'Close menu',
    joinCta: 'Join us',
    tryCta: 'Try free at the start of term',
    emailUs: 'Send us an email',
    footer: {
      trainWithUs: 'Train with us',
      practical: 'Practical',
      followUs: 'Follow us',
      orgNumber: 'Organisation number',
      builtNote: 'Historical European martial arts in Bergen since 2014.',
    },
    trainingTime: (day, start, end) => `${day} ${start}–${end}`,
    freeIntake: 'Free at the start of each semester',
    currency: (n) => `NOK ${n}`,
    gearRequired: 'Required',
    gearRecommended: 'Recommended',
    externalLink: 'opens in a new window',
    backToTop: 'Back to top',
    showOnMap: 'Show on map',
    bankAccount: 'Bank account',
    founded: 'Founded',
  },
};

/** The other locale — there are only two, so this stays simple. */
export const otherLocale = (locale: Locale): Locale => (locale === 'no' ? 'en' : 'no');

export const t = (locale: Locale) => ui[locale];

export const path = (locale: Locale, key: RouteKey): string => routes[key][locale];
