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
	 * @param {Boolean} bold Bold text ?
	 * @param {Boolean} underline Underline text ?
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
		bold = false,
		underline = false,
		color = null,
		backgroundColor = null,
		newLine = false,
	) {
		if (!typeof text === 'string') throw new Error('Text must be string');
		if (!typeof bold === 'boolean')
			throw new Error('Bold options must be boolean');
		if (!typeof underline === 'boolean')
			throw new Error('Underline options must be boolean');
		let format = `${unicode}[${bold ? '1;' : ''}${underline ? '4;' : ''}${
			validColor[color] ? `${validColor[color]};` : ''
		}${
			validBackgroundColor[backgroundColor]
				? `${validBackgroundColor[backgroundColor]};`
				: ''
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
${this.string}
\`\`\`
`;
	}
}
module.exports = BetterMarkdown;
/**
 * @extends https://gist.github.com/kkrypt0nn/a02506f3712ff2d1c8ca7c9e0aed7c06
 */