export declare class RetryError extends Error {
    constructor(cause: unknown, count: number);
}
export interface RetryOptions {
    /** How much to backoff after each retry. This is `2` by default. */
    multiplier?: number;
    /** The maximum milliseconds between retries. This is `60000` by default. */
    maxTimeout?: number;
    /** The maximum amount of retries until failure. This is `5` by default. */
    maxAttempts?: number;
    /** The inital and minimum amount of milliseconds between retries. This is `1000` by default. */
    minTimeout?: number;
}
/**
 * Creates a retry promise which resolves to the value of the input using exponential backoff.
 * If the input promise throws, it will be retried `maxAttempts` number of times.
 * It will retry the input every certain amount of milliseconds, starting at `minTimeout` and multiplying by the `multiplier` until it reaches the `maxTimeout`
 *
 * @example
 * ```typescript
 * import { retry } from "https://deno.land/std@$STD_VERSION/async/mod.ts";
 * const req = async () => {
 *  // some function that throws sometimes
 * };
 *
 * // Below resolves to the first non-error result of `req`
 * const retryPromise = await retry(req, {
 *  multiplier: 2,
 *  maxTimeout: 60000,
 *  maxAttempts: 5,
 *  minTimeout: 100,
 * });
```
 */
export declare function retry<T>(fn: (() => Promise<T>) | (() => T), opts?: RetryOptions): Promise<T>;
