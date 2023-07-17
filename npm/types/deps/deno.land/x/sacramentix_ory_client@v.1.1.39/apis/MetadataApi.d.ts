import { BaseAPIRequestFactory } from './baseapi.js';
import { Configuration } from '../configuration.js';
import { RequestContext, ResponseContext } from '../http/http.js';
import { GetVersion200Response } from '../models/GetVersion200Response.js';
import { HealthStatus } from '../models/HealthStatus.js';
import { IsReady200Response } from '../models/IsReady200Response.js';
/**
 * no description
 */
export declare class MetadataApiRequestFactory extends BaseAPIRequestFactory {
    /**
     * This endpoint returns the version of Ory Kratos.  If the service supports TLS Edge Termination, this endpoint does not require the `X-Forwarded-Proto` header to be set.  Be aware that if you are running multiple nodes of this service, the version will never refer to the cluster state, only to a single instance.
     * Return Running Software Version.
     */
    getVersion(_options?: Configuration): Promise<RequestContext>;
    /**
     * This endpoint returns a HTTP 200 status code when Ory Kratos is accepting incoming HTTP requests. This status does currently not include checks whether the database connection is working.  If the service supports TLS Edge Termination, this endpoint does not require the `X-Forwarded-Proto` header to be set.  Be aware that if you are running multiple nodes of this service, the health status will never refer to the cluster state, only to a single instance.
     * Check HTTP Server Status
     */
    isAlive(_options?: Configuration): Promise<RequestContext>;
    /**
     * This endpoint returns a HTTP 200 status code when Ory Kratos is up running and the environment dependencies (e.g. the database) are responsive as well.  If the service supports TLS Edge Termination, this endpoint does not require the `X-Forwarded-Proto` header to be set.  Be aware that if you are running multiple nodes of Ory Kratos, the health status will never refer to the cluster state, only to a single instance.
     * Check HTTP Server and Database Status
     */
    isReady(_options?: Configuration): Promise<RequestContext>;
}
export declare class MetadataApiResponseProcessor {
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getVersion
     * @throws ApiException if the response code was not in [200, 299]
     */
    getVersion(response: ResponseContext): Promise<GetVersion200Response>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to isAlive
     * @throws ApiException if the response code was not in [200, 299]
     */
    isAlive(response: ResponseContext): Promise<HealthStatus>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to isReady
     * @throws ApiException if the response code was not in [200, 299]
     */
    isReady(response: ResponseContext): Promise<IsReady200Response>;
}
