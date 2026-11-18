// Checks that every photo URL in src/data/images.js responds.
// Usage: npm run check-images   (requires internet access)
import { IMAGES } from '../src/data/images.js';

let failed = 0;
for (const [key, img] of Object.entries(IMAGES)) {
  try {
    const res = await fetch(img.src, { method: 'GET' });
    const ok = res.ok && (res.headers.get('content-type') || '').startsWith('image/');
    console.log(`${ok ? 'OK  ' : 'FAIL'}  ${key.padEnd(12)} ${res.status}  ${img.page}`);
    if (!ok) failed++;
  } catch (err) {
    failed++;
    console.log(`FAIL  ${key.padEnd(12)} ${err.message}`);
  }
}
console.log(failed ? `\n${failed} image(s) failed.` : '\nAll images reachable.');
process.exitCode = failed ? 1 : 0;
