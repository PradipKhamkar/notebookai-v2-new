import { Router } from "express";
import authRoute from "./auth.route.ts";
import sourceRoute from "./source.route.ts";
import { authGurd } from "../middleware/authGurd.ts";
const route = Router();

route.use('/auth', authRoute);
route.use('/source', authGurd, sourceRoute);

export default route;