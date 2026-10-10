import jwt from "jsonwebtoken";
import { verifyAccessToken } from "../utils/token.js";
import apiResponse from "../utils/apiResponse.js";
export function authGurd(req, _res, next) {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith("Bearer "))
            throw new Error('Token Not Found!');
        const token = authHeader.split(" ")[1];
        if (!token)
            throw new Error('Token Not Found!');
        const decoded = verifyAccessToken(token);
        req.userId = decoded.userId;
        next();
    }
    catch (err) {
        if (err instanceof jwt.TokenExpiredError)
            apiResponse.error(_res, "Access token has expired", 401);
        else if (err instanceof jwt.JsonWebTokenError)
            apiResponse.error(_res, "Invalid access token", 400);
        else
            apiResponse.error(_res, "Something went wrong", 500);
    }
}
//# sourceMappingURL=authGurd.js.map