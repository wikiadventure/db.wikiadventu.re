export type HtmlEscaped = {
    isEscaped: true;
};
export type HtmlEscapedString = string & HtmlEscaped;
export type StringBuffer = [string];
export declare const escapeToBuffer: (str: string, buffer: StringBuffer) => void;
