/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import { format } from "date-fns";
const FoodCard = ({ food }) => {
  const { title, image, quantity, deadline, location, status, notes, _id, donator } =
    food || {};
  const {name} = donator || {};
  return (
    <div
      
      className="w-full  bg-white dark:bg-[black] rounded-md hover:scale-[1.05] transition-all"
    >
      <div className=" rounded-lg shadow-md overflow-hidden bg-white dark:bg-[#252525]">
        {/* Image Section */}
        <img src={image} alt="food" className="w-full h-48 object-cover" />

        {/* Content Section */}
        <div className="p-4 flex flex-col gap-2">
          {/* Title and Favorite Icon */}
          <div className="flex items-center justify-between">
            <h3 className="text-lg mt-2 font-semibold text-gray-800 dark:text-gray-200">{title}</h3>
            <h3
              className={`px-3 py-1  ${
                status === "Available" && "text-green-500 bg-green-100/60 dark:bg-[#252525]"
              } ${status === "Not Available" && "text-red-500 bg-red-100/60"}
                            ${
                              status === "Coming Soon" &&
                              "text-yellow-500 bg-yellow-100/60"
                            } text-xs  rounded-full`}
            >
              {status}
            </h3>
          </div>
           <p  className="text-sm text-gray-600 dark:text-gray-200 font-semibold">Donator: <span className="text-gray-600 dark:text-gray-200">{name}</span></p>
          {/* Cuisine and Location */}
          <p className="text-sm text-gray-600 dark:text-gray-200 font-semibold">Location: <span className="text-gray-600 dark:text-gray-200">{location}</span></p>

          {/* Closing Time */}
          
          <p className="text-sm text-red-500 dark:text-red-400 font-semibold">Quantity: <span className="text-gray-600 dark:text-gray-200">{quantity}</span></p>
          <p className="text-sm text-gray-600 dark:text-gray-200 font-semibold">Expired Date: <span className="text-gray-600 dark:text-gray-200">{format(new Date(deadline), 'P')}</span></p>

          {/* Price and Distance */}
          <div className="flex items-center justify-between text-sm text-gray-500">
            <Link to={`/food/${_id}`} className="w-full px-2 py-3 mt-4 text-center rounded-md text-white dark:text-gray-700 font-bold capitalize transition-colors duration-300 transform bg-[#ebb475] hover:text-black focus:outline-none focus:text-black">View Details</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
