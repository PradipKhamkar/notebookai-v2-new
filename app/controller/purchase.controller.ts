import type { Request, Response } from "express";
import apiResponse from "../utils/apiResponse.ts";
import purchaseService from "../services/purchase.service.ts";

const revenuecatEvent = async (req: Request, res: Response,) => {
        try {
                await purchaseService.revenuecatEvent(req.body.event);
                apiResponse.success(res, {}, 'RevenueCat event received successfully')
        } catch (error: any) {
                console.log('error', error)
                apiResponse.error(res, error?.message, 500)
        }
};

export default { revenuecatEvent }