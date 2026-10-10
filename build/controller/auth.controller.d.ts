import type { Request, Response } from "express";
declare const googleLogin: (req: Request, res: Response) => Promise<void>;
declare const getLoggedUser: (req: Request, res: Response) => Promise<void>;
declare const getNewAccessToken: (req: Request, res: Response) => Promise<void>;
declare const _default: {
    googleLogin: typeof googleLogin;
    getLoggedUser: typeof getLoggedUser;
    getNewAccessToken: typeof getNewAccessToken;
};
export default _default;
//# sourceMappingURL=auth.controller.d.ts.map