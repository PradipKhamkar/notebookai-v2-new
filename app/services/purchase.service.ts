import { TranscationModel } from "../models/Transcation.model.ts";
import { UserModel } from "../models/user.model.ts";
import { UserUsesModel } from "../models/userUses.model.ts";

const revenuecatEvent = async (event: any) => {
        try {
                const { type } = event;
                console.log('event', event)
                switch (type) {
                        case "NON_RENEWING_PURCHASE":
                                const { app_user_id, product_id, price, currency, original_transaction_id, country_code } = event;
                                const userInfo = await UserModel.findOne({ email: app_user_id }).select('credits _id');
                                if (!userInfo) throw new Error('User Not Found');

                                // Calculate 1 month expiration from purchase date
                                const purchaseDate = new Date(event.purchased_at_ms);
                                const expirationDate = new Date(purchaseDate);
                                expirationDate.setMonth(expirationDate.getMonth() + 1);

                                const isoExpiryDate = expirationDate.toISOString();

                                await UserUsesModel.updateOne(
                                        { createdBy: userInfo._id },
                                        {
                                                $set: {
                                                        expiryDate: isoExpiryDate,
                                                        createdBy: userInfo._id,
                                                        tier: "pro",
                                                        allowed: {}
                                                }
                                        }
                                );

                                await TranscationModel.create({
                                        createdBy: userInfo._id,
                                        amount: price,
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

export default { revenuecatEvent, getUserUsesAndTranscationHistory }
