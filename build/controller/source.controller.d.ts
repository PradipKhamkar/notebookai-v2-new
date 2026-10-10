import type { Request, Response } from "express";
declare const add: (req: Request, res: Response) => Promise<void>;
declare const getUserSources: (req: Request, res: Response) => Promise<void>;
declare const getSourceById: (req: Request, res: Response) => Promise<void>;
declare const deleteSource: (req: Request, res: Response) => Promise<void>;
declare const updateSource: (req: Request, res: Response) => Promise<void>;
declare const _default: {
    add: typeof add;
    getUserSources: typeof getUserSources;
    getSourceById: typeof getSourceById;
    deleteSource: typeof deleteSource;
    updateSource: typeof updateSource;
};
export default _default;
//# sourceMappingURL=source.controller.d.ts.map