export declare class DeadlineError extends Error {
    constructor();
}
/**
 * Create a promise which will be rejected with {@linkcode DeadlineError} when a given delay is exceeded.
 *
 * NOTE: Prefer to use `AbortSignal.timeout` instead for the APIs accept `AbortSignal`.
 *
 * @example
 * ```typescript
 * import { deadline } from "https://deno.land/std@$STD_VERSION/async/deadline.ts";
 * import { delay } from "https://deno.land/std@$STD_VERSION/async/delay.ts";
 *
 * const delayedPromise = delay(1000);
 * // Below throws `DeadlineError` after 10 ms
 * const result = await deadline(delayedPromise, 10);
 * ```
 */
export declare function deadline<T>(p: Promise<T>, delay: number): Promise<T>;
