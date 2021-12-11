/* eslint-disable */
import { util, configure, Writer, Reader } from "protobufjs/minimal";
import * as Long from "long";
import { Heyas } from "../../protobuf/rest/heyas";

export const protobufPackage = "users";

/** GET /Users ユーザー一覧を取得 */
export interface GetUsersResponse {
  userId: string[];
}

/** POST /users ユーザーの名前をPOST */
export interface PostUsersRequest {
  name: string;
}

/** GET /users/{userId} ユーザーの詳細情報を取得 */
export interface GetUsersUserIdResponse {
  user: User | undefined;
}

/** GET /users/me 自分の情報を取得 */
export interface GetUsersMeResponse {
  me: User | undefined;
}

/** GET /users/me/favorites 自分のお気に入りシートの取得 */
export interface GetUsersMeFavorites {
  favoriteHeyaId: string[];
}

/** GET /users/me/heyas */
export interface GetUsersMeHeyasResponse {
  heyas: Heyas | undefined;
}

export interface User {
  id: string;
  name: string;
}

export interface Users {
  users: User[];
}

const baseGetUsersResponse: object = { userId: "" };

export const GetUsersResponse = {
  encode(message: GetUsersResponse, writer: Writer = Writer.create()): Writer {
    for (const v of message.userId) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): GetUsersResponse {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGetUsersResponse } as GetUsersResponse;
    message.userId = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.userId.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetUsersResponse {
    const message = { ...baseGetUsersResponse } as GetUsersResponse;
    message.userId = (object.userId ?? []).map((e: any) => String(e));
    return message;
  },

  toJSON(message: GetUsersResponse): unknown {
    const obj: any = {};
    if (message.userId) {
      obj.userId = message.userId.map((e) => e);
    } else {
      obj.userId = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetUsersResponse>, I>>(
    object: I
  ): GetUsersResponse {
    const message = { ...baseGetUsersResponse } as GetUsersResponse;
    message.userId = object.userId?.map((e) => e) || [];
    return message;
  },
};

const basePostUsersRequest: object = { name: "" };

export const PostUsersRequest = {
  encode(message: PostUsersRequest, writer: Writer = Writer.create()): Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): PostUsersRequest {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePostUsersRequest } as PostUsersRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
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
  },

  fromJSON(object: any): PostUsersRequest {
    const message = { ...basePostUsersRequest } as PostUsersRequest;
    message.name =
      object.name !== undefined && object.name !== null
        ? String(object.name)
        : "";
    return message;
  },

  toJSON(message: PostUsersRequest): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PostUsersRequest>, I>>(
    object: I
  ): PostUsersRequest {
    const message = { ...basePostUsersRequest } as PostUsersRequest;
    message.name = object.name ?? "";
    return message;
  },
};

const baseGetUsersUserIdResponse: object = {};

export const GetUsersUserIdResponse = {
  encode(
    message: GetUsersUserIdResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.user !== undefined) {
      User.encode(message.user, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): GetUsersUserIdResponse {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGetUsersUserIdResponse } as GetUsersUserIdResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.user = User.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetUsersUserIdResponse {
    const message = { ...baseGetUsersUserIdResponse } as GetUsersUserIdResponse;
    message.user =
      object.user !== undefined && object.user !== null
        ? User.fromJSON(object.user)
        : undefined;
    return message;
  },

  toJSON(message: GetUsersUserIdResponse): unknown {
    const obj: any = {};
    message.user !== undefined &&
      (obj.user = message.user ? User.toJSON(message.user) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetUsersUserIdResponse>, I>>(
    object: I
  ): GetUsersUserIdResponse {
    const message = { ...baseGetUsersUserIdResponse } as GetUsersUserIdResponse;
    message.user =
      object.user !== undefined && object.user !== null
        ? User.fromPartial(object.user)
        : undefined;
    return message;
  },
};

const baseGetUsersMeResponse: object = {};

export const GetUsersMeResponse = {
  encode(
    message: GetUsersMeResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.me !== undefined) {
      User.encode(message.me, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): GetUsersMeResponse {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGetUsersMeResponse } as GetUsersMeResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.me = User.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetUsersMeResponse {
    const message = { ...baseGetUsersMeResponse } as GetUsersMeResponse;
    message.me =
      object.me !== undefined && object.me !== null
        ? User.fromJSON(object.me)
        : undefined;
    return message;
  },

  toJSON(message: GetUsersMeResponse): unknown {
    const obj: any = {};
    message.me !== undefined &&
      (obj.me = message.me ? User.toJSON(message.me) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetUsersMeResponse>, I>>(
    object: I
  ): GetUsersMeResponse {
    const message = { ...baseGetUsersMeResponse } as GetUsersMeResponse;
    message.me =
      object.me !== undefined && object.me !== null
        ? User.fromPartial(object.me)
        : undefined;
    return message;
  },
};

const baseGetUsersMeFavorites: object = { favoriteHeyaId: "" };

export const GetUsersMeFavorites = {
  encode(
    message: GetUsersMeFavorites,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.favoriteHeyaId) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): GetUsersMeFavorites {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGetUsersMeFavorites } as GetUsersMeFavorites;
    message.favoriteHeyaId = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.favoriteHeyaId.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetUsersMeFavorites {
    const message = { ...baseGetUsersMeFavorites } as GetUsersMeFavorites;
    message.favoriteHeyaId = (object.favoriteHeyaId ?? []).map((e: any) =>
      String(e)
    );
    return message;
  },

  toJSON(message: GetUsersMeFavorites): unknown {
    const obj: any = {};
    if (message.favoriteHeyaId) {
      obj.favoriteHeyaId = message.favoriteHeyaId.map((e) => e);
    } else {
      obj.favoriteHeyaId = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetUsersMeFavorites>, I>>(
    object: I
  ): GetUsersMeFavorites {
    const message = { ...baseGetUsersMeFavorites } as GetUsersMeFavorites;
    message.favoriteHeyaId = object.favoriteHeyaId?.map((e) => e) || [];
    return message;
  },
};

const baseGetUsersMeHeyasResponse: object = {};

export const GetUsersMeHeyasResponse = {
  encode(
    message: GetUsersMeHeyasResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.heyas !== undefined) {
      Heyas.encode(message.heyas, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): GetUsersMeHeyasResponse {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseGetUsersMeHeyasResponse,
    } as GetUsersMeHeyasResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.heyas = Heyas.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetUsersMeHeyasResponse {
    const message = {
      ...baseGetUsersMeHeyasResponse,
    } as GetUsersMeHeyasResponse;
    message.heyas =
      object.heyas !== undefined && object.heyas !== null
        ? Heyas.fromJSON(object.heyas)
        : undefined;
    return message;
  },

  toJSON(message: GetUsersMeHeyasResponse): unknown {
    const obj: any = {};
    message.heyas !== undefined &&
      (obj.heyas = message.heyas ? Heyas.toJSON(message.heyas) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetUsersMeHeyasResponse>, I>>(
    object: I
  ): GetUsersMeHeyasResponse {
    const message = {
      ...baseGetUsersMeHeyasResponse,
    } as GetUsersMeHeyasResponse;
    message.heyas =
      object.heyas !== undefined && object.heyas !== null
        ? Heyas.fromPartial(object.heyas)
        : undefined;
    return message;
  },
};

const baseUser: object = { id: "", name: "" };

export const User = {
  encode(message: User, writer: Writer = Writer.create()): Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): User {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseUser } as User;
    while (reader.pos < end) {
      const tag = reader.uint32();
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
  },

  fromJSON(object: any): User {
    const message = { ...baseUser } as User;
    message.id =
      object.id !== undefined && object.id !== null ? String(object.id) : "";
    message.name =
      object.name !== undefined && object.name !== null
        ? String(object.name)
        : "";
    return message;
  },

  toJSON(message: User): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<User>, I>>(object: I): User {
    const message = { ...baseUser } as User;
    message.id = object.id ?? "";
    message.name = object.name ?? "";
    return message;
  },
};

const baseUsers: object = {};

export const Users = {
  encode(message: Users, writer: Writer = Writer.create()): Writer {
    for (const v of message.users) {
      User.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Users {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseUsers } as Users;
    message.users = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.users.push(User.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Users {
    const message = { ...baseUsers } as Users;
    message.users = (object.users ?? []).map((e: any) => User.fromJSON(e));
    return message;
  },

  toJSON(message: Users): unknown {
    const obj: any = {};
    if (message.users) {
      obj.users = message.users.map((e) => (e ? User.toJSON(e) : undefined));
    } else {
      obj.users = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Users>, I>>(object: I): Users {
    const message = { ...baseUsers } as Users;
    message.users = object.users?.map((e) => User.fromPartial(e)) || [];
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
