import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgSendUpdatePost } from "./types/planet/blog/tx";
import { MsgSendIbcPost } from "./types/planet/blog/tx";
import { MsgCreateSentPost } from "./types/planet/blog/tx";
import { MsgUpdateSentPost } from "./types/planet/blog/tx";
import { MsgDeleteSentPost } from "./types/planet/blog/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/planet.blog.MsgSendUpdatePost", MsgSendUpdatePost],
    ["/planet.blog.MsgSendIbcPost", MsgSendIbcPost],
    ["/planet.blog.MsgCreateSentPost", MsgCreateSentPost],
    ["/planet.blog.MsgUpdateSentPost", MsgUpdateSentPost],
    ["/planet.blog.MsgDeleteSentPost", MsgDeleteSentPost],
    
];

export { msgTypes }