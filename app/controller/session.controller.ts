import type { Request, Response } from "express";
import apiResponse from "../utils/apiResponse.js";
import sessionService from "../services/session.service.js";
import { createUIMessageStream, pipeUIMessageStreamToResponse, toUIMessageStream, type ToolExecutionEndEvent } from "ai";
import type { ArtifactMsgMetaData } from "../types/session.type.js";

const AddSession = async (req: Request, res: Response) => {
        try {
                const results = await sessionService.AddSession(req.userId as string, req.body);
                return apiResponse.success(res, results, results.message, 201)
        } catch (error: any) {
                return apiResponse.error(res, error?.message || "something's wrong.")
        }
}

const getAllSessionByUserId = async (req: Request, res: Response) => {
        try {
                const results = await sessionService.getAllSessionByUserId(req.userId as string);
                return apiResponse.success(res, results, results.message, 201)
        } catch (error: any) {
                return apiResponse.error(res, error?.message || "something's wrong.")
        }
}


const getSessionByIdAndUserId = async (req: Request, res: Response) => {
        try {
                const results = await sessionService.getSessionByIdAndUserId(req.userId as string, req.params.sessionId as string);
                return apiResponse.success(res, results, results.message, 201)
        } catch (error: any) {
                return apiResponse.error(res, error?.message || "something's wrong.")
        }
}

const deleteSession = async (req: Request, res: Response) => {
        try {
                const results = await sessionService.deleteSession(req.userId as string, req.params.sessionId as string);
                return apiResponse.success(res, results, results.message, 200)
        } catch (error: any) {
                return apiResponse.error(res, error?.message || "something's wrong.")
        }
}

const tutor = async (req: Request, res: Response) => {
        try {

                const stream = createUIMessageStream({
                        execute: async ({ writer }) => {

                                const emitArtifact = async (artifact: ArtifactMsgMetaData[]) => {
                                        writer.write({
                                                type: "message-metadata",
                                                messageMetadata: {
                                                        artifacts: artifact,
                                                },
                                        });

                                };

                                const result = await sessionService.tutor(req.userId as string, {
                                        sessionId: req.params.sessionId as string,
                                        message: req.body.messages[req.body.messages.length - 1],
                                        emitArtifact: emitArtifact
                                });

                                writer.merge(result.toUIMessageStream());
                        }
                });

                pipeUIMessageStreamToResponse({
                        response: res,
                        stream,
                });

        } catch (error: any) {
                console.error('Error in chat controller:', error);
                if (!res.headersSent) {
                        apiResponse.error(res, error?.message || 'Something went wrong');
                } else {
                        res.end();
                }
        }
}

export default { AddSession, getAllSessionByUserId, getSessionByIdAndUserId, tutor, deleteSession }