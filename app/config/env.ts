import dotenv from "dotenv";

dotenv.config();

const envConfig = {
        PORT: process.env.PORT || 8080,
        GOOGLE: {
                CLIENT_ID: process.env.GOOGLE_CLIENT_ID || '',
                CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET || '',
                REDIRECT_URI: process.env.GOOGLE_REDIRECT_URI || ''
        },
        ACCESS_TOKEN_SECERT: {
                KEY: process.env.ACCESS_TOKEN_SECERT || '',
                EXPAIRY: process.env.ACCESS_TOKEN_EXPAIRY || ''
        },
        REFRESH_TOKEN_SECERT: {
                KEY: process.env.REFRESH_TOKEN_SECERT || '',
                EXPAIRY: process.env.REFRESH_TOKEN_EXPAIRY || ''
        },
        DATABASE: {
                USERNAME: process.env.MONGODB_USERNAME || '',
                PASSWORD: process.env.MONGODB_PASSWORD || ''
        },
        LLM: {
                GEMINI_API_KEY: process.env.GEMINI_API_KEY || ""
        },
        CLOUDINARY: {
                CLOUD_NAME: process.env.CLOUDINARY_CLOUD_NAME,
                API_KEY: process.env.CLOUDINARY_API_KEY,
                API_SECRET: process.env.CLOUDINARY_API_SECRET,
        },
}

export default envConfig;