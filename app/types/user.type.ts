import type { BaseDocument } from "./model.type.ts";

export interface USER extends BaseDocument {
        name: string;
        email: string;
        avatar: string;
};
