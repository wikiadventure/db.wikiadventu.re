import type { Context } from '../../context.js';
import type { CookieOptions, Cookie } from '../../utils/cookie.js';
interface GetCookie {
    (c: Context, key: string): string | undefined;
    (c: Context): Cookie;
}
export declare const getCookie: GetCookie;
export declare const setCookie: (c: Context, name: string, value: string, opt?: CookieOptions) => void;
export declare const deleteCookie: (c: Context, name: string, opt?: CookieOptions) => void;
export {};
