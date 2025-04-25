/* eslint-disable no-unused-vars */
import { useState } from "react";
import axios from "axios";
import FoodCard from "../components/FoodCard";
import { Helmet } from "react-helmet-async";
import LoadingSpinner from "../components/LoadingSpinner";
import { useQuery } from "@tanstack/react-query";
import FoodCardSkeleton from "../components/FoodCardSkeleton";


const AvailableFoods = () => {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("dsc"); // Default to descending
  const [isThreeColumnLayout, setIsThreeColumnLayout] = useState(true);

  const { data: foods = [], isLoading } = useQuery({
    queryKey: ["available foods", search, sort],
    queryFn: async () => {
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/all-foods?search=${encodeURIComponent(
          search
        )}&sort=${sort}`
      );
      return res.data;
    },
  });

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.search.value); // Optional: Trigger search on form submit
  };

  const handleReset = () => {
    setSearch("");
    setSort("dsc"); // Reset to default sort order
  };

  return (
    <div className="lg:container min-h-screen w-11/12 py-10 mx-auto flex flex-col justify-between">
      <Helmet>
        <title>Bite Bank | Available Food</title>
      </Helmet>
      <div>
        {/* Search and Filter Controls */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-5">
          <form onSubmit={handleSearch}>
            <div className="flex p-1 overflow-hidden border rounded-lg focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300">
              <input
                className="px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent"
                type="text"
                name="search"
                onChange={(e) => setSearch(e.target.value)}
                value={search}
                placeholder="Enter Food Title"
                aria-label="Search by food title"
              />
              <button
                type="submit"
                className="px-1 md:px-4 py-3 text-sm font-medium tracking-wider text-white dark:text-gray-700 uppercase transition-colors duration-300 transform bg-[#ebb475] rounded-md hover:bg-[#ebb475] hover:text-black focus:bg-[#ebb475] focus:outline-none"
              >
                Search
              </button>
            </div>
          </form>
          <div>
            <select
              name="sort"
              id="sort"
              onChange={(e) => setSort(e.target.value)}
              value={sort}
              className="border p-4 rounded-md"
              aria-label="Sort by expiration date"
            >
              <option value="dsc">Descending (Default)</option>
              <option value="asc">Ascending</option>
            </select>
          </div>
          <button
            onClick={handleReset}
            className="btn bg-[#ebb475] text-white dark:text-gray-700 hover:bg-[#ebb475] hover:text-black"
            aria-label="Reset search and sort"
          >
            Reset
          </button>
          <button
            onClick={() => setIsThreeColumnLayout(!isThreeColumnLayout)}
            className="btn hidden lg:block bg-[#ebb475] text-white dark:text-gray-700 hover:bg-[#ebb475] hover:text-black"
            aria-label="Toggle grid layout"
          >
            Toggle Layout
          </button>
        </div>

        {/* Food Grid */}
        <div
          className={`grid grid-cols-1 gap-5 mt-8 md:grid-cols-2 ${
            isThreeColumnLayout ? "lg:grid-cols-4" : "lg:grid-cols-3"
          }`}
        >
          {isLoading ? (
            // Render skeleton cards in the grid
            Array(8)
              .fill(0)
              .map((_, index) => <FoodCardSkeleton key={index} />)
          ) : foods.length === 0 ? (
            // Empty state
            <div className="col-span-full text-center py-10">
              <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200">
                No Food Available at This Moment
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                Check back later for new listings!
              </p>
            </div>
          ) : (
            // Render actual food cards
            foods.map((food) => <FoodCard key={food._id} food={food} />)
          )}
        </div>
      </div>
    </div>
  );
};

export default AvailableFoods;