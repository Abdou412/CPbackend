
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
    customerRatings: { type: [Number], default: [] }, // Array of customer ratings
    averageRating: { type: Number, default: 0 }, // Average rating
    comments: { type: [String], default: [] }, // Array of comments
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

// Route to add a review
router.post("/restaurants/:id/review", async (req, res) => {
  try {
    const { rating, comment } = req.body;
    const restaurant = await Restaurant.findById(req.params.id);

    if (!restaurant) {
      return res.status(404).json({ message: "Restaurant not found" });
    }

    // Add the rating and comment
    restaurant.customerRatings.push(rating);
    restaurant.comments.push(comment);

    // Calculate the new average rating
    const totalRatings = restaurant.customerRatings.reduce(
      (acc, curr) => acc + curr,
      0
    );
    restaurant.averageRating = totalRatings / restaurant.customerRatings.length;

    await restaurant.save();
    res.json(restaurant);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
