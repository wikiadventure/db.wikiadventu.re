import type { Hono } from '../hono.js';
import type { UnionToIntersection } from '../utils/types.js';
import type { Client, RequestOptions } from './types.js';
export declare const hc: <T extends Hono<any, any, any>>(baseUrl: string, options?: RequestOptions) => UnionToIntersection<Client<T>>;
