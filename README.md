# Discord Markdown
 Better Markdown to text chat Discord.
```js
npm i discord-bettermarkdown@latest
```

## Breaking changes
```diff
v1.x.x
- const BetterMarkdown = require('discord-bettermarkdown');
- const markdown = new BetterMarkdown();
- markdown.format('Hello World', 'DEFAULT', 'RED', null, true);
v2.x.x
+ const BetterMarkdown = require('discord-bettermarkdown');
+ 'Hello World'.red
```

### ok it's the same way with the [colors](https://www.npmjs.com/package/colors) module

## Screenshots
<img src = 'https://cdn.discordapp.com/attachments/878276279105884210/1063811425346265150/68747470733a2f2f63646e2e646973636f72646170702e636f6d2f6174746163686d656e74732f3733393933373530373736383237303933392f313036313938393531353834333038303239322f414e53492e706e67.png'>


## colors and styles!

### text colors

  - red
  - green
  - yellow
  - blue
  - pink
  - cyan
  - white
  - gray

### background colors

  - bgDarkBlue
  - bgOrange
  - bgGray
  - bgLightGray
  - bgIndigo
  - bgMagenta
  - bgWhite
### styles

  - bold
  - underline
  - reset

## Using ?
> Patch `String`
```js
const BetterMarkdown = require('discord-bettermarkdown');
```
> Send Message (discord.js)
```js
const HelloWorld = 'Hello World'.red.bgWhite.bold.underline;
console.log(HelloWorld); // it's work!
channel.send(`\`\`\`ansi\n${HelloWorld}\`\`\``);
// Send `Hello World` with color red, background color white, bold, underline
```
<img src='https://cdn.discordapp.com/attachments/878276279105884210/1063813331980386334/image.png'>

# [<strong>Credit: Here</strong>](https://gist.github.com/kkrypt0nn/a02506f3712ff2d1c8ca7c9e0aed7c06)