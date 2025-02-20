import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import reviewRoutes from "./routes/reviewRoutes.mjs";
import { connectDB } from "./config/db.mjs";

dotenv.config();
const app = express();

// Connect to MongoDB
connectDB();  

// Middleware
app.use(express.json());

// Routes
app.use("/api/reviews", reviewRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
