import apiResponse from "../utils/apiResponse.js";
import purchaseService from "../services/purchase.service.js";
const revenuecatEvent = async (req, res) => {
    try {
        await purchaseService.revenuecatEvent(req.body.event);
        apiResponse.success(res, {}, 'RevenueCat event received successfully');
    }
    catch (error) {
        console.log('error', error);
        apiResponse.error(res, error?.message, 500);
    }
};
const getUserUsesAndTranscationHistory = async (req, res) => {
    try {
        const result = await purchaseService.getUserUsesAndTranscationHistory(req.userId);
        apiResponse.success(res, result, "User uses fetched successfully");
    }
    catch (error) {
        apiResponse.error(res, error?.message, 500);
    }
};
export default { revenuecatEvent, getUserUsesAndTranscationHistory };
//# sourceMappingURL=purchase.controller.js.map