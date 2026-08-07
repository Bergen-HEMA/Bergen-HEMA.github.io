/**
 * Builds public/og-image.jpg — the 1200x630 card that Facebook, LinkedIn,
 * Slack and iMessage show when someone shares a link to the site.
 *
 * Run with `npm run og`. Re-run whenever the hero photograph changes.
 */
import sharp from 'sharp';

const WIDTH = 1200;
const HEIGHT = 630;
const SOURCE = 'src/assets/photos/hero-crossed-swords.jpg';
const LOCKUP = 'src/assets/brand/lockup.png';
const OUTPUT = 'public/og-image.jpg';

const photo = await sharp(SOURCE)
  .resize(WIDTH, HEIGHT, { fit: 'cover', position: 'attention' })
  .modulate({ brightness: 0.52, saturation: 0.85 })
  .toBuffer();

// Gradient wash so the white lockup keeps its contrast wherever the crop
// lands, plus the brand red as a bottom rule.
const scrim = Buffer.from(
  `<svg width="${WIDTH}" height="${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
     <defs>
       <linearGradient id="g" x1="0" y1="1" x2="0" y2="0">
         <stop offset="0%"   stop-color="#12100E" stop-opacity="0.92"/>
         <stop offset="55%"  stop-color="#12100E" stop-opacity="0.55"/>
         <stop offset="100%" stop-color="#12100E" stop-opacity="0.62"/>
       </linearGradient>
     </defs>
     <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#g)"/>
     <rect x="0" y="${HEIGHT - 8}" width="${WIDTH}" height="8" fill="#C83737"/>
   </svg>`,
);

const lockup = await sharp(LOCKUP).resize({ width: 560 }).toBuffer();
const { width: lw, height: lh } = await sharp(lockup).metadata();

await sharp(photo)
  .composite([
    { input: scrim, top: 0, left: 0 },
    { input: lockup, left: Math.round((WIDTH - lw) / 2), top: Math.round((HEIGHT - lh) / 2) - 10 },
  ])
  .jpeg({ quality: 86, mozjpeg: true })
  .toFile(OUTPUT);

const out = await sharp(OUTPUT).metadata();
console.log(`Wrote ${OUTPUT} (${out.width}x${out.height})`);
