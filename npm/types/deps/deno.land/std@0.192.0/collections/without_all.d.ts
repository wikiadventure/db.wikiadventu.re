/**
 * Returns an array excluding all given values.
 *
 * @example
 * ```ts
 * import { withoutAll } from "https://deno.land/std@$STD_VERSION/collections/without_all.ts";
 * import { assertEquals } from "https://deno.land/std@$STD_VERSION/testing/asserts.ts";
 *
 * const withoutList = withoutAll([2, 1, 2, 3], [1, 2]);
 *
 * assertEquals(withoutList, [3]);
 * ```
 */
export declare function withoutAll<T>(array: readonly T[], values: readonly T[]): T[];
