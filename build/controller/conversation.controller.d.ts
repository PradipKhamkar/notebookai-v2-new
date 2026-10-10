import type { Request, Response } from "express";
declare const chat: (req: Request, res: Response) => Promise<void>;
declare const getConversationBySourceId: (req: Request, res: Response) => Promise<void>;
declare const _default: {
    chat: typeof chat;
    getConversationBySourceId: typeof getConversationBySourceId;
};
export default _default;
//# sourceMappingURL=conversation.controller.d.ts.map