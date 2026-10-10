import type { Request, Response } from "express";
import apiResponse from "../utils/apiResponse.js";
import sourceService from "../services/source.service.js";

const add = async (req: Request, res: Response) => {
        try {
                // @ts-ignore
                const results = await sourceService.add(req.userId as string, { ...req.body, document: req?.files?.document });
                apiResponse.success(res, results, '', 201);

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
const getSourceById = async (req: Request, res: Response) => {
        try {
                const { sourceId } = req.params;
                // @ts-ignore
                const results = await sourceService.sourceById(sourceId, req.userId as string)
                apiResponse.success(res, results, results?.message, 200)
        } catch (error: any) {
                apiResponse.error(res, error?.message || "Something went wrong")
        }
};
const deleteSource = async (req: Request, res: Response) => {
        try {
                const { sourceId } = req.params;
                // @ts-ignore
                const results = await sourceService.deleteSource(sourceId, req.userId as string)
                apiResponse.success(res, results, results?.message, 200)
        } catch (error: any) {
                apiResponse.error(res, error?.message || "Something went wrong")
        }
};
const updateSource = async (req: Request, res: Response) => {
        try {
                const { sourceId } = req.params;
                const results = await sourceService.updateSource(sourceId as string, req.userId as string, req.body)
                apiResponse.success(res, results, results?.message, 200)
        } catch (error: any) {
                apiResponse.error(res, error?.message || "Something went wrong")
        }
};
export default { add, getUserSources, getSourceById, deleteSource, updateSource }
