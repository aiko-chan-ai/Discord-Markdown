declare class BetterMarkdown {
    constructor();
    private string: BetterMarkdownString;
    public format(text: String, type: formatType, color: colorTypeString, backgroundColor: backgroundColorTypeString, newLine: Boolean): String;
    public toCodeblock(): BetterMarkdownString;
}
declare type colorTypeString = 'GRAY' | 'RED' | 'GREEN' | 'YELLOW' | 'BLUE' | 'PINK' | 'CYAN' | 'WHITE';
declare type backgroundColorTypeString = 'DARKBLUE' | 'ORANGE' | 'GRAY' | 'LIGHTGRAY' | 'INDIGO' | 'WHITE';
declare type formatType = 'DEFAULT' | 'BOLD' | 'UNDERLINE' | 'BOTH'
export = BetterMarkdown;