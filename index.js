'use strict';
/**
 * @see http://www.unicode-symbol.com/u/001B.html
 */
const unicode = '\u001b';
const regex = /\u001b\[((\d+);?)+m/g;

const reset = (string) => string.replace(regex, '');

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
	bgDarkBlue: '99;40m',
	bgOrange: '99;41m',
	bgMarbleBlue: '99;42m',
	bgGreyishTurquoise: '99;43m',
	bgGray: '99;44m',
	bgIndigo: '99;45m',
	bgLightGray: '99;46m',
	bgWhite: '99;47m',
};

const UNDERLINE = '4;99m';
const BOLD = '1;99m';
const ENDLINE = '0m';

function minimize(string) {
	let allFormat = string.match(regex);
	let endl = allFormat.pop();
	allFormat.reverse();
	let formatFirst = 0;
	let color, background, formatSecond;
	allFormat.forEach((f) => {
		let styles = f.match(/\d+/g);
		styles.forEach((s) => {
			let style = parseStyle(s);
			switch (style.type) {
				case 'format':
					formatSecond = formatFirst;
					formatFirst = style.value;
					break;
				case 'color':
					color = style.value;
					break;
				case 'background':
					background = style.value;
					break;
			}
		});
	});
	let formatSytle = `\u001b[${formatFirst};${color ? `${color};` : ''}${
		formatSecond ? `${formatSecond};` : ''
	}${background ?? ''}`;
	if (formatSytle.endsWith(';')) formatSytle = formatSytle.slice(0, -1);
	return `${formatSytle}m${string.replace(regex, '')}${endl}`;
}

function parseStyle(s) {
	s = parseInt(s);
	if ([0, 1, 4].includes(s)) {
		return {
			type: 'format',
			value: s,
		};
	}
	if (s >= 30 && s <= 37) {
		return {
			type: 'color',
			value: s,
		};
	}
	if (s >= 40 && s <= 47) {
		return {
			type: 'background',
			value: s,
		};
	}
	return {
		type: 'default',
		value: s,
	};
}

const patchStrings = function () {
	defineProperty("bold", BOLD);
	defineProperty("underline", UNDERLINE);
	Object.defineProperty(String.prototype, 'reset', {
		get: function get() {
			return reset(`${this}`);
		},
	});
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
				let temp = ''
				if (!this.startsWith(unicode + '[')) {
					temp = `${unicode}[${joiner}${this}${unicode}[${ENDLINE}`;
				} else {
					temp = `${unicode}[${joiner}${this}`;
				}
				return minimize(temp);
			}
		});
	}
};

patchStrings();

module.exports = {};
/**
 * @see https://gist.github.com/kkrypt0nn/a02506f3712ff2d1c8ca7c9e0aed7c06
 */