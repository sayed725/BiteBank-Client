import React from "react";
import { FaCalendarAlt, FaCommentDots } from "react-icons/fa";

import blogImg1 from '../assets/images/blog1.jpg'
import blogimg2 from '../assets/images/blog2.jpeg'
import blogimg3 from '../assets/images/blog3.jpg'


const BlogPost = () => {
  const posts = [
    {
      image: blogImg1, 
      title: "5 SIMPLE & HEALTHY GLUTEN FREE COOKIE RECIPES",
      description:
        "Here are 5 simple & healthy gluten-free cookie recipes: Almond Flour Chocolate Chip, Peanut Butter Oatmeal, Coconut Macaroons, Banana Oat, and Pumpkin Spice Cookies 🍪",
      date: "Dec 05 2024",
      comments: "23 Comments",
    },
    {
      image: blogimg2, 
      title: "6 Tip to Make Paleo Eating Easy",
      description:
        "Here are 6 tips to make Paleo eating easy: focus on whole foods, plan your meals, keep snacks handy, try new recipes, prep in advance, and stay hydrated. 🥗🍖",
      date: "Dec 08 2024",
      comments: "12 Comments",
    },
    {
      image: blogimg3,
      title: "5 Foods That Sound Healthy But Aren’t", 
      description:
        "Here are 5 foods that sound healthy but aren’t: granola bars, flavored yogurt, veggie chips, fruit smoothies, and gluten-free snacks. 🍫🥤",
      date: "Dec 10 2024",
      comments: "56 Comments",
    },
  ];

  return (
    <div className="py-10 bg-gray-50 container mx-auto">
      <div className="text-center mb-8 flex flex-col gap-6 ">
        <h2 className="text-2xl font-bold text-gray-800">Our Latest Blog Posts</h2>
        <p className="text-gray-600">
          Check our recent articles, what we are talking about and what you can
        </p>
      </div>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-48 object-cover hover:scale-[1.05] transition-all"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">
                {post.title}
              </h3>
              <a href=""></a>
              <p className="text-sm text-gray-600 mt-2">
                {post.description}...{" "}
                <a
                  href="https://www.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500"
                >
                  Read more...
                </a>
              </p>
              <div className="mt-4 flex items-center justify-between text-sm text-gray-500 hover:text-blue-500">
                <div className="flex items-center">
                  <FaCalendarAlt className="mr-2" />
                  {post.date}
                </div>
                <a  href="https://www.google.com" target="_blank" rel="noopener noreferrer" className="flex items-center">
                  <FaCommentDots className="mr-2 text-blue-500" />
                  {post.comments}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPost;
