import express from "express";
import fs from "fs";
const router = express.Router();

router.get("/", (req, res) => {
  try {
    const data = fs.readFileSync("data/quiz-questions.json");
    const parsedJSON = JSON.parse(data);
    res.status(200).send(parsedJSON);
  } catch (error) {
    res.status(500).json;
  }
});

export default router;
