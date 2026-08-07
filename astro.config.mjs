// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://bergenhema.no',
  // `base` stays '/' — correct for a custom domain on GitHub Pages and for
  // Azure Static Web Apps. Only change it if the site ever moves to a
  // project subpath like `user.github.io/bergenhema`.
  base: '/',
  output: 'static',
  trailingSlash: 'ignore',

  i18n: {
    locales: ['no', 'en'],
    defaultLocale: 'no',
    routing: {
      // Norwegian keeps the bare URLs the WordPress site already uses
      // (/medlemskap/, /utstyr/, …) so inbound links and rankings survive.
      prefixDefaultLocale: false,
    },
  },

  // The old site had a single English stub at /english/. Astro emits a
  // meta-refresh page for this in static mode, which works on hosts with no
  // server-side redirects (GitHub Pages).
  redirects: {
    '/english': '/en',
    // The old site had a second, near-duplicate fees page.
    '/medlemskap-og-betaling': '/medlemskap',
  },

  // Downloaded at build time and served from our own origin, so no request
  // ever reaches Google Fonts and there is nothing to consent to.
  //
  // Every face listed here is preloaded, so the list is kept to exactly what
  // the design uses — Fraunces only ever appears at 600, and Inter at 400/500/
  // 600. Adding a weight costs a render-blocking preload, so check it is
  // actually used first.
  //
  // `latin` alone is enough: its range starts at U+0000-00FF, which covers
  // æ ø å Æ Ø Å and the Þ in Þorsteinn, plus the en dash and « » from
  // U+2000-206F. `latin-ext` would double the file count for nothing.
  fonts: [
    {
      name: 'Fraunces',
      cssVariable: '--font-fraunces',
      provider: fontProviders.fontsource(),
      weights: ['600'],
      styles: ['normal'],
      subsets: ['latin'],
      fallbacks: ['Iowan Old Style', 'Georgia', 'serif'],
      display: 'swap',
    },
    {
      name: 'Inter',
      cssVariable: '--font-inter',
      provider: fontProviders.fontsource(),
      weights: ['400', '500', '600'],
      styles: ['normal'],
      subsets: ['latin'],
      fallbacks: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      display: 'swap',
    },
  ],

  image: {
    layout: 'constrained',
    objectFit: 'cover',
  },

  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'no',
        locales: { no: 'nb-NO', en: 'en' },
      },
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});
