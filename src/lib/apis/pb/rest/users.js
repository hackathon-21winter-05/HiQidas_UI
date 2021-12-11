/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import * as $protobuf from "protobufjs/minimal";

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const users = $root.users = (() => {

    /**
     * Namespace users.
     * @exports users
     * @namespace
     */
    const users = {};

    users.GetUsersResponse = (function() {

        /**
         * Properties of a GetUsersResponse.
         * @memberof users
         * @interface IGetUsersResponse
         * @property {Array.<string>|null} [userId] GetUsersResponse userId
         */

        /**
         * Constructs a new GetUsersResponse.
         * @memberof users
         * @classdesc Represents a GetUsersResponse.
         * @implements IGetUsersResponse
         * @constructor
         * @param {users.IGetUsersResponse=} [properties] Properties to set
         */
        function GetUsersResponse(properties) {
            this.userId = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetUsersResponse userId.
         * @member {Array.<string>} userId
         * @memberof users.GetUsersResponse
         * @instance
         */
        GetUsersResponse.prototype.userId = $util.emptyArray;

        /**
         * Creates a new GetUsersResponse instance using the specified properties.
         * @function create
         * @memberof users.GetUsersResponse
         * @static
         * @param {users.IGetUsersResponse=} [properties] Properties to set
         * @returns {users.GetUsersResponse} GetUsersResponse instance
         */
        GetUsersResponse.create = function create(properties) {
            return new GetUsersResponse(properties);
        };

        /**
         * Encodes the specified GetUsersResponse message. Does not implicitly {@link users.GetUsersResponse.verify|verify} messages.
         * @function encode
         * @memberof users.GetUsersResponse
         * @static
         * @param {users.IGetUsersResponse} message GetUsersResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetUsersResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.userId != null && message.userId.length)
                for (let i = 0; i < message.userId.length; ++i)
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.userId[i]);
            return writer;
        };

        /**
         * Encodes the specified GetUsersResponse message, length delimited. Does not implicitly {@link users.GetUsersResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof users.GetUsersResponse
         * @static
         * @param {users.IGetUsersResponse} message GetUsersResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetUsersResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetUsersResponse message from the specified reader or buffer.
         * @function decode
         * @memberof users.GetUsersResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {users.GetUsersResponse} GetUsersResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetUsersResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.users.GetUsersResponse();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.userId && message.userId.length))
                        message.userId = [];
                    message.userId.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetUsersResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof users.GetUsersResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {users.GetUsersResponse} GetUsersResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetUsersResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetUsersResponse message.
         * @function verify
         * @memberof users.GetUsersResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetUsersResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.userId != null && message.hasOwnProperty("userId")) {
                if (!Array.isArray(message.userId))
                    return "userId: array expected";
                for (let i = 0; i < message.userId.length; ++i)
                    if (!$util.isString(message.userId[i]))
                        return "userId: string[] expected";
            }
            return null;
        };

        /**
         * Creates a GetUsersResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof users.GetUsersResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {users.GetUsersResponse} GetUsersResponse
         */
        GetUsersResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.users.GetUsersResponse)
                return object;
            let message = new $root.users.GetUsersResponse();
            if (object.userId) {
                if (!Array.isArray(object.userId))
                    throw TypeError(".users.GetUsersResponse.userId: array expected");
                message.userId = [];
                for (let i = 0; i < object.userId.length; ++i)
                    message.userId[i] = String(object.userId[i]);
            }
            return message;
        };

        /**
         * Creates a plain object from a GetUsersResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof users.GetUsersResponse
         * @static
         * @param {users.GetUsersResponse} message GetUsersResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetUsersResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.userId = [];
            if (message.userId && message.userId.length) {
                object.userId = [];
                for (let j = 0; j < message.userId.length; ++j)
                    object.userId[j] = message.userId[j];
            }
            return object;
        };

        /**
         * Converts this GetUsersResponse to JSON.
         * @function toJSON
         * @memberof users.GetUsersResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetUsersResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetUsersResponse;
    })();

    users.PostUsersRequest = (function() {

        /**
         * Properties of a PostUsersRequest.
         * @memberof users
         * @interface IPostUsersRequest
         * @property {string|null} [name] PostUsersRequest name
         */

        /**
         * Constructs a new PostUsersRequest.
         * @memberof users
         * @classdesc Represents a PostUsersRequest.
         * @implements IPostUsersRequest
         * @constructor
         * @param {users.IPostUsersRequest=} [properties] Properties to set
         */
        function PostUsersRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PostUsersRequest name.
         * @member {string} name
         * @memberof users.PostUsersRequest
         * @instance
         */
        PostUsersRequest.prototype.name = "";

        /**
         * Creates a new PostUsersRequest instance using the specified properties.
         * @function create
         * @memberof users.PostUsersRequest
         * @static
         * @param {users.IPostUsersRequest=} [properties] Properties to set
         * @returns {users.PostUsersRequest} PostUsersRequest instance
         */
        PostUsersRequest.create = function create(properties) {
            return new PostUsersRequest(properties);
        };

        /**
         * Encodes the specified PostUsersRequest message. Does not implicitly {@link users.PostUsersRequest.verify|verify} messages.
         * @function encode
         * @memberof users.PostUsersRequest
         * @static
         * @param {users.IPostUsersRequest} message PostUsersRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PostUsersRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            return writer;
        };

        /**
         * Encodes the specified PostUsersRequest message, length delimited. Does not implicitly {@link users.PostUsersRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof users.PostUsersRequest
         * @static
         * @param {users.IPostUsersRequest} message PostUsersRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PostUsersRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PostUsersRequest message from the specified reader or buffer.
         * @function decode
         * @memberof users.PostUsersRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {users.PostUsersRequest} PostUsersRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PostUsersRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.users.PostUsersRequest();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PostUsersRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof users.PostUsersRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {users.PostUsersRequest} PostUsersRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PostUsersRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PostUsersRequest message.
         * @function verify
         * @memberof users.PostUsersRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PostUsersRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            return null;
        };

        /**
         * Creates a PostUsersRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof users.PostUsersRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {users.PostUsersRequest} PostUsersRequest
         */
        PostUsersRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.users.PostUsersRequest)
                return object;
            let message = new $root.users.PostUsersRequest();
            if (object.name != null)
                message.name = String(object.name);
            return message;
        };

        /**
         * Creates a plain object from a PostUsersRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof users.PostUsersRequest
         * @static
         * @param {users.PostUsersRequest} message PostUsersRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PostUsersRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.name = "";
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            return object;
        };

        /**
         * Converts this PostUsersRequest to JSON.
         * @function toJSON
         * @memberof users.PostUsersRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PostUsersRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return PostUsersRequest;
    })();

    users.GetUsersUserIdResponse = (function() {

        /**
         * Properties of a GetUsersUserIdResponse.
         * @memberof users
         * @interface IGetUsersUserIdResponse
         * @property {users.IUser|null} [user] GetUsersUserIdResponse user
         */

        /**
         * Constructs a new GetUsersUserIdResponse.
         * @memberof users
         * @classdesc Represents a GetUsersUserIdResponse.
         * @implements IGetUsersUserIdResponse
         * @constructor
         * @param {users.IGetUsersUserIdResponse=} [properties] Properties to set
         */
        function GetUsersUserIdResponse(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetUsersUserIdResponse user.
         * @member {users.IUser|null|undefined} user
         * @memberof users.GetUsersUserIdResponse
         * @instance
         */
        GetUsersUserIdResponse.prototype.user = null;

        /**
         * Creates a new GetUsersUserIdResponse instance using the specified properties.
         * @function create
         * @memberof users.GetUsersUserIdResponse
         * @static
         * @param {users.IGetUsersUserIdResponse=} [properties] Properties to set
         * @returns {users.GetUsersUserIdResponse} GetUsersUserIdResponse instance
         */
        GetUsersUserIdResponse.create = function create(properties) {
            return new GetUsersUserIdResponse(properties);
        };

        /**
         * Encodes the specified GetUsersUserIdResponse message. Does not implicitly {@link users.GetUsersUserIdResponse.verify|verify} messages.
         * @function encode
         * @memberof users.GetUsersUserIdResponse
         * @static
         * @param {users.IGetUsersUserIdResponse} message GetUsersUserIdResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetUsersUserIdResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.user != null && Object.hasOwnProperty.call(message, "user"))
                $root.users.User.encode(message.user, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified GetUsersUserIdResponse message, length delimited. Does not implicitly {@link users.GetUsersUserIdResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof users.GetUsersUserIdResponse
         * @static
         * @param {users.IGetUsersUserIdResponse} message GetUsersUserIdResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetUsersUserIdResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetUsersUserIdResponse message from the specified reader or buffer.
         * @function decode
         * @memberof users.GetUsersUserIdResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {users.GetUsersUserIdResponse} GetUsersUserIdResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetUsersUserIdResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.users.GetUsersUserIdResponse();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.user = $root.users.User.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetUsersUserIdResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof users.GetUsersUserIdResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {users.GetUsersUserIdResponse} GetUsersUserIdResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetUsersUserIdResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetUsersUserIdResponse message.
         * @function verify
         * @memberof users.GetUsersUserIdResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetUsersUserIdResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.user != null && message.hasOwnProperty("user")) {
                let error = $root.users.User.verify(message.user);
                if (error)
                    return "user." + error;
            }
            return null;
        };

        /**
         * Creates a GetUsersUserIdResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof users.GetUsersUserIdResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {users.GetUsersUserIdResponse} GetUsersUserIdResponse
         */
        GetUsersUserIdResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.users.GetUsersUserIdResponse)
                return object;
            let message = new $root.users.GetUsersUserIdResponse();
            if (object.user != null) {
                if (typeof object.user !== "object")
                    throw TypeError(".users.GetUsersUserIdResponse.user: object expected");
                message.user = $root.users.User.fromObject(object.user);
            }
            return message;
        };

        /**
         * Creates a plain object from a GetUsersUserIdResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof users.GetUsersUserIdResponse
         * @static
         * @param {users.GetUsersUserIdResponse} message GetUsersUserIdResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetUsersUserIdResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.user = null;
            if (message.user != null && message.hasOwnProperty("user"))
                object.user = $root.users.User.toObject(message.user, options);
            return object;
        };

        /**
         * Converts this GetUsersUserIdResponse to JSON.
         * @function toJSON
         * @memberof users.GetUsersUserIdResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetUsersUserIdResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetUsersUserIdResponse;
    })();

    users.GetUsersMeResponse = (function() {

        /**
         * Properties of a GetUsersMeResponse.
         * @memberof users
         * @interface IGetUsersMeResponse
         * @property {users.IUser|null} [me] GetUsersMeResponse me
         */

        /**
         * Constructs a new GetUsersMeResponse.
         * @memberof users
         * @classdesc Represents a GetUsersMeResponse.
         * @implements IGetUsersMeResponse
         * @constructor
         * @param {users.IGetUsersMeResponse=} [properties] Properties to set
         */
        function GetUsersMeResponse(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetUsersMeResponse me.
         * @member {users.IUser|null|undefined} me
         * @memberof users.GetUsersMeResponse
         * @instance
         */
        GetUsersMeResponse.prototype.me = null;

        /**
         * Creates a new GetUsersMeResponse instance using the specified properties.
         * @function create
         * @memberof users.GetUsersMeResponse
         * @static
         * @param {users.IGetUsersMeResponse=} [properties] Properties to set
         * @returns {users.GetUsersMeResponse} GetUsersMeResponse instance
         */
        GetUsersMeResponse.create = function create(properties) {
            return new GetUsersMeResponse(properties);
        };

        /**
         * Encodes the specified GetUsersMeResponse message. Does not implicitly {@link users.GetUsersMeResponse.verify|verify} messages.
         * @function encode
         * @memberof users.GetUsersMeResponse
         * @static
         * @param {users.IGetUsersMeResponse} message GetUsersMeResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetUsersMeResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.me != null && Object.hasOwnProperty.call(message, "me"))
                $root.users.User.encode(message.me, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified GetUsersMeResponse message, length delimited. Does not implicitly {@link users.GetUsersMeResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof users.GetUsersMeResponse
         * @static
         * @param {users.IGetUsersMeResponse} message GetUsersMeResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetUsersMeResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetUsersMeResponse message from the specified reader or buffer.
         * @function decode
         * @memberof users.GetUsersMeResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {users.GetUsersMeResponse} GetUsersMeResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetUsersMeResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.users.GetUsersMeResponse();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.me = $root.users.User.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetUsersMeResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof users.GetUsersMeResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {users.GetUsersMeResponse} GetUsersMeResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetUsersMeResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetUsersMeResponse message.
         * @function verify
         * @memberof users.GetUsersMeResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetUsersMeResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.me != null && message.hasOwnProperty("me")) {
                let error = $root.users.User.verify(message.me);
                if (error)
                    return "me." + error;
            }
            return null;
        };

        /**
         * Creates a GetUsersMeResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof users.GetUsersMeResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {users.GetUsersMeResponse} GetUsersMeResponse
         */
        GetUsersMeResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.users.GetUsersMeResponse)
                return object;
            let message = new $root.users.GetUsersMeResponse();
            if (object.me != null) {
                if (typeof object.me !== "object")
                    throw TypeError(".users.GetUsersMeResponse.me: object expected");
                message.me = $root.users.User.fromObject(object.me);
            }
            return message;
        };

        /**
         * Creates a plain object from a GetUsersMeResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof users.GetUsersMeResponse
         * @static
         * @param {users.GetUsersMeResponse} message GetUsersMeResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetUsersMeResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.me = null;
            if (message.me != null && message.hasOwnProperty("me"))
                object.me = $root.users.User.toObject(message.me, options);
            return object;
        };

        /**
         * Converts this GetUsersMeResponse to JSON.
         * @function toJSON
         * @memberof users.GetUsersMeResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetUsersMeResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetUsersMeResponse;
    })();

    users.GetUsersMeFavorites = (function() {

        /**
         * Properties of a GetUsersMeFavorites.
         * @memberof users
         * @interface IGetUsersMeFavorites
         * @property {Array.<string>|null} [favoriteHeyaId] GetUsersMeFavorites favoriteHeyaId
         */

        /**
         * Constructs a new GetUsersMeFavorites.
         * @memberof users
         * @classdesc Represents a GetUsersMeFavorites.
         * @implements IGetUsersMeFavorites
         * @constructor
         * @param {users.IGetUsersMeFavorites=} [properties] Properties to set
         */
        function GetUsersMeFavorites(properties) {
            this.favoriteHeyaId = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetUsersMeFavorites favoriteHeyaId.
         * @member {Array.<string>} favoriteHeyaId
         * @memberof users.GetUsersMeFavorites
         * @instance
         */
        GetUsersMeFavorites.prototype.favoriteHeyaId = $util.emptyArray;

        /**
         * Creates a new GetUsersMeFavorites instance using the specified properties.
         * @function create
         * @memberof users.GetUsersMeFavorites
         * @static
         * @param {users.IGetUsersMeFavorites=} [properties] Properties to set
         * @returns {users.GetUsersMeFavorites} GetUsersMeFavorites instance
         */
        GetUsersMeFavorites.create = function create(properties) {
            return new GetUsersMeFavorites(properties);
        };

        /**
         * Encodes the specified GetUsersMeFavorites message. Does not implicitly {@link users.GetUsersMeFavorites.verify|verify} messages.
         * @function encode
         * @memberof users.GetUsersMeFavorites
         * @static
         * @param {users.IGetUsersMeFavorites} message GetUsersMeFavorites message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetUsersMeFavorites.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.favoriteHeyaId != null && message.favoriteHeyaId.length)
                for (let i = 0; i < message.favoriteHeyaId.length; ++i)
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.favoriteHeyaId[i]);
            return writer;
        };

        /**
         * Encodes the specified GetUsersMeFavorites message, length delimited. Does not implicitly {@link users.GetUsersMeFavorites.verify|verify} messages.
         * @function encodeDelimited
         * @memberof users.GetUsersMeFavorites
         * @static
         * @param {users.IGetUsersMeFavorites} message GetUsersMeFavorites message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetUsersMeFavorites.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetUsersMeFavorites message from the specified reader or buffer.
         * @function decode
         * @memberof users.GetUsersMeFavorites
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {users.GetUsersMeFavorites} GetUsersMeFavorites
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetUsersMeFavorites.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.users.GetUsersMeFavorites();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.favoriteHeyaId && message.favoriteHeyaId.length))
                        message.favoriteHeyaId = [];
                    message.favoriteHeyaId.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetUsersMeFavorites message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof users.GetUsersMeFavorites
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {users.GetUsersMeFavorites} GetUsersMeFavorites
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetUsersMeFavorites.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetUsersMeFavorites message.
         * @function verify
         * @memberof users.GetUsersMeFavorites
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetUsersMeFavorites.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.favoriteHeyaId != null && message.hasOwnProperty("favoriteHeyaId")) {
                if (!Array.isArray(message.favoriteHeyaId))
                    return "favoriteHeyaId: array expected";
                for (let i = 0; i < message.favoriteHeyaId.length; ++i)
                    if (!$util.isString(message.favoriteHeyaId[i]))
                        return "favoriteHeyaId: string[] expected";
            }
            return null;
        };

        /**
         * Creates a GetUsersMeFavorites message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof users.GetUsersMeFavorites
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {users.GetUsersMeFavorites} GetUsersMeFavorites
         */
        GetUsersMeFavorites.fromObject = function fromObject(object) {
            if (object instanceof $root.users.GetUsersMeFavorites)
                return object;
            let message = new $root.users.GetUsersMeFavorites();
            if (object.favoriteHeyaId) {
                if (!Array.isArray(object.favoriteHeyaId))
                    throw TypeError(".users.GetUsersMeFavorites.favoriteHeyaId: array expected");
                message.favoriteHeyaId = [];
                for (let i = 0; i < object.favoriteHeyaId.length; ++i)
                    message.favoriteHeyaId[i] = String(object.favoriteHeyaId[i]);
            }
            return message;
        };

        /**
         * Creates a plain object from a GetUsersMeFavorites message. Also converts values to other types if specified.
         * @function toObject
         * @memberof users.GetUsersMeFavorites
         * @static
         * @param {users.GetUsersMeFavorites} message GetUsersMeFavorites
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetUsersMeFavorites.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.favoriteHeyaId = [];
            if (message.favoriteHeyaId && message.favoriteHeyaId.length) {
                object.favoriteHeyaId = [];
                for (let j = 0; j < message.favoriteHeyaId.length; ++j)
                    object.favoriteHeyaId[j] = message.favoriteHeyaId[j];
            }
            return object;
        };

        /**
         * Converts this GetUsersMeFavorites to JSON.
         * @function toJSON
         * @memberof users.GetUsersMeFavorites
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetUsersMeFavorites.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetUsersMeFavorites;
    })();

    users.GetUsersMeHeyasResponse = (function() {

        /**
         * Properties of a GetUsersMeHeyasResponse.
         * @memberof users
         * @interface IGetUsersMeHeyasResponse
         * @property {heya.IHeyas|null} [heyas] GetUsersMeHeyasResponse heyas
         */

        /**
         * Constructs a new GetUsersMeHeyasResponse.
         * @memberof users
         * @classdesc Represents a GetUsersMeHeyasResponse.
         * @implements IGetUsersMeHeyasResponse
         * @constructor
         * @param {users.IGetUsersMeHeyasResponse=} [properties] Properties to set
         */
        function GetUsersMeHeyasResponse(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetUsersMeHeyasResponse heyas.
         * @member {heya.IHeyas|null|undefined} heyas
         * @memberof users.GetUsersMeHeyasResponse
         * @instance
         */
        GetUsersMeHeyasResponse.prototype.heyas = null;

        /**
         * Creates a new GetUsersMeHeyasResponse instance using the specified properties.
         * @function create
         * @memberof users.GetUsersMeHeyasResponse
         * @static
         * @param {users.IGetUsersMeHeyasResponse=} [properties] Properties to set
         * @returns {users.GetUsersMeHeyasResponse} GetUsersMeHeyasResponse instance
         */
        GetUsersMeHeyasResponse.create = function create(properties) {
            return new GetUsersMeHeyasResponse(properties);
        };

        /**
         * Encodes the specified GetUsersMeHeyasResponse message. Does not implicitly {@link users.GetUsersMeHeyasResponse.verify|verify} messages.
         * @function encode
         * @memberof users.GetUsersMeHeyasResponse
         * @static
         * @param {users.IGetUsersMeHeyasResponse} message GetUsersMeHeyasResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetUsersMeHeyasResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.heyas != null && Object.hasOwnProperty.call(message, "heyas"))
                $root.heya.Heyas.encode(message.heyas, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified GetUsersMeHeyasResponse message, length delimited. Does not implicitly {@link users.GetUsersMeHeyasResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof users.GetUsersMeHeyasResponse
         * @static
         * @param {users.IGetUsersMeHeyasResponse} message GetUsersMeHeyasResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetUsersMeHeyasResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetUsersMeHeyasResponse message from the specified reader or buffer.
         * @function decode
         * @memberof users.GetUsersMeHeyasResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {users.GetUsersMeHeyasResponse} GetUsersMeHeyasResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetUsersMeHeyasResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.users.GetUsersMeHeyasResponse();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.heyas = $root.heya.Heyas.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetUsersMeHeyasResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof users.GetUsersMeHeyasResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {users.GetUsersMeHeyasResponse} GetUsersMeHeyasResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetUsersMeHeyasResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetUsersMeHeyasResponse message.
         * @function verify
         * @memberof users.GetUsersMeHeyasResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetUsersMeHeyasResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.heyas != null && message.hasOwnProperty("heyas")) {
                let error = $root.heya.Heyas.verify(message.heyas);
                if (error)
                    return "heyas." + error;
            }
            return null;
        };

        /**
         * Creates a GetUsersMeHeyasResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof users.GetUsersMeHeyasResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {users.GetUsersMeHeyasResponse} GetUsersMeHeyasResponse
         */
        GetUsersMeHeyasResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.users.GetUsersMeHeyasResponse)
                return object;
            let message = new $root.users.GetUsersMeHeyasResponse();
            if (object.heyas != null) {
                if (typeof object.heyas !== "object")
                    throw TypeError(".users.GetUsersMeHeyasResponse.heyas: object expected");
                message.heyas = $root.heya.Heyas.fromObject(object.heyas);
            }
            return message;
        };

        /**
         * Creates a plain object from a GetUsersMeHeyasResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof users.GetUsersMeHeyasResponse
         * @static
         * @param {users.GetUsersMeHeyasResponse} message GetUsersMeHeyasResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetUsersMeHeyasResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.heyas = null;
            if (message.heyas != null && message.hasOwnProperty("heyas"))
                object.heyas = $root.heya.Heyas.toObject(message.heyas, options);
            return object;
        };

        /**
         * Converts this GetUsersMeHeyasResponse to JSON.
         * @function toJSON
         * @memberof users.GetUsersMeHeyasResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetUsersMeHeyasResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetUsersMeHeyasResponse;
    })();

    users.User = (function() {

        /**
         * Properties of a User.
         * @memberof users
         * @interface IUser
         * @property {string|null} [id] User id
         * @property {string|null} [name] User name
         */

        /**
         * Constructs a new User.
         * @memberof users
         * @classdesc Represents a User.
         * @implements IUser
         * @constructor
         * @param {users.IUser=} [properties] Properties to set
         */
        function User(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * User id.
         * @member {string} id
         * @memberof users.User
         * @instance
         */
        User.prototype.id = "";

        /**
         * User name.
         * @member {string} name
         * @memberof users.User
         * @instance
         */
        User.prototype.name = "";

        /**
         * Creates a new User instance using the specified properties.
         * @function create
         * @memberof users.User
         * @static
         * @param {users.IUser=} [properties] Properties to set
         * @returns {users.User} User instance
         */
        User.create = function create(properties) {
            return new User(properties);
        };

        /**
         * Encodes the specified User message. Does not implicitly {@link users.User.verify|verify} messages.
         * @function encode
         * @memberof users.User
         * @static
         * @param {users.IUser} message User message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        User.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            return writer;
        };

        /**
         * Encodes the specified User message, length delimited. Does not implicitly {@link users.User.verify|verify} messages.
         * @function encodeDelimited
         * @memberof users.User
         * @static
         * @param {users.IUser} message User message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        User.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a User message from the specified reader or buffer.
         * @function decode
         * @memberof users.User
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {users.User} User
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        User.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.users.User();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a User message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof users.User
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {users.User} User
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        User.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a User message.
         * @function verify
         * @memberof users.User
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        User.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            return null;
        };

        /**
         * Creates a User message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof users.User
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {users.User} User
         */
        User.fromObject = function fromObject(object) {
            if (object instanceof $root.users.User)
                return object;
            let message = new $root.users.User();
            if (object.id != null)
                message.id = String(object.id);
            if (object.name != null)
                message.name = String(object.name);
            return message;
        };

        /**
         * Creates a plain object from a User message. Also converts values to other types if specified.
         * @function toObject
         * @memberof users.User
         * @static
         * @param {users.User} message User
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        User.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.id = "";
                object.name = "";
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            return object;
        };

        /**
         * Converts this User to JSON.
         * @function toJSON
         * @memberof users.User
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        User.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return User;
    })();

    users.Users = (function() {

        /**
         * Properties of a Users.
         * @memberof users
         * @interface IUsers
         * @property {Array.<users.IUser>|null} [users] Users users
         */

        /**
         * Constructs a new Users.
         * @memberof users
         * @classdesc Represents a Users.
         * @implements IUsers
         * @constructor
         * @param {users.IUsers=} [properties] Properties to set
         */
        function Users(properties) {
            this.users = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Users users.
         * @member {Array.<users.IUser>} users
         * @memberof users.Users
         * @instance
         */
        Users.prototype.users = $util.emptyArray;

        /**
         * Creates a new Users instance using the specified properties.
         * @function create
         * @memberof users.Users
         * @static
         * @param {users.IUsers=} [properties] Properties to set
         * @returns {users.Users} Users instance
         */
        Users.create = function create(properties) {
            return new Users(properties);
        };

        /**
         * Encodes the specified Users message. Does not implicitly {@link users.Users.verify|verify} messages.
         * @function encode
         * @memberof users.Users
         * @static
         * @param {users.IUsers} message Users message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Users.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.users != null && message.users.length)
                for (let i = 0; i < message.users.length; ++i)
                    $root.users.User.encode(message.users[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Users message, length delimited. Does not implicitly {@link users.Users.verify|verify} messages.
         * @function encodeDelimited
         * @memberof users.Users
         * @static
         * @param {users.IUsers} message Users message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Users.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Users message from the specified reader or buffer.
         * @function decode
         * @memberof users.Users
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {users.Users} Users
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Users.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.users.Users();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.users && message.users.length))
                        message.users = [];
                    message.users.push($root.users.User.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Users message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof users.Users
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {users.Users} Users
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Users.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Users message.
         * @function verify
         * @memberof users.Users
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Users.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.users != null && message.hasOwnProperty("users")) {
                if (!Array.isArray(message.users))
                    return "users: array expected";
                for (let i = 0; i < message.users.length; ++i) {
                    let error = $root.users.User.verify(message.users[i]);
                    if (error)
                        return "users." + error;
                }
            }
            return null;
        };

        /**
         * Creates a Users message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof users.Users
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {users.Users} Users
         */
        Users.fromObject = function fromObject(object) {
            if (object instanceof $root.users.Users)
                return object;
            let message = new $root.users.Users();
            if (object.users) {
                if (!Array.isArray(object.users))
                    throw TypeError(".users.Users.users: array expected");
                message.users = [];
                for (let i = 0; i < object.users.length; ++i) {
                    if (typeof object.users[i] !== "object")
                        throw TypeError(".users.Users.users: object expected");
                    message.users[i] = $root.users.User.fromObject(object.users[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a Users message. Also converts values to other types if specified.
         * @function toObject
         * @memberof users.Users
         * @static
         * @param {users.Users} message Users
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Users.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.users = [];
            if (message.users && message.users.length) {
                object.users = [];
                for (let j = 0; j < message.users.length; ++j)
                    object.users[j] = $root.users.User.toObject(message.users[j], options);
            }
            return object;
        };

        /**
         * Converts this Users to JSON.
         * @function toJSON
         * @memberof users.Users
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Users.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Users;
    })();

    return users;
})();

export const heya = $root.heya = (() => {

    /**
     * Namespace heya.
     * @exports heya
     * @namespace
     */
    const heya = {};

    heya.GetHeyasResponse = (function() {

        /**
         * Properties of a GetHeyasResponse.
         * @memberof heya
         * @interface IGetHeyasResponse
         * @property {heya.IHeyas|null} [heyas] GetHeyasResponse heyas
         */

        /**
         * Constructs a new GetHeyasResponse.
         * @memberof heya
         * @classdesc Represents a GetHeyasResponse.
         * @implements IGetHeyasResponse
         * @constructor
         * @param {heya.IGetHeyasResponse=} [properties] Properties to set
         */
        function GetHeyasResponse(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetHeyasResponse heyas.
         * @member {heya.IHeyas|null|undefined} heyas
         * @memberof heya.GetHeyasResponse
         * @instance
         */
        GetHeyasResponse.prototype.heyas = null;

        /**
         * Creates a new GetHeyasResponse instance using the specified properties.
         * @function create
         * @memberof heya.GetHeyasResponse
         * @static
         * @param {heya.IGetHeyasResponse=} [properties] Properties to set
         * @returns {heya.GetHeyasResponse} GetHeyasResponse instance
         */
        GetHeyasResponse.create = function create(properties) {
            return new GetHeyasResponse(properties);
        };

        /**
         * Encodes the specified GetHeyasResponse message. Does not implicitly {@link heya.GetHeyasResponse.verify|verify} messages.
         * @function encode
         * @memberof heya.GetHeyasResponse
         * @static
         * @param {heya.IGetHeyasResponse} message GetHeyasResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetHeyasResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.heyas != null && Object.hasOwnProperty.call(message, "heyas"))
                $root.heya.Heyas.encode(message.heyas, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified GetHeyasResponse message, length delimited. Does not implicitly {@link heya.GetHeyasResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof heya.GetHeyasResponse
         * @static
         * @param {heya.IGetHeyasResponse} message GetHeyasResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetHeyasResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetHeyasResponse message from the specified reader or buffer.
         * @function decode
         * @memberof heya.GetHeyasResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {heya.GetHeyasResponse} GetHeyasResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetHeyasResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.heya.GetHeyasResponse();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.heyas = $root.heya.Heyas.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetHeyasResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof heya.GetHeyasResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {heya.GetHeyasResponse} GetHeyasResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetHeyasResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetHeyasResponse message.
         * @function verify
         * @memberof heya.GetHeyasResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetHeyasResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.heyas != null && message.hasOwnProperty("heyas")) {
                let error = $root.heya.Heyas.verify(message.heyas);
                if (error)
                    return "heyas." + error;
            }
            return null;
        };

        /**
         * Creates a GetHeyasResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof heya.GetHeyasResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {heya.GetHeyasResponse} GetHeyasResponse
         */
        GetHeyasResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.heya.GetHeyasResponse)
                return object;
            let message = new $root.heya.GetHeyasResponse();
            if (object.heyas != null) {
                if (typeof object.heyas !== "object")
                    throw TypeError(".heya.GetHeyasResponse.heyas: object expected");
                message.heyas = $root.heya.Heyas.fromObject(object.heyas);
            }
            return message;
        };

        /**
         * Creates a plain object from a GetHeyasResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof heya.GetHeyasResponse
         * @static
         * @param {heya.GetHeyasResponse} message GetHeyasResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetHeyasResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.heyas = null;
            if (message.heyas != null && message.hasOwnProperty("heyas"))
                object.heyas = $root.heya.Heyas.toObject(message.heyas, options);
            return object;
        };

        /**
         * Converts this GetHeyasResponse to JSON.
         * @function toJSON
         * @memberof heya.GetHeyasResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetHeyasResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetHeyasResponse;
    })();

    heya.PostHeyasRequest = (function() {

        /**
         * Properties of a PostHeyasRequest.
         * @memberof heya
         * @interface IPostHeyasRequest
         * @property {string|null} [title] PostHeyasRequest title
         * @property {string|null} [description] PostHeyasRequest description
         */

        /**
         * Constructs a new PostHeyasRequest.
         * @memberof heya
         * @classdesc Represents a PostHeyasRequest.
         * @implements IPostHeyasRequest
         * @constructor
         * @param {heya.IPostHeyasRequest=} [properties] Properties to set
         */
        function PostHeyasRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PostHeyasRequest title.
         * @member {string} title
         * @memberof heya.PostHeyasRequest
         * @instance
         */
        PostHeyasRequest.prototype.title = "";

        /**
         * PostHeyasRequest description.
         * @member {string} description
         * @memberof heya.PostHeyasRequest
         * @instance
         */
        PostHeyasRequest.prototype.description = "";

        /**
         * Creates a new PostHeyasRequest instance using the specified properties.
         * @function create
         * @memberof heya.PostHeyasRequest
         * @static
         * @param {heya.IPostHeyasRequest=} [properties] Properties to set
         * @returns {heya.PostHeyasRequest} PostHeyasRequest instance
         */
        PostHeyasRequest.create = function create(properties) {
            return new PostHeyasRequest(properties);
        };

        /**
         * Encodes the specified PostHeyasRequest message. Does not implicitly {@link heya.PostHeyasRequest.verify|verify} messages.
         * @function encode
         * @memberof heya.PostHeyasRequest
         * @static
         * @param {heya.IPostHeyasRequest} message PostHeyasRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PostHeyasRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.title != null && Object.hasOwnProperty.call(message, "title"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.title);
            if (message.description != null && Object.hasOwnProperty.call(message, "description"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.description);
            return writer;
        };

        /**
         * Encodes the specified PostHeyasRequest message, length delimited. Does not implicitly {@link heya.PostHeyasRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof heya.PostHeyasRequest
         * @static
         * @param {heya.IPostHeyasRequest} message PostHeyasRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PostHeyasRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PostHeyasRequest message from the specified reader or buffer.
         * @function decode
         * @memberof heya.PostHeyasRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {heya.PostHeyasRequest} PostHeyasRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PostHeyasRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.heya.PostHeyasRequest();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.title = reader.string();
                    break;
                case 2:
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
         * Decodes a PostHeyasRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof heya.PostHeyasRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {heya.PostHeyasRequest} PostHeyasRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PostHeyasRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PostHeyasRequest message.
         * @function verify
         * @memberof heya.PostHeyasRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PostHeyasRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.title != null && message.hasOwnProperty("title"))
                if (!$util.isString(message.title))
                    return "title: string expected";
            if (message.description != null && message.hasOwnProperty("description"))
                if (!$util.isString(message.description))
                    return "description: string expected";
            return null;
        };

        /**
         * Creates a PostHeyasRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof heya.PostHeyasRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {heya.PostHeyasRequest} PostHeyasRequest
         */
        PostHeyasRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.heya.PostHeyasRequest)
                return object;
            let message = new $root.heya.PostHeyasRequest();
            if (object.title != null)
                message.title = String(object.title);
            if (object.description != null)
                message.description = String(object.description);
            return message;
        };

        /**
         * Creates a plain object from a PostHeyasRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof heya.PostHeyasRequest
         * @static
         * @param {heya.PostHeyasRequest} message PostHeyasRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PostHeyasRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.title = "";
                object.description = "";
            }
            if (message.title != null && message.hasOwnProperty("title"))
                object.title = message.title;
            if (message.description != null && message.hasOwnProperty("description"))
                object.description = message.description;
            return object;
        };

        /**
         * Converts this PostHeyasRequest to JSON.
         * @function toJSON
         * @memberof heya.PostHeyasRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PostHeyasRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return PostHeyasRequest;
    })();

    heya.PostHeyasResponse = (function() {

        /**
         * Properties of a PostHeyasResponse.
         * @memberof heya
         * @interface IPostHeyasResponse
         * @property {heya.IHeya|null} [heya] PostHeyasResponse heya
         */

        /**
         * Constructs a new PostHeyasResponse.
         * @memberof heya
         * @classdesc Represents a PostHeyasResponse.
         * @implements IPostHeyasResponse
         * @constructor
         * @param {heya.IPostHeyasResponse=} [properties] Properties to set
         */
        function PostHeyasResponse(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PostHeyasResponse heya.
         * @member {heya.IHeya|null|undefined} heya
         * @memberof heya.PostHeyasResponse
         * @instance
         */
        PostHeyasResponse.prototype.heya = null;

        /**
         * Creates a new PostHeyasResponse instance using the specified properties.
         * @function create
         * @memberof heya.PostHeyasResponse
         * @static
         * @param {heya.IPostHeyasResponse=} [properties] Properties to set
         * @returns {heya.PostHeyasResponse} PostHeyasResponse instance
         */
        PostHeyasResponse.create = function create(properties) {
            return new PostHeyasResponse(properties);
        };

        /**
         * Encodes the specified PostHeyasResponse message. Does not implicitly {@link heya.PostHeyasResponse.verify|verify} messages.
         * @function encode
         * @memberof heya.PostHeyasResponse
         * @static
         * @param {heya.IPostHeyasResponse} message PostHeyasResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PostHeyasResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.heya != null && Object.hasOwnProperty.call(message, "heya"))
                $root.heya.Heya.encode(message.heya, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified PostHeyasResponse message, length delimited. Does not implicitly {@link heya.PostHeyasResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof heya.PostHeyasResponse
         * @static
         * @param {heya.IPostHeyasResponse} message PostHeyasResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PostHeyasResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PostHeyasResponse message from the specified reader or buffer.
         * @function decode
         * @memberof heya.PostHeyasResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {heya.PostHeyasResponse} PostHeyasResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PostHeyasResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.heya.PostHeyasResponse();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.heya = $root.heya.Heya.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PostHeyasResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof heya.PostHeyasResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {heya.PostHeyasResponse} PostHeyasResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PostHeyasResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PostHeyasResponse message.
         * @function verify
         * @memberof heya.PostHeyasResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PostHeyasResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.heya != null && message.hasOwnProperty("heya")) {
                let error = $root.heya.Heya.verify(message.heya);
                if (error)
                    return "heya." + error;
            }
            return null;
        };

        /**
         * Creates a PostHeyasResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof heya.PostHeyasResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {heya.PostHeyasResponse} PostHeyasResponse
         */
        PostHeyasResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.heya.PostHeyasResponse)
                return object;
            let message = new $root.heya.PostHeyasResponse();
            if (object.heya != null) {
                if (typeof object.heya !== "object")
                    throw TypeError(".heya.PostHeyasResponse.heya: object expected");
                message.heya = $root.heya.Heya.fromObject(object.heya);
            }
            return message;
        };

        /**
         * Creates a plain object from a PostHeyasResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof heya.PostHeyasResponse
         * @static
         * @param {heya.PostHeyasResponse} message PostHeyasResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PostHeyasResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.heya = null;
            if (message.heya != null && message.hasOwnProperty("heya"))
                object.heya = $root.heya.Heya.toObject(message.heya, options);
            return object;
        };

        /**
         * Converts this PostHeyasResponse to JSON.
         * @function toJSON
         * @memberof heya.PostHeyasResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PostHeyasResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return PostHeyasResponse;
    })();

    heya.GetHeyasHeyaIdResponse = (function() {

        /**
         * Properties of a GetHeyasHeyaIdResponse.
         * @memberof heya
         * @interface IGetHeyasHeyaIdResponse
         * @property {heya.IHeya|null} [heya] GetHeyasHeyaIdResponse heya
         */

        /**
         * Constructs a new GetHeyasHeyaIdResponse.
         * @memberof heya
         * @classdesc Represents a GetHeyasHeyaIdResponse.
         * @implements IGetHeyasHeyaIdResponse
         * @constructor
         * @param {heya.IGetHeyasHeyaIdResponse=} [properties] Properties to set
         */
        function GetHeyasHeyaIdResponse(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetHeyasHeyaIdResponse heya.
         * @member {heya.IHeya|null|undefined} heya
         * @memberof heya.GetHeyasHeyaIdResponse
         * @instance
         */
        GetHeyasHeyaIdResponse.prototype.heya = null;

        /**
         * Creates a new GetHeyasHeyaIdResponse instance using the specified properties.
         * @function create
         * @memberof heya.GetHeyasHeyaIdResponse
         * @static
         * @param {heya.IGetHeyasHeyaIdResponse=} [properties] Properties to set
         * @returns {heya.GetHeyasHeyaIdResponse} GetHeyasHeyaIdResponse instance
         */
        GetHeyasHeyaIdResponse.create = function create(properties) {
            return new GetHeyasHeyaIdResponse(properties);
        };

        /**
         * Encodes the specified GetHeyasHeyaIdResponse message. Does not implicitly {@link heya.GetHeyasHeyaIdResponse.verify|verify} messages.
         * @function encode
         * @memberof heya.GetHeyasHeyaIdResponse
         * @static
         * @param {heya.IGetHeyasHeyaIdResponse} message GetHeyasHeyaIdResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetHeyasHeyaIdResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.heya != null && Object.hasOwnProperty.call(message, "heya"))
                $root.heya.Heya.encode(message.heya, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified GetHeyasHeyaIdResponse message, length delimited. Does not implicitly {@link heya.GetHeyasHeyaIdResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof heya.GetHeyasHeyaIdResponse
         * @static
         * @param {heya.IGetHeyasHeyaIdResponse} message GetHeyasHeyaIdResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetHeyasHeyaIdResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetHeyasHeyaIdResponse message from the specified reader or buffer.
         * @function decode
         * @memberof heya.GetHeyasHeyaIdResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {heya.GetHeyasHeyaIdResponse} GetHeyasHeyaIdResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetHeyasHeyaIdResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.heya.GetHeyasHeyaIdResponse();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.heya = $root.heya.Heya.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetHeyasHeyaIdResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof heya.GetHeyasHeyaIdResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {heya.GetHeyasHeyaIdResponse} GetHeyasHeyaIdResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetHeyasHeyaIdResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetHeyasHeyaIdResponse message.
         * @function verify
         * @memberof heya.GetHeyasHeyaIdResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetHeyasHeyaIdResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.heya != null && message.hasOwnProperty("heya")) {
                let error = $root.heya.Heya.verify(message.heya);
                if (error)
                    return "heya." + error;
            }
            return null;
        };

        /**
         * Creates a GetHeyasHeyaIdResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof heya.GetHeyasHeyaIdResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {heya.GetHeyasHeyaIdResponse} GetHeyasHeyaIdResponse
         */
        GetHeyasHeyaIdResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.heya.GetHeyasHeyaIdResponse)
                return object;
            let message = new $root.heya.GetHeyasHeyaIdResponse();
            if (object.heya != null) {
                if (typeof object.heya !== "object")
                    throw TypeError(".heya.GetHeyasHeyaIdResponse.heya: object expected");
                message.heya = $root.heya.Heya.fromObject(object.heya);
            }
            return message;
        };

        /**
         * Creates a plain object from a GetHeyasHeyaIdResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof heya.GetHeyasHeyaIdResponse
         * @static
         * @param {heya.GetHeyasHeyaIdResponse} message GetHeyasHeyaIdResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetHeyasHeyaIdResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.heya = null;
            if (message.heya != null && message.hasOwnProperty("heya"))
                object.heya = $root.heya.Heya.toObject(message.heya, options);
            return object;
        };

        /**
         * Converts this GetHeyasHeyaIdResponse to JSON.
         * @function toJSON
         * @memberof heya.GetHeyasHeyaIdResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetHeyasHeyaIdResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetHeyasHeyaIdResponse;
    })();

    heya.PutHeyasHeyaIdRequest = (function() {

        /**
         * Properties of a PutHeyasHeyaIdRequest.
         * @memberof heya
         * @interface IPutHeyasHeyaIdRequest
         * @property {string|null} [title] PutHeyasHeyaIdRequest title
         * @property {string|null} [description] PutHeyasHeyaIdRequest description
         */

        /**
         * Constructs a new PutHeyasHeyaIdRequest.
         * @memberof heya
         * @classdesc Represents a PutHeyasHeyaIdRequest.
         * @implements IPutHeyasHeyaIdRequest
         * @constructor
         * @param {heya.IPutHeyasHeyaIdRequest=} [properties] Properties to set
         */
        function PutHeyasHeyaIdRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PutHeyasHeyaIdRequest title.
         * @member {string} title
         * @memberof heya.PutHeyasHeyaIdRequest
         * @instance
         */
        PutHeyasHeyaIdRequest.prototype.title = "";

        /**
         * PutHeyasHeyaIdRequest description.
         * @member {string} description
         * @memberof heya.PutHeyasHeyaIdRequest
         * @instance
         */
        PutHeyasHeyaIdRequest.prototype.description = "";

        /**
         * Creates a new PutHeyasHeyaIdRequest instance using the specified properties.
         * @function create
         * @memberof heya.PutHeyasHeyaIdRequest
         * @static
         * @param {heya.IPutHeyasHeyaIdRequest=} [properties] Properties to set
         * @returns {heya.PutHeyasHeyaIdRequest} PutHeyasHeyaIdRequest instance
         */
        PutHeyasHeyaIdRequest.create = function create(properties) {
            return new PutHeyasHeyaIdRequest(properties);
        };

        /**
         * Encodes the specified PutHeyasHeyaIdRequest message. Does not implicitly {@link heya.PutHeyasHeyaIdRequest.verify|verify} messages.
         * @function encode
         * @memberof heya.PutHeyasHeyaIdRequest
         * @static
         * @param {heya.IPutHeyasHeyaIdRequest} message PutHeyasHeyaIdRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PutHeyasHeyaIdRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.title != null && Object.hasOwnProperty.call(message, "title"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.title);
            if (message.description != null && Object.hasOwnProperty.call(message, "description"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.description);
            return writer;
        };

        /**
         * Encodes the specified PutHeyasHeyaIdRequest message, length delimited. Does not implicitly {@link heya.PutHeyasHeyaIdRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof heya.PutHeyasHeyaIdRequest
         * @static
         * @param {heya.IPutHeyasHeyaIdRequest} message PutHeyasHeyaIdRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PutHeyasHeyaIdRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PutHeyasHeyaIdRequest message from the specified reader or buffer.
         * @function decode
         * @memberof heya.PutHeyasHeyaIdRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {heya.PutHeyasHeyaIdRequest} PutHeyasHeyaIdRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PutHeyasHeyaIdRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.heya.PutHeyasHeyaIdRequest();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.title = reader.string();
                    break;
                case 2:
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
         * Decodes a PutHeyasHeyaIdRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof heya.PutHeyasHeyaIdRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {heya.PutHeyasHeyaIdRequest} PutHeyasHeyaIdRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PutHeyasHeyaIdRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PutHeyasHeyaIdRequest message.
         * @function verify
         * @memberof heya.PutHeyasHeyaIdRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PutHeyasHeyaIdRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.title != null && message.hasOwnProperty("title"))
                if (!$util.isString(message.title))
                    return "title: string expected";
            if (message.description != null && message.hasOwnProperty("description"))
                if (!$util.isString(message.description))
                    return "description: string expected";
            return null;
        };

        /**
         * Creates a PutHeyasHeyaIdRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof heya.PutHeyasHeyaIdRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {heya.PutHeyasHeyaIdRequest} PutHeyasHeyaIdRequest
         */
        PutHeyasHeyaIdRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.heya.PutHeyasHeyaIdRequest)
                return object;
            let message = new $root.heya.PutHeyasHeyaIdRequest();
            if (object.title != null)
                message.title = String(object.title);
            if (object.description != null)
                message.description = String(object.description);
            return message;
        };

        /**
         * Creates a plain object from a PutHeyasHeyaIdRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof heya.PutHeyasHeyaIdRequest
         * @static
         * @param {heya.PutHeyasHeyaIdRequest} message PutHeyasHeyaIdRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PutHeyasHeyaIdRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.title = "";
                object.description = "";
            }
            if (message.title != null && message.hasOwnProperty("title"))
                object.title = message.title;
            if (message.description != null && message.hasOwnProperty("description"))
                object.description = message.description;
            return object;
        };

        /**
         * Converts this PutHeyasHeyaIdRequest to JSON.
         * @function toJSON
         * @memberof heya.PutHeyasHeyaIdRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PutHeyasHeyaIdRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return PutHeyasHeyaIdRequest;
    })();

    heya.PutHeyasHeyaIdResponse = (function() {

        /**
         * Properties of a PutHeyasHeyaIdResponse.
         * @memberof heya
         * @interface IPutHeyasHeyaIdResponse
         * @property {common.IStatus|null} [status] PutHeyasHeyaIdResponse status
         */

        /**
         * Constructs a new PutHeyasHeyaIdResponse.
         * @memberof heya
         * @classdesc Represents a PutHeyasHeyaIdResponse.
         * @implements IPutHeyasHeyaIdResponse
         * @constructor
         * @param {heya.IPutHeyasHeyaIdResponse=} [properties] Properties to set
         */
        function PutHeyasHeyaIdResponse(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PutHeyasHeyaIdResponse status.
         * @member {common.IStatus|null|undefined} status
         * @memberof heya.PutHeyasHeyaIdResponse
         * @instance
         */
        PutHeyasHeyaIdResponse.prototype.status = null;

        /**
         * Creates a new PutHeyasHeyaIdResponse instance using the specified properties.
         * @function create
         * @memberof heya.PutHeyasHeyaIdResponse
         * @static
         * @param {heya.IPutHeyasHeyaIdResponse=} [properties] Properties to set
         * @returns {heya.PutHeyasHeyaIdResponse} PutHeyasHeyaIdResponse instance
         */
        PutHeyasHeyaIdResponse.create = function create(properties) {
            return new PutHeyasHeyaIdResponse(properties);
        };

        /**
         * Encodes the specified PutHeyasHeyaIdResponse message. Does not implicitly {@link heya.PutHeyasHeyaIdResponse.verify|verify} messages.
         * @function encode
         * @memberof heya.PutHeyasHeyaIdResponse
         * @static
         * @param {heya.IPutHeyasHeyaIdResponse} message PutHeyasHeyaIdResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PutHeyasHeyaIdResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                $root.common.Status.encode(message.status, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified PutHeyasHeyaIdResponse message, length delimited. Does not implicitly {@link heya.PutHeyasHeyaIdResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof heya.PutHeyasHeyaIdResponse
         * @static
         * @param {heya.IPutHeyasHeyaIdResponse} message PutHeyasHeyaIdResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PutHeyasHeyaIdResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PutHeyasHeyaIdResponse message from the specified reader or buffer.
         * @function decode
         * @memberof heya.PutHeyasHeyaIdResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {heya.PutHeyasHeyaIdResponse} PutHeyasHeyaIdResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PutHeyasHeyaIdResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.heya.PutHeyasHeyaIdResponse();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.status = $root.common.Status.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PutHeyasHeyaIdResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof heya.PutHeyasHeyaIdResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {heya.PutHeyasHeyaIdResponse} PutHeyasHeyaIdResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PutHeyasHeyaIdResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PutHeyasHeyaIdResponse message.
         * @function verify
         * @memberof heya.PutHeyasHeyaIdResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PutHeyasHeyaIdResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.status != null && message.hasOwnProperty("status")) {
                let error = $root.common.Status.verify(message.status);
                if (error)
                    return "status." + error;
            }
            return null;
        };

        /**
         * Creates a PutHeyasHeyaIdResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof heya.PutHeyasHeyaIdResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {heya.PutHeyasHeyaIdResponse} PutHeyasHeyaIdResponse
         */
        PutHeyasHeyaIdResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.heya.PutHeyasHeyaIdResponse)
                return object;
            let message = new $root.heya.PutHeyasHeyaIdResponse();
            if (object.status != null) {
                if (typeof object.status !== "object")
                    throw TypeError(".heya.PutHeyasHeyaIdResponse.status: object expected");
                message.status = $root.common.Status.fromObject(object.status);
            }
            return message;
        };

        /**
         * Creates a plain object from a PutHeyasHeyaIdResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof heya.PutHeyasHeyaIdResponse
         * @static
         * @param {heya.PutHeyasHeyaIdResponse} message PutHeyasHeyaIdResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PutHeyasHeyaIdResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.status = null;
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = $root.common.Status.toObject(message.status, options);
            return object;
        };

        /**
         * Converts this PutHeyasHeyaIdResponse to JSON.
         * @function toJSON
         * @memberof heya.PutHeyasHeyaIdResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PutHeyasHeyaIdResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return PutHeyasHeyaIdResponse;
    })();

    heya.DeleteHeyasHeyaIdRequest = (function() {

        /**
         * Properties of a DeleteHeyasHeyaIdRequest.
         * @memberof heya
         * @interface IDeleteHeyasHeyaIdRequest
         * @property {common.IStatus|null} [status] DeleteHeyasHeyaIdRequest status
         */

        /**
         * Constructs a new DeleteHeyasHeyaIdRequest.
         * @memberof heya
         * @classdesc Represents a DeleteHeyasHeyaIdRequest.
         * @implements IDeleteHeyasHeyaIdRequest
         * @constructor
         * @param {heya.IDeleteHeyasHeyaIdRequest=} [properties] Properties to set
         */
        function DeleteHeyasHeyaIdRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DeleteHeyasHeyaIdRequest status.
         * @member {common.IStatus|null|undefined} status
         * @memberof heya.DeleteHeyasHeyaIdRequest
         * @instance
         */
        DeleteHeyasHeyaIdRequest.prototype.status = null;

        /**
         * Creates a new DeleteHeyasHeyaIdRequest instance using the specified properties.
         * @function create
         * @memberof heya.DeleteHeyasHeyaIdRequest
         * @static
         * @param {heya.IDeleteHeyasHeyaIdRequest=} [properties] Properties to set
         * @returns {heya.DeleteHeyasHeyaIdRequest} DeleteHeyasHeyaIdRequest instance
         */
        DeleteHeyasHeyaIdRequest.create = function create(properties) {
            return new DeleteHeyasHeyaIdRequest(properties);
        };

        /**
         * Encodes the specified DeleteHeyasHeyaIdRequest message. Does not implicitly {@link heya.DeleteHeyasHeyaIdRequest.verify|verify} messages.
         * @function encode
         * @memberof heya.DeleteHeyasHeyaIdRequest
         * @static
         * @param {heya.IDeleteHeyasHeyaIdRequest} message DeleteHeyasHeyaIdRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DeleteHeyasHeyaIdRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                $root.common.Status.encode(message.status, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified DeleteHeyasHeyaIdRequest message, length delimited. Does not implicitly {@link heya.DeleteHeyasHeyaIdRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof heya.DeleteHeyasHeyaIdRequest
         * @static
         * @param {heya.IDeleteHeyasHeyaIdRequest} message DeleteHeyasHeyaIdRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DeleteHeyasHeyaIdRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DeleteHeyasHeyaIdRequest message from the specified reader or buffer.
         * @function decode
         * @memberof heya.DeleteHeyasHeyaIdRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {heya.DeleteHeyasHeyaIdRequest} DeleteHeyasHeyaIdRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DeleteHeyasHeyaIdRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.heya.DeleteHeyasHeyaIdRequest();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.status = $root.common.Status.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a DeleteHeyasHeyaIdRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof heya.DeleteHeyasHeyaIdRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {heya.DeleteHeyasHeyaIdRequest} DeleteHeyasHeyaIdRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DeleteHeyasHeyaIdRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DeleteHeyasHeyaIdRequest message.
         * @function verify
         * @memberof heya.DeleteHeyasHeyaIdRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DeleteHeyasHeyaIdRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.status != null && message.hasOwnProperty("status")) {
                let error = $root.common.Status.verify(message.status);
                if (error)
                    return "status." + error;
            }
            return null;
        };

        /**
         * Creates a DeleteHeyasHeyaIdRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof heya.DeleteHeyasHeyaIdRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {heya.DeleteHeyasHeyaIdRequest} DeleteHeyasHeyaIdRequest
         */
        DeleteHeyasHeyaIdRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.heya.DeleteHeyasHeyaIdRequest)
                return object;
            let message = new $root.heya.DeleteHeyasHeyaIdRequest();
            if (object.status != null) {
                if (typeof object.status !== "object")
                    throw TypeError(".heya.DeleteHeyasHeyaIdRequest.status: object expected");
                message.status = $root.common.Status.fromObject(object.status);
            }
            return message;
        };

        /**
         * Creates a plain object from a DeleteHeyasHeyaIdRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof heya.DeleteHeyasHeyaIdRequest
         * @static
         * @param {heya.DeleteHeyasHeyaIdRequest} message DeleteHeyasHeyaIdRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DeleteHeyasHeyaIdRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.status = null;
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = $root.common.Status.toObject(message.status, options);
            return object;
        };

        /**
         * Converts this DeleteHeyasHeyaIdRequest to JSON.
         * @function toJSON
         * @memberof heya.DeleteHeyasHeyaIdRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DeleteHeyasHeyaIdRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return DeleteHeyasHeyaIdRequest;
    })();

    heya.GetHeyasHeyaIdUsersResponse = (function() {

        /**
         * Properties of a GetHeyasHeyaIdUsersResponse.
         * @memberof heya
         * @interface IGetHeyasHeyaIdUsersResponse
         * @property {Array.<string>|null} [userId] GetHeyasHeyaIdUsersResponse userId
         */

        /**
         * Constructs a new GetHeyasHeyaIdUsersResponse.
         * @memberof heya
         * @classdesc Represents a GetHeyasHeyaIdUsersResponse.
         * @implements IGetHeyasHeyaIdUsersResponse
         * @constructor
         * @param {heya.IGetHeyasHeyaIdUsersResponse=} [properties] Properties to set
         */
        function GetHeyasHeyaIdUsersResponse(properties) {
            this.userId = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetHeyasHeyaIdUsersResponse userId.
         * @member {Array.<string>} userId
         * @memberof heya.GetHeyasHeyaIdUsersResponse
         * @instance
         */
        GetHeyasHeyaIdUsersResponse.prototype.userId = $util.emptyArray;

        /**
         * Creates a new GetHeyasHeyaIdUsersResponse instance using the specified properties.
         * @function create
         * @memberof heya.GetHeyasHeyaIdUsersResponse
         * @static
         * @param {heya.IGetHeyasHeyaIdUsersResponse=} [properties] Properties to set
         * @returns {heya.GetHeyasHeyaIdUsersResponse} GetHeyasHeyaIdUsersResponse instance
         */
        GetHeyasHeyaIdUsersResponse.create = function create(properties) {
            return new GetHeyasHeyaIdUsersResponse(properties);
        };

        /**
         * Encodes the specified GetHeyasHeyaIdUsersResponse message. Does not implicitly {@link heya.GetHeyasHeyaIdUsersResponse.verify|verify} messages.
         * @function encode
         * @memberof heya.GetHeyasHeyaIdUsersResponse
         * @static
         * @param {heya.IGetHeyasHeyaIdUsersResponse} message GetHeyasHeyaIdUsersResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetHeyasHeyaIdUsersResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.userId != null && message.userId.length)
                for (let i = 0; i < message.userId.length; ++i)
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.userId[i]);
            return writer;
        };

        /**
         * Encodes the specified GetHeyasHeyaIdUsersResponse message, length delimited. Does not implicitly {@link heya.GetHeyasHeyaIdUsersResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof heya.GetHeyasHeyaIdUsersResponse
         * @static
         * @param {heya.IGetHeyasHeyaIdUsersResponse} message GetHeyasHeyaIdUsersResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetHeyasHeyaIdUsersResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetHeyasHeyaIdUsersResponse message from the specified reader or buffer.
         * @function decode
         * @memberof heya.GetHeyasHeyaIdUsersResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {heya.GetHeyasHeyaIdUsersResponse} GetHeyasHeyaIdUsersResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetHeyasHeyaIdUsersResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.heya.GetHeyasHeyaIdUsersResponse();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.userId && message.userId.length))
                        message.userId = [];
                    message.userId.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetHeyasHeyaIdUsersResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof heya.GetHeyasHeyaIdUsersResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {heya.GetHeyasHeyaIdUsersResponse} GetHeyasHeyaIdUsersResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetHeyasHeyaIdUsersResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetHeyasHeyaIdUsersResponse message.
         * @function verify
         * @memberof heya.GetHeyasHeyaIdUsersResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetHeyasHeyaIdUsersResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.userId != null && message.hasOwnProperty("userId")) {
                if (!Array.isArray(message.userId))
                    return "userId: array expected";
                for (let i = 0; i < message.userId.length; ++i)
                    if (!$util.isString(message.userId[i]))
                        return "userId: string[] expected";
            }
            return null;
        };

        /**
         * Creates a GetHeyasHeyaIdUsersResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof heya.GetHeyasHeyaIdUsersResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {heya.GetHeyasHeyaIdUsersResponse} GetHeyasHeyaIdUsersResponse
         */
        GetHeyasHeyaIdUsersResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.heya.GetHeyasHeyaIdUsersResponse)
                return object;
            let message = new $root.heya.GetHeyasHeyaIdUsersResponse();
            if (object.userId) {
                if (!Array.isArray(object.userId))
                    throw TypeError(".heya.GetHeyasHeyaIdUsersResponse.userId: array expected");
                message.userId = [];
                for (let i = 0; i < object.userId.length; ++i)
                    message.userId[i] = String(object.userId[i]);
            }
            return message;
        };

        /**
         * Creates a plain object from a GetHeyasHeyaIdUsersResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof heya.GetHeyasHeyaIdUsersResponse
         * @static
         * @param {heya.GetHeyasHeyaIdUsersResponse} message GetHeyasHeyaIdUsersResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetHeyasHeyaIdUsersResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.userId = [];
            if (message.userId && message.userId.length) {
                object.userId = [];
                for (let j = 0; j < message.userId.length; ++j)
                    object.userId[j] = message.userId[j];
            }
            return object;
        };

        /**
         * Converts this GetHeyasHeyaIdUsersResponse to JSON.
         * @function toJSON
         * @memberof heya.GetHeyasHeyaIdUsersResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetHeyasHeyaIdUsersResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetHeyasHeyaIdUsersResponse;
    })();

    heya.Heya = (function() {

        /**
         * Properties of a Heya.
         * @memberof heya
         * @interface IHeya
         * @property {string|null} [id] Heya id
         * @property {string|null} [title] Heya title
         * @property {string|null} [description] Heya description
         * @property {string|null} [creatorId] Heya creatorId
         * @property {string|null} [lastEditorId] Heya lastEditorId
         * @property {google.protobuf.ITimestamp|null} [createdAt] Heya createdAt
         * @property {google.protobuf.ITimestamp|null} [updatedAt] Heya updatedAt
         */

        /**
         * Constructs a new Heya.
         * @memberof heya
         * @classdesc Represents a Heya.
         * @implements IHeya
         * @constructor
         * @param {heya.IHeya=} [properties] Properties to set
         */
        function Heya(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Heya id.
         * @member {string} id
         * @memberof heya.Heya
         * @instance
         */
        Heya.prototype.id = "";

        /**
         * Heya title.
         * @member {string} title
         * @memberof heya.Heya
         * @instance
         */
        Heya.prototype.title = "";

        /**
         * Heya description.
         * @member {string} description
         * @memberof heya.Heya
         * @instance
         */
        Heya.prototype.description = "";

        /**
         * Heya creatorId.
         * @member {string} creatorId
         * @memberof heya.Heya
         * @instance
         */
        Heya.prototype.creatorId = "";

        /**
         * Heya lastEditorId.
         * @member {string} lastEditorId
         * @memberof heya.Heya
         * @instance
         */
        Heya.prototype.lastEditorId = "";

        /**
         * Heya createdAt.
         * @member {google.protobuf.ITimestamp|null|undefined} createdAt
         * @memberof heya.Heya
         * @instance
         */
        Heya.prototype.createdAt = null;

        /**
         * Heya updatedAt.
         * @member {google.protobuf.ITimestamp|null|undefined} updatedAt
         * @memberof heya.Heya
         * @instance
         */
        Heya.prototype.updatedAt = null;

        /**
         * Creates a new Heya instance using the specified properties.
         * @function create
         * @memberof heya.Heya
         * @static
         * @param {heya.IHeya=} [properties] Properties to set
         * @returns {heya.Heya} Heya instance
         */
        Heya.create = function create(properties) {
            return new Heya(properties);
        };

        /**
         * Encodes the specified Heya message. Does not implicitly {@link heya.Heya.verify|verify} messages.
         * @function encode
         * @memberof heya.Heya
         * @static
         * @param {heya.IHeya} message Heya message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Heya.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            if (message.title != null && Object.hasOwnProperty.call(message, "title"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.title);
            if (message.description != null && Object.hasOwnProperty.call(message, "description"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.description);
            if (message.creatorId != null && Object.hasOwnProperty.call(message, "creatorId"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.creatorId);
            if (message.lastEditorId != null && Object.hasOwnProperty.call(message, "lastEditorId"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.lastEditorId);
            if (message.createdAt != null && Object.hasOwnProperty.call(message, "createdAt"))
                $root.google.protobuf.Timestamp.encode(message.createdAt, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            if (message.updatedAt != null && Object.hasOwnProperty.call(message, "updatedAt"))
                $root.google.protobuf.Timestamp.encode(message.updatedAt, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Heya message, length delimited. Does not implicitly {@link heya.Heya.verify|verify} messages.
         * @function encodeDelimited
         * @memberof heya.Heya
         * @static
         * @param {heya.IHeya} message Heya message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Heya.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Heya message from the specified reader or buffer.
         * @function decode
         * @memberof heya.Heya
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {heya.Heya} Heya
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Heya.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.heya.Heya();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.title = reader.string();
                    break;
                case 3:
                    message.description = reader.string();
                    break;
                case 4:
                    message.creatorId = reader.string();
                    break;
                case 5:
                    message.lastEditorId = reader.string();
                    break;
                case 6:
                    message.createdAt = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.updatedAt = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Heya message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof heya.Heya
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {heya.Heya} Heya
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Heya.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Heya message.
         * @function verify
         * @memberof heya.Heya
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Heya.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            if (message.title != null && message.hasOwnProperty("title"))
                if (!$util.isString(message.title))
                    return "title: string expected";
            if (message.description != null && message.hasOwnProperty("description"))
                if (!$util.isString(message.description))
                    return "description: string expected";
            if (message.creatorId != null && message.hasOwnProperty("creatorId"))
                if (!$util.isString(message.creatorId))
                    return "creatorId: string expected";
            if (message.lastEditorId != null && message.hasOwnProperty("lastEditorId"))
                if (!$util.isString(message.lastEditorId))
                    return "lastEditorId: string expected";
            if (message.createdAt != null && message.hasOwnProperty("createdAt")) {
                let error = $root.google.protobuf.Timestamp.verify(message.createdAt);
                if (error)
                    return "createdAt." + error;
            }
            if (message.updatedAt != null && message.hasOwnProperty("updatedAt")) {
                let error = $root.google.protobuf.Timestamp.verify(message.updatedAt);
                if (error)
                    return "updatedAt." + error;
            }
            return null;
        };

        /**
         * Creates a Heya message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof heya.Heya
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {heya.Heya} Heya
         */
        Heya.fromObject = function fromObject(object) {
            if (object instanceof $root.heya.Heya)
                return object;
            let message = new $root.heya.Heya();
            if (object.id != null)
                message.id = String(object.id);
            if (object.title != null)
                message.title = String(object.title);
            if (object.description != null)
                message.description = String(object.description);
            if (object.creatorId != null)
                message.creatorId = String(object.creatorId);
            if (object.lastEditorId != null)
                message.lastEditorId = String(object.lastEditorId);
            if (object.createdAt != null) {
                if (typeof object.createdAt !== "object")
                    throw TypeError(".heya.Heya.createdAt: object expected");
                message.createdAt = $root.google.protobuf.Timestamp.fromObject(object.createdAt);
            }
            if (object.updatedAt != null) {
                if (typeof object.updatedAt !== "object")
                    throw TypeError(".heya.Heya.updatedAt: object expected");
                message.updatedAt = $root.google.protobuf.Timestamp.fromObject(object.updatedAt);
            }
            return message;
        };

        /**
         * Creates a plain object from a Heya message. Also converts values to other types if specified.
         * @function toObject
         * @memberof heya.Heya
         * @static
         * @param {heya.Heya} message Heya
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Heya.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.id = "";
                object.title = "";
                object.description = "";
                object.creatorId = "";
                object.lastEditorId = "";
                object.createdAt = null;
                object.updatedAt = null;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.title != null && message.hasOwnProperty("title"))
                object.title = message.title;
            if (message.description != null && message.hasOwnProperty("description"))
                object.description = message.description;
            if (message.creatorId != null && message.hasOwnProperty("creatorId"))
                object.creatorId = message.creatorId;
            if (message.lastEditorId != null && message.hasOwnProperty("lastEditorId"))
                object.lastEditorId = message.lastEditorId;
            if (message.createdAt != null && message.hasOwnProperty("createdAt"))
                object.createdAt = $root.google.protobuf.Timestamp.toObject(message.createdAt, options);
            if (message.updatedAt != null && message.hasOwnProperty("updatedAt"))
                object.updatedAt = $root.google.protobuf.Timestamp.toObject(message.updatedAt, options);
            return object;
        };

        /**
         * Converts this Heya to JSON.
         * @function toJSON
         * @memberof heya.Heya
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Heya.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Heya;
    })();

    heya.Heyas = (function() {

        /**
         * Properties of a Heyas.
         * @memberof heya
         * @interface IHeyas
         * @property {Array.<heya.IHeya>|null} [heyas] Heyas heyas
         */

        /**
         * Constructs a new Heyas.
         * @memberof heya
         * @classdesc Represents a Heyas.
         * @implements IHeyas
         * @constructor
         * @param {heya.IHeyas=} [properties] Properties to set
         */
        function Heyas(properties) {
            this.heyas = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Heyas heyas.
         * @member {Array.<heya.IHeya>} heyas
         * @memberof heya.Heyas
         * @instance
         */
        Heyas.prototype.heyas = $util.emptyArray;

        /**
         * Creates a new Heyas instance using the specified properties.
         * @function create
         * @memberof heya.Heyas
         * @static
         * @param {heya.IHeyas=} [properties] Properties to set
         * @returns {heya.Heyas} Heyas instance
         */
        Heyas.create = function create(properties) {
            return new Heyas(properties);
        };

        /**
         * Encodes the specified Heyas message. Does not implicitly {@link heya.Heyas.verify|verify} messages.
         * @function encode
         * @memberof heya.Heyas
         * @static
         * @param {heya.IHeyas} message Heyas message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Heyas.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.heyas != null && message.heyas.length)
                for (let i = 0; i < message.heyas.length; ++i)
                    $root.heya.Heya.encode(message.heyas[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Heyas message, length delimited. Does not implicitly {@link heya.Heyas.verify|verify} messages.
         * @function encodeDelimited
         * @memberof heya.Heyas
         * @static
         * @param {heya.IHeyas} message Heyas message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Heyas.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Heyas message from the specified reader or buffer.
         * @function decode
         * @memberof heya.Heyas
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {heya.Heyas} Heyas
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Heyas.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.heya.Heyas();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.heyas && message.heyas.length))
                        message.heyas = [];
                    message.heyas.push($root.heya.Heya.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Heyas message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof heya.Heyas
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {heya.Heyas} Heyas
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Heyas.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Heyas message.
         * @function verify
         * @memberof heya.Heyas
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Heyas.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.heyas != null && message.hasOwnProperty("heyas")) {
                if (!Array.isArray(message.heyas))
                    return "heyas: array expected";
                for (let i = 0; i < message.heyas.length; ++i) {
                    let error = $root.heya.Heya.verify(message.heyas[i]);
                    if (error)
                        return "heyas." + error;
                }
            }
            return null;
        };

        /**
         * Creates a Heyas message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof heya.Heyas
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {heya.Heyas} Heyas
         */
        Heyas.fromObject = function fromObject(object) {
            if (object instanceof $root.heya.Heyas)
                return object;
            let message = new $root.heya.Heyas();
            if (object.heyas) {
                if (!Array.isArray(object.heyas))
                    throw TypeError(".heya.Heyas.heyas: array expected");
                message.heyas = [];
                for (let i = 0; i < object.heyas.length; ++i) {
                    if (typeof object.heyas[i] !== "object")
                        throw TypeError(".heya.Heyas.heyas: object expected");
                    message.heyas[i] = $root.heya.Heya.fromObject(object.heyas[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a Heyas message. Also converts values to other types if specified.
         * @function toObject
         * @memberof heya.Heyas
         * @static
         * @param {heya.Heyas} message Heyas
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Heyas.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.heyas = [];
            if (message.heyas && message.heyas.length) {
                object.heyas = [];
                for (let j = 0; j < message.heyas.length; ++j)
                    object.heyas[j] = $root.heya.Heya.toObject(message.heyas[j], options);
            }
            return object;
        };

        /**
         * Converts this Heyas to JSON.
         * @function toJSON
         * @memberof heya.Heyas
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Heyas.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Heyas;
    })();

    return heya;
})();

export const common = $root.common = (() => {

    /**
     * Namespace common.
     * @exports common
     * @namespace
     */
    const common = {};

    common.Status = (function() {

        /**
         * Properties of a Status.
         * @memberof common
         * @interface IStatus
         * @property {number|null} [statusCode] Status statusCode
         * @property {string|null} [message] Status message
         */

        /**
         * Constructs a new Status.
         * @memberof common
         * @classdesc Represents a Status.
         * @implements IStatus
         * @constructor
         * @param {common.IStatus=} [properties] Properties to set
         */
        function Status(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Status statusCode.
         * @member {number} statusCode
         * @memberof common.Status
         * @instance
         */
        Status.prototype.statusCode = 0;

        /**
         * Status message.
         * @member {string} message
         * @memberof common.Status
         * @instance
         */
        Status.prototype.message = "";

        /**
         * Creates a new Status instance using the specified properties.
         * @function create
         * @memberof common.Status
         * @static
         * @param {common.IStatus=} [properties] Properties to set
         * @returns {common.Status} Status instance
         */
        Status.create = function create(properties) {
            return new Status(properties);
        };

        /**
         * Encodes the specified Status message. Does not implicitly {@link common.Status.verify|verify} messages.
         * @function encode
         * @memberof common.Status
         * @static
         * @param {common.IStatus} message Status message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Status.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.statusCode != null && Object.hasOwnProperty.call(message, "statusCode"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.statusCode);
            if (message.message != null && Object.hasOwnProperty.call(message, "message"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.message);
            return writer;
        };

        /**
         * Encodes the specified Status message, length delimited. Does not implicitly {@link common.Status.verify|verify} messages.
         * @function encodeDelimited
         * @memberof common.Status
         * @static
         * @param {common.IStatus} message Status message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Status.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Status message from the specified reader or buffer.
         * @function decode
         * @memberof common.Status
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {common.Status} Status
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Status.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.Status();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.statusCode = reader.int32();
                    break;
                case 2:
                    message.message = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Status message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof common.Status
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {common.Status} Status
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Status.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Status message.
         * @function verify
         * @memberof common.Status
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Status.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.statusCode != null && message.hasOwnProperty("statusCode"))
                if (!$util.isInteger(message.statusCode))
                    return "statusCode: integer expected";
            if (message.message != null && message.hasOwnProperty("message"))
                if (!$util.isString(message.message))
                    return "message: string expected";
            return null;
        };

        /**
         * Creates a Status message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof common.Status
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {common.Status} Status
         */
        Status.fromObject = function fromObject(object) {
            if (object instanceof $root.common.Status)
                return object;
            let message = new $root.common.Status();
            if (object.statusCode != null)
                message.statusCode = object.statusCode | 0;
            if (object.message != null)
                message.message = String(object.message);
            return message;
        };

        /**
         * Creates a plain object from a Status message. Also converts values to other types if specified.
         * @function toObject
         * @memberof common.Status
         * @static
         * @param {common.Status} message Status
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Status.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.statusCode = 0;
                object.message = "";
            }
            if (message.statusCode != null && message.hasOwnProperty("statusCode"))
                object.statusCode = message.statusCode;
            if (message.message != null && message.hasOwnProperty("message"))
                object.message = message.message;
            return object;
        };

        /**
         * Converts this Status to JSON.
         * @function toJSON
         * @memberof common.Status
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Status.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Status;
    })();

    return common;
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

        protobuf.Timestamp = (function() {

            /**
             * Properties of a Timestamp.
             * @memberof google.protobuf
             * @interface ITimestamp
             * @property {number|Long|null} [seconds] Timestamp seconds
             * @property {number|null} [nanos] Timestamp nanos
             */

            /**
             * Constructs a new Timestamp.
             * @memberof google.protobuf
             * @classdesc Represents a Timestamp.
             * @implements ITimestamp
             * @constructor
             * @param {google.protobuf.ITimestamp=} [properties] Properties to set
             */
            function Timestamp(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Timestamp seconds.
             * @member {number|Long} seconds
             * @memberof google.protobuf.Timestamp
             * @instance
             */
            Timestamp.prototype.seconds = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Timestamp nanos.
             * @member {number} nanos
             * @memberof google.protobuf.Timestamp
             * @instance
             */
            Timestamp.prototype.nanos = 0;

            /**
             * Creates a new Timestamp instance using the specified properties.
             * @function create
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {google.protobuf.ITimestamp=} [properties] Properties to set
             * @returns {google.protobuf.Timestamp} Timestamp instance
             */
            Timestamp.create = function create(properties) {
                return new Timestamp(properties);
            };

            /**
             * Encodes the specified Timestamp message. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {google.protobuf.ITimestamp} message Timestamp message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Timestamp.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.seconds != null && Object.hasOwnProperty.call(message, "seconds"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.seconds);
                if (message.nanos != null && Object.hasOwnProperty.call(message, "nanos"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.nanos);
                return writer;
            };

            /**
             * Encodes the specified Timestamp message, length delimited. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {google.protobuf.ITimestamp} message Timestamp message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Timestamp.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Timestamp message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.Timestamp} Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Timestamp.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.Timestamp();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.seconds = reader.int64();
                        break;
                    case 2:
                        message.nanos = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Timestamp message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.Timestamp} Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Timestamp.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Timestamp message.
             * @function verify
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Timestamp.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.seconds != null && message.hasOwnProperty("seconds"))
                    if (!$util.isInteger(message.seconds) && !(message.seconds && $util.isInteger(message.seconds.low) && $util.isInteger(message.seconds.high)))
                        return "seconds: integer|Long expected";
                if (message.nanos != null && message.hasOwnProperty("nanos"))
                    if (!$util.isInteger(message.nanos))
                        return "nanos: integer expected";
                return null;
            };

            /**
             * Creates a Timestamp message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.Timestamp} Timestamp
             */
            Timestamp.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.Timestamp)
                    return object;
                let message = new $root.google.protobuf.Timestamp();
                if (object.seconds != null)
                    if ($util.Long)
                        (message.seconds = $util.Long.fromValue(object.seconds)).unsigned = false;
                    else if (typeof object.seconds === "string")
                        message.seconds = parseInt(object.seconds, 10);
                    else if (typeof object.seconds === "number")
                        message.seconds = object.seconds;
                    else if (typeof object.seconds === "object")
                        message.seconds = new $util.LongBits(object.seconds.low >>> 0, object.seconds.high >>> 0).toNumber();
                if (object.nanos != null)
                    message.nanos = object.nanos | 0;
                return message;
            };

            /**
             * Creates a plain object from a Timestamp message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {google.protobuf.Timestamp} message Timestamp
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Timestamp.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    if ($util.Long) {
                        let long = new $util.Long(0, 0, false);
                        object.seconds = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.seconds = options.longs === String ? "0" : 0;
                    object.nanos = 0;
                }
                if (message.seconds != null && message.hasOwnProperty("seconds"))
                    if (typeof message.seconds === "number")
                        object.seconds = options.longs === String ? String(message.seconds) : message.seconds;
                    else
                        object.seconds = options.longs === String ? $util.Long.prototype.toString.call(message.seconds) : options.longs === Number ? new $util.LongBits(message.seconds.low >>> 0, message.seconds.high >>> 0).toNumber() : message.seconds;
                if (message.nanos != null && message.hasOwnProperty("nanos"))
                    object.nanos = message.nanos;
                return object;
            };

            /**
             * Converts this Timestamp to JSON.
             * @function toJSON
             * @memberof google.protobuf.Timestamp
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Timestamp.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Timestamp;
        })();

        return protobuf;
    })();

    return google;
})();

export { $root as default };
