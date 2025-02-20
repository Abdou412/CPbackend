
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const mongoUri = process.env.MONGO_URI;

const connectDB = async () => {
  try {
    await mongoose.connect(mongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      dbName: "sample_restaurants", // Ensure this matches the database name in MongoDB Atlas
    });
    console.log("MongoDB Connected");
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

const updateDocuments = async () => {
  await connectDB();

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
    "restaurants"
  );

  // Update all documents to include the new fields with default values
  await Restaurant.updateMany(
    {},
    {
      $set: {
        customerRatings: [],
        averageRating: 0,
        comments: [],
      },
    }
  );

  console.log("Documents updated");
  mongoose.connection.close();
};

updateDocuments();
