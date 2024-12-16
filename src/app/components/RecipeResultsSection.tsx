'use client';

import { motion } from "framer-motion";
import Image from "next/image";
import { Recipe } from "../types/recipe";

interface RecipeCardProps {
    recipe: Recipe;
    onClick: () => void;
}

const RecipeCard = ({ recipe, onClick }: RecipeCardProps) => (
    <motion.div
        className="bg-gradient-to-br from-indigo-900 via-gray-900 to-purple-900 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300 cursor-pointer"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        onClick={onClick}
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
            <h3 className="text-lg font-semibold text-white">{recipe.title}</h3>
            <p className="mt-2 text-gray-300 text-sm">{recipe.description}</p>
        </div>
    </motion.div>
);

interface RecipeResultsSectionProps {
    results: Recipe[];
    onRecipeClick: (recipe: Recipe) => void;
}

export const RecipeResultsSection = ({
    results,
    onRecipeClick,
}: RecipeResultsSectionProps) => {
    return (
        <section className="py-20 bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 text-white">
            <div className="container mx-auto px-6">
                <motion.h2
                    className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-indigo-300 text-center"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    Recipe Results
                </motion.h2>

                <motion.p
                    className="mt-4 text-center text-gray-300"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    Discover recipes based on your search.
                </motion.p>

                <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {results.map((recipe) => (
                        <RecipeCard
                            key={recipe.id}
                            recipe={recipe}
                            onClick={() => onRecipeClick(recipe)}
                        />
                    ))}
                </div>

                <motion.p
                    className="mt-6 text-center text-gray-400"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.8 }}
                >
                    Can’t find what you’re looking for? Try adjusting your search.
                </motion.p>
            </div>
        </section>
    );
};
