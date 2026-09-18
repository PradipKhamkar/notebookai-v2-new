import type { Request, Response } from "express";
import apiResponse from "../utils/apiResponse.ts";
import sourceService from "../services/source.service.ts";

const add = async (req: Request, res: Response) => {
        try {
                console.log('req.body::', req.body)
                // @ts-ignore
                const results = await sourceService.add(req.userId as string, req.body)
                apiResponse.success(res, results, results?.message, 201)
        } catch (error: any) {
                apiResponse.error(res, error?.message || "Something went wrong")
        }
};

const getUserSources = async (req: Request, res: Response) => {
        try {
                // @ts-ignore
                const results = await sourceService.getUserSources(req.userId as string)
                apiResponse.success(res, results, results?.message, 200)
        } catch (error: any) {
                apiResponse.error(res, error?.message || "Something went wrong")
        }
};

export default { add, getUserSources }
