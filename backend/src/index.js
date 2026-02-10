import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { s3 } from "./aws.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 4000;

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

app.get("/aws-test", async (req, res) => {
  try {
    // Just checking client exists
    res.json({ message: "AWS client initialized" });
  } catch (error) {
    res.status(500).json({ error: "AWS connection failed" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
