import React from "react";

const StatsSection = () => {
  const stats = [
    { number: "9750+", label: "Happy Customers", icon: "😊" },
    { number: "2800+", label: "Cooked Dishes", icon: "🍲" },
    { number: "5700+", label: "Social Media Fans", icon: "📱" },
    { number: "6400+", label: "Worked Hours", icon: "⏰" },
  ];

  return (
    <div className="bg-orange-300 py-10 text-white container mx-auto rounded-md">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="text-5xl font-bold border-b-2 pb-4 border-white ">{stat.number}</div>
            <div className="pt-4 text-lg">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsSection;
