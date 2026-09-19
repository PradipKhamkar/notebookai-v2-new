import { Router } from "express";
import sourceController from "../controller/source.controller.ts";

const route = Router();

route.post('/add', sourceController.add);
route.get('/me', sourceController.getUserSources);
route.get('/me/:sourceId', sourceController.getSourceById);
   
export default route;