/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
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

/** POST /users レスポンス */
export interface PostUsersResponse {
  user: User | undefined;
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
export interface GetUsersMeFavoritesRequest {
  favoriteHeyaId: string[];
}

/** GET /users/me/heyas */
export interface GetUsersMeHeyasResponse {
  heyas: Heyas | undefined;
}

export interface User {
  id: string;
  name: string;
  iconFileId: string;
}

export interface Users {
  users: User[];
}

const baseGetUsersResponse: object = { userId: "" };

export const GetUsersResponse = {
  encode(
    message: GetUsersResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.userId) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetUsersResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  encode(
    message: PostUsersRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PostUsersRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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

const basePostUsersResponse: object = {};

export const PostUsersResponse = {
  encode(
    message: PostUsersResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.user !== undefined) {
      User.encode(message.user, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PostUsersResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePostUsersResponse } as PostUsersResponse;
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

  fromJSON(object: any): PostUsersResponse {
    const message = { ...basePostUsersResponse } as PostUsersResponse;
    message.user =
      object.user !== undefined && object.user !== null
        ? User.fromJSON(object.user)
        : undefined;
    return message;
  },

  toJSON(message: PostUsersResponse): unknown {
    const obj: any = {};
    message.user !== undefined &&
      (obj.user = message.user ? User.toJSON(message.user) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PostUsersResponse>, I>>(
    object: I
  ): PostUsersResponse {
    const message = { ...basePostUsersResponse } as PostUsersResponse;
    message.user =
      object.user !== undefined && object.user !== null
        ? User.fromPartial(object.user)
        : undefined;
    return message;
  },
};

const baseGetUsersUserIdResponse: object = {};

export const GetUsersUserIdResponse = {
  encode(
    message: GetUsersUserIdResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.user !== undefined) {
      User.encode(message.user, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetUsersUserIdResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.me !== undefined) {
      User.encode(message.me, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetUsersMeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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

const baseGetUsersMeFavoritesRequest: object = { favoriteHeyaId: "" };

export const GetUsersMeFavoritesRequest = {
  encode(
    message: GetUsersMeFavoritesRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.favoriteHeyaId) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetUsersMeFavoritesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseGetUsersMeFavoritesRequest,
    } as GetUsersMeFavoritesRequest;
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

  fromJSON(object: any): GetUsersMeFavoritesRequest {
    const message = {
      ...baseGetUsersMeFavoritesRequest,
    } as GetUsersMeFavoritesRequest;
    message.favoriteHeyaId = (object.favoriteHeyaId ?? []).map((e: any) =>
      String(e)
    );
    return message;
  },

  toJSON(message: GetUsersMeFavoritesRequest): unknown {
    const obj: any = {};
    if (message.favoriteHeyaId) {
      obj.favoriteHeyaId = message.favoriteHeyaId.map((e) => e);
    } else {
      obj.favoriteHeyaId = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetUsersMeFavoritesRequest>, I>>(
    object: I
  ): GetUsersMeFavoritesRequest {
    const message = {
      ...baseGetUsersMeFavoritesRequest,
    } as GetUsersMeFavoritesRequest;
    message.favoriteHeyaId = object.favoriteHeyaId?.map((e) => e) || [];
    return message;
  },
};

const baseGetUsersMeHeyasResponse: object = {};

export const GetUsersMeHeyasResponse = {
  encode(
    message: GetUsersMeHeyasResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.heyas !== undefined) {
      Heyas.encode(message.heyas, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetUsersMeHeyasResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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

const baseUser: object = { id: "", name: "", iconFileId: "" };

export const User = {
  encode(message: User, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.iconFileId !== "") {
      writer.uint32(26).string(message.iconFileId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): User {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
        case 3:
          message.iconFileId = reader.string();
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
    message.iconFileId =
      object.iconFileId !== undefined && object.iconFileId !== null
        ? String(object.iconFileId)
        : "";
    return message;
  },

  toJSON(message: User): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.name !== undefined && (obj.name = message.name);
    message.iconFileId !== undefined && (obj.iconFileId = message.iconFileId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<User>, I>>(object: I): User {
    const message = { ...baseUser } as User;
    message.id = object.id ?? "";
    message.name = object.name ?? "";
    message.iconFileId = object.iconFileId ?? "";
    return message;
  },
};

const baseUsers: object = {};

export const Users = {
  encode(message: Users, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.users) {
      User.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Users {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
