// Minimal smoke test: fail if dist/info.txt is missing
const fs = require('fs');
const path = require('path');
const file = path.join(process.cwd(), 'dist', 'info.txt');

if (!fs.existsSync(file)) {
  console.error('Expected dist/info.txt but it was not found');
  process.exit(1);
} else {
  console.log('Smoke test OK: dist/info.txt exists');
}
