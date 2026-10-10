import envConfig from "../config/env.js";
import { createGoogle } from "@ai-sdk/google";
const getModel = (provider, model) => {
    switch (provider) {
        case "gemini":
            const gemini = createGoogle({
                apiKey: envConfig.LLM.GEMINI_API_KEY
            });
            return gemini(model);
        default:
            throw new Error('Provider not supported yet');
    }
};
export default { getModel };
//# sourceMappingURL=ai.helper.js.map