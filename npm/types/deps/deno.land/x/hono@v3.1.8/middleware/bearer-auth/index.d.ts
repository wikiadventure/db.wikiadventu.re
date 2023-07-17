import type { MiddlewareHandler } from '../../types.js';
export declare const bearerAuth: (options: {
    token: string;
    realm?: string;
    prefix?: string;
    hashFunction?: Function;
}) => MiddlewareHandler;
