import type { MiddlewareHandler } from '../../types.js';
type prettyOptions = {
    space: number;
};
export declare const prettyJSON: (options?: prettyOptions) => MiddlewareHandler;
export {};
