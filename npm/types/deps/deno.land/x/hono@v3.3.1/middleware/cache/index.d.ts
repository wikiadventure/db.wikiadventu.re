import type { MiddlewareHandler } from '../../types.js';
export declare const cache: (options: {
    cacheName: string;
    wait?: boolean;
    cacheControl?: string;
}) => MiddlewareHandler;
