export {};

declare global {
	interface String {
		// Color
		red: string;
		green: string;
		yellow: string;
		blue: string;
		pink: string;
		cyan: string;
		white: string;
		gray: string;
		// Background Color
		bgDarkBlue: string;
		bgOrange: string;
		bgMarbleBlue: string;
		bgGreyishTurquoise: string;
		bgGray: string;
		bgIndigo: string;
		bgLightGray: string;
		bgWhite: string;
		// Other
		// @ts-ignore
		bold: string;
		underline: string;
		reset: string;
	}
}
