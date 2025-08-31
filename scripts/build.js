// Simple build script: writes dist/info.txt with versions and timestamp
const fs = require('fs');
const path = require('path');
const dayjs = require('dayjs');
const lodashPkg = require('lodash/package.json');
const dayjsPkg = require('dayjs/package.json');

const dist = path.join(process.cwd(), 'dist');
fs.mkdirSync(dist, { recursive: true });

const text = [
  `Built at: ${dayjs().toISOString()}`,
  `Repository: ${process.env.GITHUB_REPOSITORY || 'local'}`,
  `Runner OS: ${process.env.RUNNER_OS || process.platform}`,
  `lodash: ${lodashPkg.version}`,
  `dayjs: ${dayjsPkg.version}`
].join('\n');

fs.writeFileSync(path.join(dist, 'info.txt'), text, 'utf8');
console.log('Wrote dist/info.txt');
