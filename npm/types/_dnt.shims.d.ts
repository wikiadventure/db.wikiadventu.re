/// <reference types="node" />
import { Deno } from "@deno/shim-deno";
export { Deno } from "@deno/shim-deno";
import { Blob } from "buffer";
export { Blob } from "buffer";
export { crypto, type Crypto, type SubtleCrypto, type AlgorithmIdentifier, type Algorithm, type RsaOaepParams, type BufferSource, type AesCtrParams, type AesCbcParams, type AesGcmParams, type CryptoKey, type KeyAlgorithm, type KeyType, type KeyUsage, type EcdhKeyDeriveParams, type HkdfParams, type HashAlgorithmIdentifier, type Pbkdf2Params, type AesDerivedKeyParams, type HmacImportParams, type JsonWebKey, type RsaOtherPrimesInfo, type KeyFormat, type RsaHashedKeyGenParams, type RsaKeyGenParams, type BigInteger, type EcKeyGenParams, type NamedCurve, type CryptoKeyPair, type AesKeyGenParams, type HmacKeyGenParams, type RsaHashedImportParams, type EcKeyImportParams, type AesKeyAlgorithm, type RsaPssParams, type EcdsaParams } from "@deno/shim-crypto";
import { fetch, File, FormData, Headers, Request, Response } from "undici";
export { fetch, File, FormData, Headers, Request, Response, type BodyInit, type HeadersInit, type RequestInit, type ResponseInit } from "undici";
import { default as WebSocket } from "ws";
export { default as WebSocket } from "ws";
export declare const dntGlobalThis: Omit<typeof globalThis, "Blob" | "Deno" | "crypto" | "fetch" | "File" | "FormData" | "Headers" | "Request" | "Response" | "WebSocket"> & {
    Deno: typeof Deno;
    Blob: typeof Blob;
    crypto: import("@deno/shim-crypto").Crypto;
    fetch: typeof fetch;
    File: typeof File;
    FormData: typeof FormData;
    Headers: typeof Headers;
    Request: typeof Request;
    Response: typeof Response;
    WebSocket: typeof WebSocket;
};