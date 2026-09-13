import axios from "axios";
import apiPathConstant from "../constants/apiPath.constant.ts";
import envConfig from "../config/env.ts";

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
                // let user = await UserModel.findOne({ email: email });
                // if (!user) {
                //         user = await UserModel.create({ avatar: picture, email: email, name: name, credits: 30 });
                //         await TransactionModel.create({
                //                 createdBy: user._id,
                //                 type: "BONUS",
                //                 amount: 30,
                //                 description: "Sign up bonus"
                //         });
                // }

                // const accessToken = generateAccessToken({ userId: user._id });
                // const refreshToken = generateRefreshToken({ userId: user._id });

                // return {
                //         accessToken,
                //         refreshToken,
                //         user: {
                //                 name: user.name,
                //                 email: user.email,
                //                 avatar: user.avatar,
                //                 credits: user.credits,
                //         },
                // }
        } catch (error) {
                console.log("error", error);
                throw error
        }
};

export default { googleLogin }