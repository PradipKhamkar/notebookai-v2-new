import { Router } from "express";
import authRoute from "./auth.route.ts";
import sourceRoute from "./source.route.ts";
import { authGurd } from "../middleware/authGurd.ts";
import contentRoute from "./content.route.ts";
import conversationRoute from "./conversation.route.ts";
const route = Router();

route.use('/auth', authRoute);
route.use('/source', authGurd, sourceRoute);
route.use('/content', authGurd, contentRoute);
route.use('/conversation', authGurd, conversationRoute);

export default route;