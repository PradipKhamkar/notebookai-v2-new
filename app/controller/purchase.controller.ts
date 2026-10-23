import type { Request, Response } from "express";
import apiResponse from "../utils/apiResponse.js";
import purchaseService from "../services/purchase.service.js";

const revenuecatEvent = async (req: Request, res: Response,) => {
        try {
                await purchaseService.revenuecatEvent(req.body.event);
                apiResponse.success(res, {}, 'RevenueCat event received successfully')
        } catch (error: any) {
                console.log('error', error)
                apiResponse.error(res, error?.message, 500)
        }
};
const getUserUsesAndTranscationHistory = async (req: Request, res: Response) => {
        try {
                const result = await purchaseService.getUserUsesAndTranscationHistory(req.userId!);
                apiResponse.success(res, result, "User uses fetched successfully")
        } catch (error: any) {
                apiResponse.error(res, error?.message, 500)
        }
}

const rewardAdWatched = async (req: Request, res: Response) => {
        try {
                const { user_id: userMail, custom_data }: any = req.query;
                const { source } = JSON.parse(custom_data);
                await purchaseService.rewardAdWatched(source, userMail);
                apiResponse.success(res, {}, "Reward added successfully")
        } catch (error: any) {
                console.log('Error In RewardAdWacther::',error);
                apiResponse.error(res, error?.message, 500)
        }
}

export default { revenuecatEvent, getUserUsesAndTranscationHistory, rewardAdWatched }