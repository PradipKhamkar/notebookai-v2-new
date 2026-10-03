import axios from "axios";
import apiPathConstant from "../constants/apiPath.constant.ts";
import envConfig from "../config/env.ts";
import { UserModel } from "../models/user.model.ts";
import { generateAccessToken, generateRefreshToken, verifyRefreshToken } from "../utils/token.ts";

const googleLogin = async (authCode: string) => {
        try {
                const { CLIENT_ID, CLIENT_SECRET, REDIRECT_URI } = envConfig.GOOGLE;
                const headers = { "Content-Type": "application/x-www-form-urlencoded" };
                const response = await axios.post(apiPathConstant.GOOGLE_APIS.TOKEN, new URLSearchParams({
                        code: authCode,
                        client_id: CLIENT_ID || "",
                        client_secret: CLIENT_SECRET || "",
                        redirect_uri: REDIRECT_URI || "",
                        grant_type: 'authorization_code',
                }),
                        { headers: headers }
                );

                const { access_token } = response.data;
                if (!access_token) throw new Error('Failed to fetch access token');
                const userInfo = await axios.get(apiPathConstant.GOOGLE_APIS.USERINFO.replace('{{access_token}}', access_token));
                const { name, email, picture } = userInfo.data;
                let user = await UserModel.findOne({ email: email });
                if (!user) user = await UserModel.create({ avatar: picture, email: email, name: name });

                const accessToken = generateAccessToken({ userId: user._id });
                const refreshToken = generateRefreshToken({ userId: user._id });

                return {
                        accessToken,
                        refreshToken,
                        user: {
                                name: user.name,
                                email: user.email,
                                avatar: user.avatar,
                        },
                }
        } catch (error) {
                throw error
        }
};
const getLoggedUser = async (userId: string) => {
        try {
                const user = await UserModel.findById(userId);
                if (!user) throw new Error('User not found');
                return {
                        name: user.name,
                        email: user.email,
                        avatar: user.avatar,
                }
        } catch (error) {
                throw error
        }
};

const getNewAccessToken = async (refreshToken: string) => {
        try {
                const isValidToken = verifyRefreshToken(refreshToken);
                if (!isValidToken.userId) throw new Error('invalid refresh token!');
                const newAccessToken = generateAccessToken({ userId: isValidToken.userId })
                return { accessToken: newAccessToken };
        } catch (error) {
                throw error
        }
};

export default { googleLogin, getLoggedUser, getNewAccessToken }