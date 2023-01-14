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
		bgGray: string;
		bgLightGray: string;
		bgIndigo: string;
		bgWhite: string;
		// Other
		// @ts-ignore
		bold: string;
		underline: string;
	}
}
