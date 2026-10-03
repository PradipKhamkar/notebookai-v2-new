import type { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { verifyAccessToken } from "../utils/token.ts";
import apiResponse from "../utils/apiResponse.ts";

declare global {
        namespace Express {
                interface Request {
                        userId?: string;
                }
        }
}
export function authGurd(
        req: Request,
        _res: Response,
        next: NextFunction
): void {
        try {
                const authHeader = req.headers.authorization;
                if (!authHeader || !authHeader.startsWith("Bearer ")) throw new Error('Token Not Found!');
                const token = authHeader.split(" ")[1];
                if (!token) throw new Error('Token Not Found!');

                const decoded = verifyAccessToken(token);
                req.userId = decoded.userId;

                next();
        } catch (err) {
                if (err instanceof jwt.TokenExpiredError) apiResponse.error(_res, "Access token has expired", 401)
                else if (err instanceof jwt.JsonWebTokenError) apiResponse.error(_res, "Invalid access token", 400);
                else apiResponse.error(_res, "Something went wrong", 500);
        }
}
