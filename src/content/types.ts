import type { RouteKey } from '../i18n/ui';

/**
 * One shape, two locales. Because `no.ts` and `en.ts` are both typed as
 * `SiteContent`, forgetting to translate a field is a build error rather than
 * something a visitor discovers.
 *
 * Every `Prose` entry is an array of paragraphs. Simple inline HTML (`<a>`,
 * `<strong>`, `<em>`) is allowed and rendered with `set:html` — the content is
 * authored in this repository, never supplied by a visitor.
 */
export type Prose = string[];

export interface Meta {
  title: string;
  description: string;
}

export interface Titled {
  title: string;
  body: Prose;
}

export interface Point {
  title: string;
  body: string;
}

export interface Faq {
  q: string;
  a: string;
}

export interface PriceRow {
  label: string;
  amount: number;
  note?: string;
}

/**
 * What the club requires you to own before sparring, split by what you spar
 * with. The authoritative version lives in the club's equipment document —
 * this is the summary, so keep it short.
 */
export interface GearRequirements {
  /** 'Nylon' / 'Stål' */
  title: string;
  lead: string;
  required: string[];
  recommended: string[];
}

export interface SiteContent {
  /** Per-page <title> and meta description. */
  meta: Record<RouteKey, Meta>;

  home: {
    hero: {
      eyebrow: string;
      title: string;
      lead: string;
      primary: string;
      secondary: string;
    };
    what: { eyebrow: string; title: string; body: Prose };
    forMe: { eyebrow: string; title: string; lead: string; points: Point[] };
    heritage: { eyebrow: string; title: string; body: Prose };
    longsword: { eyebrow: string; title: string; body: Prose };
    start: {
      eyebrow: string;
      title: string;
      lead: string;
      steps: Point[];
    };
    faq: { eyebrow: string; title: string; items: Faq[] };
    cta: { title: string; lead: string };
  };

  membership: {
    eyebrow: string;
    title: string;
    lead: string;
    who: Titled;
    /**
     * The club takes beginners in twice a year and that period costs nothing.
     * Both facts are stated here and in the home-page FAQ, and nowhere else —
     * naming the months in every CTA ages badly and reads as clutter.
     */
    intake: {
      title: string;
      lead: string;
      /** `label` is the period ("September"), `note` the semester it opens. */
      windows: { label: string; note: string }[];
      free: string;
      /** Already train HEMA? The intake windows do not apply to you. */
      experienced: string;
    };
    bring: { title: string; lead: string; items: string[]; note: string };
    venue: Titled;
    times: Titled;
    fees: {
      title: string;
      lead: string;
      rows: PriceRow[];
      payment: Titled;
      reference: string;
    };
  };

  equipment: {
    eyebrow: string;
    title: string;
    lead: string;
    beginner: Titled;
    fullTitle: string;
    fullLead: string;
    requirements: GearRequirements[];
    /** Link out to the maintained equipment document. */
    doc: Titled & { linkLabel: string };
    outro: string;
  };

  groups: {
    eyebrow: string;
    title: string;
    lead: string;
    offerings: Titled[];
    included: { title: string; items: string[] };
    cta: { title: string; lead: string; button: string };
  };

  about: {
    eyebrow: string;
    title: string;
    lead: string;
    body: Prose;
    boardTitle: string;
    boardLead: string;
    bylaws: Titled & { linkLabel: string };
  };

  contact: {
    eyebrow: string;
    title: string;
    lead: string;
    emailTitle: string;
    emailBody: string;
    spondTitle: string;
    spondBody: string;
    discordTitle: string;
    discordBody: string;
    socialTitle: string;
    socialBody: string;
    visitTitle: string;
    visitBody: Prose;
    directions: string;
    mapLink: string;
  };
}
