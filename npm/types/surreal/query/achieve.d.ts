import type { OryUser } from "../../guard/orySession.js";
export declare function achieve(user: OryUser, achievement: string): Promise<import("../../deps/deno.land/x/surrealdb@v0.8.0/src/types.js").QueryResult<{} | AchieveError>>;
type AchieveError = {
    error: "Achievement already achieve.";
};
export {};
