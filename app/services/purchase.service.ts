import usesConstant from "../constants/uses.constant.js";
import { TranscationModel } from "../models/Transcation.model.js";
import { UserModel } from "../models/user.model.js";
import { UserUsesModel } from "../models/userUses.model.js";

const revenuecatEvent = async (event: any) => {
        try {
                const { type } = event;
                console.log('event', event)
                switch (type) {
                        case "NON_RENEWING_PURCHASE":
                                const { app_user_id, product_id, price_in_purchased_currency, currency, original_transaction_id } = event;
                                const userInfo = await UserModel.findOne({ email: app_user_id }).select('credits _id');
                                if (!userInfo) throw new Error('User Not Found');

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

                                await UserUsesModel.updateOne(
                                        { createdBy: userInfo._id },
                                        {
                                                $set: {
                                                        expiryDate: expirationDate.toISOString(),
                                                        createdBy: userInfo._id,
                                                        tier: "pro",
                                                }
                                        }
                                );

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
        } catch (error: any) {
                throw error;
        }
};
const getUserUsesAndTranscationHistory = async (userId: string) => {
        try {
                const data = await Promise.all([UserUsesModel.findOne({ createdBy: userId }).select('-createdBy'), TranscationModel.find({ createdBy: userId }).sort({ createdAt: -1 }).select('-createdBy')]);
                return { uses: data[0], transcations: data[1] }
        } catch (error) {
                throw error
        }
};
const rewardAdWatched = async (type: 'source_chat', userMail: string) => {
        try {
                const userInfo = await UserModel.findOne({ email: userMail })
                if (!userInfo) throw new Error("User Not Found");
                const userUses = await UserUsesModel.findOne({ createdBy: userInfo._id }).select('allowed');
                if (!userUses) throw new Error("UserUses not found");

                switch (type) {
                        case "source_chat":
                                const { messages } = userUses.allowed;
                                if (messages.currentUsage >= messages.allowed) await UserUsesModel.findOneAndUpdate({ createdBy: userInfo._id }, { $inc: { 'allowed.messages.currentUsage': -usesConstant.freePlan.messages.allowed } });
                                break;
                        default:
                                throw new Error('invalid type')
                }
                return { message: "Reward added successfully" }
        } catch (error) {
                throw error
        }
};
export default { revenuecatEvent, getUserUsesAndTranscationHistory, rewardAdWatched }
