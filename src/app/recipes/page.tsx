'use client';

import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import { RecipeResultsSection } from "../components/RecipeResultsSection";
import { useRouter } from "next/navigation";

interface Recipe {
    id: string;
    title: string;
    image: string;
    description: string;
    ingredients: string[];
    steps: string[];
}

const mockRecipes: Recipe[] = [
    {
        id: "1",
        title: "Spaghetti Carbonara",
        image: "/images/spaghetti.jpg",
        description: "A classic Italian pasta dish with creamy sauce.",
        ingredients: ["Spaghetti", "Eggs", "Parmesan cheese", "Pancetta", "Black pepper"],
        steps: ["Cook pasta.", "Fry pancetta.", "Mix eggs and cheese.", "Combine and serve."],
    },
    {
        id: "2",
        title: "Avocado Toast",
        image: "/images/avocado-toast.jpg",
        description: "Simple and healthy breakfast option.",
        ingredients: ["Bread", "Avocado", "Salt", "Pepper", "Lemon"],
        steps: ["Toast bread.", "Mash avocado.", "Spread on toast.", "Season and serve."],
    },
];

export default function RecipesPage() {
    const [recipes, setRecipes] = useState<Recipe[]>([]);
    const searchParams = useSearchParams();
    const query = searchParams.get("query") || "";

    useEffect(() => {
        if (query) {
            const filteredRecipes = mockRecipes.filter((recipe) =>
                recipe.title.toLowerCase().includes(query.toLowerCase())
            );
            setRecipes(filteredRecipes);
        } else {
            setRecipes(mockRecipes);
        }
    }, [query]);

    const router = useRouter();

    const handleRecipeSelect = (recipe: Recipe) => {
        router.push(`/recipes/${recipe.id}`);
    };

    return (
        <main className="bg-gray-100 min-h-screen">
            <RecipeResultsSection
                results={recipes}
                onRecipeClick={handleRecipeSelect}
            />
        </main>
    );
}
