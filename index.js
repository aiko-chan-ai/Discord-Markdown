'use strict';
/**
 * @extends http://www.unicode-symbol.com/u/001B.html
 */
const unicode = '\u001b';
const typeCodeblock = 'ansi';
const validColor = {
  'GRAY': 30,
  'RED': 31,
  'GREEN': 32,
  'YELLOW': 33,
  'BLUE': 34,
  'PINK': 35,
  'CYAN': 36,
  'WHITE': 37
};
const validBackgroundColor = {
  'DARKBLUE': 40,
  'ORANGE': 41,
  'GRAY': 42,
  'LIGHTGRAY': 44,
  'INDIGO': 45,
  'WHITE': 47
}
const typeFormat = {
	'BOLD': '0;1;',
	'UNDERLINE': '0;4;',
	'DEFAULT': '0;',
	'BOTH': '1;4;'
}
class BetterMarkdown {
	constructor() {
		/**
		 * @type {string} String before format
		 * @private
		 */
		this.string = '';
	}

	/**
	 *
	 * @param {String} text Text to format
	 * @param {String | null} type Format text ?
	 * * `BOLD`: '0;1;',
	 * * `UNDERLINE`: '0;4;',
	 * * `DEFAULT`: '0;',
	 * * `BOTH`: '1;4;',
	 * @param {String | null} color Color of text
	 * * `GRAY`: 30,
	 * * `RED`: 31,
	 * * `GREEN`: 32,
	 * * `YELLOW`: 33,
	 * * `BLUE`: 34,
	 * * `PINK`: 35,
	 * * `CYAN`: 36,
	 * * `WHITE`: 37
	 * @param {String | null} backgroundColor
	 * * `DARKBLUE`: 40,
	 * * `ORANGE`: 41,
	 * * `GRAY`: 42,
	 * * `LIGHTGRAY`: 44,
	 * * `INDIGO`: 45,
	 * * `WHITE`: 47
	 * @param {Boolean} newLine Add new line ?
	 * @returns {String} Return string (not format)
	 */
	format(
		text,
		type = 'DEFAULT',
		color = null,
		backgroundColor = null,
		newLine = false,
	) {
		if (!typeof text === 'string') throw new Error('Text must be string');
		if (!typeof type === 'string')
			throw new Error('Format options must be string');
		let format = `${unicode}[${typeFormat[type] || '0;'}${
			validColor[color] ? `${validColor[color]};` : '99;'
		}${
			validBackgroundColor[backgroundColor]
				? `${validBackgroundColor[backgroundColor]};`
				: '99;'
		}`;
		if (format.endsWith(';')) format = format.slice(0, -1);
		this.string = `${this.string}${format}m${text}${newLine ? '\n' : ''}`;
		return this;
	}

	/**
	 *
	 * @returns {String} Return formatted string
	 */
	toCodeblock() {
		return `
\`\`\`${typeCodeblock}
${require('discord.js').Util.escapeCodeBlock(this.string)}
\`\`\`
`;
	}
}
module.exports = BetterMarkdown;
/**
 * @extends https://gist.github.com/kkrypt0nn/a02506f3712ff2d1c8ca7c9e0aed7c06
 */