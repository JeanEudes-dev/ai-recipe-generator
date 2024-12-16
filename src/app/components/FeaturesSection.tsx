'use client'
import { motion } from "framer-motion";
import { FaUtensils, FaRobot, FaLeaf } from "react-icons/fa";

export const FeaturesSection = () => {
  const features = [
    {
      icon: <FaUtensils size={32} className="text-purple-400" />,
      title: "Personalized Recipes",
      description: "Get recipes tailored to your ingredients, preferences, and dietary needs."
    },
    {
      icon: <FaRobot size={32} className="text-indigo-400" />,
      title: "AI Suggestions",
      description: "Our AI generates creative ideas to inspire your next meal."
    },
    {
      icon: <FaLeaf size={32} className="text-green-400" />,
      title: "Eco-Friendly Options",
      description: "Discover sustainable and eco-friendly recipe choices."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-indigo-300"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Key Features
        </motion.h2>
        <motion.p
          className="mt-4 text-lg text-gray-300"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Explore the unique features that make our platform stand out.
        </motion.p>

        <div className="mt-12 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gray-700 mb-4 mx-auto">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-purple-200">{feature.title}</h3>
              <p className="mt-2 text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
