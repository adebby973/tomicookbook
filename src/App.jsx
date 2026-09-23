import { useState } from "react";
import Home from "./components/home.jsx";
import Food from "./components/food.jsx";
import Foods from "./components/food2.jsx";
import { motion } from "framer-motion";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Router>
      <motion.section
        initial={{ opacity: 0.1 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3, ease: "linear" }}
        className="bg-yellow-50 w-full min-h-screen font-roboto-serif p-4"
      >
        {/* Header */}
        <motion.header className="w-full flex pr-1.5 justify-between relative rounded-2xl p-2 bg-lime-500 items-center">
          {/* Logo */}
          <div className="flex italic">
            <img src="/cookbook.svg" alt="" className="w-10" />

            <div className="flex flex-col">
              <h2 className="text-white text-2xl">Tomi's</h2>

              <h3 className="text-gray-600">
                <span>C</span>ookbook
              </h3>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-4">
            <Link
              to="/"
              className="text-white font-semibold hover:text-yellow-50"
            >
              Home
            </Link>

            <Link
              to="/food"
              className="text-white font-semibold hover:text-yellow-50"
            >
              Recipe
            </Link>

            <Link
              to="/"
              className="text-white font-semibold hover:text-yellow-50"
            >
              About
            </Link>

            <Link
              to="/"
              className="text-white font-semibold hover:text-yellow-50"
            >
              Contacts
            </Link>
          </nav>

          {/* Hamburger Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white text-3xl font-bold"
          >
            ☰
          </button>

          {/* Mobile Menu */}
          {menuOpen && (
            <nav className="absolute top-full right-0 mt-2 w-48 bg-white rounded-xl shadow-xl p-4 flex flex-col gap-3 z-50 md:hidden">
              <Link
                to="/"
                onClick={() => setMenuOpen(false)}
                className="text-gray-600 font-semibold hover:text-lime-500"
              >
                Home
              </Link>

              <Link
                to="/food"
                onClick={() => setMenuOpen(false)}
                className="text-gray-600 font-semibold hover:text-lime-500"
              >
                Recipe
              </Link>

              <Link
                to="/"
                onClick={() => setMenuOpen(false)}
                className="text-gray-600 font-semibold hover:text-lime-500"
              >
                About
              </Link>

              <Link
                to="/"
                onClick={() => setMenuOpen(false)}
                className="text-gray-600 font-semibold hover:text-lime-500"
              >
                Contacts
              </Link>
            </nav>
          )}
        </motion.header>

        {/* Pages */}
        <main className="my-6">
          <Routes>
            <Route path="/" element={<Home />} />

            {/* Search results */}
            <Route path="/food" element={<Food />} />

            {/* Individual recipe */}
            <Route path="/food2/:id" element={<Foods />} />
          </Routes>
        </main>

        {/* Footer */}
        <section className="w-full flex flex-col items-center bg-lime-500 outline-2 outline-white rounded-2xl">
          <footer className="m-2 w-11/12 border-b-2 border-b-gray-500 p-3 gap-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 align-middle items-center">
            <div className="flex flex-col align-middle justify-center">
              <div className="flex flex-col italic">
                <h2 className="text-white text-2xl">
                  <span className="italic">T</span>omi's
                </h2>

                <h3 className="text-gray-600">
                  <span>C</span>ookbook
                </h3>
              </div>

              <p className="text-gray-500">Recipes from all over the world,</p>

              <span className="text-gray-500">make your cooking better..</span>
            </div>

            <div className="flex flex-col align-middle justify-center">
              <h2 className="font-semibold text-white">Quick Links</h2>

              <Link to="/" className="text-gray-500 hover:underline">
                Home
              </Link>

              <Link to="/food" className="text-gray-500 hover:underline">
                Recipes
              </Link>

              <Link to="/" className="text-gray-500 hover:underline">
                About
              </Link>

              <Link to="/" className="text-gray-500 hover:underline">
                Contacts
              </Link>
            </div>

            <div className="flex flex-col align-middle justify-center">
              <h2 className="font-semibold text-white">Contacts</h2>

              <p className="text-gray-500">📍 Lagos, Nigeria</p>

              <a
                href="tel:+2348056535070"
                className="text-gray-500 hover:underline block"
              >
                📞 +234 805 653 5070
              </a>

              <label htmlFor="email" className="text-gray-500 mt-1">
                Send a mail to get a copy
              </label>

              <p className="flex mt-1">
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-white w-40 px-2 outline-none text-gray-700"
                />

                <a
                  href="mailto:tomisinadebisi09@gmail.com"
                  className="w-15 bg-white border-white text-gray-500 text-center border-2 px-2 hover:bg-transparent hover:text-white transition-colors"
                >
                  send
                </a>
              </p>
            </div>
          </footer>

          <p>© 2026 Tomi's Cookbook</p>
        </section>
      </motion.section>
    </Router>
  );
}
