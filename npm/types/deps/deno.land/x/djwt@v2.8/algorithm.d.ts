import * as dntShim from "../../../../_dnt.shims.js";
export type Algorithm = "HS256" | "HS384" | "HS512" | "PS256" | "PS384" | "PS512" | "RS256" | "RS384" | "RS512" | "ES256" | "ES384" | "none";
export declare function verify(alg: Algorithm, key: dntShim.CryptoKey | null): boolean;
export declare function getAlgorithm(alg: Algorithm): {
    hash: {
        name: string;
    };
    name: string;
    saltLength?: undefined;
    namedCurve?: undefined;
} | {
    hash: {
        name: string;
    };
    name: string;
    saltLength: number;
    namedCurve?: undefined;
} | {
    hash: {
        name: string;
    };
    name: string;
    namedCurve: string;
    saltLength?: undefined;
};
