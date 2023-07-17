/**
 * Ory APIs
 * Documentation for all public and administrative Ory APIs. Administrative APIs can only be accessed with a valid Personal Access Token. Public APIs are mostly used in browsers.
 *
 * OpenAPI spec version: v1.1.39
 * Contact: support@ory.sh
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { TrustedOAuth2JwtGrantJsonWebKey } from './TrustedOAuth2JwtGrantJsonWebKey.js';
/**
* OAuth2 JWT Bearer Grant Type Issuer Trust Relationship
*/
export declare class TrustedOAuth2JwtGrantIssuer {
    /**
    * The \"allow_any_subject\" indicates that the issuer is allowed to have any principal as the subject of the JWT.
    */
    'allow_any_subject'?: boolean;
    /**
    * The \"created_at\" indicates, when grant was created.
    */
    'created_at'?: Date;
    /**
    * The \"expires_at\" indicates, when grant will expire, so we will reject assertion from \"issuer\" targeting \"subject\".
    */
    'expires_at'?: Date;
    'id'?: string;
    /**
    * The \"issuer\" identifies the principal that issued the JWT assertion (same as \"iss\" claim in JWT).
    */
    'issuer'?: string;
    'public_key'?: TrustedOAuth2JwtGrantJsonWebKey;
    /**
    * The \"scope\" contains list of scope values (as described in Section 3.3 of OAuth 2.0 [RFC6749])
    */
    'scope'?: Array<string>;
    /**
    * The \"subject\" identifies the principal that is the subject of the JWT.
    */
    'subject'?: string;
    static readonly discriminator: string | undefined;
    static readonly attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
        format: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
        format: string;
    }[];
    constructor();
}
