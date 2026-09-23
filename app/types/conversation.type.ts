import type { UIMessage } from "ai"

interface ChatRequestPayload {
        sourceId: string;
        messages: UIMessage[];
        userId: string
};

export type { ChatRequestPayload }


