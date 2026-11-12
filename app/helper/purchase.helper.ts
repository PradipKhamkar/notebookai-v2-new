// import { upgradeErrorMsg } from "../constants/uses.constant.js";
// import { UserUsesModel } from "../models/userUses.model.js"


// const checkUsesAndUpdate = async (userId: string, type: "content" | "messages" | "source") => {
//         try {
//                 const userUses = await UserUsesModel.findOne({ createdBy: userId });
//                 if (!userUses) throw new Error("UserUses not found");
//                 const { content, messages } = userUses.allowed
//                 if (userUses.tier !== 'free') {
//                         const isExpired = userUses?.expiryDate && new Date() > new Date(userUses.expiryDate);
//                         if (isExpired) throw new Error(upgradeErrorMsg)
//                 } else {
//                         switch (type) {
//                                 case "content":
//                                         if (content.currentUsage >= content.allowed) throw new Error(upgradeErrorMsg);
//                                         await UserUsesModel.updateOne({ createdBy: userId }, { $inc: { 'allowed.content.currentUsage': 1 } });
//                                         break;
//                                 case "messages":
//                                         if (messages.currentUsage >= messages.allowed) throw new Error(upgradeErrorMsg);
//                                         await UserUsesModel.updateOne({ createdBy: userId }, { $inc: { 'allowed.messages.currentUsage': 1 } });
//                                         break;
//                                 default:
//                                         throw new Error("Invalid type");
//                         }
//                 };
//         } catch (error) {
//                 throw error
//         }
// }

// export default { checkUsesAndUpdate }


import { upgradeErrorMsg } from "../constants/uses.constant.js";
import { UserUsesModel } from "../models/userUses.model.js";



const checkUsesAndUpdate = async (userId: string, _type?: string) => {

        const userUses = await UserUsesModel.findOne({ createdBy: userId });
        if (!userUses) throw new Error("UserUses not found");
        const { currentUsage, allowed } = userUses.allowed['messages'];

        // 1. Check usage first: still within the limit, so allow and increment
        if (currentUsage < allowed) {
                await UserUsesModel.updateOne(
                        { createdBy: userId },
                        { $inc: { [`allowed.messages.currentUsage`]: 1 } }
                );
                return;
        }
        if (userUses.tier === "pro") return
        throw new Error(upgradeErrorMsg);
};

export default { checkUsesAndUpdate };