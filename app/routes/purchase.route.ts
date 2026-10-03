import { Router } from "express";
import purchaseController from "../controller/purchase.controller.ts";

const route = Router();

route.post('/revenuecat/event', purchaseController.revenuecatEvent);

export default route;