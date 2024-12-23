import React from "react";
import { FaCalendarAlt, FaCommentDots } from "react-icons/fa";


const BlogPost = () => {
  const posts = [
    {
      image: "https://via.placeholder.com/400", // Replace with your image URLs
      title: "Video Post Format – Youtube",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      date: "Oct 31 2017",
      comments: "No Comments",
    },
    {
      image: "https://via.placeholder.com/400", // Replace with your image URLs
      title: "Gallery Post Format",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      date: "Oct 31 2017",
      comments: "No Comments",
    },
    {
      image: "https://via.placeholder.com/400", // Replace with your image URLs
      title: "Video Post Format – Vimeo",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      date: "Oct 31 2017",
      comments: "No Comments",
    },
  ];

  return (
    <div className="py-10 bg-gray-50 container mx-auto">
      <div className="text-center mb-8 flex flex-col gap-6 ">
        <h2 className="text-2xl font-bold text-gray-800">BLOG POSTS</h2>
        <p className="text-gray-600">Check our latest articles, what we are talking about</p>
      </div>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        
          {posts.map((post, index) => (
            
              <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {post.title}
                  </h3>
                  <p className="text-sm text-gray-600 mt-2">{post.description}</p>
                  <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center">
                      <FaCalendarAlt className="mr-2" />
                      {post.date}
                    </div>
                    <div className="flex items-center">
                      <FaCommentDots className="mr-2" />
                      {post.comments}
                    </div>
                  </div>
                </div>
              </div>
           
          ))}
       
      </div>
    </div>
  );
};

export default BlogPost;
