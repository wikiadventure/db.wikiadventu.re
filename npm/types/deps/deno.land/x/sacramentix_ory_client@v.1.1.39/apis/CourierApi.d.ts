import { BaseAPIRequestFactory } from './baseapi.js';
import { Configuration } from '../configuration.js';
import { RequestContext, ResponseContext } from '../http/http.js';
import { CourierMessageStatus } from '../models/CourierMessageStatus.js';
import { Message } from '../models/Message.js';
/**
 * no description
 */
export declare class CourierApiRequestFactory extends BaseAPIRequestFactory {
    /**
     * Gets a specific messages by the given ID.
     * Get a Message
     * @param id MessageID is the ID of the message.
     */
    getCourierMessage(id: string, _options?: Configuration): Promise<RequestContext>;
    /**
     * Lists all messages by given status and recipient.
     * List Messages
     * @param pageSize Items per Page  This is the number of items per page to return. For details on pagination please head over to the [pagination documentation](https://www.ory.sh/docs/ecosystem/api-design#pagination).
     * @param pageToken Next Page Token  The next page token. For details on pagination please head over to the [pagination documentation](https://www.ory.sh/docs/ecosystem/api-design#pagination).
     * @param status Status filters out messages based on status. If no value is provided, it doesn\&#39;t take effect on filter.
     * @param recipient Recipient filters out messages based on recipient. If no value is provided, it doesn\&#39;t take effect on filter.
     */
    listCourierMessages(pageSize?: number, pageToken?: string, status?: CourierMessageStatus, recipient?: string, _options?: Configuration): Promise<RequestContext>;
}
export declare class CourierApiResponseProcessor {
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getCourierMessage
     * @throws ApiException if the response code was not in [200, 299]
     */
    getCourierMessage(response: ResponseContext): Promise<Message>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listCourierMessages
     * @throws ApiException if the response code was not in [200, 299]
     */
    listCourierMessages(response: ResponseContext): Promise<Array<Message>>;
}
