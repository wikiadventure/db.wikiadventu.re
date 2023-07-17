import { HonoBase } from './hono-base.js';
import type { Env } from './types.js';
export declare class Hono<E extends Env = Env, S = {}, BasePath extends string = '/'> extends HonoBase<E, S, BasePath> {
    constructor(init?: Partial<Pick<Hono, 'router' | 'getPath'> & {
        strict: boolean;
    }>);
}
