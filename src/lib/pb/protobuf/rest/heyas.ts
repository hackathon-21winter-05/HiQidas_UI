/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Timestamp } from "../../google/protobuf/timestamp";
import { Status } from "../../protobuf/rest/common";

export const protobufPackage = "heya";

/** GET /heyas 全ヘヤの情報を取得 */
export interface GetHeyasResponse {
  heyas: Heyas | undefined;
}

/** POST /heyas */
export interface PostHeyasRequest {
  title: string;
  description: string;
}

/** POST /heyasの返ってくるレスポンス */
export interface PostHeyasResponse {
  heya: Heya | undefined;
}

/** GET /heyas/{heyaId} ヘヤの情報を取得 */
export interface GetHeyasHeyaIdResponse {
  heya: Heya | undefined;
}

/** PUT /heyas/{heyaId} ヘヤの情報を変更 */
export interface PutHeyasHeyaIdRequest {
  title: string;
  description: string;
}

/** PUT /heyas/{heyaId}の返ってくるレスポンス */
export interface PutHeyasHeyaIdResponse {
  status: Status | undefined;
}

/** DELETE /heyas/{heyaId} ヘヤの削除(アーカイブがよさそう？） */
export interface DeleteHeyasHeyaIdRequest {
  status: Status | undefined;
}

/** GET /heyas/{heyaId}/users ヘヤにいるUserを返す */
export interface GetHeyasHeyaIdUsersResponse {
  userId: string[];
}

export interface Heya {
  id: string;
  title: string;
  description: string;
  creatorId: string;
  lastEditorId: string;
  createdAt: Date | undefined;
  updatedAt: Date | undefined;
}

export interface Heyas {
  heyas: Heya[];
}

const baseGetHeyasResponse: object = {};

export const GetHeyasResponse = {
  encode(
    message: GetHeyasResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.heyas !== undefined) {
      Heyas.encode(message.heyas, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetHeyasResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGetHeyasResponse } as GetHeyasResponse;
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

  fromJSON(object: any): GetHeyasResponse {
    const message = { ...baseGetHeyasResponse } as GetHeyasResponse;
    message.heyas =
      object.heyas !== undefined && object.heyas !== null
        ? Heyas.fromJSON(object.heyas)
        : undefined;
    return message;
  },

  toJSON(message: GetHeyasResponse): unknown {
    const obj: any = {};
    message.heyas !== undefined &&
      (obj.heyas = message.heyas ? Heyas.toJSON(message.heyas) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetHeyasResponse>, I>>(
    object: I
  ): GetHeyasResponse {
    const message = { ...baseGetHeyasResponse } as GetHeyasResponse;
    message.heyas =
      object.heyas !== undefined && object.heyas !== null
        ? Heyas.fromPartial(object.heyas)
        : undefined;
    return message;
  },
};

const basePostHeyasRequest: object = { title: "", description: "" };

export const PostHeyasRequest = {
  encode(
    message: PostHeyasRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PostHeyasRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePostHeyasRequest } as PostHeyasRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
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
  },

  fromJSON(object: any): PostHeyasRequest {
    const message = { ...basePostHeyasRequest } as PostHeyasRequest;
    message.title =
      object.title !== undefined && object.title !== null
        ? String(object.title)
        : "";
    message.description =
      object.description !== undefined && object.description !== null
        ? String(object.description)
        : "";
    return message;
  },

  toJSON(message: PostHeyasRequest): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined &&
      (obj.description = message.description);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PostHeyasRequest>, I>>(
    object: I
  ): PostHeyasRequest {
    const message = { ...basePostHeyasRequest } as PostHeyasRequest;
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    return message;
  },
};

const basePostHeyasResponse: object = {};

export const PostHeyasResponse = {
  encode(
    message: PostHeyasResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.heya !== undefined) {
      Heya.encode(message.heya, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PostHeyasResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePostHeyasResponse } as PostHeyasResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.heya = Heya.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PostHeyasResponse {
    const message = { ...basePostHeyasResponse } as PostHeyasResponse;
    message.heya =
      object.heya !== undefined && object.heya !== null
        ? Heya.fromJSON(object.heya)
        : undefined;
    return message;
  },

  toJSON(message: PostHeyasResponse): unknown {
    const obj: any = {};
    message.heya !== undefined &&
      (obj.heya = message.heya ? Heya.toJSON(message.heya) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PostHeyasResponse>, I>>(
    object: I
  ): PostHeyasResponse {
    const message = { ...basePostHeyasResponse } as PostHeyasResponse;
    message.heya =
      object.heya !== undefined && object.heya !== null
        ? Heya.fromPartial(object.heya)
        : undefined;
    return message;
  },
};

const baseGetHeyasHeyaIdResponse: object = {};

export const GetHeyasHeyaIdResponse = {
  encode(
    message: GetHeyasHeyaIdResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.heya !== undefined) {
      Heya.encode(message.heya, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetHeyasHeyaIdResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGetHeyasHeyaIdResponse } as GetHeyasHeyaIdResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.heya = Heya.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetHeyasHeyaIdResponse {
    const message = { ...baseGetHeyasHeyaIdResponse } as GetHeyasHeyaIdResponse;
    message.heya =
      object.heya !== undefined && object.heya !== null
        ? Heya.fromJSON(object.heya)
        : undefined;
    return message;
  },

  toJSON(message: GetHeyasHeyaIdResponse): unknown {
    const obj: any = {};
    message.heya !== undefined &&
      (obj.heya = message.heya ? Heya.toJSON(message.heya) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetHeyasHeyaIdResponse>, I>>(
    object: I
  ): GetHeyasHeyaIdResponse {
    const message = { ...baseGetHeyasHeyaIdResponse } as GetHeyasHeyaIdResponse;
    message.heya =
      object.heya !== undefined && object.heya !== null
        ? Heya.fromPartial(object.heya)
        : undefined;
    return message;
  },
};

const basePutHeyasHeyaIdRequest: object = { title: "", description: "" };

export const PutHeyasHeyaIdRequest = {
  encode(
    message: PutHeyasHeyaIdRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): PutHeyasHeyaIdRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePutHeyasHeyaIdRequest } as PutHeyasHeyaIdRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
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
  },

  fromJSON(object: any): PutHeyasHeyaIdRequest {
    const message = { ...basePutHeyasHeyaIdRequest } as PutHeyasHeyaIdRequest;
    message.title =
      object.title !== undefined && object.title !== null
        ? String(object.title)
        : "";
    message.description =
      object.description !== undefined && object.description !== null
        ? String(object.description)
        : "";
    return message;
  },

  toJSON(message: PutHeyasHeyaIdRequest): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined &&
      (obj.description = message.description);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PutHeyasHeyaIdRequest>, I>>(
    object: I
  ): PutHeyasHeyaIdRequest {
    const message = { ...basePutHeyasHeyaIdRequest } as PutHeyasHeyaIdRequest;
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    return message;
  },
};

const basePutHeyasHeyaIdResponse: object = {};

export const PutHeyasHeyaIdResponse = {
  encode(
    message: PutHeyasHeyaIdResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.status !== undefined) {
      Status.encode(message.status, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): PutHeyasHeyaIdResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePutHeyasHeyaIdResponse } as PutHeyasHeyaIdResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.status = Status.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PutHeyasHeyaIdResponse {
    const message = { ...basePutHeyasHeyaIdResponse } as PutHeyasHeyaIdResponse;
    message.status =
      object.status !== undefined && object.status !== null
        ? Status.fromJSON(object.status)
        : undefined;
    return message;
  },

  toJSON(message: PutHeyasHeyaIdResponse): unknown {
    const obj: any = {};
    message.status !== undefined &&
      (obj.status = message.status ? Status.toJSON(message.status) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PutHeyasHeyaIdResponse>, I>>(
    object: I
  ): PutHeyasHeyaIdResponse {
    const message = { ...basePutHeyasHeyaIdResponse } as PutHeyasHeyaIdResponse;
    message.status =
      object.status !== undefined && object.status !== null
        ? Status.fromPartial(object.status)
        : undefined;
    return message;
  },
};

const baseDeleteHeyasHeyaIdRequest: object = {};

export const DeleteHeyasHeyaIdRequest = {
  encode(
    message: DeleteHeyasHeyaIdRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.status !== undefined) {
      Status.encode(message.status, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DeleteHeyasHeyaIdRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseDeleteHeyasHeyaIdRequest,
    } as DeleteHeyasHeyaIdRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.status = Status.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteHeyasHeyaIdRequest {
    const message = {
      ...baseDeleteHeyasHeyaIdRequest,
    } as DeleteHeyasHeyaIdRequest;
    message.status =
      object.status !== undefined && object.status !== null
        ? Status.fromJSON(object.status)
        : undefined;
    return message;
  },

  toJSON(message: DeleteHeyasHeyaIdRequest): unknown {
    const obj: any = {};
    message.status !== undefined &&
      (obj.status = message.status ? Status.toJSON(message.status) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DeleteHeyasHeyaIdRequest>, I>>(
    object: I
  ): DeleteHeyasHeyaIdRequest {
    const message = {
      ...baseDeleteHeyasHeyaIdRequest,
    } as DeleteHeyasHeyaIdRequest;
    message.status =
      object.status !== undefined && object.status !== null
        ? Status.fromPartial(object.status)
        : undefined;
    return message;
  },
};

const baseGetHeyasHeyaIdUsersResponse: object = { userId: "" };

export const GetHeyasHeyaIdUsersResponse = {
  encode(
    message: GetHeyasHeyaIdUsersResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.userId) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetHeyasHeyaIdUsersResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseGetHeyasHeyaIdUsersResponse,
    } as GetHeyasHeyaIdUsersResponse;
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

  fromJSON(object: any): GetHeyasHeyaIdUsersResponse {
    const message = {
      ...baseGetHeyasHeyaIdUsersResponse,
    } as GetHeyasHeyaIdUsersResponse;
    message.userId = (object.userId ?? []).map((e: any) => String(e));
    return message;
  },

  toJSON(message: GetHeyasHeyaIdUsersResponse): unknown {
    const obj: any = {};
    if (message.userId) {
      obj.userId = message.userId.map((e) => e);
    } else {
      obj.userId = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetHeyasHeyaIdUsersResponse>, I>>(
    object: I
  ): GetHeyasHeyaIdUsersResponse {
    const message = {
      ...baseGetHeyasHeyaIdUsersResponse,
    } as GetHeyasHeyaIdUsersResponse;
    message.userId = object.userId?.map((e) => e) || [];
    return message;
  },
};

const baseHeya: object = {
  id: "",
  title: "",
  description: "",
  creatorId: "",
  lastEditorId: "",
};

export const Heya = {
  encode(message: Heya, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.title !== "") {
      writer.uint32(18).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    if (message.creatorId !== "") {
      writer.uint32(34).string(message.creatorId);
    }
    if (message.lastEditorId !== "") {
      writer.uint32(42).string(message.lastEditorId);
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(
        toTimestamp(message.createdAt),
        writer.uint32(50).fork()
      ).ldelim();
    }
    if (message.updatedAt !== undefined) {
      Timestamp.encode(
        toTimestamp(message.updatedAt),
        writer.uint32(58).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Heya {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseHeya } as Heya;
    while (reader.pos < end) {
      const tag = reader.uint32();
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
          message.createdAt = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 7:
          message.updatedAt = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Heya {
    const message = { ...baseHeya } as Heya;
    message.id =
      object.id !== undefined && object.id !== null ? String(object.id) : "";
    message.title =
      object.title !== undefined && object.title !== null
        ? String(object.title)
        : "";
    message.description =
      object.description !== undefined && object.description !== null
        ? String(object.description)
        : "";
    message.creatorId =
      object.creatorId !== undefined && object.creatorId !== null
        ? String(object.creatorId)
        : "";
    message.lastEditorId =
      object.lastEditorId !== undefined && object.lastEditorId !== null
        ? String(object.lastEditorId)
        : "";
    message.createdAt =
      object.createdAt !== undefined && object.createdAt !== null
        ? fromJsonTimestamp(object.createdAt)
        : undefined;
    message.updatedAt =
      object.updatedAt !== undefined && object.updatedAt !== null
        ? fromJsonTimestamp(object.updatedAt)
        : undefined;
    return message;
  },

  toJSON(message: Heya): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined &&
      (obj.description = message.description);
    message.creatorId !== undefined && (obj.creatorId = message.creatorId);
    message.lastEditorId !== undefined &&
      (obj.lastEditorId = message.lastEditorId);
    message.createdAt !== undefined &&
      (obj.createdAt = message.createdAt.toISOString());
    message.updatedAt !== undefined &&
      (obj.updatedAt = message.updatedAt.toISOString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Heya>, I>>(object: I): Heya {
    const message = { ...baseHeya } as Heya;
    message.id = object.id ?? "";
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.creatorId = object.creatorId ?? "";
    message.lastEditorId = object.lastEditorId ?? "";
    message.createdAt = object.createdAt ?? undefined;
    message.updatedAt = object.updatedAt ?? undefined;
    return message;
  },
};

const baseHeyas: object = {};

export const Heyas = {
  encode(message: Heyas, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.heyas) {
      Heya.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Heyas {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseHeyas } as Heyas;
    message.heyas = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.heyas.push(Heya.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Heyas {
    const message = { ...baseHeyas } as Heyas;
    message.heyas = (object.heyas ?? []).map((e: any) => Heya.fromJSON(e));
    return message;
  },

  toJSON(message: Heyas): unknown {
    const obj: any = {};
    if (message.heyas) {
      obj.heyas = message.heyas.map((e) => (e ? Heya.toJSON(e) : undefined));
    } else {
      obj.heyas = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Heyas>, I>>(object: I): Heyas {
    const message = { ...baseHeyas } as Heyas;
    message.heyas = object.heyas?.map((e) => Heya.fromPartial(e)) || [];
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

function toTimestamp(date: Date): Timestamp {
  const seconds = date.getTime() / 1_000;
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = t.seconds * 1_000;
  millis += t.nanos / 1_000_000;
  return new Date(millis);
}

function fromJsonTimestamp(o: any): Date {
  if (o instanceof Date) {
    return o;
  } else if (typeof o === "string") {
    return new Date(o);
  } else {
    return fromTimestamp(Timestamp.fromJSON(o));
  }
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
