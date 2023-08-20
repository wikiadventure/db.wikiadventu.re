import { HonoRequest } from "npm:hono";

export const supportedLang = [
    "en",
    "fr"
] as const;

export type Lang = typeof supportedLang[number];

export function getLangFromHeaders(req:HonoRequest):Lang {
    const langHeaders = req.headers.get("Accept-Language");
    return supportedLang.includes(langHeaders as any) ? langHeaders as Lang : "en";
}