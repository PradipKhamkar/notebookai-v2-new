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

export default { googleLogin }
