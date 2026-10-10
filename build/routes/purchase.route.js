import { Router } from "express";
import purchaseController from "../controller/purchase.controller.js";
import { authGurd } from "../middleware/authGurd.js";
const route = Router();
route.post('/revenuecat/event', purchaseController.revenuecatEvent);
route.get('/uses', authGurd, purchaseController.getUserUsesAndTranscationHistory);
export default route;
//# sourceMappingURL=purchase.route.js.map