
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slide from './Slide';
import bgimg1 from '../assets/images/banner1.jpg';
import bgimg2 from '../assets/images/banner2.jpg';
import bgimg3 from '../assets/images/banner3.jpg';

// Custom Arrow Components
const NextArrow = ({ onClick }) => (
  <button
    className="absolute right-1 sm:right-2 top-1/2 -translate-y-1/2 z-10 w-6 h-6 sm:w-8 sm:h-8 bg-white/20 hover:bg-white/40 rounded-md flex items-center justify-center transition-all duration-300"
    onClick={onClick}
  >
    <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  </button>
);

const PrevArrow = ({ onClick }) => (
  <button
    className="absolute left-1 sm:left-2 top-1/2 -translate-y-1/2 z-10 w-6 h-6 sm:w-8 sm:h-8 bg-white/20 hover:bg-white/40 rounded-md flex items-center justify-center transition-all duration-300"
    onClick={onClick}
  >
    <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
    </svg>
  </button>
);

export default function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Autoplay enabled
    autoplaySpeed: 4000, // 4-second delay between slides
    pauseOnHover: false, // Continues autoplay even on hover
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    dotsClass: 'slick-dots custom-dots',
    responsive: [
      {
        breakpoint: 640, // sm
        settings: {
          arrows: false,
          dots: true,
        },
      },
      {
        breakpoint: 768, // md
        settings: {
          arrows: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024, // lg
        settings: {
          arrows: true,
          dots: true,
        },
      },
    ],
    appendDots: (dots) => (
      <div style={{ bottom: '20px' }}>
        <ul className="flex justify-center space-x-2">{dots}</ul>
      </div>
    ),
    customPaging: () => (
      <button className="w-3 h-3 bg-white/60 rounded-full hover:bg-white transition-all duration-300" />
    ),
  };

  return (
    <div className=" lg:w-11/12 rounded-md mx-auto relative w-full h-[60vh] sm:h-[70vh] md:h-auto overflow-hidden">
      <Slider {...settings} className="w-full h-full">
        <div>
          <Slide
            image={bgimg1}
            text="Taste the World: Explore, Cook, and Indulge"
            link="/foods"
            linkText="Explore Available Foods"
          />
        </div>
        <div>
          <Slide
            image={bgimg2}
            text="Savor Every Bite: Your Destination for Delicious Discoveries"
            link="/foods"
            linkText="Explore Available Foods"
          />
        </div>
        <div>
          <Slide
            image={bgimg3}
            text="From Kitchen to Table: Recipes, Reviews, and More"
            link="/add-food"
            linkText="Add Tasty Food"
          />
        </div>
      </Slider>

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/30 z-0 pointer-events-none" />

      {/* Custom Styling */}
      <style jsx>{`
        .custom-dots li {
          margin: 0 6px;
        }
        .custom-dots .slick-active button {
          background: #ebb475 !important;
          transform: scale(.5);
        }
        .slick-dots {
          bottom: 20px !important;
        }
        .slick-slide > div {
          height: 100%;
        }
      `}</style>
    </div>
  );
}
