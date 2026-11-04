import type { Request, Response } from "express";
import apiResponse from "../utils/apiResponse.js";
import sessionService from "../services/session.service.js";

const AddSession = async (req: Request, res: Response) => {
        try {
                const results = await sessionService.AddSession(req.userId as string, req.body);
                return apiResponse.success(res, results, results.message, 201)
        } catch (error: any) {
                return apiResponse.error(res, error?.message || "something's wrong.")
        }
}

export default { AddSession }