import { Router } from "express";
import {
  generateConceptExplanation,
  generateInterviewQuestions,
} from "../controller/ai-controller.js";
import { protect } from "../middlewares/auth-middleware.js";

const router = Router();

router.post("/generate-questions", protect, generateInterviewQuestions);

router.post("/generate-questions", protect, generateConceptExplanation);

export default router;
