import { BaseDocument } from "./model.type.js";

export interface TRANSACTION extends BaseDocument {
        createdBy: string;
        amount: number;
        referenceId: string;
        status: "success" | "failed";
        currency: string;
        plan: string;
};