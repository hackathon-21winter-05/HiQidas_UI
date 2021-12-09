/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import * as $protobuf from "protobufjs/minimal";

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const oauth = $root.oauth = (() => {

    /**
     * Namespace oauth.
     * @exports oauth
     * @namespace
     */
    const oauth = {};

    oauth.PostOauthCodeRequest = (function() {

        /**
         * Properties of a PostOauthCodeRequest.
         * @memberof oauth
         * @interface IPostOauthCodeRequest
         * @property {string|null} [code] PostOauthCodeRequest code
         */

        /**
         * Constructs a new PostOauthCodeRequest.
         * @memberof oauth
         * @classdesc Represents a PostOauthCodeRequest.
         * @implements IPostOauthCodeRequest
         * @constructor
         * @param {oauth.IPostOauthCodeRequest=} [properties] Properties to set
         */
        function PostOauthCodeRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PostOauthCodeRequest code.
         * @member {string} code
         * @memberof oauth.PostOauthCodeRequest
         * @instance
         */
        PostOauthCodeRequest.prototype.code = "";

        /**
         * Creates a new PostOauthCodeRequest instance using the specified properties.
         * @function create
         * @memberof oauth.PostOauthCodeRequest
         * @static
         * @param {oauth.IPostOauthCodeRequest=} [properties] Properties to set
         * @returns {oauth.PostOauthCodeRequest} PostOauthCodeRequest instance
         */
        PostOauthCodeRequest.create = function create(properties) {
            return new PostOauthCodeRequest(properties);
        };

        /**
         * Encodes the specified PostOauthCodeRequest message. Does not implicitly {@link oauth.PostOauthCodeRequest.verify|verify} messages.
         * @function encode
         * @memberof oauth.PostOauthCodeRequest
         * @static
         * @param {oauth.IPostOauthCodeRequest} message PostOauthCodeRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PostOauthCodeRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.code);
            return writer;
        };

        /**
         * Encodes the specified PostOauthCodeRequest message, length delimited. Does not implicitly {@link oauth.PostOauthCodeRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof oauth.PostOauthCodeRequest
         * @static
         * @param {oauth.IPostOauthCodeRequest} message PostOauthCodeRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PostOauthCodeRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PostOauthCodeRequest message from the specified reader or buffer.
         * @function decode
         * @memberof oauth.PostOauthCodeRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {oauth.PostOauthCodeRequest} PostOauthCodeRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PostOauthCodeRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.oauth.PostOauthCodeRequest();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.code = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PostOauthCodeRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof oauth.PostOauthCodeRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {oauth.PostOauthCodeRequest} PostOauthCodeRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PostOauthCodeRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PostOauthCodeRequest message.
         * @function verify
         * @memberof oauth.PostOauthCodeRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PostOauthCodeRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.code != null && message.hasOwnProperty("code"))
                if (!$util.isString(message.code))
                    return "code: string expected";
            return null;
        };

        /**
         * Creates a PostOauthCodeRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof oauth.PostOauthCodeRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {oauth.PostOauthCodeRequest} PostOauthCodeRequest
         */
        PostOauthCodeRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.oauth.PostOauthCodeRequest)
                return object;
            let message = new $root.oauth.PostOauthCodeRequest();
            if (object.code != null)
                message.code = String(object.code);
            return message;
        };

        /**
         * Creates a plain object from a PostOauthCodeRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof oauth.PostOauthCodeRequest
         * @static
         * @param {oauth.PostOauthCodeRequest} message PostOauthCodeRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PostOauthCodeRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.code = "";
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = message.code;
            return object;
        };

        /**
         * Converts this PostOauthCodeRequest to JSON.
         * @function toJSON
         * @memberof oauth.PostOauthCodeRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PostOauthCodeRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return PostOauthCodeRequest;
    })();

    oauth.GetOauthCallbackResponse = (function() {

        /**
         * Properties of a GetOauthCallbackResponse.
         * @memberof oauth
         * @interface IGetOauthCallbackResponse
         * @property {string|null} [uri] GetOauthCallbackResponse uri
         */

        /**
         * Constructs a new GetOauthCallbackResponse.
         * @memberof oauth
         * @classdesc Represents a GetOauthCallbackResponse.
         * @implements IGetOauthCallbackResponse
         * @constructor
         * @param {oauth.IGetOauthCallbackResponse=} [properties] Properties to set
         */
        function GetOauthCallbackResponse(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetOauthCallbackResponse uri.
         * @member {string} uri
         * @memberof oauth.GetOauthCallbackResponse
         * @instance
         */
        GetOauthCallbackResponse.prototype.uri = "";

        /**
         * Creates a new GetOauthCallbackResponse instance using the specified properties.
         * @function create
         * @memberof oauth.GetOauthCallbackResponse
         * @static
         * @param {oauth.IGetOauthCallbackResponse=} [properties] Properties to set
         * @returns {oauth.GetOauthCallbackResponse} GetOauthCallbackResponse instance
         */
        GetOauthCallbackResponse.create = function create(properties) {
            return new GetOauthCallbackResponse(properties);
        };

        /**
         * Encodes the specified GetOauthCallbackResponse message. Does not implicitly {@link oauth.GetOauthCallbackResponse.verify|verify} messages.
         * @function encode
         * @memberof oauth.GetOauthCallbackResponse
         * @static
         * @param {oauth.IGetOauthCallbackResponse} message GetOauthCallbackResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetOauthCallbackResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.uri != null && Object.hasOwnProperty.call(message, "uri"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.uri);
            return writer;
        };

        /**
         * Encodes the specified GetOauthCallbackResponse message, length delimited. Does not implicitly {@link oauth.GetOauthCallbackResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof oauth.GetOauthCallbackResponse
         * @static
         * @param {oauth.IGetOauthCallbackResponse} message GetOauthCallbackResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetOauthCallbackResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetOauthCallbackResponse message from the specified reader or buffer.
         * @function decode
         * @memberof oauth.GetOauthCallbackResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {oauth.GetOauthCallbackResponse} GetOauthCallbackResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetOauthCallbackResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.oauth.GetOauthCallbackResponse();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.uri = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetOauthCallbackResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof oauth.GetOauthCallbackResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {oauth.GetOauthCallbackResponse} GetOauthCallbackResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetOauthCallbackResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetOauthCallbackResponse message.
         * @function verify
         * @memberof oauth.GetOauthCallbackResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetOauthCallbackResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.uri != null && message.hasOwnProperty("uri"))
                if (!$util.isString(message.uri))
                    return "uri: string expected";
            return null;
        };

        /**
         * Creates a GetOauthCallbackResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof oauth.GetOauthCallbackResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {oauth.GetOauthCallbackResponse} GetOauthCallbackResponse
         */
        GetOauthCallbackResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.oauth.GetOauthCallbackResponse)
                return object;
            let message = new $root.oauth.GetOauthCallbackResponse();
            if (object.uri != null)
                message.uri = String(object.uri);
            return message;
        };

        /**
         * Creates a plain object from a GetOauthCallbackResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof oauth.GetOauthCallbackResponse
         * @static
         * @param {oauth.GetOauthCallbackResponse} message GetOauthCallbackResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetOauthCallbackResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.uri = "";
            if (message.uri != null && message.hasOwnProperty("uri"))
                object.uri = message.uri;
            return object;
        };

        /**
         * Converts this GetOauthCallbackResponse to JSON.
         * @function toJSON
         * @memberof oauth.GetOauthCallbackResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetOauthCallbackResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetOauthCallbackResponse;
    })();

    return oauth;
})();

export { $root as default };
