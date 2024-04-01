import type { HonoRequest } from "hono";

export const supportedLang = [
    "en",
    "fr"
] as const;

export type Lang = typeof supportedLang[number];

export function getLangFromHeaders(req:HonoRequest<any,any>):Lang {
    const langHeaders = req.header("Accept-Language");
    return supportedLang.includes(langHeaders as any) ? langHeaders as Lang : "en";
}