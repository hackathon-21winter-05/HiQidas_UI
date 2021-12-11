/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import * as $protobuf from "protobufjs/minimal";

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const hiqidashi = $root.hiqidashi = (() => {

    /**
     * Namespace hiqidashi.
     * @exports hiqidashi
     * @namespace
     */
    const hiqidashi = {};

    hiqidashi.WsSendHiqidashi = (function() {

        /**
         * Properties of a WsSendHiqidashi.
         * @memberof hiqidashi
         * @interface IWsSendHiqidashi
         * @property {hiqidashi.IHiqidashi|null} [hiqidashi] WsSendHiqidashi hiqidashi
         */

        /**
         * Constructs a new WsSendHiqidashi.
         * @memberof hiqidashi
         * @classdesc Represents a WsSendHiqidashi.
         * @implements IWsSendHiqidashi
         * @constructor
         * @param {hiqidashi.IWsSendHiqidashi=} [properties] Properties to set
         */
        function WsSendHiqidashi(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * WsSendHiqidashi hiqidashi.
         * @member {hiqidashi.IHiqidashi|null|undefined} hiqidashi
         * @memberof hiqidashi.WsSendHiqidashi
         * @instance
         */
        WsSendHiqidashi.prototype.hiqidashi = null;

        /**
         * Creates a new WsSendHiqidashi instance using the specified properties.
         * @function create
         * @memberof hiqidashi.WsSendHiqidashi
         * @static
         * @param {hiqidashi.IWsSendHiqidashi=} [properties] Properties to set
         * @returns {hiqidashi.WsSendHiqidashi} WsSendHiqidashi instance
         */
        WsSendHiqidashi.create = function create(properties) {
            return new WsSendHiqidashi(properties);
        };

        /**
         * Encodes the specified WsSendHiqidashi message. Does not implicitly {@link hiqidashi.WsSendHiqidashi.verify|verify} messages.
         * @function encode
         * @memberof hiqidashi.WsSendHiqidashi
         * @static
         * @param {hiqidashi.IWsSendHiqidashi} message WsSendHiqidashi message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WsSendHiqidashi.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.hiqidashi != null && Object.hasOwnProperty.call(message, "hiqidashi"))
                $root.hiqidashi.Hiqidashi.encode(message.hiqidashi, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified WsSendHiqidashi message, length delimited. Does not implicitly {@link hiqidashi.WsSendHiqidashi.verify|verify} messages.
         * @function encodeDelimited
         * @memberof hiqidashi.WsSendHiqidashi
         * @static
         * @param {hiqidashi.IWsSendHiqidashi} message WsSendHiqidashi message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WsSendHiqidashi.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a WsSendHiqidashi message from the specified reader or buffer.
         * @function decode
         * @memberof hiqidashi.WsSendHiqidashi
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {hiqidashi.WsSendHiqidashi} WsSendHiqidashi
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WsSendHiqidashi.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.hiqidashi.WsSendHiqidashi();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.hiqidashi = $root.hiqidashi.Hiqidashi.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a WsSendHiqidashi message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof hiqidashi.WsSendHiqidashi
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {hiqidashi.WsSendHiqidashi} WsSendHiqidashi
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WsSendHiqidashi.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a WsSendHiqidashi message.
         * @function verify
         * @memberof hiqidashi.WsSendHiqidashi
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        WsSendHiqidashi.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.hiqidashi != null && message.hasOwnProperty("hiqidashi")) {
                let error = $root.hiqidashi.Hiqidashi.verify(message.hiqidashi);
                if (error)
                    return "hiqidashi." + error;
            }
            return null;
        };

        /**
         * Creates a WsSendHiqidashi message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof hiqidashi.WsSendHiqidashi
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {hiqidashi.WsSendHiqidashi} WsSendHiqidashi
         */
        WsSendHiqidashi.fromObject = function fromObject(object) {
            if (object instanceof $root.hiqidashi.WsSendHiqidashi)
                return object;
            let message = new $root.hiqidashi.WsSendHiqidashi();
            if (object.hiqidashi != null) {
                if (typeof object.hiqidashi !== "object")
                    throw TypeError(".hiqidashi.WsSendHiqidashi.hiqidashi: object expected");
                message.hiqidashi = $root.hiqidashi.Hiqidashi.fromObject(object.hiqidashi);
            }
            return message;
        };

        /**
         * Creates a plain object from a WsSendHiqidashi message. Also converts values to other types if specified.
         * @function toObject
         * @memberof hiqidashi.WsSendHiqidashi
         * @static
         * @param {hiqidashi.WsSendHiqidashi} message WsSendHiqidashi
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        WsSendHiqidashi.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.hiqidashi = null;
            if (message.hiqidashi != null && message.hasOwnProperty("hiqidashi"))
                object.hiqidashi = $root.hiqidashi.Hiqidashi.toObject(message.hiqidashi, options);
            return object;
        };

        /**
         * Converts this WsSendHiqidashi to JSON.
         * @function toJSON
         * @memberof hiqidashi.WsSendHiqidashi
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        WsSendHiqidashi.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return WsSendHiqidashi;
    })();

    hiqidashi.WsSendHiqidashis = (function() {

        /**
         * Properties of a WsSendHiqidashis.
         * @memberof hiqidashi
         * @interface IWsSendHiqidashis
         * @property {Array.<hiqidashi.IHiqidashi>|null} [hiqidashis] WsSendHiqidashis hiqidashis
         */

        /**
         * Constructs a new WsSendHiqidashis.
         * @memberof hiqidashi
         * @classdesc Represents a WsSendHiqidashis.
         * @implements IWsSendHiqidashis
         * @constructor
         * @param {hiqidashi.IWsSendHiqidashis=} [properties] Properties to set
         */
        function WsSendHiqidashis(properties) {
            this.hiqidashis = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * WsSendHiqidashis hiqidashis.
         * @member {Array.<hiqidashi.IHiqidashi>} hiqidashis
         * @memberof hiqidashi.WsSendHiqidashis
         * @instance
         */
        WsSendHiqidashis.prototype.hiqidashis = $util.emptyArray;

        /**
         * Creates a new WsSendHiqidashis instance using the specified properties.
         * @function create
         * @memberof hiqidashi.WsSendHiqidashis
         * @static
         * @param {hiqidashi.IWsSendHiqidashis=} [properties] Properties to set
         * @returns {hiqidashi.WsSendHiqidashis} WsSendHiqidashis instance
         */
        WsSendHiqidashis.create = function create(properties) {
            return new WsSendHiqidashis(properties);
        };

        /**
         * Encodes the specified WsSendHiqidashis message. Does not implicitly {@link hiqidashi.WsSendHiqidashis.verify|verify} messages.
         * @function encode
         * @memberof hiqidashi.WsSendHiqidashis
         * @static
         * @param {hiqidashi.IWsSendHiqidashis} message WsSendHiqidashis message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WsSendHiqidashis.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.hiqidashis != null && message.hiqidashis.length)
                for (let i = 0; i < message.hiqidashis.length; ++i)
                    $root.hiqidashi.Hiqidashi.encode(message.hiqidashis[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified WsSendHiqidashis message, length delimited. Does not implicitly {@link hiqidashi.WsSendHiqidashis.verify|verify} messages.
         * @function encodeDelimited
         * @memberof hiqidashi.WsSendHiqidashis
         * @static
         * @param {hiqidashi.IWsSendHiqidashis} message WsSendHiqidashis message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WsSendHiqidashis.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a WsSendHiqidashis message from the specified reader or buffer.
         * @function decode
         * @memberof hiqidashi.WsSendHiqidashis
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {hiqidashi.WsSendHiqidashis} WsSendHiqidashis
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WsSendHiqidashis.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.hiqidashi.WsSendHiqidashis();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.hiqidashis && message.hiqidashis.length))
                        message.hiqidashis = [];
                    message.hiqidashis.push($root.hiqidashi.Hiqidashi.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a WsSendHiqidashis message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof hiqidashi.WsSendHiqidashis
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {hiqidashi.WsSendHiqidashis} WsSendHiqidashis
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WsSendHiqidashis.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a WsSendHiqidashis message.
         * @function verify
         * @memberof hiqidashi.WsSendHiqidashis
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        WsSendHiqidashis.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.hiqidashis != null && message.hasOwnProperty("hiqidashis")) {
                if (!Array.isArray(message.hiqidashis))
                    return "hiqidashis: array expected";
                for (let i = 0; i < message.hiqidashis.length; ++i) {
                    let error = $root.hiqidashi.Hiqidashi.verify(message.hiqidashis[i]);
                    if (error)
                        return "hiqidashis." + error;
                }
            }
            return null;
        };

        /**
         * Creates a WsSendHiqidashis message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof hiqidashi.WsSendHiqidashis
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {hiqidashi.WsSendHiqidashis} WsSendHiqidashis
         */
        WsSendHiqidashis.fromObject = function fromObject(object) {
            if (object instanceof $root.hiqidashi.WsSendHiqidashis)
                return object;
            let message = new $root.hiqidashi.WsSendHiqidashis();
            if (object.hiqidashis) {
                if (!Array.isArray(object.hiqidashis))
                    throw TypeError(".hiqidashi.WsSendHiqidashis.hiqidashis: array expected");
                message.hiqidashis = [];
                for (let i = 0; i < object.hiqidashis.length; ++i) {
                    if (typeof object.hiqidashis[i] !== "object")
                        throw TypeError(".hiqidashi.WsSendHiqidashis.hiqidashis: object expected");
                    message.hiqidashis[i] = $root.hiqidashi.Hiqidashi.fromObject(object.hiqidashis[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a WsSendHiqidashis message. Also converts values to other types if specified.
         * @function toObject
         * @memberof hiqidashi.WsSendHiqidashis
         * @static
         * @param {hiqidashi.WsSendHiqidashis} message WsSendHiqidashis
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        WsSendHiqidashis.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.hiqidashis = [];
            if (message.hiqidashis && message.hiqidashis.length) {
                object.hiqidashis = [];
                for (let j = 0; j < message.hiqidashis.length; ++j)
                    object.hiqidashis[j] = $root.hiqidashi.Hiqidashi.toObject(message.hiqidashis[j], options);
            }
            return object;
        };

        /**
         * Converts this WsSendHiqidashis to JSON.
         * @function toJSON
         * @memberof hiqidashi.WsSendHiqidashis
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        WsSendHiqidashis.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return WsSendHiqidashis;
    })();

    hiqidashi.WsCreateHiqidashi = (function() {

        /**
         * Properties of a WsCreateHiqidashi.
         * @memberof hiqidashi
         * @interface IWsCreateHiqidashi
         * @property {string|null} [parentId] WsCreateHiqidashi parentId
         */

        /**
         * Constructs a new WsCreateHiqidashi.
         * @memberof hiqidashi
         * @classdesc Represents a WsCreateHiqidashi.
         * @implements IWsCreateHiqidashi
         * @constructor
         * @param {hiqidashi.IWsCreateHiqidashi=} [properties] Properties to set
         */
        function WsCreateHiqidashi(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * WsCreateHiqidashi parentId.
         * @member {string} parentId
         * @memberof hiqidashi.WsCreateHiqidashi
         * @instance
         */
        WsCreateHiqidashi.prototype.parentId = "";

        /**
         * Creates a new WsCreateHiqidashi instance using the specified properties.
         * @function create
         * @memberof hiqidashi.WsCreateHiqidashi
         * @static
         * @param {hiqidashi.IWsCreateHiqidashi=} [properties] Properties to set
         * @returns {hiqidashi.WsCreateHiqidashi} WsCreateHiqidashi instance
         */
        WsCreateHiqidashi.create = function create(properties) {
            return new WsCreateHiqidashi(properties);
        };

        /**
         * Encodes the specified WsCreateHiqidashi message. Does not implicitly {@link hiqidashi.WsCreateHiqidashi.verify|verify} messages.
         * @function encode
         * @memberof hiqidashi.WsCreateHiqidashi
         * @static
         * @param {hiqidashi.IWsCreateHiqidashi} message WsCreateHiqidashi message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WsCreateHiqidashi.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.parentId != null && Object.hasOwnProperty.call(message, "parentId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.parentId);
            return writer;
        };

        /**
         * Encodes the specified WsCreateHiqidashi message, length delimited. Does not implicitly {@link hiqidashi.WsCreateHiqidashi.verify|verify} messages.
         * @function encodeDelimited
         * @memberof hiqidashi.WsCreateHiqidashi
         * @static
         * @param {hiqidashi.IWsCreateHiqidashi} message WsCreateHiqidashi message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WsCreateHiqidashi.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a WsCreateHiqidashi message from the specified reader or buffer.
         * @function decode
         * @memberof hiqidashi.WsCreateHiqidashi
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {hiqidashi.WsCreateHiqidashi} WsCreateHiqidashi
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WsCreateHiqidashi.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.hiqidashi.WsCreateHiqidashi();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.parentId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a WsCreateHiqidashi message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof hiqidashi.WsCreateHiqidashi
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {hiqidashi.WsCreateHiqidashi} WsCreateHiqidashi
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WsCreateHiqidashi.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a WsCreateHiqidashi message.
         * @function verify
         * @memberof hiqidashi.WsCreateHiqidashi
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        WsCreateHiqidashi.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.parentId != null && message.hasOwnProperty("parentId"))
                if (!$util.isString(message.parentId))
                    return "parentId: string expected";
            return null;
        };

        /**
         * Creates a WsCreateHiqidashi message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof hiqidashi.WsCreateHiqidashi
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {hiqidashi.WsCreateHiqidashi} WsCreateHiqidashi
         */
        WsCreateHiqidashi.fromObject = function fromObject(object) {
            if (object instanceof $root.hiqidashi.WsCreateHiqidashi)
                return object;
            let message = new $root.hiqidashi.WsCreateHiqidashi();
            if (object.parentId != null)
                message.parentId = String(object.parentId);
            return message;
        };

        /**
         * Creates a plain object from a WsCreateHiqidashi message. Also converts values to other types if specified.
         * @function toObject
         * @memberof hiqidashi.WsCreateHiqidashi
         * @static
         * @param {hiqidashi.WsCreateHiqidashi} message WsCreateHiqidashi
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        WsCreateHiqidashi.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.parentId = "";
            if (message.parentId != null && message.hasOwnProperty("parentId"))
                object.parentId = message.parentId;
            return object;
        };

        /**
         * Converts this WsCreateHiqidashi to JSON.
         * @function toJSON
         * @memberof hiqidashi.WsCreateHiqidashi
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        WsCreateHiqidashi.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return WsCreateHiqidashi;
    })();

    hiqidashi.WsEditHiqidashi = (function() {

        /**
         * Properties of a WsEditHiqidashi.
         * @memberof hiqidashi
         * @interface IWsEditHiqidashi
         * @property {string|null} [id] WsEditHiqidashi id
         * @property {google.protobuf.IStringValue|null} [title] WsEditHiqidashi title
         * @property {google.protobuf.IStringValue|null} [drawing] WsEditHiqidashi drawing
         * @property {google.protobuf.IStringValue|null} [colorCode] WsEditHiqidashi colorCode
         */

        /**
         * Constructs a new WsEditHiqidashi.
         * @memberof hiqidashi
         * @classdesc Represents a WsEditHiqidashi.
         * @implements IWsEditHiqidashi
         * @constructor
         * @param {hiqidashi.IWsEditHiqidashi=} [properties] Properties to set
         */
        function WsEditHiqidashi(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * WsEditHiqidashi id.
         * @member {string} id
         * @memberof hiqidashi.WsEditHiqidashi
         * @instance
         */
        WsEditHiqidashi.prototype.id = "";

        /**
         * WsEditHiqidashi title.
         * @member {google.protobuf.IStringValue|null|undefined} title
         * @memberof hiqidashi.WsEditHiqidashi
         * @instance
         */
        WsEditHiqidashi.prototype.title = null;

        /**
         * WsEditHiqidashi drawing.
         * @member {google.protobuf.IStringValue|null|undefined} drawing
         * @memberof hiqidashi.WsEditHiqidashi
         * @instance
         */
        WsEditHiqidashi.prototype.drawing = null;

        /**
         * WsEditHiqidashi colorCode.
         * @member {google.protobuf.IStringValue|null|undefined} colorCode
         * @memberof hiqidashi.WsEditHiqidashi
         * @instance
         */
        WsEditHiqidashi.prototype.colorCode = null;

        /**
         * Creates a new WsEditHiqidashi instance using the specified properties.
         * @function create
         * @memberof hiqidashi.WsEditHiqidashi
         * @static
         * @param {hiqidashi.IWsEditHiqidashi=} [properties] Properties to set
         * @returns {hiqidashi.WsEditHiqidashi} WsEditHiqidashi instance
         */
        WsEditHiqidashi.create = function create(properties) {
            return new WsEditHiqidashi(properties);
        };

        /**
         * Encodes the specified WsEditHiqidashi message. Does not implicitly {@link hiqidashi.WsEditHiqidashi.verify|verify} messages.
         * @function encode
         * @memberof hiqidashi.WsEditHiqidashi
         * @static
         * @param {hiqidashi.IWsEditHiqidashi} message WsEditHiqidashi message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WsEditHiqidashi.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            if (message.title != null && Object.hasOwnProperty.call(message, "title"))
                $root.google.protobuf.StringValue.encode(message.title, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.drawing != null && Object.hasOwnProperty.call(message, "drawing"))
                $root.google.protobuf.StringValue.encode(message.drawing, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.colorCode != null && Object.hasOwnProperty.call(message, "colorCode"))
                $root.google.protobuf.StringValue.encode(message.colorCode, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified WsEditHiqidashi message, length delimited. Does not implicitly {@link hiqidashi.WsEditHiqidashi.verify|verify} messages.
         * @function encodeDelimited
         * @memberof hiqidashi.WsEditHiqidashi
         * @static
         * @param {hiqidashi.IWsEditHiqidashi} message WsEditHiqidashi message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WsEditHiqidashi.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a WsEditHiqidashi message from the specified reader or buffer.
         * @function decode
         * @memberof hiqidashi.WsEditHiqidashi
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {hiqidashi.WsEditHiqidashi} WsEditHiqidashi
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WsEditHiqidashi.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.hiqidashi.WsEditHiqidashi();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.title = $root.google.protobuf.StringValue.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.drawing = $root.google.protobuf.StringValue.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.colorCode = $root.google.protobuf.StringValue.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a WsEditHiqidashi message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof hiqidashi.WsEditHiqidashi
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {hiqidashi.WsEditHiqidashi} WsEditHiqidashi
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WsEditHiqidashi.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a WsEditHiqidashi message.
         * @function verify
         * @memberof hiqidashi.WsEditHiqidashi
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        WsEditHiqidashi.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            if (message.title != null && message.hasOwnProperty("title")) {
                let error = $root.google.protobuf.StringValue.verify(message.title);
                if (error)
                    return "title." + error;
            }
            if (message.drawing != null && message.hasOwnProperty("drawing")) {
                let error = $root.google.protobuf.StringValue.verify(message.drawing);
                if (error)
                    return "drawing." + error;
            }
            if (message.colorCode != null && message.hasOwnProperty("colorCode")) {
                let error = $root.google.protobuf.StringValue.verify(message.colorCode);
                if (error)
                    return "colorCode." + error;
            }
            return null;
        };

        /**
         * Creates a WsEditHiqidashi message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof hiqidashi.WsEditHiqidashi
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {hiqidashi.WsEditHiqidashi} WsEditHiqidashi
         */
        WsEditHiqidashi.fromObject = function fromObject(object) {
            if (object instanceof $root.hiqidashi.WsEditHiqidashi)
                return object;
            let message = new $root.hiqidashi.WsEditHiqidashi();
            if (object.id != null)
                message.id = String(object.id);
            if (object.title != null) {
                if (typeof object.title !== "object")
                    throw TypeError(".hiqidashi.WsEditHiqidashi.title: object expected");
                message.title = $root.google.protobuf.StringValue.fromObject(object.title);
            }
            if (object.drawing != null) {
                if (typeof object.drawing !== "object")
                    throw TypeError(".hiqidashi.WsEditHiqidashi.drawing: object expected");
                message.drawing = $root.google.protobuf.StringValue.fromObject(object.drawing);
            }
            if (object.colorCode != null) {
                if (typeof object.colorCode !== "object")
                    throw TypeError(".hiqidashi.WsEditHiqidashi.colorCode: object expected");
                message.colorCode = $root.google.protobuf.StringValue.fromObject(object.colorCode);
            }
            return message;
        };

        /**
         * Creates a plain object from a WsEditHiqidashi message. Also converts values to other types if specified.
         * @function toObject
         * @memberof hiqidashi.WsEditHiqidashi
         * @static
         * @param {hiqidashi.WsEditHiqidashi} message WsEditHiqidashi
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        WsEditHiqidashi.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.id = "";
                object.title = null;
                object.drawing = null;
                object.colorCode = null;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.title != null && message.hasOwnProperty("title"))
                object.title = $root.google.protobuf.StringValue.toObject(message.title, options);
            if (message.drawing != null && message.hasOwnProperty("drawing"))
                object.drawing = $root.google.protobuf.StringValue.toObject(message.drawing, options);
            if (message.colorCode != null && message.hasOwnProperty("colorCode"))
                object.colorCode = $root.google.protobuf.StringValue.toObject(message.colorCode, options);
            return object;
        };

        /**
         * Converts this WsEditHiqidashi to JSON.
         * @function toJSON
         * @memberof hiqidashi.WsEditHiqidashi
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        WsEditHiqidashi.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return WsEditHiqidashi;
    })();

    hiqidashi.WsDeleteHiqidashi = (function() {

        /**
         * Properties of a WsDeleteHiqidashi.
         * @memberof hiqidashi
         * @interface IWsDeleteHiqidashi
         * @property {string|null} [id] WsDeleteHiqidashi id
         */

        /**
         * Constructs a new WsDeleteHiqidashi.
         * @memberof hiqidashi
         * @classdesc Represents a WsDeleteHiqidashi.
         * @implements IWsDeleteHiqidashi
         * @constructor
         * @param {hiqidashi.IWsDeleteHiqidashi=} [properties] Properties to set
         */
        function WsDeleteHiqidashi(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * WsDeleteHiqidashi id.
         * @member {string} id
         * @memberof hiqidashi.WsDeleteHiqidashi
         * @instance
         */
        WsDeleteHiqidashi.prototype.id = "";

        /**
         * Creates a new WsDeleteHiqidashi instance using the specified properties.
         * @function create
         * @memberof hiqidashi.WsDeleteHiqidashi
         * @static
         * @param {hiqidashi.IWsDeleteHiqidashi=} [properties] Properties to set
         * @returns {hiqidashi.WsDeleteHiqidashi} WsDeleteHiqidashi instance
         */
        WsDeleteHiqidashi.create = function create(properties) {
            return new WsDeleteHiqidashi(properties);
        };

        /**
         * Encodes the specified WsDeleteHiqidashi message. Does not implicitly {@link hiqidashi.WsDeleteHiqidashi.verify|verify} messages.
         * @function encode
         * @memberof hiqidashi.WsDeleteHiqidashi
         * @static
         * @param {hiqidashi.IWsDeleteHiqidashi} message WsDeleteHiqidashi message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WsDeleteHiqidashi.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            return writer;
        };

        /**
         * Encodes the specified WsDeleteHiqidashi message, length delimited. Does not implicitly {@link hiqidashi.WsDeleteHiqidashi.verify|verify} messages.
         * @function encodeDelimited
         * @memberof hiqidashi.WsDeleteHiqidashi
         * @static
         * @param {hiqidashi.IWsDeleteHiqidashi} message WsDeleteHiqidashi message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WsDeleteHiqidashi.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a WsDeleteHiqidashi message from the specified reader or buffer.
         * @function decode
         * @memberof hiqidashi.WsDeleteHiqidashi
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {hiqidashi.WsDeleteHiqidashi} WsDeleteHiqidashi
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WsDeleteHiqidashi.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.hiqidashi.WsDeleteHiqidashi();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a WsDeleteHiqidashi message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof hiqidashi.WsDeleteHiqidashi
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {hiqidashi.WsDeleteHiqidashi} WsDeleteHiqidashi
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WsDeleteHiqidashi.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a WsDeleteHiqidashi message.
         * @function verify
         * @memberof hiqidashi.WsDeleteHiqidashi
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        WsDeleteHiqidashi.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            return null;
        };

        /**
         * Creates a WsDeleteHiqidashi message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof hiqidashi.WsDeleteHiqidashi
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {hiqidashi.WsDeleteHiqidashi} WsDeleteHiqidashi
         */
        WsDeleteHiqidashi.fromObject = function fromObject(object) {
            if (object instanceof $root.hiqidashi.WsDeleteHiqidashi)
                return object;
            let message = new $root.hiqidashi.WsDeleteHiqidashi();
            if (object.id != null)
                message.id = String(object.id);
            return message;
        };

        /**
         * Creates a plain object from a WsDeleteHiqidashi message. Also converts values to other types if specified.
         * @function toObject
         * @memberof hiqidashi.WsDeleteHiqidashi
         * @static
         * @param {hiqidashi.WsDeleteHiqidashi} message WsDeleteHiqidashi
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        WsDeleteHiqidashi.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.id = "";
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            return object;
        };

        /**
         * Converts this WsDeleteHiqidashi to JSON.
         * @function toJSON
         * @memberof hiqidashi.WsDeleteHiqidashi
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        WsDeleteHiqidashi.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return WsDeleteHiqidashi;
    })();

    hiqidashi.Hiqidashi = (function() {

        /**
         * Properties of a Hiqidashi.
         * @memberof hiqidashi
         * @interface IHiqidashi
         * @property {string|null} [id] Hiqidashi id
         * @property {string|null} [creatorId] Hiqidashi creatorId
         * @property {google.protobuf.IStringValue|null} [parentId] Hiqidashi parentId
         * @property {string|null} [title] Hiqidashi title
         * @property {string|null} [description] Hiqidashi description
         * @property {google.protobuf.IStringValue|null} [drawing] Hiqidashi drawing
         * @property {string|null} [colorCode] Hiqidashi colorCode
         */

        /**
         * Constructs a new Hiqidashi.
         * @memberof hiqidashi
         * @classdesc Represents a Hiqidashi.
         * @implements IHiqidashi
         * @constructor
         * @param {hiqidashi.IHiqidashi=} [properties] Properties to set
         */
        function Hiqidashi(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Hiqidashi id.
         * @member {string} id
         * @memberof hiqidashi.Hiqidashi
         * @instance
         */
        Hiqidashi.prototype.id = "";

        /**
         * Hiqidashi creatorId.
         * @member {string} creatorId
         * @memberof hiqidashi.Hiqidashi
         * @instance
         */
        Hiqidashi.prototype.creatorId = "";

        /**
         * Hiqidashi parentId.
         * @member {google.protobuf.IStringValue|null|undefined} parentId
         * @memberof hiqidashi.Hiqidashi
         * @instance
         */
        Hiqidashi.prototype.parentId = null;

        /**
         * Hiqidashi title.
         * @member {string} title
         * @memberof hiqidashi.Hiqidashi
         * @instance
         */
        Hiqidashi.prototype.title = "";

        /**
         * Hiqidashi description.
         * @member {string} description
         * @memberof hiqidashi.Hiqidashi
         * @instance
         */
        Hiqidashi.prototype.description = "";

        /**
         * Hiqidashi drawing.
         * @member {google.protobuf.IStringValue|null|undefined} drawing
         * @memberof hiqidashi.Hiqidashi
         * @instance
         */
        Hiqidashi.prototype.drawing = null;

        /**
         * Hiqidashi colorCode.
         * @member {string} colorCode
         * @memberof hiqidashi.Hiqidashi
         * @instance
         */
        Hiqidashi.prototype.colorCode = "";

        /**
         * Creates a new Hiqidashi instance using the specified properties.
         * @function create
         * @memberof hiqidashi.Hiqidashi
         * @static
         * @param {hiqidashi.IHiqidashi=} [properties] Properties to set
         * @returns {hiqidashi.Hiqidashi} Hiqidashi instance
         */
        Hiqidashi.create = function create(properties) {
            return new Hiqidashi(properties);
        };

        /**
         * Encodes the specified Hiqidashi message. Does not implicitly {@link hiqidashi.Hiqidashi.verify|verify} messages.
         * @function encode
         * @memberof hiqidashi.Hiqidashi
         * @static
         * @param {hiqidashi.IHiqidashi} message Hiqidashi message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Hiqidashi.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            if (message.creatorId != null && Object.hasOwnProperty.call(message, "creatorId"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.creatorId);
            if (message.parentId != null && Object.hasOwnProperty.call(message, "parentId"))
                $root.google.protobuf.StringValue.encode(message.parentId, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.title != null && Object.hasOwnProperty.call(message, "title"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.title);
            if (message.description != null && Object.hasOwnProperty.call(message, "description"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.description);
            if (message.drawing != null && Object.hasOwnProperty.call(message, "drawing"))
                $root.google.protobuf.StringValue.encode(message.drawing, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            if (message.colorCode != null && Object.hasOwnProperty.call(message, "colorCode"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.colorCode);
            return writer;
        };

        /**
         * Encodes the specified Hiqidashi message, length delimited. Does not implicitly {@link hiqidashi.Hiqidashi.verify|verify} messages.
         * @function encodeDelimited
         * @memberof hiqidashi.Hiqidashi
         * @static
         * @param {hiqidashi.IHiqidashi} message Hiqidashi message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Hiqidashi.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Hiqidashi message from the specified reader or buffer.
         * @function decode
         * @memberof hiqidashi.Hiqidashi
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {hiqidashi.Hiqidashi} Hiqidashi
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Hiqidashi.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.hiqidashi.Hiqidashi();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.creatorId = reader.string();
                    break;
                case 3:
                    message.parentId = $root.google.protobuf.StringValue.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.title = reader.string();
                    break;
                case 5:
                    message.description = reader.string();
                    break;
                case 6:
                    message.drawing = $root.google.protobuf.StringValue.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.colorCode = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Hiqidashi message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof hiqidashi.Hiqidashi
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {hiqidashi.Hiqidashi} Hiqidashi
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Hiqidashi.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Hiqidashi message.
         * @function verify
         * @memberof hiqidashi.Hiqidashi
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Hiqidashi.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            if (message.creatorId != null && message.hasOwnProperty("creatorId"))
                if (!$util.isString(message.creatorId))
                    return "creatorId: string expected";
            if (message.parentId != null && message.hasOwnProperty("parentId")) {
                let error = $root.google.protobuf.StringValue.verify(message.parentId);
                if (error)
                    return "parentId." + error;
            }
            if (message.title != null && message.hasOwnProperty("title"))
                if (!$util.isString(message.title))
                    return "title: string expected";
            if (message.description != null && message.hasOwnProperty("description"))
                if (!$util.isString(message.description))
                    return "description: string expected";
            if (message.drawing != null && message.hasOwnProperty("drawing")) {
                let error = $root.google.protobuf.StringValue.verify(message.drawing);
                if (error)
                    return "drawing." + error;
            }
            if (message.colorCode != null && message.hasOwnProperty("colorCode"))
                if (!$util.isString(message.colorCode))
                    return "colorCode: string expected";
            return null;
        };

        /**
         * Creates a Hiqidashi message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof hiqidashi.Hiqidashi
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {hiqidashi.Hiqidashi} Hiqidashi
         */
        Hiqidashi.fromObject = function fromObject(object) {
            if (object instanceof $root.hiqidashi.Hiqidashi)
                return object;
            let message = new $root.hiqidashi.Hiqidashi();
            if (object.id != null)
                message.id = String(object.id);
            if (object.creatorId != null)
                message.creatorId = String(object.creatorId);
            if (object.parentId != null) {
                if (typeof object.parentId !== "object")
                    throw TypeError(".hiqidashi.Hiqidashi.parentId: object expected");
                message.parentId = $root.google.protobuf.StringValue.fromObject(object.parentId);
            }
            if (object.title != null)
                message.title = String(object.title);
            if (object.description != null)
                message.description = String(object.description);
            if (object.drawing != null) {
                if (typeof object.drawing !== "object")
                    throw TypeError(".hiqidashi.Hiqidashi.drawing: object expected");
                message.drawing = $root.google.protobuf.StringValue.fromObject(object.drawing);
            }
            if (object.colorCode != null)
                message.colorCode = String(object.colorCode);
            return message;
        };

        /**
         * Creates a plain object from a Hiqidashi message. Also converts values to other types if specified.
         * @function toObject
         * @memberof hiqidashi.Hiqidashi
         * @static
         * @param {hiqidashi.Hiqidashi} message Hiqidashi
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Hiqidashi.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.id = "";
                object.creatorId = "";
                object.parentId = null;
                object.title = "";
                object.description = "";
                object.drawing = null;
                object.colorCode = "";
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.creatorId != null && message.hasOwnProperty("creatorId"))
                object.creatorId = message.creatorId;
            if (message.parentId != null && message.hasOwnProperty("parentId"))
                object.parentId = $root.google.protobuf.StringValue.toObject(message.parentId, options);
            if (message.title != null && message.hasOwnProperty("title"))
                object.title = message.title;
            if (message.description != null && message.hasOwnProperty("description"))
                object.description = message.description;
            if (message.drawing != null && message.hasOwnProperty("drawing"))
                object.drawing = $root.google.protobuf.StringValue.toObject(message.drawing, options);
            if (message.colorCode != null && message.hasOwnProperty("colorCode"))
                object.colorCode = message.colorCode;
            return object;
        };

        /**
         * Converts this Hiqidashi to JSON.
         * @function toJSON
         * @memberof hiqidashi.Hiqidashi
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Hiqidashi.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Hiqidashi;
    })();

    return hiqidashi;
})();

export const google = $root.google = (() => {

    /**
     * Namespace google.
     * @exports google
     * @namespace
     */
    const google = {};

    google.protobuf = (function() {

        /**
         * Namespace protobuf.
         * @memberof google
         * @namespace
         */
        const protobuf = {};

        protobuf.DoubleValue = (function() {

            /**
             * Properties of a DoubleValue.
             * @memberof google.protobuf
             * @interface IDoubleValue
             * @property {number|null} [value] DoubleValue value
             */

            /**
             * Constructs a new DoubleValue.
             * @memberof google.protobuf
             * @classdesc Represents a DoubleValue.
             * @implements IDoubleValue
             * @constructor
             * @param {google.protobuf.IDoubleValue=} [properties] Properties to set
             */
            function DoubleValue(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * DoubleValue value.
             * @member {number} value
             * @memberof google.protobuf.DoubleValue
             * @instance
             */
            DoubleValue.prototype.value = 0;

            /**
             * Creates a new DoubleValue instance using the specified properties.
             * @function create
             * @memberof google.protobuf.DoubleValue
             * @static
             * @param {google.protobuf.IDoubleValue=} [properties] Properties to set
             * @returns {google.protobuf.DoubleValue} DoubleValue instance
             */
            DoubleValue.create = function create(properties) {
                return new DoubleValue(properties);
            };

            /**
             * Encodes the specified DoubleValue message. Does not implicitly {@link google.protobuf.DoubleValue.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.DoubleValue
             * @static
             * @param {google.protobuf.IDoubleValue} message DoubleValue message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DoubleValue.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                    writer.uint32(/* id 1, wireType 1 =*/9).double(message.value);
                return writer;
            };

            /**
             * Encodes the specified DoubleValue message, length delimited. Does not implicitly {@link google.protobuf.DoubleValue.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.DoubleValue
             * @static
             * @param {google.protobuf.IDoubleValue} message DoubleValue message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DoubleValue.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a DoubleValue message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.DoubleValue
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.DoubleValue} DoubleValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DoubleValue.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.DoubleValue();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.value = reader.double();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a DoubleValue message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.DoubleValue
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.DoubleValue} DoubleValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DoubleValue.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a DoubleValue message.
             * @function verify
             * @memberof google.protobuf.DoubleValue
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            DoubleValue.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.value != null && message.hasOwnProperty("value"))
                    if (typeof message.value !== "number")
                        return "value: number expected";
                return null;
            };

            /**
             * Creates a DoubleValue message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.DoubleValue
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.DoubleValue} DoubleValue
             */
            DoubleValue.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.DoubleValue)
                    return object;
                let message = new $root.google.protobuf.DoubleValue();
                if (object.value != null)
                    message.value = Number(object.value);
                return message;
            };

            /**
             * Creates a plain object from a DoubleValue message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.DoubleValue
             * @static
             * @param {google.protobuf.DoubleValue} message DoubleValue
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            DoubleValue.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults)
                    object.value = 0;
                if (message.value != null && message.hasOwnProperty("value"))
                    object.value = options.json && !isFinite(message.value) ? String(message.value) : message.value;
                return object;
            };

            /**
             * Converts this DoubleValue to JSON.
             * @function toJSON
             * @memberof google.protobuf.DoubleValue
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            DoubleValue.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return DoubleValue;
        })();

        protobuf.FloatValue = (function() {

            /**
             * Properties of a FloatValue.
             * @memberof google.protobuf
             * @interface IFloatValue
             * @property {number|null} [value] FloatValue value
             */

            /**
             * Constructs a new FloatValue.
             * @memberof google.protobuf
             * @classdesc Represents a FloatValue.
             * @implements IFloatValue
             * @constructor
             * @param {google.protobuf.IFloatValue=} [properties] Properties to set
             */
            function FloatValue(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * FloatValue value.
             * @member {number} value
             * @memberof google.protobuf.FloatValue
             * @instance
             */
            FloatValue.prototype.value = 0;

            /**
             * Creates a new FloatValue instance using the specified properties.
             * @function create
             * @memberof google.protobuf.FloatValue
             * @static
             * @param {google.protobuf.IFloatValue=} [properties] Properties to set
             * @returns {google.protobuf.FloatValue} FloatValue instance
             */
            FloatValue.create = function create(properties) {
                return new FloatValue(properties);
            };

            /**
             * Encodes the specified FloatValue message. Does not implicitly {@link google.protobuf.FloatValue.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.FloatValue
             * @static
             * @param {google.protobuf.IFloatValue} message FloatValue message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FloatValue.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                    writer.uint32(/* id 1, wireType 5 =*/13).float(message.value);
                return writer;
            };

            /**
             * Encodes the specified FloatValue message, length delimited. Does not implicitly {@link google.protobuf.FloatValue.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.FloatValue
             * @static
             * @param {google.protobuf.IFloatValue} message FloatValue message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FloatValue.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a FloatValue message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.FloatValue
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.FloatValue} FloatValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FloatValue.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.FloatValue();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.value = reader.float();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a FloatValue message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.FloatValue
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.FloatValue} FloatValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FloatValue.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a FloatValue message.
             * @function verify
             * @memberof google.protobuf.FloatValue
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            FloatValue.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.value != null && message.hasOwnProperty("value"))
                    if (typeof message.value !== "number")
                        return "value: number expected";
                return null;
            };

            /**
             * Creates a FloatValue message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.FloatValue
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.FloatValue} FloatValue
             */
            FloatValue.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.FloatValue)
                    return object;
                let message = new $root.google.protobuf.FloatValue();
                if (object.value != null)
                    message.value = Number(object.value);
                return message;
            };

            /**
             * Creates a plain object from a FloatValue message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.FloatValue
             * @static
             * @param {google.protobuf.FloatValue} message FloatValue
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            FloatValue.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults)
                    object.value = 0;
                if (message.value != null && message.hasOwnProperty("value"))
                    object.value = options.json && !isFinite(message.value) ? String(message.value) : message.value;
                return object;
            };

            /**
             * Converts this FloatValue to JSON.
             * @function toJSON
             * @memberof google.protobuf.FloatValue
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            FloatValue.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return FloatValue;
        })();

        protobuf.Int64Value = (function() {

            /**
             * Properties of an Int64Value.
             * @memberof google.protobuf
             * @interface IInt64Value
             * @property {number|Long|null} [value] Int64Value value
             */

            /**
             * Constructs a new Int64Value.
             * @memberof google.protobuf
             * @classdesc Represents an Int64Value.
             * @implements IInt64Value
             * @constructor
             * @param {google.protobuf.IInt64Value=} [properties] Properties to set
             */
            function Int64Value(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Int64Value value.
             * @member {number|Long} value
             * @memberof google.protobuf.Int64Value
             * @instance
             */
            Int64Value.prototype.value = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Creates a new Int64Value instance using the specified properties.
             * @function create
             * @memberof google.protobuf.Int64Value
             * @static
             * @param {google.protobuf.IInt64Value=} [properties] Properties to set
             * @returns {google.protobuf.Int64Value} Int64Value instance
             */
            Int64Value.create = function create(properties) {
                return new Int64Value(properties);
            };

            /**
             * Encodes the specified Int64Value message. Does not implicitly {@link google.protobuf.Int64Value.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.Int64Value
             * @static
             * @param {google.protobuf.IInt64Value} message Int64Value message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Int64Value.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.value);
                return writer;
            };

            /**
             * Encodes the specified Int64Value message, length delimited. Does not implicitly {@link google.protobuf.Int64Value.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.Int64Value
             * @static
             * @param {google.protobuf.IInt64Value} message Int64Value message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Int64Value.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an Int64Value message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.Int64Value
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.Int64Value} Int64Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Int64Value.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.Int64Value();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.value = reader.int64();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an Int64Value message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.Int64Value
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.Int64Value} Int64Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Int64Value.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an Int64Value message.
             * @function verify
             * @memberof google.protobuf.Int64Value
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Int64Value.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.value != null && message.hasOwnProperty("value"))
                    if (!$util.isInteger(message.value) && !(message.value && $util.isInteger(message.value.low) && $util.isInteger(message.value.high)))
                        return "value: integer|Long expected";
                return null;
            };

            /**
             * Creates an Int64Value message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.Int64Value
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.Int64Value} Int64Value
             */
            Int64Value.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.Int64Value)
                    return object;
                let message = new $root.google.protobuf.Int64Value();
                if (object.value != null)
                    if ($util.Long)
                        (message.value = $util.Long.fromValue(object.value)).unsigned = false;
                    else if (typeof object.value === "string")
                        message.value = parseInt(object.value, 10);
                    else if (typeof object.value === "number")
                        message.value = object.value;
                    else if (typeof object.value === "object")
                        message.value = new $util.LongBits(object.value.low >>> 0, object.value.high >>> 0).toNumber();
                return message;
            };

            /**
             * Creates a plain object from an Int64Value message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.Int64Value
             * @static
             * @param {google.protobuf.Int64Value} message Int64Value
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Int64Value.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults)
                    if ($util.Long) {
                        let long = new $util.Long(0, 0, false);
                        object.value = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.value = options.longs === String ? "0" : 0;
                if (message.value != null && message.hasOwnProperty("value"))
                    if (typeof message.value === "number")
                        object.value = options.longs === String ? String(message.value) : message.value;
                    else
                        object.value = options.longs === String ? $util.Long.prototype.toString.call(message.value) : options.longs === Number ? new $util.LongBits(message.value.low >>> 0, message.value.high >>> 0).toNumber() : message.value;
                return object;
            };

            /**
             * Converts this Int64Value to JSON.
             * @function toJSON
             * @memberof google.protobuf.Int64Value
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Int64Value.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Int64Value;
        })();

        protobuf.UInt64Value = (function() {

            /**
             * Properties of a UInt64Value.
             * @memberof google.protobuf
             * @interface IUInt64Value
             * @property {number|Long|null} [value] UInt64Value value
             */

            /**
             * Constructs a new UInt64Value.
             * @memberof google.protobuf
             * @classdesc Represents a UInt64Value.
             * @implements IUInt64Value
             * @constructor
             * @param {google.protobuf.IUInt64Value=} [properties] Properties to set
             */
            function UInt64Value(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * UInt64Value value.
             * @member {number|Long} value
             * @memberof google.protobuf.UInt64Value
             * @instance
             */
            UInt64Value.prototype.value = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

            /**
             * Creates a new UInt64Value instance using the specified properties.
             * @function create
             * @memberof google.protobuf.UInt64Value
             * @static
             * @param {google.protobuf.IUInt64Value=} [properties] Properties to set
             * @returns {google.protobuf.UInt64Value} UInt64Value instance
             */
            UInt64Value.create = function create(properties) {
                return new UInt64Value(properties);
            };

            /**
             * Encodes the specified UInt64Value message. Does not implicitly {@link google.protobuf.UInt64Value.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.UInt64Value
             * @static
             * @param {google.protobuf.IUInt64Value} message UInt64Value message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UInt64Value.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.value);
                return writer;
            };

            /**
             * Encodes the specified UInt64Value message, length delimited. Does not implicitly {@link google.protobuf.UInt64Value.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.UInt64Value
             * @static
             * @param {google.protobuf.IUInt64Value} message UInt64Value message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UInt64Value.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a UInt64Value message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.UInt64Value
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.UInt64Value} UInt64Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UInt64Value.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.UInt64Value();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.value = reader.uint64();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a UInt64Value message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.UInt64Value
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.UInt64Value} UInt64Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UInt64Value.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a UInt64Value message.
             * @function verify
             * @memberof google.protobuf.UInt64Value
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            UInt64Value.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.value != null && message.hasOwnProperty("value"))
                    if (!$util.isInteger(message.value) && !(message.value && $util.isInteger(message.value.low) && $util.isInteger(message.value.high)))
                        return "value: integer|Long expected";
                return null;
            };

            /**
             * Creates a UInt64Value message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.UInt64Value
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.UInt64Value} UInt64Value
             */
            UInt64Value.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.UInt64Value)
                    return object;
                let message = new $root.google.protobuf.UInt64Value();
                if (object.value != null)
                    if ($util.Long)
                        (message.value = $util.Long.fromValue(object.value)).unsigned = true;
                    else if (typeof object.value === "string")
                        message.value = parseInt(object.value, 10);
                    else if (typeof object.value === "number")
                        message.value = object.value;
                    else if (typeof object.value === "object")
                        message.value = new $util.LongBits(object.value.low >>> 0, object.value.high >>> 0).toNumber(true);
                return message;
            };

            /**
             * Creates a plain object from a UInt64Value message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.UInt64Value
             * @static
             * @param {google.protobuf.UInt64Value} message UInt64Value
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            UInt64Value.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults)
                    if ($util.Long) {
                        let long = new $util.Long(0, 0, true);
                        object.value = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.value = options.longs === String ? "0" : 0;
                if (message.value != null && message.hasOwnProperty("value"))
                    if (typeof message.value === "number")
                        object.value = options.longs === String ? String(message.value) : message.value;
                    else
                        object.value = options.longs === String ? $util.Long.prototype.toString.call(message.value) : options.longs === Number ? new $util.LongBits(message.value.low >>> 0, message.value.high >>> 0).toNumber(true) : message.value;
                return object;
            };

            /**
             * Converts this UInt64Value to JSON.
             * @function toJSON
             * @memberof google.protobuf.UInt64Value
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            UInt64Value.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return UInt64Value;
        })();

        protobuf.Int32Value = (function() {

            /**
             * Properties of an Int32Value.
             * @memberof google.protobuf
             * @interface IInt32Value
             * @property {number|null} [value] Int32Value value
             */

            /**
             * Constructs a new Int32Value.
             * @memberof google.protobuf
             * @classdesc Represents an Int32Value.
             * @implements IInt32Value
             * @constructor
             * @param {google.protobuf.IInt32Value=} [properties] Properties to set
             */
            function Int32Value(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Int32Value value.
             * @member {number} value
             * @memberof google.protobuf.Int32Value
             * @instance
             */
            Int32Value.prototype.value = 0;

            /**
             * Creates a new Int32Value instance using the specified properties.
             * @function create
             * @memberof google.protobuf.Int32Value
             * @static
             * @param {google.protobuf.IInt32Value=} [properties] Properties to set
             * @returns {google.protobuf.Int32Value} Int32Value instance
             */
            Int32Value.create = function create(properties) {
                return new Int32Value(properties);
            };

            /**
             * Encodes the specified Int32Value message. Does not implicitly {@link google.protobuf.Int32Value.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.Int32Value
             * @static
             * @param {google.protobuf.IInt32Value} message Int32Value message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Int32Value.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.value);
                return writer;
            };

            /**
             * Encodes the specified Int32Value message, length delimited. Does not implicitly {@link google.protobuf.Int32Value.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.Int32Value
             * @static
             * @param {google.protobuf.IInt32Value} message Int32Value message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Int32Value.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an Int32Value message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.Int32Value
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.Int32Value} Int32Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Int32Value.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.Int32Value();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.value = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an Int32Value message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.Int32Value
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.Int32Value} Int32Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Int32Value.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an Int32Value message.
             * @function verify
             * @memberof google.protobuf.Int32Value
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Int32Value.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.value != null && message.hasOwnProperty("value"))
                    if (!$util.isInteger(message.value))
                        return "value: integer expected";
                return null;
            };

            /**
             * Creates an Int32Value message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.Int32Value
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.Int32Value} Int32Value
             */
            Int32Value.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.Int32Value)
                    return object;
                let message = new $root.google.protobuf.Int32Value();
                if (object.value != null)
                    message.value = object.value | 0;
                return message;
            };

            /**
             * Creates a plain object from an Int32Value message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.Int32Value
             * @static
             * @param {google.protobuf.Int32Value} message Int32Value
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Int32Value.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults)
                    object.value = 0;
                if (message.value != null && message.hasOwnProperty("value"))
                    object.value = message.value;
                return object;
            };

            /**
             * Converts this Int32Value to JSON.
             * @function toJSON
             * @memberof google.protobuf.Int32Value
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Int32Value.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Int32Value;
        })();

        protobuf.UInt32Value = (function() {

            /**
             * Properties of a UInt32Value.
             * @memberof google.protobuf
             * @interface IUInt32Value
             * @property {number|null} [value] UInt32Value value
             */

            /**
             * Constructs a new UInt32Value.
             * @memberof google.protobuf
             * @classdesc Represents a UInt32Value.
             * @implements IUInt32Value
             * @constructor
             * @param {google.protobuf.IUInt32Value=} [properties] Properties to set
             */
            function UInt32Value(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * UInt32Value value.
             * @member {number} value
             * @memberof google.protobuf.UInt32Value
             * @instance
             */
            UInt32Value.prototype.value = 0;

            /**
             * Creates a new UInt32Value instance using the specified properties.
             * @function create
             * @memberof google.protobuf.UInt32Value
             * @static
             * @param {google.protobuf.IUInt32Value=} [properties] Properties to set
             * @returns {google.protobuf.UInt32Value} UInt32Value instance
             */
            UInt32Value.create = function create(properties) {
                return new UInt32Value(properties);
            };

            /**
             * Encodes the specified UInt32Value message. Does not implicitly {@link google.protobuf.UInt32Value.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.UInt32Value
             * @static
             * @param {google.protobuf.IUInt32Value} message UInt32Value message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UInt32Value.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.value);
                return writer;
            };

            /**
             * Encodes the specified UInt32Value message, length delimited. Does not implicitly {@link google.protobuf.UInt32Value.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.UInt32Value
             * @static
             * @param {google.protobuf.IUInt32Value} message UInt32Value message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UInt32Value.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a UInt32Value message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.UInt32Value
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.UInt32Value} UInt32Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UInt32Value.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.UInt32Value();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.value = reader.uint32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a UInt32Value message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.UInt32Value
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.UInt32Value} UInt32Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UInt32Value.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a UInt32Value message.
             * @function verify
             * @memberof google.protobuf.UInt32Value
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            UInt32Value.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.value != null && message.hasOwnProperty("value"))
                    if (!$util.isInteger(message.value))
                        return "value: integer expected";
                return null;
            };

            /**
             * Creates a UInt32Value message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.UInt32Value
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.UInt32Value} UInt32Value
             */
            UInt32Value.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.UInt32Value)
                    return object;
                let message = new $root.google.protobuf.UInt32Value();
                if (object.value != null)
                    message.value = object.value >>> 0;
                return message;
            };

            /**
             * Creates a plain object from a UInt32Value message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.UInt32Value
             * @static
             * @param {google.protobuf.UInt32Value} message UInt32Value
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            UInt32Value.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults)
                    object.value = 0;
                if (message.value != null && message.hasOwnProperty("value"))
                    object.value = message.value;
                return object;
            };

            /**
             * Converts this UInt32Value to JSON.
             * @function toJSON
             * @memberof google.protobuf.UInt32Value
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            UInt32Value.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return UInt32Value;
        })();

        protobuf.BoolValue = (function() {

            /**
             * Properties of a BoolValue.
             * @memberof google.protobuf
             * @interface IBoolValue
             * @property {boolean|null} [value] BoolValue value
             */

            /**
             * Constructs a new BoolValue.
             * @memberof google.protobuf
             * @classdesc Represents a BoolValue.
             * @implements IBoolValue
             * @constructor
             * @param {google.protobuf.IBoolValue=} [properties] Properties to set
             */
            function BoolValue(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * BoolValue value.
             * @member {boolean} value
             * @memberof google.protobuf.BoolValue
             * @instance
             */
            BoolValue.prototype.value = false;

            /**
             * Creates a new BoolValue instance using the specified properties.
             * @function create
             * @memberof google.protobuf.BoolValue
             * @static
             * @param {google.protobuf.IBoolValue=} [properties] Properties to set
             * @returns {google.protobuf.BoolValue} BoolValue instance
             */
            BoolValue.create = function create(properties) {
                return new BoolValue(properties);
            };

            /**
             * Encodes the specified BoolValue message. Does not implicitly {@link google.protobuf.BoolValue.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.BoolValue
             * @static
             * @param {google.protobuf.IBoolValue} message BoolValue message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            BoolValue.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                    writer.uint32(/* id 1, wireType 0 =*/8).bool(message.value);
                return writer;
            };

            /**
             * Encodes the specified BoolValue message, length delimited. Does not implicitly {@link google.protobuf.BoolValue.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.BoolValue
             * @static
             * @param {google.protobuf.IBoolValue} message BoolValue message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            BoolValue.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a BoolValue message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.BoolValue
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.BoolValue} BoolValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            BoolValue.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.BoolValue();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.value = reader.bool();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a BoolValue message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.BoolValue
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.BoolValue} BoolValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            BoolValue.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a BoolValue message.
             * @function verify
             * @memberof google.protobuf.BoolValue
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            BoolValue.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.value != null && message.hasOwnProperty("value"))
                    if (typeof message.value !== "boolean")
                        return "value: boolean expected";
                return null;
            };

            /**
             * Creates a BoolValue message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.BoolValue
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.BoolValue} BoolValue
             */
            BoolValue.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.BoolValue)
                    return object;
                let message = new $root.google.protobuf.BoolValue();
                if (object.value != null)
                    message.value = Boolean(object.value);
                return message;
            };

            /**
             * Creates a plain object from a BoolValue message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.BoolValue
             * @static
             * @param {google.protobuf.BoolValue} message BoolValue
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            BoolValue.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults)
                    object.value = false;
                if (message.value != null && message.hasOwnProperty("value"))
                    object.value = message.value;
                return object;
            };

            /**
             * Converts this BoolValue to JSON.
             * @function toJSON
             * @memberof google.protobuf.BoolValue
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            BoolValue.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return BoolValue;
        })();

        protobuf.StringValue = (function() {

            /**
             * Properties of a StringValue.
             * @memberof google.protobuf
             * @interface IStringValue
             * @property {string|null} [value] StringValue value
             */

            /**
             * Constructs a new StringValue.
             * @memberof google.protobuf
             * @classdesc Represents a StringValue.
             * @implements IStringValue
             * @constructor
             * @param {google.protobuf.IStringValue=} [properties] Properties to set
             */
            function StringValue(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * StringValue value.
             * @member {string} value
             * @memberof google.protobuf.StringValue
             * @instance
             */
            StringValue.prototype.value = "";

            /**
             * Creates a new StringValue instance using the specified properties.
             * @function create
             * @memberof google.protobuf.StringValue
             * @static
             * @param {google.protobuf.IStringValue=} [properties] Properties to set
             * @returns {google.protobuf.StringValue} StringValue instance
             */
            StringValue.create = function create(properties) {
                return new StringValue(properties);
            };

            /**
             * Encodes the specified StringValue message. Does not implicitly {@link google.protobuf.StringValue.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.StringValue
             * @static
             * @param {google.protobuf.IStringValue} message StringValue message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            StringValue.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.value);
                return writer;
            };

            /**
             * Encodes the specified StringValue message, length delimited. Does not implicitly {@link google.protobuf.StringValue.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.StringValue
             * @static
             * @param {google.protobuf.IStringValue} message StringValue message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            StringValue.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a StringValue message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.StringValue
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.StringValue} StringValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            StringValue.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.StringValue();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.value = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a StringValue message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.StringValue
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.StringValue} StringValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            StringValue.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a StringValue message.
             * @function verify
             * @memberof google.protobuf.StringValue
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            StringValue.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.value != null && message.hasOwnProperty("value"))
                    if (!$util.isString(message.value))
                        return "value: string expected";
                return null;
            };

            /**
             * Creates a StringValue message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.StringValue
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.StringValue} StringValue
             */
            StringValue.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.StringValue)
                    return object;
                let message = new $root.google.protobuf.StringValue();
                if (object.value != null)
                    message.value = String(object.value);
                return message;
            };

            /**
             * Creates a plain object from a StringValue message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.StringValue
             * @static
             * @param {google.protobuf.StringValue} message StringValue
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            StringValue.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults)
                    object.value = "";
                if (message.value != null && message.hasOwnProperty("value"))
                    object.value = message.value;
                return object;
            };

            /**
             * Converts this StringValue to JSON.
             * @function toJSON
             * @memberof google.protobuf.StringValue
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            StringValue.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return StringValue;
        })();

        protobuf.BytesValue = (function() {

            /**
             * Properties of a BytesValue.
             * @memberof google.protobuf
             * @interface IBytesValue
             * @property {Uint8Array|null} [value] BytesValue value
             */

            /**
             * Constructs a new BytesValue.
             * @memberof google.protobuf
             * @classdesc Represents a BytesValue.
             * @implements IBytesValue
             * @constructor
             * @param {google.protobuf.IBytesValue=} [properties] Properties to set
             */
            function BytesValue(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * BytesValue value.
             * @member {Uint8Array} value
             * @memberof google.protobuf.BytesValue
             * @instance
             */
            BytesValue.prototype.value = $util.newBuffer([]);

            /**
             * Creates a new BytesValue instance using the specified properties.
             * @function create
             * @memberof google.protobuf.BytesValue
             * @static
             * @param {google.protobuf.IBytesValue=} [properties] Properties to set
             * @returns {google.protobuf.BytesValue} BytesValue instance
             */
            BytesValue.create = function create(properties) {
                return new BytesValue(properties);
            };

            /**
             * Encodes the specified BytesValue message. Does not implicitly {@link google.protobuf.BytesValue.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.BytesValue
             * @static
             * @param {google.protobuf.IBytesValue} message BytesValue message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            BytesValue.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                    writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.value);
                return writer;
            };

            /**
             * Encodes the specified BytesValue message, length delimited. Does not implicitly {@link google.protobuf.BytesValue.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.BytesValue
             * @static
             * @param {google.protobuf.IBytesValue} message BytesValue message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            BytesValue.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a BytesValue message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.BytesValue
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.BytesValue} BytesValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            BytesValue.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.BytesValue();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.value = reader.bytes();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a BytesValue message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.BytesValue
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.BytesValue} BytesValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            BytesValue.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a BytesValue message.
             * @function verify
             * @memberof google.protobuf.BytesValue
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            BytesValue.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.value != null && message.hasOwnProperty("value"))
                    if (!(message.value && typeof message.value.length === "number" || $util.isString(message.value)))
                        return "value: buffer expected";
                return null;
            };

            /**
             * Creates a BytesValue message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.BytesValue
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.BytesValue} BytesValue
             */
            BytesValue.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.BytesValue)
                    return object;
                let message = new $root.google.protobuf.BytesValue();
                if (object.value != null)
                    if (typeof object.value === "string")
                        $util.base64.decode(object.value, message.value = $util.newBuffer($util.base64.length(object.value)), 0);
                    else if (object.value.length)
                        message.value = object.value;
                return message;
            };

            /**
             * Creates a plain object from a BytesValue message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.BytesValue
             * @static
             * @param {google.protobuf.BytesValue} message BytesValue
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            BytesValue.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults)
                    if (options.bytes === String)
                        object.value = "";
                    else {
                        object.value = [];
                        if (options.bytes !== Array)
                            object.value = $util.newBuffer(object.value);
                    }
                if (message.value != null && message.hasOwnProperty("value"))
                    object.value = options.bytes === String ? $util.base64.encode(message.value, 0, message.value.length) : options.bytes === Array ? Array.prototype.slice.call(message.value) : message.value;
                return object;
            };

            /**
             * Converts this BytesValue to JSON.
             * @function toJSON
             * @memberof google.protobuf.BytesValue
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            BytesValue.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return BytesValue;
        })();

        return protobuf;
    })();

    return google;
})();

export { $root as default };
