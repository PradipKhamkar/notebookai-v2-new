import { UserUsesModel } from "../models/userUses.model.ts"

const checkUsesAndUpdate = async (userId: string, type: "content" | "messages" | "source") => {
        try {
                const userUses = await UserUsesModel.findOne({ createdBy: userId });
                if (!userUses) throw new Error("UserUses not found");
                const { content, messages, sources } = userUses.allowed
                if (userUses.tier !== 'free') {
                        const isExpired = userUses?.expiryDate && new Date() > new Date(userUses.expiryDate);
                        if (isExpired) throw new Error("Limit Reached, Upgrade To Continue")
                } else {
                        switch (type) {
                                case "content":
                                        if (content.currentUsage >= content.allowed) throw new Error("Limit Reached, Upgrade To Continue");
                                        await UserUsesModel.updateOne({ createdBy: userId }, { $inc: { 'allowed.content.currentUsage': 1 } });
                                        break;
                                case "messages":
                                        if (messages.currentUsage >= messages.allowed) throw new Error("Limit Reached, Upgrade To Continue");
                                        await UserUsesModel.updateOne({ createdBy: userId }, { $inc: { 'allowed.messages.currentUsage': 1 } });
                                        break;
                                default:
                                        throw new Error("Invalid type");
                        }
                };

        } catch (error) {
                throw error
        }
}

export default { checkUsesAndUpdate }