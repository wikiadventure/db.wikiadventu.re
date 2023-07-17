/**
 * Encodes a given ArrayBuffer or string into a base64url representation
 * @param data
 */
export declare function encode(data: ArrayBuffer | string): string;
/**
 * Converts given base64url encoded data back to original
 * @param b64url
 */
export declare function decode(b64url: string): Uint8Array;
