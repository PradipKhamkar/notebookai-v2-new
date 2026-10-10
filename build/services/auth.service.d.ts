declare const googleLogin: (authCode: string) => Promise<{
    accessToken: string;
    refreshToken: string;
    user: {
        name: string;
        email: string;
        avatar: string;
        tier: "free" | "pro" | undefined;
    };
}>;
declare const getLoggedUser: (userId: string) => Promise<{
    name: string;
    email: string;
    avatar: string;
    tier: "free" | "pro" | undefined;
}>;
declare const getNewAccessToken: (refreshToken: string) => Promise<{
    accessToken: string;
}>;
declare const _default: {
    googleLogin: typeof googleLogin;
    getLoggedUser: typeof getLoggedUser;
    getNewAccessToken: typeof getNewAccessToken;
};
export default _default;
//# sourceMappingURL=auth.service.d.ts.map