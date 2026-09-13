import { Router } from "express";
import authRoute from "./auth.route.ts";
const route = Router();

route.use('/auth', authRoute);


export default route;