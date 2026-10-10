import { TranscationModel } from "../models/Transcation.model.js";
import { UserModel } from "../models/user.model.js";
import { UserUsesModel } from "../models/userUses.model.js";
const revenuecatEvent = async (event) => {
    try {
        const { type } = event;
        console.log('event', event);
        switch (type) {
            case "NON_RENEWING_PURCHASE":
                const { app_user_id, product_id, price_in_purchased_currency, currency, original_transaction_id } = event;
                const userInfo = await UserModel.findOne({ email: app_user_id }).select('credits _id');
                if (!userInfo)
                    throw new Error('User Not Found');
                const purchaseDate = new Date(event.purchased_at_ms);
                const expirationDate = new Date(purchaseDate);
                switch (event.product_id) {
                    case "pass_1m":
                        expirationDate.setMonth(expirationDate.getMonth() + 1);
                        break;
                    case "pass_2d":
                        expirationDate.setDate(expirationDate.getDate() + 2);
                        break;
                    default:
                        break;
                }
                await UserUsesModel.updateOne({ createdBy: userInfo._id }, {
                    $set: {
                        expiryDate: expirationDate.toISOString(),
                        createdBy: userInfo._id,
                        tier: "pro",
                        allowed: {}
                    }
                });
                await TranscationModel.create({
                    createdBy: userInfo._id,
                    amount: price_in_purchased_currency,
                    plan: product_id,
                    currency: currency,
                    referenceId: original_transaction_id,
                    status: "success"
                });
                break;
        }
        return {};
    }
    catch (error) {
        throw error;
    }
};
const getUserUsesAndTranscationHistory = async (userId) => {
    try {
        const data = await Promise.all([UserUsesModel.findOne({ createdBy: userId }).select('-createdBy'), TranscationModel.find({ createdBy: userId }).sort({ createdAt: -1 }).select('-createdBy')]);
        return { uses: data[0], transcations: data[1] };
    }
    catch (error) {
        throw error;
    }
};
export default { revenuecatEvent, getUserUsesAndTranscationHistory };
//# sourceMappingURL=purchase.service.js.map