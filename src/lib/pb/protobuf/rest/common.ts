/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "common";

export interface Status {
  statusCode: number;
  message: string;
}

const baseStatus: object = { statusCode: 0, message: "" };

export const Status = {
  encode(
    message: Status,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.statusCode !== 0) {
      writer.uint32(8).int32(message.statusCode);
    }
    if (message.message !== "") {
      writer.uint32(18).string(message.message);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Status {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseStatus } as Status;
    while (reader.pos < end) {
      const tag = reader.uint32();
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
  },

  fromJSON(object: any): Status {
    const message = { ...baseStatus } as Status;
    message.statusCode =
      object.statusCode !== undefined && object.statusCode !== null
        ? Number(object.statusCode)
        : 0;
    message.message =
      object.message !== undefined && object.message !== null
        ? String(object.message)
        : "";
    return message;
  },

  toJSON(message: Status): unknown {
    const obj: any = {};
    message.statusCode !== undefined && (obj.statusCode = message.statusCode);
    message.message !== undefined && (obj.message = message.message);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Status>, I>>(object: I): Status {
    const message = { ...baseStatus } as Status;
    message.statusCode = object.statusCode ?? 0;
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
