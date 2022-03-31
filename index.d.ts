declare class BetterMarkdown {
    constructor();
    private string: BetterMarkdownString;
    public format(text: String, bold: Boolean, underline: Boolean, color: colorTypeString, backgroundColor: backgroundColorTypeString, newLine: Boolean): String;
    public toCodeblock(): BetterMarkdownString;
}
declare type colorTypeString = 'GRAY' | 'RED' | 'GREEN' | 'YELLOW' | 'BLUE' | 'PINK' | 'CYAN' | 'WHITE';
declare type backgroundColorTypeString = 'DARKBLUE' | 'ORANGE' | 'GRAY' | 'LIGHTGRAY' | 'INDIGO' | 'WHITE';
export = BetterMarkdown;