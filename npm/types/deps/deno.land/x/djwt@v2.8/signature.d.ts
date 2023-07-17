import * as dntShim from "../../../../_dnt.shims.js";
import type { Algorithm } from "./algorithm.js";
export declare function verify(signature: Uint8Array, key: dntShim.CryptoKey | null, alg: Algorithm, signingInput: string): Promise<boolean>;
export declare function create(alg: Algorithm, key: dntShim.CryptoKey | null, signingInput: string): Promise<string>;
