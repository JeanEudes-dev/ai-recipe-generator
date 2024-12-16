'use client';

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Recipe } from "../types/recipe";

const FeaturedRecipes = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

  useEffect(() => {
    const fetchFeaturedRecipes = async () => {
      try {
        setLoading(true);
        const response = await fetch("http://localhost:5000/api/recipes?limit=3");
        if (!response.ok) throw new Error("Failed to fetch featured recipes");
        const data = await response.json();
        setRecipes(data);
      } catch (err) {
        console.log(err)
      } finally {
        setLoading(false);
      }
    };

    fetchFeaturedRecipes();
  }, []);

  if (loading) {
    return <p>Loading featured recipes...</p>;
  }

//   if (error) {
//     return <p>Error</p>;
//   }

  return (
    <section className="py-10 bg-gray-100 text-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-6">Featured Recipes</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {recipes.map((recipe) => (
            <div
              key={recipe.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300 cursor-pointer"
            >
              <div className="relative w-full h-40">
                <Image
                  src={recipe.image}
                  alt={recipe.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold">{recipe.title}</h3>
                <p className="mt-2 text-gray-600 text-sm">{recipe.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link href="/popular-recipes">
            <motion.button
              className="px-6 py-2 bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-700 transition"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              View All Popular Recipes
            </motion.button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedRecipes;
