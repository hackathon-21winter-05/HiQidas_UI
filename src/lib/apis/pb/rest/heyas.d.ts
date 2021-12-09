import * as $protobuf from "protobufjs";
/** Namespace heya. */
export namespace heya {

    /** Properties of a GetHeyasResponse. */
    interface IGetHeyasResponse {

        /** GetHeyasResponse heyaId */
        heyaId?: (string[]|null);
    }

    /** Represents a GetHeyasResponse. */
    class GetHeyasResponse implements IGetHeyasResponse {

        /**
         * Constructs a new GetHeyasResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: heya.IGetHeyasResponse);

        /** GetHeyasResponse heyaId. */
        public heyaId: string[];

        /**
         * Creates a new GetHeyasResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetHeyasResponse instance
         */
        public static create(properties?: heya.IGetHeyasResponse): heya.GetHeyasResponse;

        /**
         * Encodes the specified GetHeyasResponse message. Does not implicitly {@link heya.GetHeyasResponse.verify|verify} messages.
         * @param message GetHeyasResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: heya.IGetHeyasResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetHeyasResponse message, length delimited. Does not implicitly {@link heya.GetHeyasResponse.verify|verify} messages.
         * @param message GetHeyasResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: heya.IGetHeyasResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetHeyasResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetHeyasResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): heya.GetHeyasResponse;

        /**
         * Decodes a GetHeyasResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetHeyasResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): heya.GetHeyasResponse;

        /**
         * Verifies a GetHeyasResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetHeyasResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetHeyasResponse
         */
        public static fromObject(object: { [k: string]: any }): heya.GetHeyasResponse;

        /**
         * Creates a plain object from a GetHeyasResponse message. Also converts values to other types if specified.
         * @param message GetHeyasResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: heya.GetHeyasResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetHeyasResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PostHeyasRequest. */
    interface IPostHeyasRequest {

        /** PostHeyasRequest title */
        title?: (string|null);

        /** PostHeyasRequest description */
        description?: (string|null);
    }

    /** Represents a PostHeyasRequest. */
    class PostHeyasRequest implements IPostHeyasRequest {

        /**
         * Constructs a new PostHeyasRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: heya.IPostHeyasRequest);

        /** PostHeyasRequest title. */
        public title: string;

        /** PostHeyasRequest description. */
        public description: string;

        /**
         * Creates a new PostHeyasRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PostHeyasRequest instance
         */
        public static create(properties?: heya.IPostHeyasRequest): heya.PostHeyasRequest;

        /**
         * Encodes the specified PostHeyasRequest message. Does not implicitly {@link heya.PostHeyasRequest.verify|verify} messages.
         * @param message PostHeyasRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: heya.IPostHeyasRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PostHeyasRequest message, length delimited. Does not implicitly {@link heya.PostHeyasRequest.verify|verify} messages.
         * @param message PostHeyasRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: heya.IPostHeyasRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PostHeyasRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PostHeyasRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): heya.PostHeyasRequest;

        /**
         * Decodes a PostHeyasRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PostHeyasRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): heya.PostHeyasRequest;

        /**
         * Verifies a PostHeyasRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PostHeyasRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PostHeyasRequest
         */
        public static fromObject(object: { [k: string]: any }): heya.PostHeyasRequest;

        /**
         * Creates a plain object from a PostHeyasRequest message. Also converts values to other types if specified.
         * @param message PostHeyasRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: heya.PostHeyasRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PostHeyasRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PostHeyasResponse. */
    interface IPostHeyasResponse {

        /** PostHeyasResponse heya */
        heya?: (heya.IHeya|null);
    }

    /** Represents a PostHeyasResponse. */
    class PostHeyasResponse implements IPostHeyasResponse {

        /**
         * Constructs a new PostHeyasResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: heya.IPostHeyasResponse);

        /** PostHeyasResponse heya. */
        public heya?: (heya.IHeya|null);

        /**
         * Creates a new PostHeyasResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PostHeyasResponse instance
         */
        public static create(properties?: heya.IPostHeyasResponse): heya.PostHeyasResponse;

        /**
         * Encodes the specified PostHeyasResponse message. Does not implicitly {@link heya.PostHeyasResponse.verify|verify} messages.
         * @param message PostHeyasResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: heya.IPostHeyasResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PostHeyasResponse message, length delimited. Does not implicitly {@link heya.PostHeyasResponse.verify|verify} messages.
         * @param message PostHeyasResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: heya.IPostHeyasResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PostHeyasResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PostHeyasResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): heya.PostHeyasResponse;

        /**
         * Decodes a PostHeyasResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PostHeyasResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): heya.PostHeyasResponse;

        /**
         * Verifies a PostHeyasResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PostHeyasResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PostHeyasResponse
         */
        public static fromObject(object: { [k: string]: any }): heya.PostHeyasResponse;

        /**
         * Creates a plain object from a PostHeyasResponse message. Also converts values to other types if specified.
         * @param message PostHeyasResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: heya.PostHeyasResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PostHeyasResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetHeyasHeyaIdResponse. */
    interface IGetHeyasHeyaIdResponse {

        /** GetHeyasHeyaIdResponse heya */
        heya?: (heya.IHeya|null);
    }

    /** Represents a GetHeyasHeyaIdResponse. */
    class GetHeyasHeyaIdResponse implements IGetHeyasHeyaIdResponse {

        /**
         * Constructs a new GetHeyasHeyaIdResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: heya.IGetHeyasHeyaIdResponse);

        /** GetHeyasHeyaIdResponse heya. */
        public heya?: (heya.IHeya|null);

        /**
         * Creates a new GetHeyasHeyaIdResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetHeyasHeyaIdResponse instance
         */
        public static create(properties?: heya.IGetHeyasHeyaIdResponse): heya.GetHeyasHeyaIdResponse;

        /**
         * Encodes the specified GetHeyasHeyaIdResponse message. Does not implicitly {@link heya.GetHeyasHeyaIdResponse.verify|verify} messages.
         * @param message GetHeyasHeyaIdResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: heya.IGetHeyasHeyaIdResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetHeyasHeyaIdResponse message, length delimited. Does not implicitly {@link heya.GetHeyasHeyaIdResponse.verify|verify} messages.
         * @param message GetHeyasHeyaIdResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: heya.IGetHeyasHeyaIdResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetHeyasHeyaIdResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetHeyasHeyaIdResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): heya.GetHeyasHeyaIdResponse;

        /**
         * Decodes a GetHeyasHeyaIdResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetHeyasHeyaIdResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): heya.GetHeyasHeyaIdResponse;

        /**
         * Verifies a GetHeyasHeyaIdResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetHeyasHeyaIdResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetHeyasHeyaIdResponse
         */
        public static fromObject(object: { [k: string]: any }): heya.GetHeyasHeyaIdResponse;

        /**
         * Creates a plain object from a GetHeyasHeyaIdResponse message. Also converts values to other types if specified.
         * @param message GetHeyasHeyaIdResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: heya.GetHeyasHeyaIdResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetHeyasHeyaIdResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PutHeyasHeyaIdRequest. */
    interface IPutHeyasHeyaIdRequest {

        /** PutHeyasHeyaIdRequest title */
        title?: (string|null);

        /** PutHeyasHeyaIdRequest description */
        description?: (string|null);
    }

    /** Represents a PutHeyasHeyaIdRequest. */
    class PutHeyasHeyaIdRequest implements IPutHeyasHeyaIdRequest {

        /**
         * Constructs a new PutHeyasHeyaIdRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: heya.IPutHeyasHeyaIdRequest);

        /** PutHeyasHeyaIdRequest title. */
        public title: string;

        /** PutHeyasHeyaIdRequest description. */
        public description: string;

        /**
         * Creates a new PutHeyasHeyaIdRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PutHeyasHeyaIdRequest instance
         */
        public static create(properties?: heya.IPutHeyasHeyaIdRequest): heya.PutHeyasHeyaIdRequest;

        /**
         * Encodes the specified PutHeyasHeyaIdRequest message. Does not implicitly {@link heya.PutHeyasHeyaIdRequest.verify|verify} messages.
         * @param message PutHeyasHeyaIdRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: heya.IPutHeyasHeyaIdRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PutHeyasHeyaIdRequest message, length delimited. Does not implicitly {@link heya.PutHeyasHeyaIdRequest.verify|verify} messages.
         * @param message PutHeyasHeyaIdRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: heya.IPutHeyasHeyaIdRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PutHeyasHeyaIdRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PutHeyasHeyaIdRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): heya.PutHeyasHeyaIdRequest;

        /**
         * Decodes a PutHeyasHeyaIdRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PutHeyasHeyaIdRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): heya.PutHeyasHeyaIdRequest;

        /**
         * Verifies a PutHeyasHeyaIdRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PutHeyasHeyaIdRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PutHeyasHeyaIdRequest
         */
        public static fromObject(object: { [k: string]: any }): heya.PutHeyasHeyaIdRequest;

        /**
         * Creates a plain object from a PutHeyasHeyaIdRequest message. Also converts values to other types if specified.
         * @param message PutHeyasHeyaIdRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: heya.PutHeyasHeyaIdRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PutHeyasHeyaIdRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PutHeyasHeyaIdResponse. */
    interface IPutHeyasHeyaIdResponse {

        /** PutHeyasHeyaIdResponse status */
        status?: (common.IStatus|null);
    }

    /** Represents a PutHeyasHeyaIdResponse. */
    class PutHeyasHeyaIdResponse implements IPutHeyasHeyaIdResponse {

        /**
         * Constructs a new PutHeyasHeyaIdResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: heya.IPutHeyasHeyaIdResponse);

        /** PutHeyasHeyaIdResponse status. */
        public status?: (common.IStatus|null);

        /**
         * Creates a new PutHeyasHeyaIdResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PutHeyasHeyaIdResponse instance
         */
        public static create(properties?: heya.IPutHeyasHeyaIdResponse): heya.PutHeyasHeyaIdResponse;

        /**
         * Encodes the specified PutHeyasHeyaIdResponse message. Does not implicitly {@link heya.PutHeyasHeyaIdResponse.verify|verify} messages.
         * @param message PutHeyasHeyaIdResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: heya.IPutHeyasHeyaIdResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PutHeyasHeyaIdResponse message, length delimited. Does not implicitly {@link heya.PutHeyasHeyaIdResponse.verify|verify} messages.
         * @param message PutHeyasHeyaIdResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: heya.IPutHeyasHeyaIdResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PutHeyasHeyaIdResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PutHeyasHeyaIdResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): heya.PutHeyasHeyaIdResponse;

        /**
         * Decodes a PutHeyasHeyaIdResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PutHeyasHeyaIdResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): heya.PutHeyasHeyaIdResponse;

        /**
         * Verifies a PutHeyasHeyaIdResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PutHeyasHeyaIdResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PutHeyasHeyaIdResponse
         */
        public static fromObject(object: { [k: string]: any }): heya.PutHeyasHeyaIdResponse;

        /**
         * Creates a plain object from a PutHeyasHeyaIdResponse message. Also converts values to other types if specified.
         * @param message PutHeyasHeyaIdResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: heya.PutHeyasHeyaIdResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PutHeyasHeyaIdResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DeleteHeyasHeyaIdRequest. */
    interface IDeleteHeyasHeyaIdRequest {

        /** DeleteHeyasHeyaIdRequest status */
        status?: (common.IStatus|null);
    }

    /** Represents a DeleteHeyasHeyaIdRequest. */
    class DeleteHeyasHeyaIdRequest implements IDeleteHeyasHeyaIdRequest {

        /**
         * Constructs a new DeleteHeyasHeyaIdRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: heya.IDeleteHeyasHeyaIdRequest);

        /** DeleteHeyasHeyaIdRequest status. */
        public status?: (common.IStatus|null);

        /**
         * Creates a new DeleteHeyasHeyaIdRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DeleteHeyasHeyaIdRequest instance
         */
        public static create(properties?: heya.IDeleteHeyasHeyaIdRequest): heya.DeleteHeyasHeyaIdRequest;

        /**
         * Encodes the specified DeleteHeyasHeyaIdRequest message. Does not implicitly {@link heya.DeleteHeyasHeyaIdRequest.verify|verify} messages.
         * @param message DeleteHeyasHeyaIdRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: heya.IDeleteHeyasHeyaIdRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DeleteHeyasHeyaIdRequest message, length delimited. Does not implicitly {@link heya.DeleteHeyasHeyaIdRequest.verify|verify} messages.
         * @param message DeleteHeyasHeyaIdRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: heya.IDeleteHeyasHeyaIdRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DeleteHeyasHeyaIdRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DeleteHeyasHeyaIdRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): heya.DeleteHeyasHeyaIdRequest;

        /**
         * Decodes a DeleteHeyasHeyaIdRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DeleteHeyasHeyaIdRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): heya.DeleteHeyasHeyaIdRequest;

        /**
         * Verifies a DeleteHeyasHeyaIdRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DeleteHeyasHeyaIdRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DeleteHeyasHeyaIdRequest
         */
        public static fromObject(object: { [k: string]: any }): heya.DeleteHeyasHeyaIdRequest;

        /**
         * Creates a plain object from a DeleteHeyasHeyaIdRequest message. Also converts values to other types if specified.
         * @param message DeleteHeyasHeyaIdRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: heya.DeleteHeyasHeyaIdRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DeleteHeyasHeyaIdRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetHeyasHeyaIdUsersResponse. */
    interface IGetHeyasHeyaIdUsersResponse {

        /** GetHeyasHeyaIdUsersResponse userId */
        userId?: (string[]|null);
    }

    /** Represents a GetHeyasHeyaIdUsersResponse. */
    class GetHeyasHeyaIdUsersResponse implements IGetHeyasHeyaIdUsersResponse {

        /**
         * Constructs a new GetHeyasHeyaIdUsersResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: heya.IGetHeyasHeyaIdUsersResponse);

        /** GetHeyasHeyaIdUsersResponse userId. */
        public userId: string[];

        /**
         * Creates a new GetHeyasHeyaIdUsersResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetHeyasHeyaIdUsersResponse instance
         */
        public static create(properties?: heya.IGetHeyasHeyaIdUsersResponse): heya.GetHeyasHeyaIdUsersResponse;

        /**
         * Encodes the specified GetHeyasHeyaIdUsersResponse message. Does not implicitly {@link heya.GetHeyasHeyaIdUsersResponse.verify|verify} messages.
         * @param message GetHeyasHeyaIdUsersResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: heya.IGetHeyasHeyaIdUsersResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetHeyasHeyaIdUsersResponse message, length delimited. Does not implicitly {@link heya.GetHeyasHeyaIdUsersResponse.verify|verify} messages.
         * @param message GetHeyasHeyaIdUsersResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: heya.IGetHeyasHeyaIdUsersResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetHeyasHeyaIdUsersResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetHeyasHeyaIdUsersResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): heya.GetHeyasHeyaIdUsersResponse;

        /**
         * Decodes a GetHeyasHeyaIdUsersResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetHeyasHeyaIdUsersResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): heya.GetHeyasHeyaIdUsersResponse;

        /**
         * Verifies a GetHeyasHeyaIdUsersResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetHeyasHeyaIdUsersResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetHeyasHeyaIdUsersResponse
         */
        public static fromObject(object: { [k: string]: any }): heya.GetHeyasHeyaIdUsersResponse;

        /**
         * Creates a plain object from a GetHeyasHeyaIdUsersResponse message. Also converts values to other types if specified.
         * @param message GetHeyasHeyaIdUsersResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: heya.GetHeyasHeyaIdUsersResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetHeyasHeyaIdUsersResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Heya. */
    interface IHeya {

        /** Heya id */
        id?: (string|null);

        /** Heya title */
        title?: (string|null);

        /** Heya description */
        description?: (string|null);

        /** Heya creatorId */
        creatorId?: (string|null);

        /** Heya lastEditorId */
        lastEditorId?: (string|null);

        /** Heya createdAt */
        createdAt?: (google.protobuf.ITimestamp|null);

        /** Heya updatedAt */
        updatedAt?: (google.protobuf.ITimestamp|null);
    }

    /** Represents a Heya. */
    class Heya implements IHeya {

        /**
         * Constructs a new Heya.
         * @param [properties] Properties to set
         */
        constructor(properties?: heya.IHeya);

        /** Heya id. */
        public id: string;

        /** Heya title. */
        public title: string;

        /** Heya description. */
        public description: string;

        /** Heya creatorId. */
        public creatorId: string;

        /** Heya lastEditorId. */
        public lastEditorId: string;

        /** Heya createdAt. */
        public createdAt?: (google.protobuf.ITimestamp|null);

        /** Heya updatedAt. */
        public updatedAt?: (google.protobuf.ITimestamp|null);

        /**
         * Creates a new Heya instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Heya instance
         */
        public static create(properties?: heya.IHeya): heya.Heya;

        /**
         * Encodes the specified Heya message. Does not implicitly {@link heya.Heya.verify|verify} messages.
         * @param message Heya message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: heya.IHeya, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Heya message, length delimited. Does not implicitly {@link heya.Heya.verify|verify} messages.
         * @param message Heya message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: heya.IHeya, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Heya message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Heya
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): heya.Heya;

        /**
         * Decodes a Heya message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Heya
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): heya.Heya;

        /**
         * Verifies a Heya message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Heya message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Heya
         */
        public static fromObject(object: { [k: string]: any }): heya.Heya;

        /**
         * Creates a plain object from a Heya message. Also converts values to other types if specified.
         * @param message Heya
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: heya.Heya, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Heya to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Heyas. */
    interface IHeyas {

        /** Heyas heyas */
        heyas?: (heya.IHeya[]|null);
    }

    /** Represents a Heyas. */
    class Heyas implements IHeyas {

        /**
         * Constructs a new Heyas.
         * @param [properties] Properties to set
         */
        constructor(properties?: heya.IHeyas);

        /** Heyas heyas. */
        public heyas: heya.IHeya[];

        /**
         * Creates a new Heyas instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Heyas instance
         */
        public static create(properties?: heya.IHeyas): heya.Heyas;

        /**
         * Encodes the specified Heyas message. Does not implicitly {@link heya.Heyas.verify|verify} messages.
         * @param message Heyas message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: heya.IHeyas, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Heyas message, length delimited. Does not implicitly {@link heya.Heyas.verify|verify} messages.
         * @param message Heyas message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: heya.IHeyas, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Heyas message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Heyas
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): heya.Heyas;

        /**
         * Decodes a Heyas message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Heyas
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): heya.Heyas;

        /**
         * Verifies a Heyas message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Heyas message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Heyas
         */
        public static fromObject(object: { [k: string]: any }): heya.Heyas;

        /**
         * Creates a plain object from a Heyas message. Also converts values to other types if specified.
         * @param message Heyas
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: heya.Heyas, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Heyas to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Namespace common. */
export namespace common {

    /** Properties of a Status. */
    interface IStatus {

        /** Status statusCode */
        statusCode?: (number|null);

        /** Status message */
        message?: (string|null);
    }

    /** Represents a Status. */
    class Status implements IStatus {

        /**
         * Constructs a new Status.
         * @param [properties] Properties to set
         */
        constructor(properties?: common.IStatus);

        /** Status statusCode. */
        public statusCode: number;

        /** Status message. */
        public message: string;

        /**
         * Creates a new Status instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Status instance
         */
        public static create(properties?: common.IStatus): common.Status;

        /**
         * Encodes the specified Status message. Does not implicitly {@link common.Status.verify|verify} messages.
         * @param message Status message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: common.IStatus, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Status message, length delimited. Does not implicitly {@link common.Status.verify|verify} messages.
         * @param message Status message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: common.IStatus, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Status message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Status
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.Status;

        /**
         * Decodes a Status message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Status
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.Status;

        /**
         * Verifies a Status message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Status message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Status
         */
        public static fromObject(object: { [k: string]: any }): common.Status;

        /**
         * Creates a plain object from a Status message. Also converts values to other types if specified.
         * @param message Status
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: common.Status, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Status to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Namespace google. */
export namespace google {

    /** Namespace protobuf. */
    namespace protobuf {

        /** Properties of a Timestamp. */
        interface ITimestamp {

            /** Timestamp seconds */
            seconds?: (number|Long|null);

            /** Timestamp nanos */
            nanos?: (number|null);
        }

        /** Represents a Timestamp. */
        class Timestamp implements ITimestamp {

            /**
             * Constructs a new Timestamp.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.ITimestamp);

            /** Timestamp seconds. */
            public seconds: (number|Long);

            /** Timestamp nanos. */
            public nanos: number;

            /**
             * Creates a new Timestamp instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Timestamp instance
             */
            public static create(properties?: google.protobuf.ITimestamp): google.protobuf.Timestamp;

            /**
             * Encodes the specified Timestamp message. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @param message Timestamp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.ITimestamp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Timestamp message, length delimited. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @param message Timestamp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.ITimestamp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Timestamp message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Timestamp;

            /**
             * Decodes a Timestamp message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Timestamp;

            /**
             * Verifies a Timestamp message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Timestamp message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Timestamp
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Timestamp;

            /**
             * Creates a plain object from a Timestamp message. Also converts values to other types if specified.
             * @param message Timestamp
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Timestamp, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Timestamp to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }
}
