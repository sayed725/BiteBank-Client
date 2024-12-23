import BlogPost from '../components/BlogPost'
import Carousel from '../components/Carousel'
import StatsSection from '../components/StatusSection'
import AvailableFoods from './AvailableFoods'
import FeaturedFood from './FeaturedFood'

const Home = () => {
  return (
    <div>
      <Carousel />
      <FeaturedFood />
      <div className='py-[50px]'>
      <StatsSection />
      </div>
      <BlogPost />
    </div>
  )
}

export default Home
