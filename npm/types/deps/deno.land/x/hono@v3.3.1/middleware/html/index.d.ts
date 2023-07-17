import type { HtmlEscapedString } from '../../utils/html.js';
export declare const raw: (value: unknown) => HtmlEscapedString;
export declare const html: (strings: TemplateStringsArray, ...values: unknown[]) => HtmlEscapedString;
