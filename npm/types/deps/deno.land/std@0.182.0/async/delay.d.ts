/// <reference types="node" />
export interface DelayOptions {
    /** Signal used to abort the delay. */
    signal?: AbortSignal;
    /** Indicates whether the process should continue to run as long as the timer exists.
     *
     * @default {true}
     */
    persistent?: boolean;
}
/**
 * Resolve a Promise after a given amount of milliseconds.
 *
 * @example
 *
 * ```typescript
 * import { delay } from "https://deno.land/std@$STD_VERSION/async/delay.ts";
 *
 * // ...
 * const delayedPromise = delay(100);
 * const result = await delayedPromise;
 * // ...
 * ```
 *
 * To allow the process to continue to run as long as the timer exists. Requires
 * `--unstable` flag.
 *
 * ```typescript
 * import { delay } from "https://deno.land/std@$STD_VERSION/async/delay.ts";
 *
 * // ...
 * await delay(100, { persistent: false });
 * // ...
 * ```
 */
export declare function delay(ms: number, options?: DelayOptions): Promise<void>;
