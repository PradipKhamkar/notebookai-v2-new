import { Router } from "express";
import sourceController from "../controller/source.controller.ts";

const route = Router();

route.post('/add', sourceController.add);
route.get('/me', sourceController.getUserSources);
route.get('/me/:sourceId', sourceController.getSourceById);
route.delete('/:sourceId', sourceController.deleteSource);
route.put('/:sourceId', sourceController.updateSource);

export default route;