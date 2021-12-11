/* eslint-disable */
import { util, configure, Writer, Reader } from "protobufjs/minimal";
import * as Long from "long";

export const protobufPackage = "oauth";

/** POST /oauth/code　OAuthのCodeをリクエストする */
export interface PostOauthCodeRequest {
  code: string;
}

/** GET /oauth/callback OauthのCallbackのステータス */
export interface GetOauthCallbackResponse {
  uri: string;
}

const basePostOauthCodeRequest: object = { code: "" };

export const PostOauthCodeRequest = {
  encode(
    message: PostOauthCodeRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.code !== "") {
      writer.uint32(10).string(message.code);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): PostOauthCodeRequest {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePostOauthCodeRequest } as PostOauthCodeRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
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
  },

  fromJSON(object: any): PostOauthCodeRequest {
    const message = { ...basePostOauthCodeRequest } as PostOauthCodeRequest;
    message.code =
      object.code !== undefined && object.code !== null
        ? String(object.code)
        : "";
    return message;
  },

  toJSON(message: PostOauthCodeRequest): unknown {
    const obj: any = {};
    message.code !== undefined && (obj.code = message.code);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PostOauthCodeRequest>, I>>(
    object: I
  ): PostOauthCodeRequest {
    const message = { ...basePostOauthCodeRequest } as PostOauthCodeRequest;
    message.code = object.code ?? "";
    return message;
  },
};

const baseGetOauthCallbackResponse: object = { uri: "" };

export const GetOauthCallbackResponse = {
  encode(
    message: GetOauthCallbackResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.uri !== "") {
      writer.uint32(10).string(message.uri);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): GetOauthCallbackResponse {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseGetOauthCallbackResponse,
    } as GetOauthCallbackResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
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
  },

  fromJSON(object: any): GetOauthCallbackResponse {
    const message = {
      ...baseGetOauthCallbackResponse,
    } as GetOauthCallbackResponse;
    message.uri =
      object.uri !== undefined && object.uri !== null ? String(object.uri) : "";
    return message;
  },

  toJSON(message: GetOauthCallbackResponse): unknown {
    const obj: any = {};
    message.uri !== undefined && (obj.uri = message.uri);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetOauthCallbackResponse>, I>>(
    object: I
  ): GetOauthCallbackResponse {
    const message = {
      ...baseGetOauthCallbackResponse,
    } as GetOauthCallbackResponse;
    message.uri = object.uri ?? "";
    return message;
  },
};

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined;

export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin
  ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & Record<
        Exclude<keyof I, KeysOfUnion<P>>,
        never
      >;

// If you get a compile-error about 'Constructor<Long> and ... have no overlap',
// add '--ts_proto_opt=esModuleInterop=true' as a flag when calling 'protoc'.
if (util.Long !== Long) {
  util.Long = Long as any;
  configure();
}
