import React from 'react';
import popularimg1 from '../assets/images/Popular1.jpg'
import popularimg2 from '../assets/images/popular2 kacchi.webp'
import popularimg3 from '../assets/images/popular3 kichiru.webp'
import popularimg4 from '../assets/images/popular4 nihari.png'
import popularimg5 from '../assets/images/popular5 pizza.jpeg'
import popularimg6 from '../assets/images/popular6 kala vhuna.jpg'
import { Link } from 'react-router-dom';

const PopularFoods = () => {
    const destinations = [
        { name: "Burger", image: popularimg1 },
        { name: "Kacchi Biryani", image: popularimg2 },
        { name: "Beff Khichuri", image: popularimg3 },
        { name: "Mutton Nihari", image: popularimg4 },
        { name: "Pizza", image: popularimg5 },
        { name: "Kala Vhuna", image: popularimg6 },
      ];
    return (
       <Link to={'/foods'} >
        
        <div className="bg-white container mx-auto w-11/12 sm:w-full">
       <div className='flex flex-col gap-5'>    
           <h2 className='text-3xl text-center font-bold animate__slideInRight animate__animated'>Explore Some Popular Categories</h2>
           </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto mt-10">
        {destinations.map((destination) => (
          <div
            key={destination.name}
            className="relative group overflow-hidden rounded-lg shadow-lg"
          >
            <img
              src={destination.image}
              alt={destination.name}
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white text-xl font-bold">{destination.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div></Link>
    );
};

export default PopularFoods;