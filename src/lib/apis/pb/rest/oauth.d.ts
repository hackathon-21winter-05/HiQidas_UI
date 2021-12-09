import * as $protobuf from "protobufjs";
/** Namespace oauth. */
export namespace oauth {

    /** Properties of a PostOauthCodeRequest. */
    interface IPostOauthCodeRequest {

        /** PostOauthCodeRequest code */
        code?: (string|null);
    }

    /** Represents a PostOauthCodeRequest. */
    class PostOauthCodeRequest implements IPostOauthCodeRequest {

        /**
         * Constructs a new PostOauthCodeRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: oauth.IPostOauthCodeRequest);

        /** PostOauthCodeRequest code. */
        public code: string;

        /**
         * Creates a new PostOauthCodeRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PostOauthCodeRequest instance
         */
        public static create(properties?: oauth.IPostOauthCodeRequest): oauth.PostOauthCodeRequest;

        /**
         * Encodes the specified PostOauthCodeRequest message. Does not implicitly {@link oauth.PostOauthCodeRequest.verify|verify} messages.
         * @param message PostOauthCodeRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: oauth.IPostOauthCodeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PostOauthCodeRequest message, length delimited. Does not implicitly {@link oauth.PostOauthCodeRequest.verify|verify} messages.
         * @param message PostOauthCodeRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: oauth.IPostOauthCodeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PostOauthCodeRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PostOauthCodeRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): oauth.PostOauthCodeRequest;

        /**
         * Decodes a PostOauthCodeRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PostOauthCodeRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): oauth.PostOauthCodeRequest;

        /**
         * Verifies a PostOauthCodeRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PostOauthCodeRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PostOauthCodeRequest
         */
        public static fromObject(object: { [k: string]: any }): oauth.PostOauthCodeRequest;

        /**
         * Creates a plain object from a PostOauthCodeRequest message. Also converts values to other types if specified.
         * @param message PostOauthCodeRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: oauth.PostOauthCodeRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PostOauthCodeRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetOauthCallbackResponse. */
    interface IGetOauthCallbackResponse {

        /** GetOauthCallbackResponse uri */
        uri?: (string|null);
    }

    /** Represents a GetOauthCallbackResponse. */
    class GetOauthCallbackResponse implements IGetOauthCallbackResponse {

        /**
         * Constructs a new GetOauthCallbackResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: oauth.IGetOauthCallbackResponse);

        /** GetOauthCallbackResponse uri. */
        public uri: string;

        /**
         * Creates a new GetOauthCallbackResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetOauthCallbackResponse instance
         */
        public static create(properties?: oauth.IGetOauthCallbackResponse): oauth.GetOauthCallbackResponse;

        /**
         * Encodes the specified GetOauthCallbackResponse message. Does not implicitly {@link oauth.GetOauthCallbackResponse.verify|verify} messages.
         * @param message GetOauthCallbackResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: oauth.IGetOauthCallbackResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetOauthCallbackResponse message, length delimited. Does not implicitly {@link oauth.GetOauthCallbackResponse.verify|verify} messages.
         * @param message GetOauthCallbackResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: oauth.IGetOauthCallbackResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetOauthCallbackResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetOauthCallbackResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): oauth.GetOauthCallbackResponse;

        /**
         * Decodes a GetOauthCallbackResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetOauthCallbackResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): oauth.GetOauthCallbackResponse;

        /**
         * Verifies a GetOauthCallbackResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetOauthCallbackResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetOauthCallbackResponse
         */
        public static fromObject(object: { [k: string]: any }): oauth.GetOauthCallbackResponse;

        /**
         * Creates a plain object from a GetOauthCallbackResponse message. Also converts values to other types if specified.
         * @param message GetOauthCallbackResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: oauth.GetOauthCallbackResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetOauthCallbackResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
