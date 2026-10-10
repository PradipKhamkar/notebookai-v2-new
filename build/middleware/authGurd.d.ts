import type { Request, Response, NextFunction } from "express";
declare global {
    namespace Express {
        interface Request {
            userId?: string;
        }
    }
}
export declare function authGurd(req: Request, _res: Response, next: NextFunction): void;
//# sourceMappingURL=authGurd.d.ts.map