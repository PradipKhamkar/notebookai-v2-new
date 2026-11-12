import type { BaseDocument } from "./model.type.js";

export interface USER extends BaseDocument {
        name: string;
        email: string;
        avatar: string;
};

type AllowedType = {
        allowed: number;
        currentUsage: number;
};

export interface USER_USES extends BaseDocument {
        createdBy: string;
        allowed: {
                content: AllowedType;
                messages: AllowedType;
                sources: AllowedType;
        };
        readonly tier?: "free" | "pro";
        expiryDate: string;
}