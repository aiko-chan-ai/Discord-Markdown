const BetterMarkdown = require('./index');
const md = new BetterMarkdown().format('Hello World', true, false, 'RED', null, true);
console.log(md.toCodeblock());