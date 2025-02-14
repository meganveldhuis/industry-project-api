import express from "express";
import fs from "fs";
const router = express.Router();
import path from "path";
import { fileURLToPath } from "url";

// resolve path for data
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const quizFilePath = path.join(__dirname, "../data/ai_quiz_questions.json");

// Get all quiz data
router.get("/", (req, res) => {
  try {
    const data = fs.readFileSync(quizFilePath, "utf8");
    const parsedJSON = JSON.parse(data);
    res.status(200).json(parsedJSON);
  } catch (error) {
    res.status(500).json;
  }
});

// GET a set of questions by Role, Level
router.get("/role/:role/level/:level", (req, res) => {
  try {
    const { role, level } = req.params;

    // Read the JSON file
    const data = fs.readFileSync(quizFilePath, "utf8");
    const parsedJSON = JSON.parse(data);

    // Find the matching question
    const question = parsedJSON.filter(
      (q) =>
        q.role.toLowerCase() === role.toLowerCase() &&
        q.level.toLowerCase() === level.toLowerCase()
    );

    if (!question) {
      return res.status(404).json({ error: "Question not found" });
    }

    res.status(200).json(question);
  } catch (error) {
    res.status(500).json({ error: "Error fetching question data" });
  }
});

// GET a Single Question by Role, Level, and Question ID
router.get("/role/:role/level/:level/questionId/:id", (req, res) => {
  try {
    const { role, level, id } = req.params;

    // Read the JSON file
    const data = fs.readFileSync(quizFilePath, "utf8");
    const parsedJSON = JSON.parse(data);

    // Find the matching question
    const question = parsedJSON.filter(
      (q) =>
        q.role.toLowerCase() === role.toLowerCase() &&
        q.level.toLowerCase() === level.toLowerCase() &&
        q.id === id
    );

    if (!question) {
      return res.status(404).json({ error: "Question not found" });
    }

    res.status(200).json(question);
  } catch (error) {
    res.status(500).json({ error: "Error fetching question data" });
  }
});

export default router;
