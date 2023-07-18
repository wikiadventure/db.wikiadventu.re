/// <reference types="node" />
export declare const encoder: import("util").TextEncoder;
export declare const decoder: import("util").TextDecoder;
export declare function isArray<T>(input: T[] | unknown): input is T[];
export declare function isDefined<T>(input: T | undefined): input is T;
export declare function isNotNull<T>(input: T | null): input is T;
export declare function isNotNumber<T>(input: T | number): input is T;
export declare function isNotString<T>(input: T | string): input is T;
export declare function isNull(input: unknown): input is null;
export declare function isNumber(input: unknown): input is number;
export declare function isObject(input: unknown): input is Record<string, unknown>;
export declare function isString(input: unknown): input is string;
export declare function isUndefined(input: unknown): input is undefined;
