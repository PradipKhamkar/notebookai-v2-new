import { Router } from "express";
import contentController from "../controller/content.controller.ts";

const route = Router();

route.get('/:sourceId', contentController.getAllContentByUserId);

export default route;