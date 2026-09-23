import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function App() {
  const navigate = useNavigate();
  const [search, setsearch] = useState("");

  const handlesearch = () => {
    const name = search.toLowerCase().trim();

    if (!name) {
      alert("Enter food to search");
      return;
    }

    navigate(`/food?search=${encodeURIComponent(name)}`);
  };

  return (
    <section className="flex flex-col gap-8 justify-center font-roboto-serif">
      {/* HERO */}
      <motion.section
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 2 }}
        className="relative w-full h-80 bg-cover bg-center flex flex-col justify-center items-center text-center bg-black"
        style={{ backgroundImage: "url('/one.jfif')" }}
      >
        <div className="absolute inset-0 bg-black opacity-70 pointer-events-none" />

        <div className="relative z-10 px-4">
          <p className="text-2xl text-yellow-50 font-extrabold">
            Welcome to{" "}
            <span className="text-white text-3xl">Tomi's Cookbook</span>
          </p>

          <h2 className="text-2xl text-yellow-50 font-bold mt-2">
            Make your cooking easier
          </h2>

          <p className="text-lg text-yellow-50 font-semibold mt-2">
            Search recipes and elevate your meals
          </p>
        </div>
      </motion.section>

      {/* SEARCH */}
      <motion.section
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 2 }}
        className="w-10/12 max-w-xl mx-auto flex items-center bg-white rounded-2xl shadow-md border border-gray-200 overflow-hidden focus-within:ring-2 focus-within:ring-green-500"
      >
        <input
          type="text"
          value={search}
          onChange={(e) => setsearch(e.target.value)}
          id="searchrec"
          placeholder="Search recipes..."
          className="w-full px-4 py-3 bg-transparent text-gray-700 outline-none placeholder-gray-400"
          aria-label="Search recipes"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handlesearch();
            }
          }}
        />

        <button
          type="button"
          onClick={handlesearch}
          className="bg-lime-500 hover:bg-green-600 text-white font-medium px-6 py-3 transition-colors duration-200"
        >
          Search
        </button>
      </motion.section>

      {/* HOW TO USE */}
      <motion.section
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 2.2, duration: 1 }}
        className="w-10/12 max-w-3xl mx-auto bg-white rounded-2xl shadow-md p-6 mb-8"
      >
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">
          How To Use
        </h2>

        <div className="flex flex-col gap-5">
          {/* STEP 1 */}
          <div className="flex gap-4 items-start">
            <span className="w-9 h-9 shrink-0 flex items-center justify-center rounded-full bg-lime-500 text-white font-bold">
              1
            </span>

            <div>
              <h3 className="text-lg font-bold text-gray-700">
                Search for a food
              </h3>

              <p className="text-gray-500">
                Enter the name of the food you want to make in the search box
                and click the Search button.
              </p>
            </div>
          </div>

          {/* STEP 2 */}
          <div className="flex gap-4 items-start">
            <span className="w-9 h-9 shrink-0 flex items-center justify-center rounded-full bg-lime-500 text-white font-bold">
              2
            </span>

            <div>
              <h3 className="text-lg font-bold text-gray-700">
                Choose a recipe
              </h3>

              <p className="text-gray-500">
                You will see different recipes related to your search. Find one
                you like and click <b>View Recipe</b>.
              </p>
            </div>
          </div>

          {/* STEP 3 */}
          <div className="flex gap-4 items-start">
            <span className="w-9 h-9 shrink-0 flex items-center justify-center rounded-full bg-lime-500 text-white font-bold">
              3
            </span>

            <div>
              <h3 className="text-lg font-bold text-gray-700">
                Follow the recipe
              </h3>

              <p className="text-gray-500">
                Explore the ingredients, cooking steps, and recipe video to help
                you prepare your meal.
              </p>
            </div>
          </div>
        </div>
      </motion.section>
    </section>
  );
}
