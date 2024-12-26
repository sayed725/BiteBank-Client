import React, { useEffect, useState } from 'react';
import FoodCard from '../components/FoodCard';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import LoadingSpinner from '../components/LoadingSpinner';

const FeaturedFood = () => {
    // const [foods, setFoods] = useState([])
    // useEffect(() => {
    //   fetchAllJobs()
    // }, [])
  
    // const fetchAllJobs = async () => {
    //   const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/foods`)
    //   setFoods(data)
    // }

    const { data:foods , isLoading} = useQuery({ queryKey:['foods'], queryFn: async ()=>{
        const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/foods`) 
        return data 
    }})
    // console.log(foods, isLoading)

    if(isLoading) return <LoadingSpinner></LoadingSpinner>


    return (
        <div className='px-2 lg:px-5 lg:container mx-auto py-10'>
            <div className="text-center mb-8 flex flex-col gap-6 ">
        <h2 className="text-3xl font-bold text-gray-800 animate__fadeInLeft animate__animated">Explore Our Top Foods</h2>
        <p className="text-gray-600 animate__animated animate__fadeInRight ">Check our latest food, details and what order more</p>
      </div>
      <div className='grid grid-cols-1 gap-10 mt-8 md:grid-cols-2 lg:grid-cols-3'>
          {foods.map(food => (
            < FoodCard key={food._id} food={food} />
          ))}
        </div>
        <div className='flex justify-center mt-8'>
            <Link to={'/foods'}><button className="w-full px-5 py-3 mt-4 rounded-md text-sm text-white font-bold capitalize transition-colors duration-300 transform bg-[#ebb475] hover:text-black focus:outline-none focus:text-black">Show All Food</button></Link>
        </div>

        </div>
    );
};

export default FeaturedFood;