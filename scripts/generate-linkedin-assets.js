const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, '..', 'public', 'linkedin');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

async function createAssets() {
  const svgMarkPath = path.join(__dirname, '..', 'public', 'logo.svg');
  const svgMark = fs.readFileSync(svgMarkPath, 'utf8');

  // 1. Horizontal White Lockup: Mark on left, Wordmark on right
  const hMark = await sharp(Buffer.from(svgMark))
    .resize(320, 199, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer();

  const wordmarkPath = path.join(__dirname, '..', 'public', 'clean-white-wordmark.png');
  const hWordmark = await sharp(wordmarkPath)
    .resize(1150, 106, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer();

  // Canvas width: 320 + 60 + 1150 = 1530 + 100 margin = 1650, height: 320
  await sharp({
    create: {
      width: 1650,
      height: 320,
      channels: 4,
      background: { r: 0, g: 0, b: 0, alpha: 0 }
    }
  })
  .composite([
    { input: hMark, top: Math.round((320 - 199) / 2), left: 50 },
    { input: hWordmark, top: Math.round((320 - 106) / 2), left: 430 }
  ])
  .png()
  .toFile(path.join(outDir, 'next-dynamics-horizontal-white-transparent.png'));
  console.log('Created next-dynamics-horizontal-white-transparent.png');

  // Also horizontal lockup on Dark Background (1650 x 320)
  await sharp({
    create: {
      width: 1650,
      height: 320,
      channels: 4,
      background: { r: 7, g: 8, b: 14, alpha: 1 }
    }
  })
  .composite([
    { input: hMark, top: Math.round((320 - 199) / 2), left: 50 },
    { input: hWordmark, top: Math.round((320 - 106) / 2), left: 430 }
  ])
  .png()
  .toFile(path.join(outDir, 'next-dynamics-horizontal-white-dark.png'));
  console.log('Created next-dynamics-horizontal-white-dark.png');

  // 2. LinkedIn Banner (1584 x 396)
  const bannerSvg = `
  <svg width="1584" height="396" viewBox="0 0 1584 396" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <pattern id="grid" width="36" height="36" patternUnits="userSpaceOnUse">
        <path d="M 36 0 L 0 0 0 36" fill="none" stroke="rgba(255,255,255,0.035)" stroke-width="1"/>
      </pattern>
      <radialGradient id="cyanGlow" cx="80%" cy="30%" r="60%">
        <stop offset="0%" stop-color="rgba(0, 240, 255, 0.12)"/>
        <stop offset="100%" stop-color="rgba(7, 8, 14, 0)"/>
      </radialGradient>
      <radialGradient id="goldGlow" cx="20%" cy="100%" r="50%">
        <stop offset="0%" stop-color="rgba(212, 175, 55, 0.08)"/>
        <stop offset="100%" stop-color="rgba(7, 8, 14, 0)"/>
      </radialGradient>
    </defs>

    <rect width="1584" height="396" fill="#07080e"/>
    <rect width="1584" height="396" fill="url(#grid)"/>
    <rect width="1584" height="396" fill="url(#cyanGlow)"/>
    <rect width="1584" height="396" fill="url(#goldGlow)"/>

    <line x1="420" y1="198" x2="1500" y2="198" stroke="rgba(255,255,255,0.06)" stroke-width="1"/>

    <g transform="translate(480, 100)">
      <rect width="250" height="26" rx="13" fill="rgba(212, 175, 55, 0.1)" stroke="rgba(212, 175, 55, 0.3)" stroke-width="1"/>
      <circle cx="13" cy="13" r="3.5" fill="#d4af37"/>
      <text x="26" y="17" font-family="monospace" font-size="10.5" font-weight="600" fill="#d4af37" letter-spacing="1.5">CREATIVE FRONTEND STUDIO</text>
    </g>

    <text x="480" y="172" font-family="sans-serif" font-size="36" font-weight="700" fill="#ffffff" letter-spacing="-0.5">Next Dynamics</text>
    <text x="480" y="238" font-family="sans-serif" font-size="15" font-weight="300" fill="#94a3b8" letter-spacing="0.2">High-Converting SaaS Marketing Websites · Headless WordPress · Brand Flagships</text>
    
    <g transform="translate(480, 275)">
      <text x="0" y="14" font-family="monospace" font-size="11.5" fill="#00f0ff" letter-spacing="1">99 LIGHTHOUSE</text>
      <text x="125" y="14" font-family="monospace" font-size="11.5" fill="rgba(255,255,255,0.2)">·</text>
      <text x="145" y="14" font-family="monospace" font-size="11.5" fill="#ffffff" letter-spacing="1">60 FPS GSAP MOTION</text>
      <text x="315" y="14" font-family="monospace" font-size="11.5" fill="rgba(255,255,255,0.2)">·</text>
      <text x="335" y="14" font-family="monospace" font-size="11.5" fill="#00f0ff" letter-spacing="1">SUB-400MS TTFB</text>
      <text x="480" y="14" font-family="monospace" font-size="11.5" fill="rgba(255,255,255,0.2)">·</text>
      <text x="500" y="14" font-family="monospace" font-size="11.5" fill="#ffffff" letter-spacing="1">ZERO PLUGIN BLOAT</text>
    </g>

    <!-- Right Side Architectural Watermark Logo -->
    <g transform="translate(1220, 68) scale(0.48)" opacity="0.22">
      <path fill="#ffffff" d="M523.46,182.71V689.35H400.38l-27.8-45.18L277.45,490.26l-.15-.29L201.43,367.18V689.35H78.35V168.08H201.43l29.68,48.08L277.3,291l.15.29,46.91,76,76,123.08V168.08h.14A521.26,521.26,0,0,1,523.46,182.71Z"/>
      <path fill="#ffffff" d="M921.65,689.35H722.7a321.36,321.36,0,0,0-68.78-199.09,320.87,320.87,0,0,0-253.4-123.08V168.08A520.89,520.89,0,0,1,921.65,689.35Z"/>
    </g>
  </svg>
  `;

  await sharp(Buffer.from(bannerSvg))
    .png()
    .toFile(path.join(outDir, 'linkedin-cover-banner-1584x396.png'));
  console.log('Created linkedin-cover-banner-1584x396.png');
}

createAssets().catch(console.error);

