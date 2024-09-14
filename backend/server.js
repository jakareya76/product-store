import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";

dotenv.config();

const app = express();

app.get("/products", (req, res) => {
  res.json({ message: "hello world" });
});

app.listen(5000, () => {
  connectDB();
  console.log("Server runing on port 5000");
});
