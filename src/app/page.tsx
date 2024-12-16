'use client'

import { FeaturesSection } from "./components/FeaturesSection";
import { HeroSection } from "./components/HeroSection";
import { RecipeSearchSection } from "./components/RecipeSearchSection";

const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <HeroSection />

      {/* Features Section */}
      <FeaturesSection />

      {/* Recipe Search Section */}
      <RecipeSearchSection />
    </div>
  );
};

export default HomePage;
