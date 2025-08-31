// Lab 58 - Cache Demo
const _ = require('lodash');
const dayjs = require('dayjs');

function greet(name) {
  const ts = dayjs().format('YYYY-MM-DD HH:mm:ss [UTC]');
  return `Hello, ${_.startCase(name)}! Built at ${ts}`;
}

if (require.main === module) {
  console.log(greet('lab 58 cache demo'));
}

module.exports = { greet };
