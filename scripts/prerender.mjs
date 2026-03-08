import { mkdir, writeFile } from 'fs/promises';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { preview } from 'vite';
import puppeteer from 'puppeteer';

const __dirname = dirname(fileURLToPath(import.meta.url));
const PROJECT_DIR = join(__dirname, '..');
const DIST_DIR = join(PROJECT_DIR, 'dist');
const PORT = 4177;

const ROUTES = [
  '/',
  '/studnie',
  '/pompy-ciepla',
  '/odwierty',
  '/piezometry',
  '/realizacje',
  '/o-nas',
  '/kontakt',
];

async function prerender() {
  console.log('[prerender] Starting preview server...');
  const server = await preview({
    root: PROJECT_DIR,
    preview: { port: PORT },
  });

  const address = server.resolvedUrls.local[0] || `http://localhost:${PORT}`;
  console.log(`[prerender] Server running at ${address}`);

  console.log('[prerender] Launching browser...');
  const browser = await puppeteer.launch({ headless: true });

  try {
    for (const route of ROUTES) {
      const url = `${address.replace(/\/$/, '')}${route}`;
      console.log(`[prerender] Rendering ${route} ...`);

      const page = await browser.newPage();
      await page.goto(url, { waitUntil: 'networkidle0', timeout: 30000 });

      // Wait for React to render content
      await page.waitForSelector('#root', { timeout: 10000 });

      // Small delay to ensure all effects settle
      await page.evaluate(() => new Promise((r) => setTimeout(r, 500)));

      const html = await page.content();

      // Determine output path
      const outputPath = route === '/'
        ? join(DIST_DIR, 'index.html')
        : join(DIST_DIR, route.slice(1), 'index.html');

      await mkdir(dirname(outputPath), { recursive: true });
      await writeFile(outputPath, html, 'utf-8');
      console.log(`[prerender] Saved ${outputPath}`);

      await page.close();
    }

    console.log('[prerender] All routes rendered successfully!');
  } finally {
    await browser.close();
    server.httpServer.close();
  }
}

prerender().catch((err) => {
  if (process.env.VERCEL || process.env.CI) {
    console.warn('[prerender] Skipping — Puppeteer not available in this environment');
    process.exit(0);
  }
  console.error('[prerender] Error:', err);
  process.exit(1);
});
