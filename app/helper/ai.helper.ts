import envConfig from "../config/env.js";
import type { Provider } from "../types/llm.type.js";
import { createGoogle } from "@ai-sdk/google";

const getModel = (provider: Provider, model: string) => {
        switch (provider) {
                case "gemini":
                        const gemini = createGoogle({
                                apiKey: envConfig.LLM.GEMINI_API_KEY
                        });
                        return gemini(model)
                default:
                        throw new Error('Provider not supported yet')
        }
};

export default { getModel }