import BlogPost from '../components/BlogPost'
import Carousel from '../components/Carousel'
import StatsSection from '../components/StatusSection'
import TabCategories from '../components/TabCategories'

const Home = () => {
  return (
    <div>
      <Carousel />
      <TabCategories />
      <StatsSection />
      <BlogPost />
    </div>
  )
}

export default Home
