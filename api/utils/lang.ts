import { HonoRequest } from "https://deno.land/x/hono@v3.3.1/mod.ts";

export const supportedLang = [
    "en",
    "fr"
] as const;

export type Lang = typeof supportedLang[number];

export function getLangFromHeaders(req:HonoRequest<any,any>):Lang {
    const langHeaders = req.headers.get("Accept-Language");
    return supportedLang.includes(langHeaders as any) ? langHeaders as Lang : "en";
}