import BlogPost from '../components/BlogPost'
import Carousel from '../components/Carousel'
import ReviewSection from '../components/ReviewSection'
import FeaturedFood from './FeaturedFood'

const Home = () => {
  return (
    <div>
      <Carousel />
      <FeaturedFood />
      <div className='py-[50px]'>
      <ReviewSection/>
      </div>
      <BlogPost />
      
    </div>
  )
}

export default Home
