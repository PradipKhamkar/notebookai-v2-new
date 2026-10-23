import axios from "axios";
import apiPathConstant from "../constants/apiPath.constant.js";
import envConfig from "../config/env.js";
import { UserModel } from "../models/user.model.js";
import { generateAccessToken, generateRefreshToken, verifyRefreshToken } from "../utils/token.js";
import { UserUsesModel } from "../models/userUses.model.js";
import usesConstant from "../constants/uses.constant.js";
import sourceConstant from "../constants/source.constant.js";
import { SourceModel } from "../models/source.model.js";
import { ContentModel } from "../models/content.model.js";

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
                if (!user) {
                        user = await UserModel.create({ avatar: picture, email: email, name: name });
                        if (!user) throw new Error('Failed to create user');
                        await UserUsesModel.create({ createdBy: user._id, allowed: { content: usesConstant.freePlan.content, messages: usesConstant.freePlan.messages }, tier: "free", });
                        try {
                                await Promise.all(
                                        sourceConstant.examples.map(async (item) => {
                                                // 1. Create the source
                                                const newSource = await SourceModel.create({
                                                        ...item.sources,
                                                        createdBy: user?._id,
                                                        isExample: true,
                                                });

                                                // 2. Create all materials for this source concurrently
                                                await Promise.all(
                                                        item.material.map((material) =>
                                                                ContentModel.create({
                                                                        ...material,
                                                                        createdBy: user?._id,
                                                                        sourceId: newSource._id,
                                                                        isExample: true,
                                                                })
                                                        )
                                                );
                                        })
                                );
                                console.log("All example sources and materials created successfully!");
                        } catch (err) {
                                console.log("Error creating example source", err);
                        }
                }

                const accessToken = generateAccessToken({ userId: user._id });
                const refreshToken = generateRefreshToken({ userId: user._id });
                const activeUses = await UserUsesModel.findOne({ createdBy: user._id }).select('-createdBy');

                return {
                        accessToken,
                        refreshToken,
                        user: {
                                name: user.name,
                                email: user.email,
                                avatar: user.avatar,
                                tier: activeUses?.tier,
                        },

                }
        } catch (error) {
                console.log('ERROR in google login', error)
                throw error
        }
};
const getLoggedUser = async (userId: string) => {
        try {
                const user = await UserModel.findById(userId);
                const activeUses = await UserUsesModel.findOne({ createdBy: userId }).select('-createdBy');
                if (!user) throw new Error('User not found');
                return {
                        name: user.name,
                        email: user.email,
                        avatar: user.avatar,
                        tier: activeUses?.tier,
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