'use client'
import { motion } from "framer-motion";

export const HeroSection = () => {
  return (
    <section className="relative h-screen bg-gradient-to-br from-purple-800 via-indigo-800 to-gray-900 text-white">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="w-64 h-64 bg-purple-500 opacity-50 blur-2xl rounded-full absolute top-20 left-10"
          animate={{ scale: [1, 1.2, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="w-48 h-48 bg-indigo-500 opacity-40 blur-2xl rounded-full absolute bottom-20 right-10"
          animate={{ scale: [1, 1.4, 1], opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <motion.h1
          className="text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-indigo-300 animate-text"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
        >
          Welcome to AI Recipe Hub
        </motion.h1>
        <motion.p
          className="mt-4 text-lg max-w-2xl text-gray-300"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        >
          Discover delicious recipes tailored to your ingredients and preferences with our AI-powered suggestions.
        </motion.p>
        <motion.div
          className="mt-8 flex space-x-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 1 }}
        >
          <button className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium shadow-md transition-all">
            Get Started
          </button>
          <button className="px-6 py-3 bg-gray-700 hover:bg-gray-800 text-white rounded-lg font-medium shadow-md transition-all">
            Learn More
          </button>
        </motion.div>
      </div>
    </section>
  );
};
