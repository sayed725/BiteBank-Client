import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


import teamimg1 from '../../public/random-person-1.avif';
import teamimg2 from '../../public/random-person-2.avif';
import teamimg3 from '../../public/random-person-3.avif';

const stats = [
  { number: '9750+', label: 'Happy Customers', },
  { number: '2800+', label: 'Cooked Dishes', },
  { number: '5700+', label: 'Social Media Fans' },
  { number: '6400+', label: 'Worked Hours',  },
];

const testimonials = [
  {
    quote:
      'The food was absolutely delightful—fresh, flavorful, and beautifully presented! I was impressed by the variety of options available to suit every taste. The service was friendly and efficient, making it a truly enjoyable experience!',
    name: 'John Doe',
    position: 'Customer',
    image: teamimg1,
  },
  {
    quote:
      'An amazing dining experience with a perfect blend of taste and quality! The ambiance was warm and inviting, and the staff went above and beyond to ensure our satisfaction. I can’t wait to recommend this place to all my friends!',
    name: 'Jane Smith',
    position: 'Customer',
    image: teamimg2,
  },
  {
    quote:
      'The flavors were incredible, and each dish felt like it was made with love and care! The portions were generous, and the presentation was outstanding. From start to finish, it was a memorable experience I’d happily repeat!',
    name: 'Robert Brown',
    position: 'Customer',
    image: teamimg3,
  },
];

const ReviewSection = () => {
  const slickSettings = {
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: false,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: true,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          arrows: false, // Hide arrows on small screens for cleaner UI
        },
      },
    ],
  };

  return (
    <div className="bg-[#ebb475] dark:bg-gray-800 text-white dark:text-gray-200 py-10 px-4 sm:px-6 lg:px-32 rounded-md w-11/12 mx-auto">
      {/* Section Header */}
      <div className="flex flex-col gap-5 pb-10 mb-10 justify-center items-center">
        <h2 className="text-3xl sm:text-4xl font-bold px-2 text-center">What our Customers say</h2>
      </div>

      {/* Slick Carousel */}
      <Slider {...slickSettings} className="mb-12">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="px-4">
            <div className="flex flex-col items-center text-center  dark:bg-gray-700 text-white dark:text-gray-200 rounded-lg p-6 shadow-md">
              <p className="text-base sm:text-lg italic mb-6 px-2 sm:px-6">"{testimonial.quote}"</p>
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={`Profile picture of ${testimonial.name}`}
                  className="w-16 h-16 rounded-full object-cover border-2 border-[#ebb475] dark:border-gray-200"
                  loading="lazy"
                />
                <div>
                  <h4 className="text-lg sm:text-xl font-bold">{testimonial.name}</h4>
                  <p className="text-sm">{testimonial.position}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      {/* Stats Section */}
      <div className="py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="text-3xl sm:text-4xl font-bold border-b-2 pb-4 border-white dark:border-gray-200">{stat.number}</div>
              <div className="pt-4 text-base sm:text-lg flex items-center gap-2">
                {stat.icon}
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewSection;