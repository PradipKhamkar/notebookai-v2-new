// import { TransactionModel } from "@/models/transaction.model";
// import { UserModel } from "@/models/user.model";
// import { sendSuccess } from "@/utils/response";
// import { Request, Response } from "express";

import { TranscationModel } from "../models/Transcation.model.ts";
import { UserModel } from "../models/user.model.ts";
import { UserUsesModel } from "../models/userUses.model.ts";

const revenuecatEvent = async (event: any) => {
        try {
                const { type } = event;
                switch (type) {
                        case "NON_RENEWING_PURCHASE":
                                const { app_user_id, product_id, price, currency, original_transaction_id, country_code } = event;
                                const userInfo = await UserModel.findOne({ email: app_user_id }).select('credits _id');
                                if (!userInfo) throw new Error('User Not Found');

                                // Calculate 1 month expiration from purchase date
                                const purchaseDate = new Date(event.purchased_at_ms);
                                const expirationDate = new Date(purchaseDate);
                                expirationDate.setMonth(expirationDate.getMonth() + 1);

                                // Formatted ISO string: "2026-10-03T18:16:10.984Z"
                                const isoExpiryDate = expirationDate.toISOString();

                                await UserUsesModel.updateOne(
                                        { createdBy: userInfo._id },
                                        {
                                                $set: {
                                                        expiryDate: isoExpiryDate, // <--- Saved as ISO String
                                                        createdBy: userInfo._id,
                                                        tier: "paid",
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
export default { revenuecatEvent }


// const revenuecatEvent = (event: any) => {
//         try {
//                 const { type } = event;
//                 switch(type){

//                 }
//                 console.log('evetn::', event)
//         } catch (error) {
//                 throw error
//         }
// };

// export default { revenuecatEvent }