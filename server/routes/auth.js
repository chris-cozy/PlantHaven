import express from "express";
import { login } from "../controllers/auth.js";
import { appendFile } from "fs";

const router = express.Router();

router.post("/login", login);

export default router;
