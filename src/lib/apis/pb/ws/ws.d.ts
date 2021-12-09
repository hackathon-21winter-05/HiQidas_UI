import * as $protobuf from "protobufjs";
/** Namespace hiqidashi. */
export namespace hiqidashi {

    /** Properties of a WsCommunicationData. */
    interface IWsCommunicationData {

        /** WsCommunicationData getHiqidashi */
        getHiqidashi?: (hiqidashi.IWsGetHiqidashi|null);

        /** WsCommunicationData getHiqidashis */
        getHiqidashis?: (hiqidashi.IWsGetHiqidashis|null);

        /** WsCommunicationData createHiqidashi */
        createHiqidashi?: (hiqidashi.IWsCreateHiqidashi|null);

        /** WsCommunicationData editHiqidashi */
        editHiqidashi?: (hiqidashi.IWsEditHiqidashi|null);

        /** WsCommunicationData deleteHiqidashi */
        deleteHiqidashi?: (hiqidashi.IWsDeleteHiqidashi|null);
    }

    /** Represents a WsCommunicationData. */
    class WsCommunicationData implements IWsCommunicationData {

        /**
         * Constructs a new WsCommunicationData.
         * @param [properties] Properties to set
         */
        constructor(properties?: hiqidashi.IWsCommunicationData);

        /** WsCommunicationData getHiqidashi. */
        public getHiqidashi?: (hiqidashi.IWsGetHiqidashi|null);

        /** WsCommunicationData getHiqidashis. */
        public getHiqidashis?: (hiqidashi.IWsGetHiqidashis|null);

        /** WsCommunicationData createHiqidashi. */
        public createHiqidashi?: (hiqidashi.IWsCreateHiqidashi|null);

        /** WsCommunicationData editHiqidashi. */
        public editHiqidashi?: (hiqidashi.IWsEditHiqidashi|null);

        /** WsCommunicationData deleteHiqidashi. */
        public deleteHiqidashi?: (hiqidashi.IWsDeleteHiqidashi|null);

        /** WsCommunicationData payload. */
        public payload?: ("getHiqidashi"|"getHiqidashis"|"createHiqidashi"|"editHiqidashi"|"deleteHiqidashi");

        /**
         * Creates a new WsCommunicationData instance using the specified properties.
         * @param [properties] Properties to set
         * @returns WsCommunicationData instance
         */
        public static create(properties?: hiqidashi.IWsCommunicationData): hiqidashi.WsCommunicationData;

        /**
         * Encodes the specified WsCommunicationData message. Does not implicitly {@link hiqidashi.WsCommunicationData.verify|verify} messages.
         * @param message WsCommunicationData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hiqidashi.IWsCommunicationData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified WsCommunicationData message, length delimited. Does not implicitly {@link hiqidashi.WsCommunicationData.verify|verify} messages.
         * @param message WsCommunicationData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hiqidashi.IWsCommunicationData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a WsCommunicationData message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns WsCommunicationData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hiqidashi.WsCommunicationData;

        /**
         * Decodes a WsCommunicationData message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns WsCommunicationData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hiqidashi.WsCommunicationData;

        /**
         * Verifies a WsCommunicationData message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a WsCommunicationData message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns WsCommunicationData
         */
        public static fromObject(object: { [k: string]: any }): hiqidashi.WsCommunicationData;

        /**
         * Creates a plain object from a WsCommunicationData message. Also converts values to other types if specified.
         * @param message WsCommunicationData
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hiqidashi.WsCommunicationData, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this WsCommunicationData to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a WsGetHiqidashi. */
    interface IWsGetHiqidashi {

        /** WsGetHiqidashi hiqidashi */
        hiqidashi?: (hiqidashi.IHiqidashi|null);
    }

    /** Represents a WsGetHiqidashi. */
    class WsGetHiqidashi implements IWsGetHiqidashi {

        /**
         * Constructs a new WsGetHiqidashi.
         * @param [properties] Properties to set
         */
        constructor(properties?: hiqidashi.IWsGetHiqidashi);

        /** WsGetHiqidashi hiqidashi. */
        public hiqidashi?: (hiqidashi.IHiqidashi|null);

        /**
         * Creates a new WsGetHiqidashi instance using the specified properties.
         * @param [properties] Properties to set
         * @returns WsGetHiqidashi instance
         */
        public static create(properties?: hiqidashi.IWsGetHiqidashi): hiqidashi.WsGetHiqidashi;

        /**
         * Encodes the specified WsGetHiqidashi message. Does not implicitly {@link hiqidashi.WsGetHiqidashi.verify|verify} messages.
         * @param message WsGetHiqidashi message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hiqidashi.IWsGetHiqidashi, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified WsGetHiqidashi message, length delimited. Does not implicitly {@link hiqidashi.WsGetHiqidashi.verify|verify} messages.
         * @param message WsGetHiqidashi message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hiqidashi.IWsGetHiqidashi, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a WsGetHiqidashi message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns WsGetHiqidashi
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hiqidashi.WsGetHiqidashi;

        /**
         * Decodes a WsGetHiqidashi message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns WsGetHiqidashi
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hiqidashi.WsGetHiqidashi;

        /**
         * Verifies a WsGetHiqidashi message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a WsGetHiqidashi message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns WsGetHiqidashi
         */
        public static fromObject(object: { [k: string]: any }): hiqidashi.WsGetHiqidashi;

        /**
         * Creates a plain object from a WsGetHiqidashi message. Also converts values to other types if specified.
         * @param message WsGetHiqidashi
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hiqidashi.WsGetHiqidashi, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this WsGetHiqidashi to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a WsGetHiqidashis. */
    interface IWsGetHiqidashis {

        /** WsGetHiqidashis hiqidashi */
        hiqidashi?: (hiqidashi.IHiqidashi[]|null);
    }

    /** Represents a WsGetHiqidashis. */
    class WsGetHiqidashis implements IWsGetHiqidashis {

        /**
         * Constructs a new WsGetHiqidashis.
         * @param [properties] Properties to set
         */
        constructor(properties?: hiqidashi.IWsGetHiqidashis);

        /** WsGetHiqidashis hiqidashi. */
        public hiqidashi: hiqidashi.IHiqidashi[];

        /**
         * Creates a new WsGetHiqidashis instance using the specified properties.
         * @param [properties] Properties to set
         * @returns WsGetHiqidashis instance
         */
        public static create(properties?: hiqidashi.IWsGetHiqidashis): hiqidashi.WsGetHiqidashis;

        /**
         * Encodes the specified WsGetHiqidashis message. Does not implicitly {@link hiqidashi.WsGetHiqidashis.verify|verify} messages.
         * @param message WsGetHiqidashis message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hiqidashi.IWsGetHiqidashis, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified WsGetHiqidashis message, length delimited. Does not implicitly {@link hiqidashi.WsGetHiqidashis.verify|verify} messages.
         * @param message WsGetHiqidashis message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hiqidashi.IWsGetHiqidashis, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a WsGetHiqidashis message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns WsGetHiqidashis
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hiqidashi.WsGetHiqidashis;

        /**
         * Decodes a WsGetHiqidashis message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns WsGetHiqidashis
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hiqidashi.WsGetHiqidashis;

        /**
         * Verifies a WsGetHiqidashis message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a WsGetHiqidashis message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns WsGetHiqidashis
         */
        public static fromObject(object: { [k: string]: any }): hiqidashi.WsGetHiqidashis;

        /**
         * Creates a plain object from a WsGetHiqidashis message. Also converts values to other types if specified.
         * @param message WsGetHiqidashis
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hiqidashi.WsGetHiqidashis, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this WsGetHiqidashis to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a WsCreateHiqidashi. */
    interface IWsCreateHiqidashi {

        /** WsCreateHiqidashi parentId */
        parentId?: (string|null);

        /** WsCreateHiqidashi title */
        title?: (string|null);

        /** WsCreateHiqidashi description */
        description?: (string|null);
    }

    /** Represents a WsCreateHiqidashi. */
    class WsCreateHiqidashi implements IWsCreateHiqidashi {

        /**
         * Constructs a new WsCreateHiqidashi.
         * @param [properties] Properties to set
         */
        constructor(properties?: hiqidashi.IWsCreateHiqidashi);

        /** WsCreateHiqidashi parentId. */
        public parentId: string;

        /** WsCreateHiqidashi title. */
        public title: string;

        /** WsCreateHiqidashi description. */
        public description: string;

        /**
         * Creates a new WsCreateHiqidashi instance using the specified properties.
         * @param [properties] Properties to set
         * @returns WsCreateHiqidashi instance
         */
        public static create(properties?: hiqidashi.IWsCreateHiqidashi): hiqidashi.WsCreateHiqidashi;

        /**
         * Encodes the specified WsCreateHiqidashi message. Does not implicitly {@link hiqidashi.WsCreateHiqidashi.verify|verify} messages.
         * @param message WsCreateHiqidashi message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hiqidashi.IWsCreateHiqidashi, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified WsCreateHiqidashi message, length delimited. Does not implicitly {@link hiqidashi.WsCreateHiqidashi.verify|verify} messages.
         * @param message WsCreateHiqidashi message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hiqidashi.IWsCreateHiqidashi, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a WsCreateHiqidashi message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns WsCreateHiqidashi
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hiqidashi.WsCreateHiqidashi;

        /**
         * Decodes a WsCreateHiqidashi message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns WsCreateHiqidashi
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hiqidashi.WsCreateHiqidashi;

        /**
         * Verifies a WsCreateHiqidashi message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a WsCreateHiqidashi message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns WsCreateHiqidashi
         */
        public static fromObject(object: { [k: string]: any }): hiqidashi.WsCreateHiqidashi;

        /**
         * Creates a plain object from a WsCreateHiqidashi message. Also converts values to other types if specified.
         * @param message WsCreateHiqidashi
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hiqidashi.WsCreateHiqidashi, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this WsCreateHiqidashi to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a WsEditHiqidashi. */
    interface IWsEditHiqidashi {

        /** WsEditHiqidashi id */
        id?: (string|null);

        /** WsEditHiqidashi title */
        title?: (google.protobuf.IStringValue|null);

        /** WsEditHiqidashi description */
        description?: (google.protobuf.IStringValue|null);

        /** WsEditHiqidashi drawing */
        drawing?: (google.protobuf.IStringValue|null);

        /** WsEditHiqidashi colorId */
        colorId?: (google.protobuf.IStringValue|null);
    }

    /** Represents a WsEditHiqidashi. */
    class WsEditHiqidashi implements IWsEditHiqidashi {

        /**
         * Constructs a new WsEditHiqidashi.
         * @param [properties] Properties to set
         */
        constructor(properties?: hiqidashi.IWsEditHiqidashi);

        /** WsEditHiqidashi id. */
        public id: string;

        /** WsEditHiqidashi title. */
        public title?: (google.protobuf.IStringValue|null);

        /** WsEditHiqidashi description. */
        public description?: (google.protobuf.IStringValue|null);

        /** WsEditHiqidashi drawing. */
        public drawing?: (google.protobuf.IStringValue|null);

        /** WsEditHiqidashi colorId. */
        public colorId?: (google.protobuf.IStringValue|null);

        /**
         * Creates a new WsEditHiqidashi instance using the specified properties.
         * @param [properties] Properties to set
         * @returns WsEditHiqidashi instance
         */
        public static create(properties?: hiqidashi.IWsEditHiqidashi): hiqidashi.WsEditHiqidashi;

        /**
         * Encodes the specified WsEditHiqidashi message. Does not implicitly {@link hiqidashi.WsEditHiqidashi.verify|verify} messages.
         * @param message WsEditHiqidashi message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hiqidashi.IWsEditHiqidashi, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified WsEditHiqidashi message, length delimited. Does not implicitly {@link hiqidashi.WsEditHiqidashi.verify|verify} messages.
         * @param message WsEditHiqidashi message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hiqidashi.IWsEditHiqidashi, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a WsEditHiqidashi message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns WsEditHiqidashi
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hiqidashi.WsEditHiqidashi;

        /**
         * Decodes a WsEditHiqidashi message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns WsEditHiqidashi
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hiqidashi.WsEditHiqidashi;

        /**
         * Verifies a WsEditHiqidashi message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a WsEditHiqidashi message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns WsEditHiqidashi
         */
        public static fromObject(object: { [k: string]: any }): hiqidashi.WsEditHiqidashi;

        /**
         * Creates a plain object from a WsEditHiqidashi message. Also converts values to other types if specified.
         * @param message WsEditHiqidashi
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hiqidashi.WsEditHiqidashi, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this WsEditHiqidashi to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a WsDeleteHiqidashi. */
    interface IWsDeleteHiqidashi {

        /** WsDeleteHiqidashi id */
        id?: (string|null);
    }

    /** Represents a WsDeleteHiqidashi. */
    class WsDeleteHiqidashi implements IWsDeleteHiqidashi {

        /**
         * Constructs a new WsDeleteHiqidashi.
         * @param [properties] Properties to set
         */
        constructor(properties?: hiqidashi.IWsDeleteHiqidashi);

        /** WsDeleteHiqidashi id. */
        public id: string;

        /**
         * Creates a new WsDeleteHiqidashi instance using the specified properties.
         * @param [properties] Properties to set
         * @returns WsDeleteHiqidashi instance
         */
        public static create(properties?: hiqidashi.IWsDeleteHiqidashi): hiqidashi.WsDeleteHiqidashi;

        /**
         * Encodes the specified WsDeleteHiqidashi message. Does not implicitly {@link hiqidashi.WsDeleteHiqidashi.verify|verify} messages.
         * @param message WsDeleteHiqidashi message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hiqidashi.IWsDeleteHiqidashi, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified WsDeleteHiqidashi message, length delimited. Does not implicitly {@link hiqidashi.WsDeleteHiqidashi.verify|verify} messages.
         * @param message WsDeleteHiqidashi message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hiqidashi.IWsDeleteHiqidashi, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a WsDeleteHiqidashi message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns WsDeleteHiqidashi
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hiqidashi.WsDeleteHiqidashi;

        /**
         * Decodes a WsDeleteHiqidashi message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns WsDeleteHiqidashi
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hiqidashi.WsDeleteHiqidashi;

        /**
         * Verifies a WsDeleteHiqidashi message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a WsDeleteHiqidashi message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns WsDeleteHiqidashi
         */
        public static fromObject(object: { [k: string]: any }): hiqidashi.WsDeleteHiqidashi;

        /**
         * Creates a plain object from a WsDeleteHiqidashi message. Also converts values to other types if specified.
         * @param message WsDeleteHiqidashi
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hiqidashi.WsDeleteHiqidashi, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this WsDeleteHiqidashi to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Hiqidashi. */
    interface IHiqidashi {

        /** Hiqidashi id */
        id?: (string|null);

        /** Hiqidashi parentId */
        parentId?: (string|null);

        /** Hiqidashi title */
        title?: (string|null);

        /** Hiqidashi description */
        description?: (string|null);

        /** Hiqidashi drawing */
        drawing?: (google.protobuf.IStringValue|null);

        /** Hiqidashi colorId */
        colorId?: (string|null);

        /** Hiqidashi createdAt */
        createdAt?: (string|null);

        /** Hiqidashi updatedAt */
        updatedAt?: (string|null);
    }

    /** Represents a Hiqidashi. */
    class Hiqidashi implements IHiqidashi {

        /**
         * Constructs a new Hiqidashi.
         * @param [properties] Properties to set
         */
        constructor(properties?: hiqidashi.IHiqidashi);

        /** Hiqidashi id. */
        public id: string;

        /** Hiqidashi parentId. */
        public parentId: string;

        /** Hiqidashi title. */
        public title: string;

        /** Hiqidashi description. */
        public description: string;

        /** Hiqidashi drawing. */
        public drawing?: (google.protobuf.IStringValue|null);

        /** Hiqidashi colorId. */
        public colorId: string;

        /** Hiqidashi createdAt. */
        public createdAt: string;

        /** Hiqidashi updatedAt. */
        public updatedAt: string;

        /**
         * Creates a new Hiqidashi instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Hiqidashi instance
         */
        public static create(properties?: hiqidashi.IHiqidashi): hiqidashi.Hiqidashi;

        /**
         * Encodes the specified Hiqidashi message. Does not implicitly {@link hiqidashi.Hiqidashi.verify|verify} messages.
         * @param message Hiqidashi message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hiqidashi.IHiqidashi, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Hiqidashi message, length delimited. Does not implicitly {@link hiqidashi.Hiqidashi.verify|verify} messages.
         * @param message Hiqidashi message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hiqidashi.IHiqidashi, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Hiqidashi message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Hiqidashi
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hiqidashi.Hiqidashi;

        /**
         * Decodes a Hiqidashi message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Hiqidashi
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hiqidashi.Hiqidashi;

        /**
         * Verifies a Hiqidashi message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Hiqidashi message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Hiqidashi
         */
        public static fromObject(object: { [k: string]: any }): hiqidashi.Hiqidashi;

        /**
         * Creates a plain object from a Hiqidashi message. Also converts values to other types if specified.
         * @param message Hiqidashi
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hiqidashi.Hiqidashi, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Hiqidashi to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Namespace google. */
export namespace google {

    /** Namespace protobuf. */
    namespace protobuf {

        /** Properties of a DoubleValue. */
        interface IDoubleValue {

            /** DoubleValue value */
            value?: (number|null);
        }

        /** Represents a DoubleValue. */
        class DoubleValue implements IDoubleValue {

            /**
             * Constructs a new DoubleValue.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IDoubleValue);

            /** DoubleValue value. */
            public value: number;

            /**
             * Creates a new DoubleValue instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DoubleValue instance
             */
            public static create(properties?: google.protobuf.IDoubleValue): google.protobuf.DoubleValue;

            /**
             * Encodes the specified DoubleValue message. Does not implicitly {@link google.protobuf.DoubleValue.verify|verify} messages.
             * @param message DoubleValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IDoubleValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DoubleValue message, length delimited. Does not implicitly {@link google.protobuf.DoubleValue.verify|verify} messages.
             * @param message DoubleValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IDoubleValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DoubleValue message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DoubleValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.DoubleValue;

            /**
             * Decodes a DoubleValue message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DoubleValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.DoubleValue;

            /**
             * Verifies a DoubleValue message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DoubleValue message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DoubleValue
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.DoubleValue;

            /**
             * Creates a plain object from a DoubleValue message. Also converts values to other types if specified.
             * @param message DoubleValue
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.DoubleValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DoubleValue to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a FloatValue. */
        interface IFloatValue {

            /** FloatValue value */
            value?: (number|null);
        }

        /** Represents a FloatValue. */
        class FloatValue implements IFloatValue {

            /**
             * Constructs a new FloatValue.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFloatValue);

            /** FloatValue value. */
            public value: number;

            /**
             * Creates a new FloatValue instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FloatValue instance
             */
            public static create(properties?: google.protobuf.IFloatValue): google.protobuf.FloatValue;

            /**
             * Encodes the specified FloatValue message. Does not implicitly {@link google.protobuf.FloatValue.verify|verify} messages.
             * @param message FloatValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFloatValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FloatValue message, length delimited. Does not implicitly {@link google.protobuf.FloatValue.verify|verify} messages.
             * @param message FloatValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFloatValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FloatValue message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FloatValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FloatValue;

            /**
             * Decodes a FloatValue message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FloatValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FloatValue;

            /**
             * Verifies a FloatValue message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FloatValue message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FloatValue
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FloatValue;

            /**
             * Creates a plain object from a FloatValue message. Also converts values to other types if specified.
             * @param message FloatValue
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FloatValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FloatValue to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an Int64Value. */
        interface IInt64Value {

            /** Int64Value value */
            value?: (number|Long|null);
        }

        /** Represents an Int64Value. */
        class Int64Value implements IInt64Value {

            /**
             * Constructs a new Int64Value.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IInt64Value);

            /** Int64Value value. */
            public value: (number|Long);

            /**
             * Creates a new Int64Value instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Int64Value instance
             */
            public static create(properties?: google.protobuf.IInt64Value): google.protobuf.Int64Value;

            /**
             * Encodes the specified Int64Value message. Does not implicitly {@link google.protobuf.Int64Value.verify|verify} messages.
             * @param message Int64Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IInt64Value, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Int64Value message, length delimited. Does not implicitly {@link google.protobuf.Int64Value.verify|verify} messages.
             * @param message Int64Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IInt64Value, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Int64Value message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Int64Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Int64Value;

            /**
             * Decodes an Int64Value message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Int64Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Int64Value;

            /**
             * Verifies an Int64Value message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Int64Value message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Int64Value
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Int64Value;

            /**
             * Creates a plain object from an Int64Value message. Also converts values to other types if specified.
             * @param message Int64Value
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Int64Value, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Int64Value to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a UInt64Value. */
        interface IUInt64Value {

            /** UInt64Value value */
            value?: (number|Long|null);
        }

        /** Represents a UInt64Value. */
        class UInt64Value implements IUInt64Value {

            /**
             * Constructs a new UInt64Value.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IUInt64Value);

            /** UInt64Value value. */
            public value: (number|Long);

            /**
             * Creates a new UInt64Value instance using the specified properties.
             * @param [properties] Properties to set
             * @returns UInt64Value instance
             */
            public static create(properties?: google.protobuf.IUInt64Value): google.protobuf.UInt64Value;

            /**
             * Encodes the specified UInt64Value message. Does not implicitly {@link google.protobuf.UInt64Value.verify|verify} messages.
             * @param message UInt64Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IUInt64Value, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UInt64Value message, length delimited. Does not implicitly {@link google.protobuf.UInt64Value.verify|verify} messages.
             * @param message UInt64Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IUInt64Value, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a UInt64Value message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns UInt64Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.UInt64Value;

            /**
             * Decodes a UInt64Value message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns UInt64Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.UInt64Value;

            /**
             * Verifies a UInt64Value message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a UInt64Value message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns UInt64Value
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.UInt64Value;

            /**
             * Creates a plain object from a UInt64Value message. Also converts values to other types if specified.
             * @param message UInt64Value
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.UInt64Value, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UInt64Value to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an Int32Value. */
        interface IInt32Value {

            /** Int32Value value */
            value?: (number|null);
        }

        /** Represents an Int32Value. */
        class Int32Value implements IInt32Value {

            /**
             * Constructs a new Int32Value.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IInt32Value);

            /** Int32Value value. */
            public value: number;

            /**
             * Creates a new Int32Value instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Int32Value instance
             */
            public static create(properties?: google.protobuf.IInt32Value): google.protobuf.Int32Value;

            /**
             * Encodes the specified Int32Value message. Does not implicitly {@link google.protobuf.Int32Value.verify|verify} messages.
             * @param message Int32Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IInt32Value, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Int32Value message, length delimited. Does not implicitly {@link google.protobuf.Int32Value.verify|verify} messages.
             * @param message Int32Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IInt32Value, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Int32Value message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Int32Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Int32Value;

            /**
             * Decodes an Int32Value message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Int32Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Int32Value;

            /**
             * Verifies an Int32Value message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Int32Value message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Int32Value
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Int32Value;

            /**
             * Creates a plain object from an Int32Value message. Also converts values to other types if specified.
             * @param message Int32Value
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Int32Value, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Int32Value to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a UInt32Value. */
        interface IUInt32Value {

            /** UInt32Value value */
            value?: (number|null);
        }

        /** Represents a UInt32Value. */
        class UInt32Value implements IUInt32Value {

            /**
             * Constructs a new UInt32Value.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IUInt32Value);

            /** UInt32Value value. */
            public value: number;

            /**
             * Creates a new UInt32Value instance using the specified properties.
             * @param [properties] Properties to set
             * @returns UInt32Value instance
             */
            public static create(properties?: google.protobuf.IUInt32Value): google.protobuf.UInt32Value;

            /**
             * Encodes the specified UInt32Value message. Does not implicitly {@link google.protobuf.UInt32Value.verify|verify} messages.
             * @param message UInt32Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IUInt32Value, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UInt32Value message, length delimited. Does not implicitly {@link google.protobuf.UInt32Value.verify|verify} messages.
             * @param message UInt32Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IUInt32Value, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a UInt32Value message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns UInt32Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.UInt32Value;

            /**
             * Decodes a UInt32Value message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns UInt32Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.UInt32Value;

            /**
             * Verifies a UInt32Value message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a UInt32Value message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns UInt32Value
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.UInt32Value;

            /**
             * Creates a plain object from a UInt32Value message. Also converts values to other types if specified.
             * @param message UInt32Value
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.UInt32Value, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UInt32Value to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a BoolValue. */
        interface IBoolValue {

            /** BoolValue value */
            value?: (boolean|null);
        }

        /** Represents a BoolValue. */
        class BoolValue implements IBoolValue {

            /**
             * Constructs a new BoolValue.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IBoolValue);

            /** BoolValue value. */
            public value: boolean;

            /**
             * Creates a new BoolValue instance using the specified properties.
             * @param [properties] Properties to set
             * @returns BoolValue instance
             */
            public static create(properties?: google.protobuf.IBoolValue): google.protobuf.BoolValue;

            /**
             * Encodes the specified BoolValue message. Does not implicitly {@link google.protobuf.BoolValue.verify|verify} messages.
             * @param message BoolValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IBoolValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified BoolValue message, length delimited. Does not implicitly {@link google.protobuf.BoolValue.verify|verify} messages.
             * @param message BoolValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IBoolValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a BoolValue message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns BoolValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.BoolValue;

            /**
             * Decodes a BoolValue message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns BoolValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.BoolValue;

            /**
             * Verifies a BoolValue message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a BoolValue message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns BoolValue
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.BoolValue;

            /**
             * Creates a plain object from a BoolValue message. Also converts values to other types if specified.
             * @param message BoolValue
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.BoolValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this BoolValue to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a StringValue. */
        interface IStringValue {

            /** StringValue value */
            value?: (string|null);
        }

        /** Represents a StringValue. */
        class StringValue implements IStringValue {

            /**
             * Constructs a new StringValue.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IStringValue);

            /** StringValue value. */
            public value: string;

            /**
             * Creates a new StringValue instance using the specified properties.
             * @param [properties] Properties to set
             * @returns StringValue instance
             */
            public static create(properties?: google.protobuf.IStringValue): google.protobuf.StringValue;

            /**
             * Encodes the specified StringValue message. Does not implicitly {@link google.protobuf.StringValue.verify|verify} messages.
             * @param message StringValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IStringValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified StringValue message, length delimited. Does not implicitly {@link google.protobuf.StringValue.verify|verify} messages.
             * @param message StringValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IStringValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a StringValue message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns StringValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.StringValue;

            /**
             * Decodes a StringValue message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns StringValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.StringValue;

            /**
             * Verifies a StringValue message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a StringValue message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns StringValue
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.StringValue;

            /**
             * Creates a plain object from a StringValue message. Also converts values to other types if specified.
             * @param message StringValue
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.StringValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this StringValue to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a BytesValue. */
        interface IBytesValue {

            /** BytesValue value */
            value?: (Uint8Array|null);
        }

        /** Represents a BytesValue. */
        class BytesValue implements IBytesValue {

            /**
             * Constructs a new BytesValue.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IBytesValue);

            /** BytesValue value. */
            public value: Uint8Array;

            /**
             * Creates a new BytesValue instance using the specified properties.
             * @param [properties] Properties to set
             * @returns BytesValue instance
             */
            public static create(properties?: google.protobuf.IBytesValue): google.protobuf.BytesValue;

            /**
             * Encodes the specified BytesValue message. Does not implicitly {@link google.protobuf.BytesValue.verify|verify} messages.
             * @param message BytesValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IBytesValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified BytesValue message, length delimited. Does not implicitly {@link google.protobuf.BytesValue.verify|verify} messages.
             * @param message BytesValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IBytesValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a BytesValue message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns BytesValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.BytesValue;

            /**
             * Decodes a BytesValue message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns BytesValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.BytesValue;

            /**
             * Verifies a BytesValue message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a BytesValue message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns BytesValue
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.BytesValue;

            /**
             * Creates a plain object from a BytesValue message. Also converts values to other types if specified.
             * @param message BytesValue
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.BytesValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this BytesValue to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }
}
