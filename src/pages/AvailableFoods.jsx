/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react'
import axios from 'axios'
import FoodCard from '../components/FoodCard'
import { Helmet } from 'react-helmet-async'
import LoadingSpinner from '../components/LoadingSpinner'

const AvailableFoods = () => {
  const [foods, setFoods] = useState([])
  const [search, setSearch] = useState('')
  const [sort, setSort] = useState('dec')
  const [isThreeColumnLayout, setIsThreeColumnLayout] = useState(true);
  useEffect(() => {
    const fetchAllFoods = async () => {
      const { data } = await axios.get(
        `${
          import.meta.env.VITE_API_URL
        }/all-foods?search=${search}&sort=${sort}`
      )
      setFoods(data)
    }
    fetchAllFoods()
  }, [search, sort])
  // console.log(foods,search,sort)


  const handleReset = () => {
    setSearch('')
    setSort('')
  }
  return (
    <div className='lg:container min-h-screen px-6 py-10 mx-auto  flex flex-col justify-between'>
      <Helmet> <title>Bite Bank | Available Food </title></Helmet>
      <div>
        <div className='flex flex-col md:flex-row justify-center items-center gap-5 '>

          <form>
            <div className='flex p-1 overflow-hidden border rounded-lg    focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300'>
              <input
                className='px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent'
                type='text'
                name='search'
                onChange={e => setSearch(e.target.value)}
                value={search}
                placeholder='Enter Food Title'
                aria-label='Enter Food Title'
              />

              <button className='px-1 md:px-4 py-3 text-sm font-medium tracking-wider text-white uppercase transition-colors duration-300 transform bg-[#ebb475] rounded-md hover:bg-[#ebb475] hover:text-black focus:bg-[#ebb475] focus:outline-none'>
                Search
              </button>
            </div>
          </form>
          <div>
            <select
              name='category'
              id='category'
              onChange={e => setSort(e.target.value)}
              value={sort}
              className='border p-4 rounded-md'
            >
              <option value=''>Sort By Expired Date</option>
              <option value='dsc'>Descending Order</option>
              <option value='asc'>Ascending Order</option>
            </select>
          </div>
          <button onClick={handleReset} className='btn bg-[#ebb475] text-white hover:bg-[#ebb475] hover:text-black'>Reset</button>
          <button   onClick={() => setIsThreeColumnLayout(!isThreeColumnLayout)}
           className='btn bg-[#ebb475] text-white hover:bg-[#ebb475] hover:text-black'>Toggle Layout</button>
        </div>
        <div className={`grid grid-cols-1 gap-6 mt-8 md:grid-cols-2 ${isThreeColumnLayout ? "lg:grid-cols-4" : "lg:grid-cols-3"}`}>
          {foods.map(food => (
            < FoodCard key={food._id} food={food} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default AvailableFoods


