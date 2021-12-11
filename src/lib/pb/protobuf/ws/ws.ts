/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import {
  WsSendHiqidashi,
  WsSendHiqidashis,
  WsCreateHiqidashi,
  WsEditHiqidashi,
  WsDeleteHiqidashi,
} from "../../protobuf/ws/hiqidashi";

export const protobufPackage = "hiqidashi";

export interface WsHeyaData {
  sendHiqidashi: WsSendHiqidashi | undefined;
  sendHiqidashis: WsSendHiqidashis | undefined;
  createHiqidashi: WsCreateHiqidashi | undefined;
  editHiqidashi: WsEditHiqidashi | undefined;
  deleteHiqidashi: WsDeleteHiqidashi | undefined;
  error: WsError | undefined;
}

export interface WsError {
  message: string;
}

const baseWsHeyaData: object = {};

export const WsHeyaData = {
  encode(
    message: WsHeyaData,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.sendHiqidashi !== undefined) {
      WsSendHiqidashi.encode(
        message.sendHiqidashi,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.sendHiqidashis !== undefined) {
      WsSendHiqidashis.encode(
        message.sendHiqidashis,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.createHiqidashi !== undefined) {
      WsCreateHiqidashi.encode(
        message.createHiqidashi,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.editHiqidashi !== undefined) {
      WsEditHiqidashi.encode(
        message.editHiqidashi,
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.deleteHiqidashi !== undefined) {
      WsDeleteHiqidashi.encode(
        message.deleteHiqidashi,
        writer.uint32(42).fork()
      ).ldelim();
    }
    if (message.error !== undefined) {
      WsError.encode(message.error, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): WsHeyaData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseWsHeyaData } as WsHeyaData;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sendHiqidashi = WsSendHiqidashi.decode(
            reader,
            reader.uint32()
          );
          break;
        case 2:
          message.sendHiqidashis = WsSendHiqidashis.decode(
            reader,
            reader.uint32()
          );
          break;
        case 3:
          message.createHiqidashi = WsCreateHiqidashi.decode(
            reader,
            reader.uint32()
          );
          break;
        case 4:
          message.editHiqidashi = WsEditHiqidashi.decode(
            reader,
            reader.uint32()
          );
          break;
        case 5:
          message.deleteHiqidashi = WsDeleteHiqidashi.decode(
            reader,
            reader.uint32()
          );
          break;
        case 6:
          message.error = WsError.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): WsHeyaData {
    const message = { ...baseWsHeyaData } as WsHeyaData;
    message.sendHiqidashi =
      object.sendHiqidashi !== undefined && object.sendHiqidashi !== null
        ? WsSendHiqidashi.fromJSON(object.sendHiqidashi)
        : undefined;
    message.sendHiqidashis =
      object.sendHiqidashis !== undefined && object.sendHiqidashis !== null
        ? WsSendHiqidashis.fromJSON(object.sendHiqidashis)
        : undefined;
    message.createHiqidashi =
      object.createHiqidashi !== undefined && object.createHiqidashi !== null
        ? WsCreateHiqidashi.fromJSON(object.createHiqidashi)
        : undefined;
    message.editHiqidashi =
      object.editHiqidashi !== undefined && object.editHiqidashi !== null
        ? WsEditHiqidashi.fromJSON(object.editHiqidashi)
        : undefined;
    message.deleteHiqidashi =
      object.deleteHiqidashi !== undefined && object.deleteHiqidashi !== null
        ? WsDeleteHiqidashi.fromJSON(object.deleteHiqidashi)
        : undefined;
    message.error =
      object.error !== undefined && object.error !== null
        ? WsError.fromJSON(object.error)
        : undefined;
    return message;
  },

  toJSON(message: WsHeyaData): unknown {
    const obj: any = {};
    message.sendHiqidashi !== undefined &&
      (obj.sendHiqidashi = message.sendHiqidashi
        ? WsSendHiqidashi.toJSON(message.sendHiqidashi)
        : undefined);
    message.sendHiqidashis !== undefined &&
      (obj.sendHiqidashis = message.sendHiqidashis
        ? WsSendHiqidashis.toJSON(message.sendHiqidashis)
        : undefined);
    message.createHiqidashi !== undefined &&
      (obj.createHiqidashi = message.createHiqidashi
        ? WsCreateHiqidashi.toJSON(message.createHiqidashi)
        : undefined);
    message.editHiqidashi !== undefined &&
      (obj.editHiqidashi = message.editHiqidashi
        ? WsEditHiqidashi.toJSON(message.editHiqidashi)
        : undefined);
    message.deleteHiqidashi !== undefined &&
      (obj.deleteHiqidashi = message.deleteHiqidashi
        ? WsDeleteHiqidashi.toJSON(message.deleteHiqidashi)
        : undefined);
    message.error !== undefined &&
      (obj.error = message.error ? WsError.toJSON(message.error) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<WsHeyaData>, I>>(
    object: I
  ): WsHeyaData {
    const message = { ...baseWsHeyaData } as WsHeyaData;
    message.sendHiqidashi =
      object.sendHiqidashi !== undefined && object.sendHiqidashi !== null
        ? WsSendHiqidashi.fromPartial(object.sendHiqidashi)
        : undefined;
    message.sendHiqidashis =
      object.sendHiqidashis !== undefined && object.sendHiqidashis !== null
        ? WsSendHiqidashis.fromPartial(object.sendHiqidashis)
        : undefined;
    message.createHiqidashi =
      object.createHiqidashi !== undefined && object.createHiqidashi !== null
        ? WsCreateHiqidashi.fromPartial(object.createHiqidashi)
        : undefined;
    message.editHiqidashi =
      object.editHiqidashi !== undefined && object.editHiqidashi !== null
        ? WsEditHiqidashi.fromPartial(object.editHiqidashi)
        : undefined;
    message.deleteHiqidashi =
      object.deleteHiqidashi !== undefined && object.deleteHiqidashi !== null
        ? WsDeleteHiqidashi.fromPartial(object.deleteHiqidashi)
        : undefined;
    message.error =
      object.error !== undefined && object.error !== null
        ? WsError.fromPartial(object.error)
        : undefined;
    return message;
  },
};

const baseWsError: object = { message: "" };

export const WsError = {
  encode(
    message: WsError,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.message !== "") {
      writer.uint32(18).string(message.message);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): WsError {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseWsError } as WsError;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.message = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): WsError {
    const message = { ...baseWsError } as WsError;
    message.message =
      object.message !== undefined && object.message !== null
        ? String(object.message)
        : "";
    return message;
  },

  toJSON(message: WsError): unknown {
    const obj: any = {};
    message.message !== undefined && (obj.message = message.message);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<WsError>, I>>(object: I): WsError {
    const message = { ...baseWsError } as WsError;
    message.message = object.message ?? "";
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
