import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Ingredient from "./ingrdient.jsx";
import Steps from "./steps.jsx";
import Video from "./video.jsx";
import Loader from "./loader.jsx";
import { AnimatePresence } from "framer-motion";

export default function Recipe() {
  const { id } = useParams();

  const [loading, setloading] = useState(true);
  const [recipe, setrecipe] = useState(null);

  const [ActivePage, setActivePage] = useState(() => Ingredient);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`,
        );

        const data = await response.json();

        console.log(data);

        setrecipe(data.meals[0]);
      } catch (error) {
        console.log(error);
      }
    };

    fetchRecipe();
  }, [id]);

  if (!recipe) {
    return <Loader onComplete={() => setloading(false)} />;
  }

  return (
    <AnimatePresence mode="wait">
      {loading ? (
        <Loader onComplete={() => setloading(false)} />
      ) : (
        <section className="w-10/12 mx-auto flex flex-col items-center gap-6 font-roboto-serif">
          {/* Recipe image */}
          <img
            src={recipe.strMealThumb}
            alt={recipe.strMeal}
            className="w-72 rounded-2xl shadow-xl"
          />

          {/* Recipe name */}
          <h1 className="text-3xl font-bold text-gray-600">{recipe.strMeal}</h1>

          {/* Buttons */}
          <div className="flex gap-4">
            <button
              onClick={() => setActivePage(() => Ingredient)}
              className="bg-yellow-50 border-2 border-lime-500 text-gray-600 p-2 rounded-xl font-semibold hover:bg-green-600 hover:text-white"
            >
              Ingredients
            </button>

            <button
              onClick={() => setActivePage(() => Steps)}
              className="bg-yellow-50 border-2 border-lime-500 text-gray-600 p-2 rounded-xl font-semibold hover:bg-green-600 hover:text-white"
            >
              Steps
            </button>

            <button
              onClick={() => setActivePage(() => Video)}
              className="bg-yellow-50 border-2 border-lime-500 text-gray-600 p-2 rounded-xl font-semibold hover:bg-green-600 hover:text-white"
            >
              Video
            </button>
          </div>

          {/* Active content */}
          <div className="w-full">
            <ActivePage recipe={recipe} />
          </div>
        </section>
      )}
    </AnimatePresence>
  );
}
