import { Helmet } from 'react-helmet-async'
import BlogPost from '../components/BlogPost'
import Carousel from '../components/Carousel'
import ReviewSection from '../components/ReviewSection'
import FeaturedFood from './FeaturedFood'
import PopularFoods from '../components/PopularFoods'

const Home = () => {
  return (
    <div>
      <Helmet> <title>Bite Bank | Home </title></Helmet>
      <Carousel />
      <FeaturedFood />
      <PopularFoods />
      <div className='py-[50px]'>
      <ReviewSection/>
      </div>
      <BlogPost />
      
    </div>
  )
}

export default Home
