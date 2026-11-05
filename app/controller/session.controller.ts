import type { Request, Response } from "express";
import apiResponse from "../utils/apiResponse.js";
import sessionService from "../services/session.service.js";
import { pipeUIMessageStreamToResponse, toUIMessageStream } from "ai";

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


const askQuestion = async (req: Request, res: Response) => {
        try {
                const result = await sessionService.askQuestion(req.userId as string, {
                        sessionId: req.params.sessionId as string,
                        message: req.body.messages[req.body.messages.length - 1],
                });

                pipeUIMessageStreamToResponse({
                        response: res,
                        stream: toUIMessageStream({
                                stream: result.stream,
                                onError: () => 'Something went wrong.', // don't leak internals to the client
                        }),
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

export default { AddSession, getAllSessionByUserId, getSessionByIdAndUserId, askQuestion }