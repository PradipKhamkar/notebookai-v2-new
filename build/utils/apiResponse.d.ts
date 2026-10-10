import type { Response } from "express";
declare const success: (res: Response, output?: any, msg?: string, status?: number) => Response<any, Record<string, any>>;
declare const error: (res: Response, message?: string, status?: number, extra?: {}) => Response<any, Record<string, any>>;
declare const _default: {
    success: typeof success;
    error: typeof error;
};
export default _default;
//# sourceMappingURL=apiResponse.d.ts.map