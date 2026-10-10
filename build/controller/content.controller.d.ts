import type { Request, Response } from "express";
declare const getAllContentByUserId: (req: Request, res: Response) => Promise<void>;
declare const getContentById: (req: Request, res: Response) => Promise<void>;
declare const create: (req: Request, res: Response) => Promise<void>;
declare const deleteContent: (req: Request, res: Response) => Promise<void>;
declare const _default: {
    getAllContentByUserId: typeof getAllContentByUserId;
    getContentById: typeof getContentById;
    create: typeof create;
    deleteContent: typeof deleteContent;
};
export default _default;
//# sourceMappingURL=content.controller.d.ts.map