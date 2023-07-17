type StrictDotenvConfig<T extends ReadonlyArray<string>> = {
    [key in T[number]]: string;
} & Record<string, string>;
type StrictEnvVarList<T extends string> = Array<Extract<T, string>> | ReadonlyArray<Extract<T, string>>;
type StringList = Array<string> | ReadonlyArray<string> | undefined;
export interface LoadOptions {
    /**
     * Optional path to `.env` file. To prevent the default value from being
     * used, set to `null`.
     *
     * @default {"./.env"}
     */
    envPath?: string | null;
    /**
     * Set to `true` to export all `.env` variables to the current processes
     * environment. Variables are then accessable via `Deno.env.get(<key>)`.
     *
     * @default {false}
     */
    export?: boolean;
    /**
     * Optional path to `.env.example` file which is used for validation.
     * To prevent the default value from being used, set to `null`.
     *
     * @default {"./.env.example"}
     */
    examplePath?: string | null;
    /**
     * Set to `true` to allow required env variables to be empty. Otherwise, it
     * will throw an error if any variable is empty.
     *
     * @default {false}
     */
    allowEmptyValues?: boolean;
    /**
     * Optional path to `.env.defaults` file which is used to define default
     * (fallback) values. To prevent the default value from being used,
     * set to `null`.
     *
     * ```sh
     * # .env.defaults
     * # Will not be set if GREETING is set in base .env file
     * GREETING="a secret to everybody"
     * ```
     *
     * @default {"./.env.defaults"}
     */
    defaultsPath?: string | null;
    /**
     * List of Env variables to read from process. By default, the complete Env is
     * looked up. This allows to permit access to only specific Env variables with
     * `--allow-env=ENV_VAR_NAME`.
     */
    restrictEnvAccessTo?: StringList;
}
export declare function parse(rawDotenv: string, restrictEnvAccessTo?: StringList): Record<string, string>;
export declare function loadSync(options?: Omit<LoadOptions, "restrictEnvAccessTo">): Record<string, string>;
export declare function loadSync<TEnvVar extends string>(options: Omit<LoadOptions, "restrictEnvAccessTo"> & {
    restrictEnvAccessTo: StrictEnvVarList<TEnvVar>;
}): StrictDotenvConfig<StrictEnvVarList<TEnvVar>>;
export declare function load(options?: Omit<LoadOptions, "restrictEnvAccessTo">): Promise<Record<string, string>>;
export declare function load<TEnvVar extends string>(options: Omit<LoadOptions, "restrictEnvAccessTo"> & {
    restrictEnvAccessTo: StrictEnvVarList<TEnvVar>;
}): Promise<StrictDotenvConfig<StrictEnvVarList<TEnvVar>>>;
export declare class MissingEnvVarsError extends Error {
    missing: string[];
    constructor(message: string, missing: string[]);
}
/**
 * @example
 * ```ts
 * import { stringify } from "https://deno.land/std@$STD_VERSION/dotenv/mod.ts";
 *
 * const object = { GREETING: "hello world" };
 * const string = stringify(object); // GREETING='hello world'
 * ```
 *
 * @param object object to be stringified
 * @returns string of object
 */
export declare function stringify(object: Record<string, string>): string;
export {};
