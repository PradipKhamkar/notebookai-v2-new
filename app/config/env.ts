import dotenv from "dotenv";

dotenv.config();

const envConfig = {
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

}

export default envConfig;