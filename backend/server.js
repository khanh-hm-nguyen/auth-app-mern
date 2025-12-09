import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./db/connectDB.js";

import authRoutes from "./routes/auth.route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// allow to parse incoming request with JSON payloads (requests:req.body)
app.use(express.json());

app.use("/api/auth", authRoutes);

app.listen(3000, () => {
  connectDB();
  console.log(`Server is running on port ${PORT}`);
});
