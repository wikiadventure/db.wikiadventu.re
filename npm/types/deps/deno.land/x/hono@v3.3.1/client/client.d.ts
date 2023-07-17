import type { Hono } from '../hono.js';
import type { UnionToIntersection } from '../utils/types.js';
import type { Client, ClientRequestOptions } from './types.js';
export declare const hc: <T extends Hono<any, any, any>>(baseUrl: string, options?: ClientRequestOptions) => UnionToIntersection<Client<T>>;
