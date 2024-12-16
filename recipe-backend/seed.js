import mongoose from "mongoose";
import { faker } from "@faker-js/faker";
import dotenv from "dotenv";
import Recipe from "./models/recipe.js"; // Adjust path based on your structure

dotenv.config();

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected for seeding"))
  .catch((err) => console.error("MongoDB connection error:", err));

async function seedRecipes() {
  try {
    // Clear existing recipes
    await Recipe.deleteMany();

    // Create synthetic data
    const recipes = Array.from({ length: 100 }).map(() => ({
      title: faker.lorem.words(3),
      description: faker.lorem.sentence(),
      image: faker.image.url({ width: 640, height: 480, category: "food" }), // Generates a random food image URL
    }));

    // Insert into database
    await Recipe.insertMany(recipes);
    console.log("Database seeded successfully!");

    mongoose.connection.close();
  } catch (err) {
    console.error("Error seeding database:", err);
    mongoose.connection.close();
  }
}

// Run the seed function
seedRecipes();
