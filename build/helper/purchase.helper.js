import { upgradeErrorMsg } from "../constants/uses.constant.js";
import { UserUsesModel } from "../models/userUses.model.js";
const checkUsesAndUpdate = async (userId, type) => {
    try {
        const userUses = await UserUsesModel.findOne({ createdBy: userId });
        if (!userUses)
            throw new Error("UserUses not found");
        const { content, messages } = userUses.allowed;
        if (userUses.tier !== 'free') {
            const isExpired = userUses?.expiryDate && new Date() > new Date(userUses.expiryDate);
            if (isExpired)
                throw new Error(upgradeErrorMsg);
        }
        else {
            switch (type) {
                case "content":
                    if (content.currentUsage >= content.allowed)
                        throw new Error(upgradeErrorMsg);
                    await UserUsesModel.updateOne({ createdBy: userId }, { $inc: { 'allowed.content.currentUsage': 1 } });
                    break;
                case "messages":
                    if (messages.currentUsage >= messages.allowed)
                        throw new Error(upgradeErrorMsg);
                    await UserUsesModel.updateOne({ createdBy: userId }, { $inc: { 'allowed.messages.currentUsage': 1 } });
                    break;
                default:
                    throw new Error("Invalid type");
            }
        }
        ;
    }
    catch (error) {
        throw error;
    }
};
export default { checkUsesAndUpdate };
//# sourceMappingURL=purchase.helper.js.map