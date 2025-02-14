import express from "express";
import "dotenv/config";
import cors from "cors";
import quizRoutes from "./routes/quiz-route.js";

const app = express();
const PORT = process.env.PORT || 8010;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/quiz", quizRoutes);

app.listen(PORT, function () {
  console.log(`listening on http://localhost:${PORT}`);
});
