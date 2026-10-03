import { BaseDocument } from "./model.type";

export interface TRANSACTION extends BaseDocument {
        createdBy: string;
        amount: number;
        referenceId: string;
        status: "success" | "failed";
        currency: string;
        plan: string;
};