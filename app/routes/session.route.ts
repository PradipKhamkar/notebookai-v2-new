import express from "express";
import sessionController from "../controller/session.controller.js";
const router = express.Router();

router.post('/', sessionController.AddSession);

export default router
