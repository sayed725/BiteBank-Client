import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import teamimg1 from '../assets/images/random person 1.jpg'
import teamimg2 from '../assets/images/random-person 2.jpg'
import teamimg3 from '../assets/images/random-person3.jpg'


const stats = [
    { number: "9750+", label: "Happy Customers", icon: "😊" },
    { number: "2800+", label: "Cooked Dishes", icon: "🍲" },
    { number: "5700+", label: "Social Media Fans", icon: "📱" },
    { number: "6400+", label: "Worked Hours", icon: "⏰" },
  ];

const testimonials = [
  {
    quote:
      "The food was absolutely delightful—fresh, flavorful, and beautifully presented! I was impressed by the variety of options available to suit every taste. The service was friendly and efficient, making it a truly enjoyable experience!",
    name: "John Doe",
    position: "Customer",
    image: teamimg1,
  },
  {
    quote:
      "An amazing dining experience with a perfect blend of taste and quality! The ambiance was warm and inviting, and the staff went above and beyond to ensure our satisfaction. I can't wait to recommend this place to all my friends!",
    name: "Jane Smith",
    position: "Customer",
    image: teamimg2,
  },
  {
    quote:
      "The flavors were incredible, and each dish felt like it was made with love and care! The portions were generous, and the presentation was outstanding. From start to finish, it was a memorable experience I’d happily repeat!",
    name: "Robert Brown",
    position: "Customer",
    image: teamimg3,
  },
];

const ReviewSection = () => {
  return (
    <div className="bg-[#ebb475] text-white py-10 lg:px-[200px] rounded-md lg:container mx-auto">
      <div className="">
        {/* Section Header */}
      <div className="flex flex-col gap-5 pb-10 mb-10 justify-center items-center">
     
        <h2 className="text-4xl font-bold px-2 text-center">What our Customers say</h2>

      </div>
        {/* Swiper Slider */}
        <Swiper
          navigation
          modules={[Navigation, Autoplay]}
          loop={true}
          autoplay={{
            delay: 2000, 
            disableOnInteraction: false, 
          }}
          className="mb-12 lg:w-3/4"
          speed={1000}
          spaceBetween={50}
          slidesPerView={1}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col items-center text-center">
                <p className="text-lg italic mb-10 px-10">"{testimonial.quote}"</p>
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-white"
                  />
                  <div>
                    <h4 className="text-xl font-bold">{testimonial.name}</h4>
                    <p className="text-sm">
                      {testimonial.position}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Stats Section */}
        <div className="py-10 text-white container mx-auto rounded-md">
      <div className="container mx-auto grid grid-cols-2  lg:grid-cols-4 gap-8 text-center">
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="text-4xl font-bold border-b-2 pb-4 border-white ">{stat.number}</div>
            <div className="pt-4 text-lg">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
      </div>
    </div>
  );
};

export default ReviewSection;