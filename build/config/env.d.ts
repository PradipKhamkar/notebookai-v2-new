declare const envConfig: {
    PORT: string | number;
    GOOGLE: {
        CLIENT_ID: string;
        CLIENT_SECRET: string;
        REDIRECT_URI: string;
    };
    ACCESS_TOKEN_SECERT: {
        KEY: string;
        EXPAIRY: string;
    };
    REFRESH_TOKEN_SECERT: {
        KEY: string;
        EXPAIRY: string;
    };
    DATABASE: {
        USERNAME: string;
        PASSWORD: string;
    };
    LLM: {
        GEMINI_API_KEY: string;
    };
    CLOUDINARY: {
        CLOUD_NAME: string | undefined;
        API_KEY: string | undefined;
        API_SECRET: string | undefined;
    };
};
export default envConfig;
//# sourceMappingURL=env.d.ts.map