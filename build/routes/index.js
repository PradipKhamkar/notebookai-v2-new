import { Router } from "express";
import authRoute from "./auth.route.js";
import sourceRoute from "./source.route.js";
import { authGurd } from "../middleware/authGurd.js";
import contentRoute from "./content.route.js";
import conversationRoute from "./conversation.route.js";
import purchaseRoute from "./purchase.route.js";
const route = Router();
route.use('/auth', authRoute);
route.use('/source', authGurd, sourceRoute);
route.use('/content', authGurd, contentRoute);
route.use('/conversation', authGurd, conversationRoute);
route.use('/purchase', purchaseRoute);
export default route;
//# sourceMappingURL=index.js.map