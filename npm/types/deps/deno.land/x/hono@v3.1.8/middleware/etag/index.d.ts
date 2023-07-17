import type { MiddlewareHandler } from '../../types.js';
type ETagOptions = {
    weak: boolean;
};
export declare const etag: (options?: ETagOptions) => MiddlewareHandler;
export {};
