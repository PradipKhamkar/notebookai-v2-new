import artifactService from "../services/artifact.service.js";
import apiResponse from "../utils/apiResponse.js"
import { type Request, type Response } from "express";

const getUserArtifact = async (req: Request, res: Response) => {
        try {
                const response = await artifactService.getUserArtifact(req.userId as string);
                apiResponse.success(res, response, response.message, 200)
        } catch (error: any) {
                apiResponse.error(res, error?.message || "Something went wrong", 400)
        }
};


const getArtifacts = async (req: Request, res: Response) => {
        try {
                const response = await artifactService.getArtifacts(req.userId as string, req.body);
                apiResponse.success(res, response, response.message, 200)
        } catch (error: any) {
                apiResponse.error(res, error?.message || "Something went wrong", 400)
        }
};



const deleteArtifact = async (req: Request, res: Response) => {
        try {
                const { artifactId } = req.params
                const results = await artifactService.deleteArtifact(req.userId as string, artifactId as string)
                apiResponse.success(res, results, results?.message, 200)
        } catch (error: any) {
                apiResponse.error(res, error?.message || "Something went wrong")
        }
};



const renameArtifactName = async (req: Request, res: Response) => {
        try {
                const results = await artifactService.renameArtifact(req.userId as string, { artifactId: req.params.artifactId as string, name: req.body.name })
                apiResponse.success(res, results, results?.message, 200)
        } catch (error: any) {
                apiResponse.error(res, error?.message || "Something went wrong")
        }
};


export default {
        getUserArtifact,
        getArtifacts,
        deleteArtifact,
        renameArtifactName
}
