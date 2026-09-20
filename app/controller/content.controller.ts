import type { Request, Response } from "express";
import apiResponse from "../utils/apiResponse.ts";
import contentService from "../services/content.service.ts";

const getAllContentByUserId = async (req: Request, res: Response) => {
        try {
                // @ts-ignore
                const results = await contentService.getAllContentByUserId(req.userId as string, req.params.sourceId as string)
                apiResponse.success(res, results, results?.message, 200)
        } catch (error: any) {
                apiResponse.error(res, error?.message || "Something went wrong")
        }
};

const getContentById = async (req: Request, res: Response) => {
        try {
                // @ts-ignore
                const results = await contentService.getContentById(req.userId as string, req.params.contentId as string)
                apiResponse.success(res, results, results?.message, 200)
        } catch (error: any) {
                apiResponse.error(res, error?.message || "Something went wrong")
        }
};


export default { getAllContentByUserId, getContentById }
