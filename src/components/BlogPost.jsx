import React from "react";
import { FaCalendarAlt, FaCommentDots } from "react-icons/fa";
import { Swiper, SwiperSlide} from "swiper/react";

import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";


import blogImg1 from '../assets/images/blog1.jpg'
import blogimg2 from '../assets/images/blog2.jpeg'
import blogimg3 from '../assets/images/blog3.jpg'
import blogImg4 from '../assets/images/blog4.jpg'
import blogimg5 from '../assets/images/blog5.jpg'
import blogimg6 from '../assets/images/blog6.jpg'


const BlogPost = () => {
  const posts = [
    // 1 blog post
    {
      image: blogImg1, 
      title: "5 SIMPLE & HEALTHY COOKIE RECIPES",
      description:
        "Here are 5 simple & healthy gluten-free cookie recipes: Almond Flour Chocolate Chip, Peanut Butter Oatmeal, Coconut Macaroons, Banana Oat, and Pumpkin Spice Cookies 🍪",
      date: "Dec 24 2024",
      comments: "23 Comments",
    },
    // 2 blog post
    {
      image: blogimg2, 
      title: "6 Tip to Make Paleo Eating Easy",
      description:
        "Here are 6 tips to make Paleo eating easy: focus on whole foods, plan your meals, keep snacks handy, try new recipes, prep in advance, and stay hydrated. 🥗🍖",
      date: "Dec 23 2024",
      comments: "12 Comments",
    },
    // 3 blog post
    {
      image: blogimg3,
      title: "5 Foods That Sound Healthy But Aren’t", 
      description:
        "Here are 5 foods that sound healthy but aren’t: granola bars, flavored yogurt, veggie chips, fruit smoothies, and gluten-free snacks. 🍫🥤",
      date: "Dec 10 2024",
      comments: "56 Comments",
    },
    // 4 blog post
    {
      image: blogImg4,
      title: "Food Pairings That Will Surprise You", 
      description:
        "Here are Food Pairings That Will Surprise You: chocolate and avocado, strawberries and balsamic vinegar, watermelon and feta, bacon and maple syrup, and mango and chili. 🍓🍉",
      date: "Dec 15 2024",
      comments: "16 Comments",
    },
    // 5 blog post
    {
      image: blogimg5,
      title: "Seasonal Recipes to Try This Month", 
      description:
        "Here are Seasonal Recipes to Try This Month: hearty beef stew, roasted Brussels sprouts, cranberry walnut bread, spiced hot chocolate, and pumpkin cheesecake. 🍁🍲",
      date: "Dec 17 2024",
      comments: "39 Comments",
    },
    // 6 blog post
    {
      image: blogimg6,
      title: "5-Minute Healthy Snack Ideas", 
      description:
        "Here are 5-minute healthy snack ideas: apple slices with almond butter, Greek yogurt with berries, trail mix, avocado toast, and rice cakes with hummus. 🥑🍎",
      date: "Dec 22 2024",
      comments: "11 Comments",
    },
  ];

  return (
    <div className="py-10 lg:container mx-auto">
      <div className="text-center mb-8 flex flex-col gap-6 ">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200">Our Latest Blog Posts</h2>
        <p className="text-gray-600 dark:text-gray-200">
          Check our recent articles, what we are talking about and what you can
        </p>
      </div>
      <Swiper  slidesPerView={3}
        spaceBetween={20}
        breakpoints={{
            200: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        speed={2000}
        modules={[Autoplay]}
        className="lg:container mx-auto w-11/12">


     
      
        {posts.map((post, index) => (
          <SwiperSlide
            key={index}
            className="bg-white dark:bg-[#252525] shadow-lg rounded-lg overflow-hidden"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-[200px] object-cover hover:scale-[1.05] transition-all"
            />
            <div className="p-2 h-[200px] flex flex-col mt-5 justify-between">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                {post.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-200 mt-2">
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
              <div className="mt-4 flex items-center justify-between text-sm text-gray-500 dark:text-gray-200 hover:text-blue-500">
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
          </SwiperSlide>
        ))}
         </Swiper>
      
    </div>
  );
};

export default BlogPost;
