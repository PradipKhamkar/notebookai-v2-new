interface Paylod {
    userId: string;
}
export declare function generateAccessToken(payload: Paylod): string;
export declare function generateRefreshToken(payload: Paylod): string;
export declare function verifyAccessToken(token: string): Paylod;
export declare function verifyRefreshToken(token: string): Paylod;
export {};
//# sourceMappingURL=token.d.ts.map