import { HonoRequest } from "../deps/deno.land/x/hono@v3.3.1/mod.js";
export declare const supportedLang: readonly ["en", "fr"];
export type Lang = typeof supportedLang[number];
export declare function getLangFromHeaders(req: HonoRequest<any, {}>): Lang;
