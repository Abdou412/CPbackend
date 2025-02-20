import express from "express";
import mongoose from "mongoose";

const router = express.Router();

const Restaurant = mongoose.model(
  "Restaurant",
  new mongoose.Schema({
    name: String,
    cuisine: String,
    borough: String,
    address: {
      building: String,
      street: String,
      zipcode: String,
      coord: [Number],
    },
    grades: [
      {
        date: Date,
        grade: String,
        score: Number,
      },
    ],
  }),
  "restaurants" // Ensure this matches the collection name in MongoDB Atlas
);

// Route to get all restaurants
router.get("/restaurants", async (req, res) => {
  try {
    const restaurants = await Restaurant.find();
    res.json(restaurants);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
