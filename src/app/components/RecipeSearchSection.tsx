'use client';

import { motion } from "framer-motion";
import { useState } from "react";
import { useRouter } from "next/navigation";

export const RecipeSearchSection: React.FC = () => {
    const [query, setQuery] = useState("");
    const router = useRouter();

    const handleSearch = () => {
        if (query.trim() !== "") {
            router.push(`/recipes?query=${encodeURIComponent(query)}`);
        }
    };

    return (
        <section className="py-20 bg-gradient-to-br from-indigo-900 via-gray-900 to-purple-900 text-white">
            <div className="container mx-auto px-6 text-center">
                <motion.h2
                    className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-indigo-300"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    Search for Recipes
                </motion.h2>
                <motion.p
                    className="mt-4 text-lg text-gray-300"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    Find delicious recipes based on your preferences and ingredients.
                </motion.p>

                <motion.div
                    className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.8 }}
                >
                    <input
                        type="text"
                        placeholder="Enter ingredients or keywords"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        className="w-full sm:w-2/3 px-4 py-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-purple-500 outline-none"
                    />
                    <button
                        onClick={handleSearch}
                        className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium shadow-md transition-all"
                    >
                        Search
                    </button>
                </motion.div>
            </div>
        </section>
    );
};
