'use strict';
/**
 * @see http://www.unicode-symbol.com/u/001B.html
 */
const unicode = '\u001b';

const validColor = {
	gray: "99;30m",
	red: "99;31m",
	green: "99;32m",
	yellow: "99;33m",
	blue: "99;34m",
	pink: "99;35m",
	cyan: "99;36m",
	white: "99;37m"
};

const validBackgroundColor = {
	bgDarkBlue: "99;40m",
	bgOrange: "99;41m",
	bgGray: "99;42m",
	bgLightGray: "99;44m",
	bgIndigo: "99;45m",
	bgWhite: "99;47m"
}

const UNDERLINE = '4;99m'
const BOLD = '1;99m'
const ENDLINE = '0m'

const patchStrings = function () {
	defineProperty("bold", BOLD);
	defineProperty("underline", UNDERLINE);
	for (const color in validColor) {
		defineProperty(color, validColor[color]);
	}
	for (const color in validBackgroundColor) {
		defineProperty(color, validBackgroundColor[color]);
	}
	// \u001b[{format};{color}m
	function defineProperty(name, joiner) {
		Object.defineProperty(String.prototype, name, {
			get: function get() {
				if (!this.startsWith(unicode + '[')) {
					return `${unicode}[${joiner}${this}${unicode}[${ENDLINE}`;
				} else {
					return `${unicode}[${joiner}${this}`;
				}
			}
		});
	}
};

patchStrings();

module.exports = {};
/**
 * @see https://gist.github.com/kkrypt0nn/a02506f3712ff2d1c8ca7c9e0aed7c06
 */