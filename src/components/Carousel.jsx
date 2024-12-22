// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import Slide from './Slide'

import bgimg1 from '../assets/images/banner1.jpg'
import bgimg2 from '../assets/images/banner2.jpg'
import bgimg3 from '../assets/images/banner3.jpg'

export default function Carousel() {
  return (
    <div className='container px-6 py-10 mx-auto'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className='mySwiper'
      >
        <SwiperSlide>
          <Slide
            image={bgimg1}
            text='Taste the World: Explore, Cook, and Indulge'
            link={'/foods'}
            linkText={'Explore Available Foods'}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image={bgimg2}
            text='Savor Every Bite: Your Destination for Delicious Discoveries'
            link={'/foods'}
            linkText={'Explore Available Foods'}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image={bgimg3}
            text='From Kitchen to Table: Recipes, Reviews, and More'
            link={'/add-food'}
            linkText={'Add Tasty Food'}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
