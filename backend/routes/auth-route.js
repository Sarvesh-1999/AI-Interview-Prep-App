import express from "express";

import {
  getUserProfile,
  loginUser,
  registerUser,
  uploadImage,
} from "../controller/auth-controller.js";

import { protect } from "../middlewares/auth-middleware.js";

import upload from "../middlewares/upload-middleware.js";

const router = express.Router();

// Auth Routes
router.post("/signup", registerUser); // Register User
router.post("/login", loginUser); // Login User
router.get("/profile", protect, getUserProfile); // Get User Profile

router.post("/upload-image", upload.single("image"), uploadImage);

export default router;
