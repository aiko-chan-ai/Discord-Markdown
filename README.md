# Discord Markdown
 Better Markdown to text chat Discord.
```js
npm i discord-bettermarkdown@latest
```

## Screenshots
<img src = 'https://cdn.discordapp.com/attachments/820557032016969751/959062827165949973/unknown.png'>

## Using ?
> Create contructor
```js
const BetterMarkdown = require('discord-bettermarkdown');
const markdown = new BetterMarkdown();
```
> Adding new text
```js
// Text, type, color, backgroundColor, add new line?
markdown.format('Hello World', 'DEFAULT', 'RED', null, true);
/**
 * 'Hello World': Text to format
 *  'DEFAULT': Text not bold, underline
 *  'RED': Color
 *  null: BackgroundColor
 *  true: Add new line
 */
```
- <strong>List Color</strong>
```js
/**
   * * ColorName: enum
   * * `GRAY`: 30,
   * * `RED`: 31,
   * * `GREEN`: 32,
   * * `YELLOW`: 33,
   * * `BLUE`: 34,
   * * `PINK`: 35,
   * * `CYAN`: 36,
   * * `WHITE`: 37
*/
```
- <strong>List BackgroundColor</strong>
```js
/**
   * * ColorName: enum
   * * `DARKBLUE`: 40,
   * * `ORANGE`: 41,
   * * `GRAY`: 42,
   * * `LIGHTGRAY`: 44,
   * * `INDIGO`: 45,
   * * `WHITE`: 47
*/
```
- <strong>List Type</strong>
```js
/**
   * * Type: enum
   * * `BOLD`: '0;1;',
   * * `UNDERLINE`: '0;4;',
   * * `DEFAULT`: '0;',
   * * `BOTH`: '1;4;',
*/
```
> Convert to Discord Content
```js
markdown.toCodeblock();
// Discord Sending:
message.channel.send(markdown.toCodeblock());
```

# [<strong>Credit: Here</strong>](https://gist.github.com/kkrypt0nn/a02506f3712ff2d1c8ca7c9e0aed7c06)