import { FaHeart, FaClock, FaStar, FaCheckCircle } from "react-icons/fa";


const recipes = [
  { 
    id: 1, 
    name: "Spaghetti Carbonara", 
    time: "20 min", 
    rating: "4.8", 
    image: "https://source.unsplash.com/400x300/?pasta",
    description: [
      "Rich and creamy egg-based sauce",
      "Crispy pancetta for added flavor",
      "Topped with Parmesan cheese"
    ]
  },
  { 
    id: 2, 
    name: "Grilled Chicken", 
    time: "30 min", 
    rating: "4.6", 
    image: "https://source.unsplash.com/400x300/?grilled-chicken",
    description: [
      "Marinated in herbs and spices",
      "Juicy and tender texture",
      "Perfect for meal prep"
    ]
  },
  { 
    id: 3, 
    name: "Avocado Toast", 
    time: "10 min", 
    rating: "4.7", 
    image: "https://source.unsplash.com/400x300/?avocado-toast",
    description: [
      "Creamy avocado spread",
      "Topped with cherry tomatoes and sesame seeds",
      "Drizzled with lemon juice"
    ]
  },
  { 
    id: 4, 
    name: "Chicken Alfredo Pasta", 
    time: "25 min", 
    rating: "4.9", 
    image: "https://source.unsplash.com/400x300/?alfredo-pasta",
    description: [
      "Creamy Alfredo sauce with garlic",
      "Tender grilled chicken slices",
      "Topped with fresh parsley"
    ]
  },
  { 
    id: 5, 
    name: "Mango Smoothie", 
    time: "5 min", 
    rating: "4.8", 
    image: "https://source.unsplash.com/400x300/?mango-smoothie",
    description: [
      "Fresh mango blended with yogurt",
      "Naturally sweet and refreshing",
      "Perfect summer drink"
    ]
  },
  { 
    id: 6, 
    name: "Stuffed Bell Peppers", 
    time: "35 min", 
    rating: "4.7", 
    image: "https://source.unsplash.com/400x300/?stuffed-peppers",
    description: [
      "Bell peppers filled with rice and veggies",
      "Seasoned with herbs and spices",
      "Baked to perfection"
    ]
  },
  { 
    id: 7, 
    name: "Chocolate Brownie", 
    time: "40 min", 
    rating: "4.9", 
    image: "https://source.unsplash.com/400x300/?brownies",
    description: [
      "Rich and fudgy texture",
      "Loaded with dark chocolate",
      "Perfect for dessert lovers"
    ]
  },
  { 
    id: 8, 
    name: "Berry Parfait", 
    time: "15 min", 
    rating: "4.6", 
    image: "https://source.unsplash.com/400x300/?berry-parfait",
    description: [
      "Layers of fresh berries and yogurt",
      "Topped with crunchy granola",
      "Healthy and delicious"
    ]
  }
];
function Recipes() {
  return (
    <div className="py-10 w-11/12 lg:container mx-auto min-h-screen bg-white dark:bg-[#1E1E1E]">
      <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-200 animate__fadeInLeft animate__animated text-center mb-5">
        Delicious Recipes
      </h1>
      <p className="text-gray-600 dark:text-gray-200 animate__animated animate__fadeInRight text-center ">Check our latest Recipes and Save it to Your Dairy</p>
      <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-4 rounded-md">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-gray-800 text-white rounded-lg shadow-lg overflow-hidden"
          >
            <img
              src={recipe.image}
              alt={recipe.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{recipe.name}</h2>
              <div className="flex justify-between items-center mt-2 text-gray-400">
                <span className="flex items-center gap-1">
                  <FaClock /> {recipe.time}
                </span>
                <span className="flex items-center gap-1">
                  <FaStar className="text-yellow-400" /> {recipe.rating}
                </span>
              </div>

              <ul className="mt-3 text-gray-300 text-sm space-y-1">
              {recipe.description.map((point, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <FaCheckCircle className="text-green-400" /> {point}
                  </li>
                ))}
              </ul>




              <button className="mt-4 flex items-center justify-center gap-2 bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 w-full text-center">
                <FaHeart /> Save Recipe
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Recipes;
