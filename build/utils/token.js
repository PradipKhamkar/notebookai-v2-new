import env from '../config/env.js';
import jwt from 'jsonwebtoken';
export function generateAccessToken(payload) {
    const token = jwt.sign(payload, env.ACCESS_TOKEN_SECERT.KEY, {
        expiresIn: env.ACCESS_TOKEN_SECERT.EXPAIRY
    });
    return token;
}
;
export function generateRefreshToken(payload) {
    const token = jwt.sign(payload, env.REFRESH_TOKEN_SECERT.KEY, {
        expiresIn: env.REFRESH_TOKEN_SECERT.EXPAIRY
    });
    return token;
}
;
export function verifyAccessToken(token) {
    const decodedToken = jwt.verify(token, env.ACCESS_TOKEN_SECERT.KEY);
    return decodedToken;
}
;
export function verifyRefreshToken(token) {
    const decodedToken = jwt.verify(token, env.REFRESH_TOKEN_SECERT.KEY);
    return decodedToken;
}
;
//# sourceMappingURL=token.js.map