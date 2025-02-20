import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const mongoUri = process.env.MONGO_URI;

const connectDB = async () => {
  try {
    await mongoose.connect(mongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      dbName: "sample_restaurants", 
    });
    console.log("MongoDB Connected");
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

const queryDatabase = async () => {
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
    }),
    "restaurants" // Specify the collection name here
  );

  const restaurants = await Restaurant.find();
  console.log(restaurants);

  mongoose.connection.close();
};

queryDatabase();
