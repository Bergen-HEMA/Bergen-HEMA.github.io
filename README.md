# bergenhema.no

The Bergen HEMA website: a static, bilingual (Norwegian / English) brochure
site built with [Astro](https://astro.build) and Tailwind CSS.

It replaces a WordPress install. There is no database, no CMS, no login and no
server-side code — `npm run build` produces a folder of plain files that any
static host will serve.

---

## Running it

```bash
npm install
npm run dev      # http://localhost:4321, live reload
npm run build    # writes dist/
npm run preview  # serve dist/ exactly as it will be deployed
npm run check    # TypeScript + Astro diagnostics
```

Node 20 or newer.

---

## Editing content

**You almost never need to touch a `.astro` file to change words on the site.**

| What you want to change | File |
| --- | --- |
| Any body copy, heading, FAQ answer | `src/content/no.ts` and `src/content/en.ts` |
| Prices, bank account, Vipps, address, training schedule, board members, social links | `src/site.ts` |
| Navigation labels, buttons, and other small UI words | `src/i18n/ui.ts` |
| Image descriptions for screen readers | `src/content/alt.ts` |
| Page titles and search-result descriptions | the `meta` block at the top of `no.ts` / `en.ts` |

### The two languages stay in sync automatically

`no.ts` and `en.ts` are both typed as `SiteContent` (`src/content/types.ts`).
If you add a paragraph to one and forget the other, `npm run check` fails with
the name of the missing field. That is deliberate — it is the only thing
stopping the English site from quietly rotting the way the old one did.

### Writing copy

Body text is written as an array of paragraphs:

```ts
body: [
  'First paragraph.',
  'Second paragraph, with a <strong>bold bit</strong> and a <a href="…">link</a>.',
],
```

Simple inline HTML (`<a>`, `<strong>`, `<em>`) is allowed and rendered as-is.
This is safe because the content lives in this repository — it is never
supplied by a visitor. Do not paste HTML from elsewhere into these files.

### One fact, one place

Prices, the training schedule, the account number and the address live only in
`src/site.ts`. Change the training slots there and it updates the header
ticker, the membership page, the contact page, the footer and the structured
data Google reads. Don't hard-code them into the copy.

---

## Swapping the photographs

All photography currently on the site was shot at **Bergenhus in January and
February 2015**. It is well composed and it is what the club has, but it is
over a decade old and most current members are not in it. **The single biggest
improvement available to this site is a fresh shoot.** The layout is built to
make that a file swap, not a redesign.

To replace an image:

1. Drop the new file into `src/assets/photos/` using the **same filename** as
   the one it replaces (see the table below).
2. Update its description in `src/content/alt.ts` — both languages.
3. `npm run build`.

Nothing else changes. Astro reads the dimensions at build time, generates AVIF
and WebP at every size the layout asks for, and writes the `width`/`height`
attributes that keep the page from jumping while images load.

Supply the **largest version you have**, at least 2400px on the long edge for
anything full-width. Do not pre-crop or pre-darken: cropping is handled per
layout by the `position` prop, and the darkening is a CSS gradient so the same
photograph can be reused elsewhere.

| File | Where it appears |
| --- | --- |
| `hero-crossed-swords.jpg` | Front page hero, and the social share card |
| `archway-bergenhus.jpg` | Front page "European martial arts" band, About header |
| `swords-stone-wall.jpg` | Front page longsword section, Equipment header |
| `sparring-lunge.jpg` | Front page "What is HEMA", closing call to action |
| `lineup-blue-door.jpg` | Front page "Getting started", About, Contact header |
| `fencers-waiting.jpg` | Front page closing band, Membership |
| `longsword-strike.jpg` | Front page longsword section |
| `portrait-braid.jpg` | Front page "Is HEMA for me?" |
| `portrait-red-jacket.jpg` | About page |
| `overhead-bind.jpg` | Membership header |
| `training-hall.jpg` | Membership page |
| `sword-red-grip.jpg` | Equipment page |
| `gloves-bind.jpg` | Equipment page closing image |
| `sparring-pair.jpg` | Contact page closing image |
| `outdoor-training.jpg` | About page, board section |
| `event-*.jpg` | Companies and groups page |
| `portrait-smiling.jpg`, `portrait-mask-off.jpg` | not currently placed — spares |

The social share card (`public/og-image.jpg`, 1200×630) is built from the hero
photograph plus the logo lockup. If you change the hero, regenerate it:

```bash
npm run og
```

### Logo

`src/assets/brand/` holds the club's Ochs mark with a transparent background,
recovered from the original PNG, which had the artwork sitting on a flat
`#222222` field. `mark.png` is the hand-and-sword mark used in the header and
footer; `lockup.png` adds the wordmark and is used on the share card. If a
proper vector version of the logo ever turns up, replacing these with an SVG
would be a straight upgrade.

---

## How it is put together

```
astro.config.mjs        site URL, locales, redirects, fonts, sitemap
src/
  site.ts               club facts: address, prices, links, board
  i18n/ui.ts            route table + UI strings per language
  content/
    types.ts            the shape both languages must satisfy
    no.ts / en.ts       all page copy
    alt.ts              image descriptions
  layouts/Base.astro    <head>, metadata, structured data, header, footer
  components/           Hero, PageHeader, Section, Figure, Faq, PriceTable, …
  pages/                one thin file per route; layout lives in components
  styles/global.css     design tokens and shared component classes
public/                 favicons, share card, robots.txt, the bylaws PDF
```

Each page exists twice — `src/pages/medlemskap.astro` and
`src/pages/en/membership.astro` — but both are a dozen lines that pass a locale
into a shared `*Sections.astro` component. The layout is written once.

### URLs

The Norwegian pages keep the exact paths the WordPress site used
(`/medlemskap/`, `/utstyr/`, `/arrangementer/`, `/om-klubben/`, `/kontakt/`) so
existing links and search rankings survive. English mirrors them under `/en/`.
The old `/english/` stub and the duplicate `/medlemskap-og-betaling/` page
redirect to their replacements.

Route paths are defined once in the `routes` table in `src/i18n/ui.ts`. That
table is also what lets the language switcher send a visitor to the *same*
page in the other language rather than back to the front page.

### Design system

Colours are taken from the club's own logo: white and red `#C83737` on a dark
charcoal ground. The tokens are at the top of `src/styles/global.css`, with the
measured contrast ratio for each pairing written next to it. Two rules worth
knowing before you edit them:

- `--color-accent` (`#C83737`) reaches only 3.7:1 on the dark ground. Use it
  for fills, rules and icons — never for small text. `--color-accent-ink`
  (`#E05F5F`) is the readable red, at 5.4:1.
- The surfaces are called `--color-surface`, `--color-surface-raised` and
  `--color-surface-sunken`. Do **not** rename them to `base`/`raised`/`sunken`:
  a token named `--color-base` makes Tailwind emit a `text-base` *colour*
  utility that silently overrides the built-in `text-base` font size and paints
  body copy near-black.

### Performance

The site ships **no JavaScript** apart from ~20 inlined lines that open the
mobile menu. Fonts are downloaded at build time and served from our own origin,
so no request ever reaches Google. Only the four faces the design actually uses
are included — adding a weight to `astro.config.mjs` adds a render-blocking
preload, so check it is used first.

Measured on the built output: 0 layout shift, ~300–400 KB for a first view of
the front page, of which 88 KB is fonts.

---

## Deploying

`npm run build` writes `dist/`. Upload it. That is the whole deployment model —
nothing in the build needs a server runtime, rewrites, or server-side
redirects.

Neither hosting target is configured in this repository yet. Both are small:

**GitHub Pages.** Add a workflow that runs `npm ci && npm run build` and
publishes `dist/`, and add a `public/CNAME` file containing `bergenhema.no`.
`base` in `astro.config.mjs` is already `/`, which is correct for a custom
domain. If the site were ever served from `username.github.io/bergenhema`
instead, `base` would need to change to `/bergenhema`.

**Azure Static Web Apps.** Point the app at this repository with
`output_location: "dist"` and `app_location: "/"`. No API is needed.

Whichever you choose, point the `bergenhema.no` DNS at it only once you have
seen the built site in a preview — and remember the WordPress install is what
currently answers on that domain.
