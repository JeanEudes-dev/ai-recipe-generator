'use client';

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Recipe } from "../types/recipe";

const PopularRecipes = () => {
    const [recipes, setRecipes] = useState<Recipe[]>([]);
    const [loading, setLoading] = useState(true);
    // const [error, setError] = useState("");

    useEffect(() => {
        const fetchPopularRecipes = async () => {
            try {
                setLoading(true);
                const response = await fetch("http://localhost:5000/api/popular-recipes");
                if (!response.ok) throw new Error("Failed to fetch popular recipes");
                const data = await response.json();
                setRecipes(data);
            } catch (err) {
                console.log(err)
            } finally {
                setLoading(false);
            }
        };

        fetchPopularRecipes();
    }, []);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-gray-900 to-purple-900 text-white">
                <p>Loading popular recipes...</p>
            </div>
        );
    }

    // if (error) {
    //     return (
    //         <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-gray-900 to-purple-900 text-white">
    //             <p>Error: {error}</p>
    //         </div>
    //     );
    // }

    return (
        <section className="py-20 bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 text-white">
            <div className="container mx-auto px-6">
                <motion.h2
                    className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-indigo-300 text-center"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    Popular Recipes
                </motion.h2>

                <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {recipes.map((recipe, index) => (
                        <motion.div
                            key={recipe.id || index}
                            className="bg-gradient-to-br from-indigo-800 via-gray-800 to-purple-800 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300 cursor-pointer"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
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
                                <h3 className="text-lg font-semibold text-white">
                                    {recipe.title}
                                </h3>
                                <p className="mt-2 text-gray-300 text-sm">
                                    {recipe.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PopularRecipes;