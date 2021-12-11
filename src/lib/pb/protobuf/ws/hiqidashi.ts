/* eslint-disable */
import { util, configure, Writer, Reader } from "protobufjs/minimal";
import * as Long from "long";
import { StringValue } from "../../google/protobuf/wrappers";

export const protobufPackage = "hiqidashi";

export interface WsSendHiqidashi {
  hiqidashi: Hiqidashi | undefined;
}

export interface WsSendHiqidashis {
  hiqidashis: Hiqidashi[];
}

export interface WsCreateHiqidashi {
  parentId: string;
}

export interface WsEditHiqidashi {
  id: string;
  title: string | undefined;
  drawing: string | undefined;
  colorCode: string | undefined;
}

export interface WsDeleteHiqidashi {
  id: string;
}

/** Hiqidashiの基本的な情報 */
export interface Hiqidashi {
  id: string;
  creatorId: string;
  parentId: string | undefined;
  title: string;
  description: string;
  drawing: string | undefined;
  colorCode: string;
}

const baseWsSendHiqidashi: object = {};

export const WsSendHiqidashi = {
  encode(message: WsSendHiqidashi, writer: Writer = Writer.create()): Writer {
    if (message.hiqidashi !== undefined) {
      Hiqidashi.encode(message.hiqidashi, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): WsSendHiqidashi {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseWsSendHiqidashi } as WsSendHiqidashi;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hiqidashi = Hiqidashi.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): WsSendHiqidashi {
    const message = { ...baseWsSendHiqidashi } as WsSendHiqidashi;
    message.hiqidashi =
      object.hiqidashi !== undefined && object.hiqidashi !== null
        ? Hiqidashi.fromJSON(object.hiqidashi)
        : undefined;
    return message;
  },

  toJSON(message: WsSendHiqidashi): unknown {
    const obj: any = {};
    message.hiqidashi !== undefined &&
      (obj.hiqidashi = message.hiqidashi
        ? Hiqidashi.toJSON(message.hiqidashi)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<WsSendHiqidashi>, I>>(
    object: I
  ): WsSendHiqidashi {
    const message = { ...baseWsSendHiqidashi } as WsSendHiqidashi;
    message.hiqidashi =
      object.hiqidashi !== undefined && object.hiqidashi !== null
        ? Hiqidashi.fromPartial(object.hiqidashi)
        : undefined;
    return message;
  },
};

const baseWsSendHiqidashis: object = {};

export const WsSendHiqidashis = {
  encode(message: WsSendHiqidashis, writer: Writer = Writer.create()): Writer {
    for (const v of message.hiqidashis) {
      Hiqidashi.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): WsSendHiqidashis {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseWsSendHiqidashis } as WsSendHiqidashis;
    message.hiqidashis = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hiqidashis.push(Hiqidashi.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): WsSendHiqidashis {
    const message = { ...baseWsSendHiqidashis } as WsSendHiqidashis;
    message.hiqidashis = (object.hiqidashis ?? []).map((e: any) =>
      Hiqidashi.fromJSON(e)
    );
    return message;
  },

  toJSON(message: WsSendHiqidashis): unknown {
    const obj: any = {};
    if (message.hiqidashis) {
      obj.hiqidashis = message.hiqidashis.map((e) =>
        e ? Hiqidashi.toJSON(e) : undefined
      );
    } else {
      obj.hiqidashis = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<WsSendHiqidashis>, I>>(
    object: I
  ): WsSendHiqidashis {
    const message = { ...baseWsSendHiqidashis } as WsSendHiqidashis;
    message.hiqidashis =
      object.hiqidashis?.map((e) => Hiqidashi.fromPartial(e)) || [];
    return message;
  },
};

const baseWsCreateHiqidashi: object = { parentId: "" };

export const WsCreateHiqidashi = {
  encode(message: WsCreateHiqidashi, writer: Writer = Writer.create()): Writer {
    if (message.parentId !== "") {
      writer.uint32(10).string(message.parentId);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): WsCreateHiqidashi {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseWsCreateHiqidashi } as WsCreateHiqidashi;
    while (reader.pos < end) {
      const tag = reader.uint32();
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
  },

  fromJSON(object: any): WsCreateHiqidashi {
    const message = { ...baseWsCreateHiqidashi } as WsCreateHiqidashi;
    message.parentId =
      object.parentId !== undefined && object.parentId !== null
        ? String(object.parentId)
        : "";
    return message;
  },

  toJSON(message: WsCreateHiqidashi): unknown {
    const obj: any = {};
    message.parentId !== undefined && (obj.parentId = message.parentId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<WsCreateHiqidashi>, I>>(
    object: I
  ): WsCreateHiqidashi {
    const message = { ...baseWsCreateHiqidashi } as WsCreateHiqidashi;
    message.parentId = object.parentId ?? "";
    return message;
  },
};

const baseWsEditHiqidashi: object = { id: "" };

export const WsEditHiqidashi = {
  encode(message: WsEditHiqidashi, writer: Writer = Writer.create()): Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.title !== undefined) {
      StringValue.encode(
        { value: message.title! },
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.drawing !== undefined) {
      StringValue.encode(
        { value: message.drawing! },
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.colorCode !== undefined) {
      StringValue.encode(
        { value: message.colorCode! },
        writer.uint32(34).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): WsEditHiqidashi {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseWsEditHiqidashi } as WsEditHiqidashi;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.title = StringValue.decode(reader, reader.uint32()).value;
          break;
        case 3:
          message.drawing = StringValue.decode(reader, reader.uint32()).value;
          break;
        case 4:
          message.colorCode = StringValue.decode(reader, reader.uint32()).value;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): WsEditHiqidashi {
    const message = { ...baseWsEditHiqidashi } as WsEditHiqidashi;
    message.id =
      object.id !== undefined && object.id !== null ? String(object.id) : "";
    message.title =
      object.title !== undefined && object.title !== null
        ? String(object.title)
        : undefined;
    message.drawing =
      object.drawing !== undefined && object.drawing !== null
        ? String(object.drawing)
        : undefined;
    message.colorCode =
      object.colorCode !== undefined && object.colorCode !== null
        ? String(object.colorCode)
        : undefined;
    return message;
  },

  toJSON(message: WsEditHiqidashi): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.title !== undefined && (obj.title = message.title);
    message.drawing !== undefined && (obj.drawing = message.drawing);
    message.colorCode !== undefined && (obj.colorCode = message.colorCode);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<WsEditHiqidashi>, I>>(
    object: I
  ): WsEditHiqidashi {
    const message = { ...baseWsEditHiqidashi } as WsEditHiqidashi;
    message.id = object.id ?? "";
    message.title = object.title ?? undefined;
    message.drawing = object.drawing ?? undefined;
    message.colorCode = object.colorCode ?? undefined;
    return message;
  },
};

const baseWsDeleteHiqidashi: object = { id: "" };

export const WsDeleteHiqidashi = {
  encode(message: WsDeleteHiqidashi, writer: Writer = Writer.create()): Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): WsDeleteHiqidashi {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseWsDeleteHiqidashi } as WsDeleteHiqidashi;
    while (reader.pos < end) {
      const tag = reader.uint32();
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
  },

  fromJSON(object: any): WsDeleteHiqidashi {
    const message = { ...baseWsDeleteHiqidashi } as WsDeleteHiqidashi;
    message.id =
      object.id !== undefined && object.id !== null ? String(object.id) : "";
    return message;
  },

  toJSON(message: WsDeleteHiqidashi): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<WsDeleteHiqidashi>, I>>(
    object: I
  ): WsDeleteHiqidashi {
    const message = { ...baseWsDeleteHiqidashi } as WsDeleteHiqidashi;
    message.id = object.id ?? "";
    return message;
  },
};

const baseHiqidashi: object = {
  id: "",
  creatorId: "",
  title: "",
  description: "",
  colorCode: "",
};

export const Hiqidashi = {
  encode(message: Hiqidashi, writer: Writer = Writer.create()): Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.creatorId !== "") {
      writer.uint32(18).string(message.creatorId);
    }
    if (message.parentId !== undefined) {
      StringValue.encode(
        { value: message.parentId! },
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.title !== "") {
      writer.uint32(34).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(42).string(message.description);
    }
    if (message.drawing !== undefined) {
      StringValue.encode(
        { value: message.drawing! },
        writer.uint32(50).fork()
      ).ldelim();
    }
    if (message.colorCode !== "") {
      writer.uint32(58).string(message.colorCode);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Hiqidashi {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseHiqidashi } as Hiqidashi;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.creatorId = reader.string();
          break;
        case 3:
          message.parentId = StringValue.decode(reader, reader.uint32()).value;
          break;
        case 4:
          message.title = reader.string();
          break;
        case 5:
          message.description = reader.string();
          break;
        case 6:
          message.drawing = StringValue.decode(reader, reader.uint32()).value;
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
  },

  fromJSON(object: any): Hiqidashi {
    const message = { ...baseHiqidashi } as Hiqidashi;
    message.id =
      object.id !== undefined && object.id !== null ? String(object.id) : "";
    message.creatorId =
      object.creatorId !== undefined && object.creatorId !== null
        ? String(object.creatorId)
        : "";
    message.parentId =
      object.parentId !== undefined && object.parentId !== null
        ? String(object.parentId)
        : undefined;
    message.title =
      object.title !== undefined && object.title !== null
        ? String(object.title)
        : "";
    message.description =
      object.description !== undefined && object.description !== null
        ? String(object.description)
        : "";
    message.drawing =
      object.drawing !== undefined && object.drawing !== null
        ? String(object.drawing)
        : undefined;
    message.colorCode =
      object.colorCode !== undefined && object.colorCode !== null
        ? String(object.colorCode)
        : "";
    return message;
  },

  toJSON(message: Hiqidashi): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.creatorId !== undefined && (obj.creatorId = message.creatorId);
    message.parentId !== undefined && (obj.parentId = message.parentId);
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined &&
      (obj.description = message.description);
    message.drawing !== undefined && (obj.drawing = message.drawing);
    message.colorCode !== undefined && (obj.colorCode = message.colorCode);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Hiqidashi>, I>>(
    object: I
  ): Hiqidashi {
    const message = { ...baseHiqidashi } as Hiqidashi;
    message.id = object.id ?? "";
    message.creatorId = object.creatorId ?? "";
    message.parentId = object.parentId ?? undefined;
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.drawing = object.drawing ?? undefined;
    message.colorCode = object.colorCode ?? "";
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
