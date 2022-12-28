import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgSendIbcPost } from "./types/planet/blog/tx";
import { MsgUpdateSentPost } from "./types/planet/blog/tx";
import { MsgCreateSentPost } from "./types/planet/blog/tx";
import { MsgDeleteSentPost } from "./types/planet/blog/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/planet.blog.MsgSendIbcPost", MsgSendIbcPost],
    ["/planet.blog.MsgUpdateSentPost", MsgUpdateSentPost],
    ["/planet.blog.MsgCreateSentPost", MsgCreateSentPost],
    ["/planet.blog.MsgDeleteSentPost", MsgDeleteSentPost],
    
];

export { msgTypes }