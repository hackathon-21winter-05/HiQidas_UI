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

    hiqidashi.WsGetHiqidashi = (function() {

        /**
         * Properties of a WsGetHiqidashi.
         * @memberof hiqidashi
         * @interface IWsGetHiqidashi
         * @property {hiqidashi.IHiqidashi|null} [hiqidashi] WsGetHiqidashi hiqidashi
         */

        /**
         * Constructs a new WsGetHiqidashi.
         * @memberof hiqidashi
         * @classdesc Represents a WsGetHiqidashi.
         * @implements IWsGetHiqidashi
         * @constructor
         * @param {hiqidashi.IWsGetHiqidashi=} [properties] Properties to set
         */
        function WsGetHiqidashi(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * WsGetHiqidashi hiqidashi.
         * @member {hiqidashi.IHiqidashi|null|undefined} hiqidashi
         * @memberof hiqidashi.WsGetHiqidashi
         * @instance
         */
        WsGetHiqidashi.prototype.hiqidashi = null;

        /**
         * Creates a new WsGetHiqidashi instance using the specified properties.
         * @function create
         * @memberof hiqidashi.WsGetHiqidashi
         * @static
         * @param {hiqidashi.IWsGetHiqidashi=} [properties] Properties to set
         * @returns {hiqidashi.WsGetHiqidashi} WsGetHiqidashi instance
         */
        WsGetHiqidashi.create = function create(properties) {
            return new WsGetHiqidashi(properties);
        };

        /**
         * Encodes the specified WsGetHiqidashi message. Does not implicitly {@link hiqidashi.WsGetHiqidashi.verify|verify} messages.
         * @function encode
         * @memberof hiqidashi.WsGetHiqidashi
         * @static
         * @param {hiqidashi.IWsGetHiqidashi} message WsGetHiqidashi message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WsGetHiqidashi.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.hiqidashi != null && Object.hasOwnProperty.call(message, "hiqidashi"))
                $root.hiqidashi.Hiqidashi.encode(message.hiqidashi, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified WsGetHiqidashi message, length delimited. Does not implicitly {@link hiqidashi.WsGetHiqidashi.verify|verify} messages.
         * @function encodeDelimited
         * @memberof hiqidashi.WsGetHiqidashi
         * @static
         * @param {hiqidashi.IWsGetHiqidashi} message WsGetHiqidashi message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WsGetHiqidashi.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a WsGetHiqidashi message from the specified reader or buffer.
         * @function decode
         * @memberof hiqidashi.WsGetHiqidashi
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {hiqidashi.WsGetHiqidashi} WsGetHiqidashi
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WsGetHiqidashi.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.hiqidashi.WsGetHiqidashi();
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
         * Decodes a WsGetHiqidashi message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof hiqidashi.WsGetHiqidashi
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {hiqidashi.WsGetHiqidashi} WsGetHiqidashi
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WsGetHiqidashi.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a WsGetHiqidashi message.
         * @function verify
         * @memberof hiqidashi.WsGetHiqidashi
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        WsGetHiqidashi.verify = function verify(message) {
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
         * Creates a WsGetHiqidashi message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof hiqidashi.WsGetHiqidashi
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {hiqidashi.WsGetHiqidashi} WsGetHiqidashi
         */
        WsGetHiqidashi.fromObject = function fromObject(object) {
            if (object instanceof $root.hiqidashi.WsGetHiqidashi)
                return object;
            let message = new $root.hiqidashi.WsGetHiqidashi();
            if (object.hiqidashi != null) {
                if (typeof object.hiqidashi !== "object")
                    throw TypeError(".hiqidashi.WsGetHiqidashi.hiqidashi: object expected");
                message.hiqidashi = $root.hiqidashi.Hiqidashi.fromObject(object.hiqidashi);
            }
            return message;
        };

        /**
         * Creates a plain object from a WsGetHiqidashi message. Also converts values to other types if specified.
         * @function toObject
         * @memberof hiqidashi.WsGetHiqidashi
         * @static
         * @param {hiqidashi.WsGetHiqidashi} message WsGetHiqidashi
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        WsGetHiqidashi.toObject = function toObject(message, options) {
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
         * Converts this WsGetHiqidashi to JSON.
         * @function toJSON
         * @memberof hiqidashi.WsGetHiqidashi
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        WsGetHiqidashi.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return WsGetHiqidashi;
    })();

    hiqidashi.WsGetHiqidashis = (function() {

        /**
         * Properties of a WsGetHiqidashis.
         * @memberof hiqidashi
         * @interface IWsGetHiqidashis
         * @property {Array.<hiqidashi.IHiqidashi>|null} [hiqidashi] WsGetHiqidashis hiqidashi
         */

        /**
         * Constructs a new WsGetHiqidashis.
         * @memberof hiqidashi
         * @classdesc Represents a WsGetHiqidashis.
         * @implements IWsGetHiqidashis
         * @constructor
         * @param {hiqidashi.IWsGetHiqidashis=} [properties] Properties to set
         */
        function WsGetHiqidashis(properties) {
            this.hiqidashi = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * WsGetHiqidashis hiqidashi.
         * @member {Array.<hiqidashi.IHiqidashi>} hiqidashi
         * @memberof hiqidashi.WsGetHiqidashis
         * @instance
         */
        WsGetHiqidashis.prototype.hiqidashi = $util.emptyArray;

        /**
         * Creates a new WsGetHiqidashis instance using the specified properties.
         * @function create
         * @memberof hiqidashi.WsGetHiqidashis
         * @static
         * @param {hiqidashi.IWsGetHiqidashis=} [properties] Properties to set
         * @returns {hiqidashi.WsGetHiqidashis} WsGetHiqidashis instance
         */
        WsGetHiqidashis.create = function create(properties) {
            return new WsGetHiqidashis(properties);
        };

        /**
         * Encodes the specified WsGetHiqidashis message. Does not implicitly {@link hiqidashi.WsGetHiqidashis.verify|verify} messages.
         * @function encode
         * @memberof hiqidashi.WsGetHiqidashis
         * @static
         * @param {hiqidashi.IWsGetHiqidashis} message WsGetHiqidashis message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WsGetHiqidashis.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.hiqidashi != null && message.hiqidashi.length)
                for (let i = 0; i < message.hiqidashi.length; ++i)
                    $root.hiqidashi.Hiqidashi.encode(message.hiqidashi[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified WsGetHiqidashis message, length delimited. Does not implicitly {@link hiqidashi.WsGetHiqidashis.verify|verify} messages.
         * @function encodeDelimited
         * @memberof hiqidashi.WsGetHiqidashis
         * @static
         * @param {hiqidashi.IWsGetHiqidashis} message WsGetHiqidashis message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WsGetHiqidashis.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a WsGetHiqidashis message from the specified reader or buffer.
         * @function decode
         * @memberof hiqidashi.WsGetHiqidashis
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {hiqidashi.WsGetHiqidashis} WsGetHiqidashis
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WsGetHiqidashis.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.hiqidashi.WsGetHiqidashis();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.hiqidashi && message.hiqidashi.length))
                        message.hiqidashi = [];
                    message.hiqidashi.push($root.hiqidashi.Hiqidashi.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a WsGetHiqidashis message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof hiqidashi.WsGetHiqidashis
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {hiqidashi.WsGetHiqidashis} WsGetHiqidashis
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WsGetHiqidashis.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a WsGetHiqidashis message.
         * @function verify
         * @memberof hiqidashi.WsGetHiqidashis
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        WsGetHiqidashis.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.hiqidashi != null && message.hasOwnProperty("hiqidashi")) {
                if (!Array.isArray(message.hiqidashi))
                    return "hiqidashi: array expected";
                for (let i = 0; i < message.hiqidashi.length; ++i) {
                    let error = $root.hiqidashi.Hiqidashi.verify(message.hiqidashi[i]);
                    if (error)
                        return "hiqidashi." + error;
                }
            }
            return null;
        };

        /**
         * Creates a WsGetHiqidashis message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof hiqidashi.WsGetHiqidashis
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {hiqidashi.WsGetHiqidashis} WsGetHiqidashis
         */
        WsGetHiqidashis.fromObject = function fromObject(object) {
            if (object instanceof $root.hiqidashi.WsGetHiqidashis)
                return object;
            let message = new $root.hiqidashi.WsGetHiqidashis();
            if (object.hiqidashi) {
                if (!Array.isArray(object.hiqidashi))
                    throw TypeError(".hiqidashi.WsGetHiqidashis.hiqidashi: array expected");
                message.hiqidashi = [];
                for (let i = 0; i < object.hiqidashi.length; ++i) {
                    if (typeof object.hiqidashi[i] !== "object")
                        throw TypeError(".hiqidashi.WsGetHiqidashis.hiqidashi: object expected");
                    message.hiqidashi[i] = $root.hiqidashi.Hiqidashi.fromObject(object.hiqidashi[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a WsGetHiqidashis message. Also converts values to other types if specified.
         * @function toObject
         * @memberof hiqidashi.WsGetHiqidashis
         * @static
         * @param {hiqidashi.WsGetHiqidashis} message WsGetHiqidashis
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        WsGetHiqidashis.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.hiqidashi = [];
            if (message.hiqidashi && message.hiqidashi.length) {
                object.hiqidashi = [];
                for (let j = 0; j < message.hiqidashi.length; ++j)
                    object.hiqidashi[j] = $root.hiqidashi.Hiqidashi.toObject(message.hiqidashi[j], options);
            }
            return object;
        };

        /**
         * Converts this WsGetHiqidashis to JSON.
         * @function toJSON
         * @memberof hiqidashi.WsGetHiqidashis
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        WsGetHiqidashis.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return WsGetHiqidashis;
    })();

    hiqidashi.WsCreateHiqidashi = (function() {

        /**
         * Properties of a WsCreateHiqidashi.
         * @memberof hiqidashi
         * @interface IWsCreateHiqidashi
         * @property {string|null} [parentId] WsCreateHiqidashi parentId
         * @property {string|null} [title] WsCreateHiqidashi title
         * @property {string|null} [description] WsCreateHiqidashi description
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
         * WsCreateHiqidashi title.
         * @member {string} title
         * @memberof hiqidashi.WsCreateHiqidashi
         * @instance
         */
        WsCreateHiqidashi.prototype.title = "";

        /**
         * WsCreateHiqidashi description.
         * @member {string} description
         * @memberof hiqidashi.WsCreateHiqidashi
         * @instance
         */
        WsCreateHiqidashi.prototype.description = "";

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
            if (message.title != null && Object.hasOwnProperty.call(message, "title"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.title);
            if (message.description != null && Object.hasOwnProperty.call(message, "description"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.description);
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
                case 2:
                    message.title = reader.string();
                    break;
                case 3:
                    message.description = reader.string();
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
            if (message.title != null && message.hasOwnProperty("title"))
                if (!$util.isString(message.title))
                    return "title: string expected";
            if (message.description != null && message.hasOwnProperty("description"))
                if (!$util.isString(message.description))
                    return "description: string expected";
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
            if (object.title != null)
                message.title = String(object.title);
            if (object.description != null)
                message.description = String(object.description);
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
            if (options.defaults) {
                object.parentId = "";
                object.title = "";
                object.description = "";
            }
            if (message.parentId != null && message.hasOwnProperty("parentId"))
                object.parentId = message.parentId;
            if (message.title != null && message.hasOwnProperty("title"))
                object.title = message.title;
            if (message.description != null && message.hasOwnProperty("description"))
                object.description = message.description;
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
         * @property {google.protobuf.IStringValue|null} [description] WsEditHiqidashi description
         * @property {google.protobuf.IStringValue|null} [drawing] WsEditHiqidashi drawing
         * @property {google.protobuf.IStringValue|null} [colorId] WsEditHiqidashi colorId
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
         * WsEditHiqidashi description.
         * @member {google.protobuf.IStringValue|null|undefined} description
         * @memberof hiqidashi.WsEditHiqidashi
         * @instance
         */
        WsEditHiqidashi.prototype.description = null;

        /**
         * WsEditHiqidashi drawing.
         * @member {google.protobuf.IStringValue|null|undefined} drawing
         * @memberof hiqidashi.WsEditHiqidashi
         * @instance
         */
        WsEditHiqidashi.prototype.drawing = null;

        /**
         * WsEditHiqidashi colorId.
         * @member {google.protobuf.IStringValue|null|undefined} colorId
         * @memberof hiqidashi.WsEditHiqidashi
         * @instance
         */
        WsEditHiqidashi.prototype.colorId = null;

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
            if (message.description != null && Object.hasOwnProperty.call(message, "description"))
                $root.google.protobuf.StringValue.encode(message.description, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.drawing != null && Object.hasOwnProperty.call(message, "drawing"))
                $root.google.protobuf.StringValue.encode(message.drawing, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.colorId != null && Object.hasOwnProperty.call(message, "colorId"))
                $root.google.protobuf.StringValue.encode(message.colorId, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
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
                    message.description = $root.google.protobuf.StringValue.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.drawing = $root.google.protobuf.StringValue.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.colorId = $root.google.protobuf.StringValue.decode(reader, reader.uint32());
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
            if (message.description != null && message.hasOwnProperty("description")) {
                let error = $root.google.protobuf.StringValue.verify(message.description);
                if (error)
                    return "description." + error;
            }
            if (message.drawing != null && message.hasOwnProperty("drawing")) {
                let error = $root.google.protobuf.StringValue.verify(message.drawing);
                if (error)
                    return "drawing." + error;
            }
            if (message.colorId != null && message.hasOwnProperty("colorId")) {
                let error = $root.google.protobuf.StringValue.verify(message.colorId);
                if (error)
                    return "colorId." + error;
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
            if (object.description != null) {
                if (typeof object.description !== "object")
                    throw TypeError(".hiqidashi.WsEditHiqidashi.description: object expected");
                message.description = $root.google.protobuf.StringValue.fromObject(object.description);
            }
            if (object.drawing != null) {
                if (typeof object.drawing !== "object")
                    throw TypeError(".hiqidashi.WsEditHiqidashi.drawing: object expected");
                message.drawing = $root.google.protobuf.StringValue.fromObject(object.drawing);
            }
            if (object.colorId != null) {
                if (typeof object.colorId !== "object")
                    throw TypeError(".hiqidashi.WsEditHiqidashi.colorId: object expected");
                message.colorId = $root.google.protobuf.StringValue.fromObject(object.colorId);
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
                object.description = null;
                object.drawing = null;
                object.colorId = null;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.title != null && message.hasOwnProperty("title"))
                object.title = $root.google.protobuf.StringValue.toObject(message.title, options);
            if (message.description != null && message.hasOwnProperty("description"))
                object.description = $root.google.protobuf.StringValue.toObject(message.description, options);
            if (message.drawing != null && message.hasOwnProperty("drawing"))
                object.drawing = $root.google.protobuf.StringValue.toObject(message.drawing, options);
            if (message.colorId != null && message.hasOwnProperty("colorId"))
                object.colorId = $root.google.protobuf.StringValue.toObject(message.colorId, options);
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
         * @property {string|null} [parentId] Hiqidashi parentId
         * @property {string|null} [title] Hiqidashi title
         * @property {string|null} [description] Hiqidashi description
         * @property {google.protobuf.IStringValue|null} [drawing] Hiqidashi drawing
         * @property {string|null} [colorId] Hiqidashi colorId
         * @property {string|null} [createdAt] Hiqidashi createdAt
         * @property {string|null} [updatedAt] Hiqidashi updatedAt
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
         * Hiqidashi parentId.
         * @member {string} parentId
         * @memberof hiqidashi.Hiqidashi
         * @instance
         */
        Hiqidashi.prototype.parentId = "";

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
         * Hiqidashi colorId.
         * @member {string} colorId
         * @memberof hiqidashi.Hiqidashi
         * @instance
         */
        Hiqidashi.prototype.colorId = "";

        /**
         * Hiqidashi createdAt.
         * @member {string} createdAt
         * @memberof hiqidashi.Hiqidashi
         * @instance
         */
        Hiqidashi.prototype.createdAt = "";

        /**
         * Hiqidashi updatedAt.
         * @member {string} updatedAt
         * @memberof hiqidashi.Hiqidashi
         * @instance
         */
        Hiqidashi.prototype.updatedAt = "";

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
            if (message.parentId != null && Object.hasOwnProperty.call(message, "parentId"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.parentId);
            if (message.title != null && Object.hasOwnProperty.call(message, "title"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.title);
            if (message.description != null && Object.hasOwnProperty.call(message, "description"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.description);
            if (message.drawing != null && Object.hasOwnProperty.call(message, "drawing"))
                $root.google.protobuf.StringValue.encode(message.drawing, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.colorId != null && Object.hasOwnProperty.call(message, "colorId"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.colorId);
            if (message.createdAt != null && Object.hasOwnProperty.call(message, "createdAt"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.createdAt);
            if (message.updatedAt != null && Object.hasOwnProperty.call(message, "updatedAt"))
                writer.uint32(/* id 8, wireType 2 =*/66).string(message.updatedAt);
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
                    message.parentId = reader.string();
                    break;
                case 3:
                    message.title = reader.string();
                    break;
                case 4:
                    message.description = reader.string();
                    break;
                case 5:
                    message.drawing = $root.google.protobuf.StringValue.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.colorId = reader.string();
                    break;
                case 7:
                    message.createdAt = reader.string();
                    break;
                case 8:
                    message.updatedAt = reader.string();
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
            if (message.parentId != null && message.hasOwnProperty("parentId"))
                if (!$util.isString(message.parentId))
                    return "parentId: string expected";
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
            if (message.colorId != null && message.hasOwnProperty("colorId"))
                if (!$util.isString(message.colorId))
                    return "colorId: string expected";
            if (message.createdAt != null && message.hasOwnProperty("createdAt"))
                if (!$util.isString(message.createdAt))
                    return "createdAt: string expected";
            if (message.updatedAt != null && message.hasOwnProperty("updatedAt"))
                if (!$util.isString(message.updatedAt))
                    return "updatedAt: string expected";
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
            if (object.parentId != null)
                message.parentId = String(object.parentId);
            if (object.title != null)
                message.title = String(object.title);
            if (object.description != null)
                message.description = String(object.description);
            if (object.drawing != null) {
                if (typeof object.drawing !== "object")
                    throw TypeError(".hiqidashi.Hiqidashi.drawing: object expected");
                message.drawing = $root.google.protobuf.StringValue.fromObject(object.drawing);
            }
            if (object.colorId != null)
                message.colorId = String(object.colorId);
            if (object.createdAt != null)
                message.createdAt = String(object.createdAt);
            if (object.updatedAt != null)
                message.updatedAt = String(object.updatedAt);
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
                object.parentId = "";
                object.title = "";
                object.description = "";
                object.drawing = null;
                object.colorId = "";
                object.createdAt = "";
                object.updatedAt = "";
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.parentId != null && message.hasOwnProperty("parentId"))
                object.parentId = message.parentId;
            if (message.title != null && message.hasOwnProperty("title"))
                object.title = message.title;
            if (message.description != null && message.hasOwnProperty("description"))
                object.description = message.description;
            if (message.drawing != null && message.hasOwnProperty("drawing"))
                object.drawing = $root.google.protobuf.StringValue.toObject(message.drawing, options);
            if (message.colorId != null && message.hasOwnProperty("colorId"))
                object.colorId = message.colorId;
            if (message.createdAt != null && message.hasOwnProperty("createdAt"))
                object.createdAt = message.createdAt;
            if (message.updatedAt != null && message.hasOwnProperty("updatedAt"))
                object.updatedAt = message.updatedAt;
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
