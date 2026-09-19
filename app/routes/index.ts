import { Router } from "express";
import authRoute from "./auth.route.ts";
import sourceRoute from "./source.route.ts";
import { authGurd } from "../middleware/authGurd.ts";
import contentRoute from "./content.route.ts";
const route = Router();

route.use('/auth', authRoute);
route.use('/source', authGurd, sourceRoute);
route.use('/content', authGurd, contentRoute);

export default route;