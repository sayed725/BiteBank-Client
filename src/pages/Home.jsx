import BlogPost from '../components/BlogPost'
import Carousel from '../components/Carousel'
import StatsSection from '../components/StatusSection'
import AvailableFoods from './AvailableFoods'

const Home = () => {
  return (
    <div>
      <Carousel />
      <AvailableFoods />
      <StatsSection />
      <BlogPost />
    </div>
  )
}

export default Home
