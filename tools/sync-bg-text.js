// Copies the Bulgarian texts from the T block into the HTML,
// so Google reads them without running JavaScript.
// Run after changing any text:  node tools/sync-bg-text.js
const fs = require('fs');
const file = __dirname + '/../index.html';
let s = fs.readFileSync(file, 'utf8');
const tSrc = s.slice(s.indexOf('const T = {'), s.indexOf('\nlet LANG'));
const bg = new Function(tSrc + ';return T;')().bg;
let n = 0;
s = s.replace(/(<(\w+)\b[^>]*\bdata-i18n="(\w+)"[^>]*>)([\s\S]*?)(<\/\2>)/g, (m, open, tag, key, inner, close) =>
  typeof bg[key] === 'string' ? (n++, open + bg[key] + close) : m);
fs.writeFileSync(file, s);
console.log('Synced ' + n + ' Bulgarian texts into index.html');
