import { Router } from "express";
import purchaseController from "../controller/purchase.controller.ts";
import { authGurd } from "../middleware/authGurd.ts";

const route = Router();

route.post('/revenuecat/event', purchaseController.revenuecatEvent);
route.get('/uses', authGurd, purchaseController.getUserUsesAndTranscationHistory)

export default route;