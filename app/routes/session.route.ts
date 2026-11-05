import express from "express";
import sessionController from "../controller/session.controller.js";
const router = express.Router();

router.post('/', sessionController.AddSession);
router.get('/', sessionController.getAllSessionByUserId);
router.get('/:sessionId', sessionController.getSessionByIdAndUserId);
router.post('/ask/:sessionId', sessionController.askQuestion);

export default router
