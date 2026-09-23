import { useState, useEffect } from "react";
import Loader from "./loader.jsx";
import { AnimatePresence } from "framer-motion";
import { useSearchParams, useNavigate } from "react-router-dom";

export default function Food() {
  const [loading, setloading] = useState(true);
  const [recipe, setrecipe] = useState([]);

  const [SearchParams] = useSearchParams();
  const search = SearchParams.get("search");

  const navigate = useNavigate();

  useEffect(() => {
    const fetchreceipe = async () => {
      try {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`,
        );

        const data = await response.json();

        console.log(data);

        setrecipe(data.meals || []);
        setloading(false);
      } catch (error) {
        console.log(error);
        setloading(false);
      }
    };

    fetchreceipe();
  }, [search]);

  return (
    <AnimatePresence mode="wait">
      {loading ? (
        <Loader onComplete={() => setloading(false)} />
      ) : recipe.length === 0 ? (
        // Recipe not found
        <section className="w-11/12 max-w-xl mx-auto bg-white rounded-2xl shadow-md p-8 text-center font-roboto-serif">
          <h2 className="text-2xl font-bold text-gray-600 mb-3">
            Recipe Not Found
          </h2>

          <p className="text-gray-500">
            Sorry, we couldn't find a recipe for "{search}".
          </p>

          <button
            onClick={() => navigate("/")}
            className="mt-5 bg-lime-500 text-white font-semibold px-5 py-3 rounded-xl hover:bg-green-600"
          >
            Search Again
          </button>
        </section>
      ) : (
        // Recipe results
        <section className="w-11/12 mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center font-roboto-serif">
          {recipe.map((item) => (
            <div
              key={item.idMeal}
              className="w-82 min-h-60 flex p-3 bg-white flex-col justify-center items-center shadow-2xl rounded-2xl hover:border-2 hover:border-lime-500 gap-4"
            >
              <img
                src={item.strMealThumb}
                alt={item.strMeal}
                className="w-40"
              />

              <h2 className="text-xl text-gray-600 font-semibold text-center">
                {item.strMeal}
              </h2>

              <button
                onClick={() => navigate(`/food2/${item.idMeal}`)}
                className="bg-yellow-50 border-2 border-lime-500 text-gray-600 p-2 rounded-xl font-semibold hover:bg-green-600 hover:text-white"
              >
                View Recipe
              </button>
            </div>
          ))}
        </section>
      )}
    </AnimatePresence>
  );
}
