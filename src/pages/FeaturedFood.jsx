import React, { useEffect, useState } from 'react';
import FoodCard from '../components/FoodCard';
import axios from 'axios';

const FeaturedFood = () => {
    const [foods, setFoods] = useState([])
    useEffect(() => {
      fetchAllJobs()
    }, [])
  
    const fetchAllJobs = async () => {
      const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/foods`)
      setFoods(data)
    }


    return (
        <div className='px-2 lg:px-5 container mx-auto'>
            <div className="text-center mb-8 flex flex-col gap-6 ">
        <h2 className="text-2xl font-bold text-gray-800">Explore Our Top Foods</h2>
        <p className="text-gray-600">Check our latest food, details and what order more</p>
      </div>
      <div className='grid grid-cols-1 gap-6 mt-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {foods.map(food => (
            < FoodCard key={food._id} food={food} />
          ))}
        </div>

        </div>
    );
};

export default FeaturedFood;