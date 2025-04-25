import React from "react";

const FoodCardSkeleton = () => {
  return (
    <div className="w-full bg-white dark:bg-[black] rounded-md hover:scale-[1.05] transition-all animate-pulse">
      <div className="rounded-lg shadow-md overflow-hidden bg-white dark:bg-[#252525]">
        {/* Image Section */}
        <div className="w-full h-48 bg-gray-300 dark:bg-gray-700 rounded-md" />

        {/* Content Section */}
        <div className="p-4 flex flex-col gap-2">
          {/* Title and Status */}
          <div className="flex items-center justify-between">
            <div className="h-5 bg-gray-300 dark:bg-gray-700 rounded w-1/2" />
            <div className="h-5 bg-gray-300 dark:bg-gray-700 rounded w-1/4" />
          </div>

          {/* Donator */}
          <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-3/4" />

          {/* Location */}
          <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-2/3" />

          {/* Quantity */}
          <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-1/2" />

          {/* Expired Date */}
          <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-2/3" />

          {/* View Details Button */}
          <div className="flex items-center justify-between text-sm">
            <div className="w-full h-10 bg-gray-300 dark:bg-gray-700 rounded-md" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCardSkeleton;
