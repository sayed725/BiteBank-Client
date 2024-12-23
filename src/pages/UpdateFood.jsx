import { useContext, useEffect, useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { AuthContext } from '../providers/AuthProvider'
import axios from 'axios'
import { toast } from 'react-hot-toast'
import { useNavigate, useParams } from 'react-router-dom'
const UpdateFood = () => {
  const navigate = useNavigate()
  const { user } = useContext(AuthContext)
  const { id } = useParams()
  const [startDate, setStartDate] = useState(new Date())
  const [foods, setFoods] = useState([])

  useEffect(() => {
    fetchFoodData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])

  const fetchFoodData = async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_API_URL}/food/${id}`
    )
    setFoods(data)
    // setStartDate(new Date(data.deadline))
  }





  const handleSubmit = async e => {
    e.preventDefault()
    const form = e.target
    const title = form.name.value
    const image = form.image.value
    // image must be a url 
    const imageRegex = new RegExp(
      "^(https?:\\/\\/)" + // Protocol
        "((([a-zA-Z0-9$_.+!*'(),-])+\\.)+[a-zA-Z]{2,})" + // Domain name
        "(\\/([a-zA-Z0-9$_.+!*'(),-]|%[0-9a-fA-F]{2})*)*$", // Path
      "i"
    );
    if (!imageRegex.test(image)) {
      toast.error("Enter a Valid Link");
      return;
    }



    const quantity = parseInt(form.quantity.value)
    const location = form.location.value
    const deadline = startDate
    const status = form.status.value
    const notes = form.notes.value
   

    const foodData = {
      title,
      image,
      quantity,
      deadline,
      location,
      status,
      notes,
      donator: {
        email: user?.email,
        name: user?.displayName,
        photo: user?.photoURL,
      },
     
    }
    // console.log(foodData)
    try {
        // 1. make a post request
        await axios.put(
          `${import.meta.env.VITE_API_URL}/update-food/${id}`,
          foodData
        )
        .then(res=>{
            // console.log(res.data)
            if(res.data.modifiedCount > 0){
              toast.success('Food Data Updated Successfully!!')
              // navigate('/my-posted-jobs')
            }
          })
      } catch (err) {
        console.log(err)
        toast.error(err.message)
      }
    
  }

  return (
    <div className='lg:w-2/4 mx-auto flex justify-center items-center min-h-[calc(100vh-306px)] my-12'>
      <section className='w-full py-10 md:p-6 mx-auto bg-white rounded-md shadow-md '>
        <h2 className='text-center text-2xl font-semibold text-gray-700 capitalize '>
          Add a Food
        </h2>

        <form className='px-2' onSubmit={handleSubmit}>
          <div className='grid grid-cols-1 gap-6 mt-4 sm:grid-cols-1'>
            <div>
              <label className='text-gray-700 ' htmlFor='food_name'>
                Food Name
              </label>
              <input
                id='name'
                name='name'
                type='text'
                defaultValue={foods.title}
                required
                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
              />
            </div>

            <div>
              <label className='text-gray-700 ' htmlFor='emailAddress'>
                Food Image Url
              </label>
              <input
                id='food_image'
                type='text'
                name='image'
                defaultValue={foods.image}
                required
                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
              />
            </div>

            <div>
              <label className='text-gray-700 ' htmlFor='min_price'>
                Total Quantity
              </label>
              <input
                id='quantity'
                name='quantity'
                type='number'
                defaultValue={foods.quantity}
                required
                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
              />
            </div>

            <div>
              <label className='text-gray-700 ' htmlFor='max_price'>
                Pickup Location
              </label>
              <input
                id='location'
                name='location'
                defaultValue={foods.location}
                required
                type='text'
                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
              />
            </div>
            <div className='flex flex-col gap-2 '>
              <label className='text-gray-700'>Expired Date</label>

              {/* Date Picker Input Field */}
              <DatePicker
                className='border p-2 w-full rounded-md'
                selected={startDate}
                required
                onChange={date => setStartDate(date)}
              />
            </div>
            <div>
              <label className='text-gray-700 ' htmlFor='max_price'>
                Food Status
              </label>
              <input
                id='status'
                name='status'
                required
                type='text'
                defaultValue={'Available'}
                readOnly
                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
              />
            </div>

           
          </div>
          <div className='flex flex-col gap-2 mt-4'>
            <label className='text-gray-700 ' htmlFor='description'>
              Additional Notes
            </label>
            <textarea
              className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
              name='notes'
              id='notes'
              defaultValue={foods.notes}
              required
            ></textarea>
          </div>
          <div className='flex justify-end mt-10'>
            <button className=' px-8 py-2.5 w-full leading-5 text-white transition-colors duration-300 transhtmlForm bg-[#ebb475] rounded-md hover:text-black focus:outline-none focus:text-black'>
              Add Food
            </button>
          </div>
        </form>
      </section>
    </div>
  )
}

export default UpdateFood
