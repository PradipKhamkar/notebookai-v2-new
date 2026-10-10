import env from '../config/env.js';
import jwt from 'jsonwebtoken';
import type { StringValue } from 'ms';

interface Paylod {
        userId: string;
}

export function generateAccessToken(payload: Paylod) {
        const token = jwt.sign(payload, env.ACCESS_TOKEN_SECERT.KEY, {
                expiresIn: env.ACCESS_TOKEN_SECERT.EXPAIRY as StringValue
        });
        return token;
};

export function generateRefreshToken(payload: Paylod) {
        const token = jwt.sign(payload, env.REFRESH_TOKEN_SECERT.KEY, {
                expiresIn: env.REFRESH_TOKEN_SECERT.EXPAIRY as StringValue
        });
        return token;
};

export function verifyAccessToken(token: string) {
        const decodedToken = jwt.verify(token, env.ACCESS_TOKEN_SECERT.KEY);
        return decodedToken as Paylod;
};

export function verifyRefreshToken(token: string) {
        const decodedToken = jwt.verify(token, env.REFRESH_TOKEN_SECERT.KEY);
        return decodedToken as Paylod;
};