import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Recipe Schema & Model
const recipeSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
});

const Recipe = mongoose.model("Recipe", recipeSchema);

// Routes
app.get("/api/popular-recipes", async (req, res) => {
  try {
    const recipes = await Recipe.find();
    res.json(recipes);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch recipes" });
  }
});

app.post("/api/popular-recipes", async (req, res) => {
  try {
    const { title, description, image } = req.body;
    const newRecipe = new Recipe({ title, description, image });
    await newRecipe.save();
    res.status(201).json(newRecipe);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (err) {
    res.status(500).json({ error: "Failed to add recipe" });
  }
});

const recipes = [
  {
    id: 1,
    title: "Spaghetti Carbonara",
    description:
      "A classic Italian pasta dish made with eggs, cheese, pancetta, and pepper.",
    image: "https://loremflickr.com/640/480/food?lock=1",
  },
  {
    id: 2,
    title: "Chicken Tikka Masala",
    description: "Grilled chicken chunks in a spicy curry sauce.",
    image: "https://loremflickr.com/640/480/food?lock=2",
  },
  {
    id: 3,
    title: "Vegetarian Sushi",
    description:
      "Delicious sushi rolls made with fresh vegetables and sticky rice.",
    image: "https://loremflickr.com/640/480/food?lock=3",
  },
  {
    id: 4,
    title: "Beef Stroganoff",
    description: "A Russian dish of sautéed beef in a creamy mushroom sauce.",
    image: "https://loremflickr.com/640/480/food?lock=4",
  },
  {
    id: 5,
    title: "Caesar Salad",
    description:
      "A classic salad with romaine lettuce, croutons, and Caesar dressing.",
    image: "https://loremflickr.com/640/480/food?lock=5",
  },
];

// API route to fetch recipes
app.get("/api/recipes", (req, res) => {
  const { limit } = req.query;

  if (limit) {
    const limitedRecipes = recipes.slice(0, parseInt(limit));
    return res.json(limitedRecipes);
  }

  res.json(recipes);
});

// Start Server
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
