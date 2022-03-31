const BetterMarkdown = require('./index');
const md = new BetterMarkdown().format('Hello World', 'BOTH', 'RED', null, true);
console.log(md.toCodeblock());