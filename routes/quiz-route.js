import express from "express";
import fs from "fs";
const router = express.Router();
import path from "path";
import { fileURLToPath } from "url";

// resolve path for data
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const quizFilePath = path.join(__dirname, "../data/ai_quiz_questions.json");

router.get("/", (req, res) => {
  try {
    const data = fs.readFileSync(quizFilePath, "utf8");
    const parsedJSON = JSON.parse(data);
    res.status(200).json(parsedJSON);
  } catch (error) {
    res.status(500).json;
  }
});

export default router;
