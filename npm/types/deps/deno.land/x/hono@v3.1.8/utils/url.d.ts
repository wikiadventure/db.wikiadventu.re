export type Pattern = readonly [string, string, RegExp | true] | '*';
export declare const splitPath: (path: string) => string[];
export declare const splitRoutingPath: (path: string) => string[];
export declare const getPattern: (label: string) => Pattern | null;
export declare const getPathFromURL: (url: string, strict?: boolean) => string;
export declare const mergePath: (...paths: string[]) => string;
export declare const checkOptionalParameter: (path: string) => string[] | null;
export declare const getQueryParam: (url: string, key?: string) => string | undefined | Record<string, string>;
export declare const getQueryParams: (url: string, key?: string) => string[] | undefined | Record<string, string[]>;
