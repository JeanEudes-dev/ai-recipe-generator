'use client'

import { motion } from "framer-motion";

interface RecipeDetailProps {
    title: string;
    image: string;
    description: string;
    ingredients: string[];
    steps: string[];
}

export const RecipeDetailSection = ({
    title,
    image,
    description,
    ingredients,
    steps,
}: RecipeDetailProps) => {
    return (
        <section className="py-20 bg-white text-gray-800">
            <div className="container mx-auto px-6">
                <motion.h2
                    className="text-4xl font-bold text-center text-indigo-600"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    {title}
                </motion.h2>

                <motion.div
                    className="mt-10 flex flex-col lg:flex-row gap-10 items-center"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    <img
                        src={image}
                        alt={title}
                        className="w-full lg:w-1/2 rounded-lg shadow-lg"
                    />

                    <div className="w-full lg:w-1/2">
                        <p className="text-lg text-gray-700 mb-4">{description}</p>

                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Ingredients:</h3>
                        <ul className="list-disc list-inside space-y-2">
                            {ingredients.map((ingredient, index) => (
                                <li key={index} className="text-gray-700">
                                    {ingredient}
                                </li>
                            ))}
                        </ul>

                        <h3 className="mt-6 text-xl font-semibold text-gray-800 mb-2">Steps:</h3>
                        <ol className="list-decimal list-inside space-y-2">
                            {steps.map((step, index) => (
                                <li key={index} className="text-gray-700">
                                    {step}
                                </li>
                            ))}
                        </ol>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
