/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "planet.blog";

export interface MsgCreateSentPost {
  creator: string;
  postID: string;
  title: string;
  chain: string;
  creatorNoMessage: string;
}

export interface MsgCreateSentPostResponse {
  id: number;
}

export interface MsgUpdateSentPost {
  creator: string;
  id: number;
  postID: string;
  title: string;
  chain: string;
  creatorNoMessage: string;
}

export interface MsgUpdateSentPostResponse {
}

export interface MsgDeleteSentPost {
  creator: string;
  id: number;
}

export interface MsgDeleteSentPostResponse {
}

export interface MsgSendIbcPost {
  creator: string;
  port: string;
  channelID: string;
  timeoutTimestamp: number;
  title: string;
  content: string;
}

export interface MsgSendIbcPostResponse {
}

export interface MsgSendUpdatePost {
  creator: string;
  port: string;
  channelID: string;
  timeoutTimestamp: number;
  postID: string;
  title: string;
  content: string;
}

export interface MsgSendUpdatePostResponse {
}

function createBaseMsgCreateSentPost(): MsgCreateSentPost {
  return { creator: "", postID: "", title: "", chain: "", creatorNoMessage: "" };
}

export const MsgCreateSentPost = {
  encode(message: MsgCreateSentPost, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.postID !== "") {
      writer.uint32(18).string(message.postID);
    }
    if (message.title !== "") {
      writer.uint32(26).string(message.title);
    }
    if (message.chain !== "") {
      writer.uint32(34).string(message.chain);
    }
    if (message.creatorNoMessage !== "") {
      writer.uint32(42).string(message.creatorNoMessage);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateSentPost {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateSentPost();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.postID = reader.string();
          break;
        case 3:
          message.title = reader.string();
          break;
        case 4:
          message.chain = reader.string();
          break;
        case 5:
          message.creatorNoMessage = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateSentPost {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      postID: isSet(object.postID) ? String(object.postID) : "",
      title: isSet(object.title) ? String(object.title) : "",
      chain: isSet(object.chain) ? String(object.chain) : "",
      creatorNoMessage: isSet(object.creatorNoMessage) ? String(object.creatorNoMessage) : "",
    };
  },

  toJSON(message: MsgCreateSentPost): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.postID !== undefined && (obj.postID = message.postID);
    message.title !== undefined && (obj.title = message.title);
    message.chain !== undefined && (obj.chain = message.chain);
    message.creatorNoMessage !== undefined && (obj.creatorNoMessage = message.creatorNoMessage);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateSentPost>, I>>(object: I): MsgCreateSentPost {
    const message = createBaseMsgCreateSentPost();
    message.creator = object.creator ?? "";
    message.postID = object.postID ?? "";
    message.title = object.title ?? "";
    message.chain = object.chain ?? "";
    message.creatorNoMessage = object.creatorNoMessage ?? "";
    return message;
  },
};

function createBaseMsgCreateSentPostResponse(): MsgCreateSentPostResponse {
  return { id: 0 };
}

export const MsgCreateSentPostResponse = {
  encode(message: MsgCreateSentPostResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateSentPostResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateSentPostResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateSentPostResponse {
    return { id: isSet(object.id) ? Number(object.id) : 0 };
  },

  toJSON(message: MsgCreateSentPostResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateSentPostResponse>, I>>(object: I): MsgCreateSentPostResponse {
    const message = createBaseMsgCreateSentPostResponse();
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseMsgUpdateSentPost(): MsgUpdateSentPost {
  return { creator: "", id: 0, postID: "", title: "", chain: "", creatorNoMessage: "" };
}

export const MsgUpdateSentPost = {
  encode(message: MsgUpdateSentPost, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    if (message.postID !== "") {
      writer.uint32(26).string(message.postID);
    }
    if (message.title !== "") {
      writer.uint32(34).string(message.title);
    }
    if (message.chain !== "") {
      writer.uint32(42).string(message.chain);
    }
    if (message.creatorNoMessage !== "") {
      writer.uint32(50).string(message.creatorNoMessage);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateSentPost {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateSentPost();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.postID = reader.string();
          break;
        case 4:
          message.title = reader.string();
          break;
        case 5:
          message.chain = reader.string();
          break;
        case 6:
          message.creatorNoMessage = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateSentPost {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      id: isSet(object.id) ? Number(object.id) : 0,
      postID: isSet(object.postID) ? String(object.postID) : "",
      title: isSet(object.title) ? String(object.title) : "",
      chain: isSet(object.chain) ? String(object.chain) : "",
      creatorNoMessage: isSet(object.creatorNoMessage) ? String(object.creatorNoMessage) : "",
    };
  },

  toJSON(message: MsgUpdateSentPost): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.postID !== undefined && (obj.postID = message.postID);
    message.title !== undefined && (obj.title = message.title);
    message.chain !== undefined && (obj.chain = message.chain);
    message.creatorNoMessage !== undefined && (obj.creatorNoMessage = message.creatorNoMessage);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateSentPost>, I>>(object: I): MsgUpdateSentPost {
    const message = createBaseMsgUpdateSentPost();
    message.creator = object.creator ?? "";
    message.id = object.id ?? 0;
    message.postID = object.postID ?? "";
    message.title = object.title ?? "";
    message.chain = object.chain ?? "";
    message.creatorNoMessage = object.creatorNoMessage ?? "";
    return message;
  },
};

function createBaseMsgUpdateSentPostResponse(): MsgUpdateSentPostResponse {
  return {};
}

export const MsgUpdateSentPostResponse = {
  encode(_: MsgUpdateSentPostResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateSentPostResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateSentPostResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgUpdateSentPostResponse {
    return {};
  },

  toJSON(_: MsgUpdateSentPostResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateSentPostResponse>, I>>(_: I): MsgUpdateSentPostResponse {
    const message = createBaseMsgUpdateSentPostResponse();
    return message;
  },
};

function createBaseMsgDeleteSentPost(): MsgDeleteSentPost {
  return { creator: "", id: 0 };
}

export const MsgDeleteSentPost = {
  encode(message: MsgDeleteSentPost, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteSentPost {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteSentPost();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteSentPost {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      id: isSet(object.id) ? Number(object.id) : 0,
    };
  },

  toJSON(message: MsgDeleteSentPost): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = Math.round(message.id));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDeleteSentPost>, I>>(object: I): MsgDeleteSentPost {
    const message = createBaseMsgDeleteSentPost();
    message.creator = object.creator ?? "";
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseMsgDeleteSentPostResponse(): MsgDeleteSentPostResponse {
  return {};
}

export const MsgDeleteSentPostResponse = {
  encode(_: MsgDeleteSentPostResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteSentPostResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteSentPostResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgDeleteSentPostResponse {
    return {};
  },

  toJSON(_: MsgDeleteSentPostResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDeleteSentPostResponse>, I>>(_: I): MsgDeleteSentPostResponse {
    const message = createBaseMsgDeleteSentPostResponse();
    return message;
  },
};

function createBaseMsgSendIbcPost(): MsgSendIbcPost {
  return { creator: "", port: "", channelID: "", timeoutTimestamp: 0, title: "", content: "" };
}

export const MsgSendIbcPost = {
  encode(message: MsgSendIbcPost, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.port !== "") {
      writer.uint32(18).string(message.port);
    }
    if (message.channelID !== "") {
      writer.uint32(26).string(message.channelID);
    }
    if (message.timeoutTimestamp !== 0) {
      writer.uint32(32).uint64(message.timeoutTimestamp);
    }
    if (message.title !== "") {
      writer.uint32(42).string(message.title);
    }
    if (message.content !== "") {
      writer.uint32(50).string(message.content);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSendIbcPost {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSendIbcPost();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.port = reader.string();
          break;
        case 3:
          message.channelID = reader.string();
          break;
        case 4:
          message.timeoutTimestamp = longToNumber(reader.uint64() as Long);
          break;
        case 5:
          message.title = reader.string();
          break;
        case 6:
          message.content = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSendIbcPost {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      port: isSet(object.port) ? String(object.port) : "",
      channelID: isSet(object.channelID) ? String(object.channelID) : "",
      timeoutTimestamp: isSet(object.timeoutTimestamp) ? Number(object.timeoutTimestamp) : 0,
      title: isSet(object.title) ? String(object.title) : "",
      content: isSet(object.content) ? String(object.content) : "",
    };
  },

  toJSON(message: MsgSendIbcPost): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.port !== undefined && (obj.port = message.port);
    message.channelID !== undefined && (obj.channelID = message.channelID);
    message.timeoutTimestamp !== undefined && (obj.timeoutTimestamp = Math.round(message.timeoutTimestamp));
    message.title !== undefined && (obj.title = message.title);
    message.content !== undefined && (obj.content = message.content);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSendIbcPost>, I>>(object: I): MsgSendIbcPost {
    const message = createBaseMsgSendIbcPost();
    message.creator = object.creator ?? "";
    message.port = object.port ?? "";
    message.channelID = object.channelID ?? "";
    message.timeoutTimestamp = object.timeoutTimestamp ?? 0;
    message.title = object.title ?? "";
    message.content = object.content ?? "";
    return message;
  },
};

function createBaseMsgSendIbcPostResponse(): MsgSendIbcPostResponse {
  return {};
}

export const MsgSendIbcPostResponse = {
  encode(_: MsgSendIbcPostResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSendIbcPostResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSendIbcPostResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgSendIbcPostResponse {
    return {};
  },

  toJSON(_: MsgSendIbcPostResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSendIbcPostResponse>, I>>(_: I): MsgSendIbcPostResponse {
    const message = createBaseMsgSendIbcPostResponse();
    return message;
  },
};

function createBaseMsgSendUpdatePost(): MsgSendUpdatePost {
  return { creator: "", port: "", channelID: "", timeoutTimestamp: 0, postID: "", title: "", content: "" };
}

export const MsgSendUpdatePost = {
  encode(message: MsgSendUpdatePost, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.port !== "") {
      writer.uint32(18).string(message.port);
    }
    if (message.channelID !== "") {
      writer.uint32(26).string(message.channelID);
    }
    if (message.timeoutTimestamp !== 0) {
      writer.uint32(32).uint64(message.timeoutTimestamp);
    }
    if (message.postID !== "") {
      writer.uint32(42).string(message.postID);
    }
    if (message.title !== "") {
      writer.uint32(50).string(message.title);
    }
    if (message.content !== "") {
      writer.uint32(58).string(message.content);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSendUpdatePost {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSendUpdatePost();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.port = reader.string();
          break;
        case 3:
          message.channelID = reader.string();
          break;
        case 4:
          message.timeoutTimestamp = longToNumber(reader.uint64() as Long);
          break;
        case 5:
          message.postID = reader.string();
          break;
        case 6:
          message.title = reader.string();
          break;
        case 7:
          message.content = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSendUpdatePost {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      port: isSet(object.port) ? String(object.port) : "",
      channelID: isSet(object.channelID) ? String(object.channelID) : "",
      timeoutTimestamp: isSet(object.timeoutTimestamp) ? Number(object.timeoutTimestamp) : 0,
      postID: isSet(object.postID) ? String(object.postID) : "",
      title: isSet(object.title) ? String(object.title) : "",
      content: isSet(object.content) ? String(object.content) : "",
    };
  },

  toJSON(message: MsgSendUpdatePost): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.port !== undefined && (obj.port = message.port);
    message.channelID !== undefined && (obj.channelID = message.channelID);
    message.timeoutTimestamp !== undefined && (obj.timeoutTimestamp = Math.round(message.timeoutTimestamp));
    message.postID !== undefined && (obj.postID = message.postID);
    message.title !== undefined && (obj.title = message.title);
    message.content !== undefined && (obj.content = message.content);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSendUpdatePost>, I>>(object: I): MsgSendUpdatePost {
    const message = createBaseMsgSendUpdatePost();
    message.creator = object.creator ?? "";
    message.port = object.port ?? "";
    message.channelID = object.channelID ?? "";
    message.timeoutTimestamp = object.timeoutTimestamp ?? 0;
    message.postID = object.postID ?? "";
    message.title = object.title ?? "";
    message.content = object.content ?? "";
    return message;
  },
};

function createBaseMsgSendUpdatePostResponse(): MsgSendUpdatePostResponse {
  return {};
}

export const MsgSendUpdatePostResponse = {
  encode(_: MsgSendUpdatePostResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSendUpdatePostResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSendUpdatePostResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgSendUpdatePostResponse {
    return {};
  },

  toJSON(_: MsgSendUpdatePostResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSendUpdatePostResponse>, I>>(_: I): MsgSendUpdatePostResponse {
    const message = createBaseMsgSendUpdatePostResponse();
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  CreateSentPost(request: MsgCreateSentPost): Promise<MsgCreateSentPostResponse>;
  UpdateSentPost(request: MsgUpdateSentPost): Promise<MsgUpdateSentPostResponse>;
  DeleteSentPost(request: MsgDeleteSentPost): Promise<MsgDeleteSentPostResponse>;
  SendIbcPost(request: MsgSendIbcPost): Promise<MsgSendIbcPostResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  SendUpdatePost(request: MsgSendUpdatePost): Promise<MsgSendUpdatePostResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.CreateSentPost = this.CreateSentPost.bind(this);
    this.UpdateSentPost = this.UpdateSentPost.bind(this);
    this.DeleteSentPost = this.DeleteSentPost.bind(this);
    this.SendIbcPost = this.SendIbcPost.bind(this);
    this.SendUpdatePost = this.SendUpdatePost.bind(this);
  }
  CreateSentPost(request: MsgCreateSentPost): Promise<MsgCreateSentPostResponse> {
    const data = MsgCreateSentPost.encode(request).finish();
    const promise = this.rpc.request("planet.blog.Msg", "CreateSentPost", data);
    return promise.then((data) => MsgCreateSentPostResponse.decode(new _m0.Reader(data)));
  }

  UpdateSentPost(request: MsgUpdateSentPost): Promise<MsgUpdateSentPostResponse> {
    const data = MsgUpdateSentPost.encode(request).finish();
    const promise = this.rpc.request("planet.blog.Msg", "UpdateSentPost", data);
    return promise.then((data) => MsgUpdateSentPostResponse.decode(new _m0.Reader(data)));
  }

  DeleteSentPost(request: MsgDeleteSentPost): Promise<MsgDeleteSentPostResponse> {
    const data = MsgDeleteSentPost.encode(request).finish();
    const promise = this.rpc.request("planet.blog.Msg", "DeleteSentPost", data);
    return promise.then((data) => MsgDeleteSentPostResponse.decode(new _m0.Reader(data)));
  }

  SendIbcPost(request: MsgSendIbcPost): Promise<MsgSendIbcPostResponse> {
    const data = MsgSendIbcPost.encode(request).finish();
    const promise = this.rpc.request("planet.blog.Msg", "SendIbcPost", data);
    return promise.then((data) => MsgSendIbcPostResponse.decode(new _m0.Reader(data)));
  }

  SendUpdatePost(request: MsgSendUpdatePost): Promise<MsgSendUpdatePostResponse> {
    const data = MsgSendUpdatePost.encode(request).finish();
    const promise = this.rpc.request("planet.blog.Msg", "SendUpdatePost", data);
    return promise.then((data) => MsgSendUpdatePostResponse.decode(new _m0.Reader(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
