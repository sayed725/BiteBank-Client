import React from 'react';
import FoodCard from '../components/FoodCard';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import LoadingSpinner from '../components/LoadingSpinner';

const FeaturedFood = () => {
   

    const { data:foods = [] , isLoading} = useQuery({ queryKey:['foods'], queryFn: async ()=>{
        const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/foods`) 
        return data 
    }})
    // console.log(foods, isLoading)

    // if(isLoading) return <LoadingSpinner></LoadingSpinner>


    return (
        <div className='lg:container mx-auto py-10 w-11/12'>
            <div className="text-center mb-8 flex flex-col gap-6 ">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200 animate__fadeInLeft animate__animated">Explore Our Top Foods</h2>
        <p className="text-gray-600 dark:text-gray-200 animate__animated animate__fadeInRight ">Check our latest food, details and what order more</p>
      </div>
      <div className=''>

      {
        isLoading?  
        (<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
        {/* Render skeleton BedCards while loading */}
        {Array(8)
          .fill(0)
          .map((_, index) => (
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
          ))}
      </div>)
        : foods.length === 0 ? <div className='col-span-4 text-center'>
        <h2 className='text-3xl font-bold text-gray-800 dark:text-gray-200'>No Food Available at this moment</h2>
        </div> : (
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8'>
           {
             foods.slice(0, 8).map(food => (
                < FoodCard key={food._id} food={food} />
              ))
           }
        </div>
        )
      }


        </div>
        <div className='flex justify-center mt-8'>
            <Link to={'/foods'}><button className="w-full px-5 py-3 mt-4 rounded-md text-sm dark:text-gray-700 text-white font-bold capitalize transition-colors duration-300 transform bg-[#ebb475] hover:text-black focus:outline-none focus:text-black">Show All Food</button></Link>
        </div>

        </div>
    );
};

export default FeaturedFood;