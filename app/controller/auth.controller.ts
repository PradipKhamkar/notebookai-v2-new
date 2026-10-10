import type { Request, Response } from "express";
import apiResponse from "../utils/apiResponse.ts";
import authService from "../services/auth.service.ts";

const googleLogin = async (req: Request, res: Response) => {
        try {
                console.log('request body::', req.body)
                const results = await authService.googleLogin(req.body.authCode);
                apiResponse.success(res, results, "Google Login Sucessfully", 200)
        } catch (error: any) {
                apiResponse.error(res, error?.message || "Something went wrong")
        }
};
const getLoggedUser = async (req: Request, res: Response) => {
        try {
                // console.log('LOGGED USER CALLED::')
                const results = await authService.getLoggedUser(req.userId as string);
                apiResponse.success(res, results, "Logged User", 200)
        } catch (error: any) {
                apiResponse.error(res, error?.message || "Something went wrong")
        }
};
const getNewAccessToken = async (req: Request, res: Response) => {
        try {
                console.log('get-access token is called!', req.params)
                const results = await authService.getNewAccessToken(req.params.refreshToken as string);
                apiResponse.success(res, results, "New Access Token Generated Successfully", 200)
        } catch (error: any) {
                apiResponse.error(res, error?.message || "Something went wrong")
        }
};
export default { googleLogin, getLoggedUser, getNewAccessToken }
