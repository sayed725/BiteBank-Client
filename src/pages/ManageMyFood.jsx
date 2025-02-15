import { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../providers/AuthProvider'
import axios from 'axios'
import { format } from 'date-fns'
import toast from 'react-hot-toast'
import useAxiosSecure from '../Hooks/useAxiosSecure'
import { Helmet } from 'react-helmet-async'
import LoadingSpinner from '../components/LoadingSpinner'
import { useQuery } from '@tanstack/react-query'
const ManageMyFood = () => {
  const axiosSecure = useAxiosSecure()
  const { user } = useContext(AuthContext)
  // const [foods, setFoods] = useState([])
  // useEffect(() => {
  //   fetchAllFoods()
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [user])
  // const fetchAllFoods = async () => {
  //   const { data } = await axiosSecure.get(
  //     `/foods-by-donator/${user?.email}`
  //   )
  //   setFoods(data)
  // }

  const { data:foods , isLoading} = useQuery({ queryKey:['manageFood'], queryFn: async ()=>{
    const { data } = await axiosSecure.get(`/foods-by-donator/${user?.email}`) 
    return data 
}})
// console.log(foods, isLoading)

if(isLoading) return <LoadingSpinner></LoadingSpinner>

  

  // delete functionality
  const handleDelete = async id => {
    try {
       await axios.delete(
        `${import.meta.env.VITE_API_URL}/delete-food/${id}`
      )
      .then(res=>{
        // console.log(res.data)
        if(res.data.deletedCount){
          toast.success('Food Data Deleted Successfully!!!')
          fetchAllFoods()
        }
      })
      
    } catch (err) {
      // console.log(err)
      toast.error(err.message)
    }
  }
  if (!foods.length) {
    return (
      <div className="py-[100px] min-h-screen">
        <h2 className="text-4xl text-center font-bold dark:text-gray-200">
          Please Add Some Food
        </h2>
        
      </div>
    );
  }

  const modernDelete = id => {
    toast(t => (
      <div className='flex gap-3 items-center'>
        <div>
          <p>
            Are you <b>sure?</b>
          </p>
        </div>
        <div className='gap-2 flex'>
          <button
            className='bg-red-400 text-white px-3 py-1 rounded-md'
            onClick={() => {
              toast.dismiss(t.id)
              handleDelete(id)
            }}
          >
            Yes
          </button>
          <button
            className='bg-green-400 text-white px-3 py-1 rounded-md'
            onClick={() => toast.dismiss(t.id)}
          >
            Cancel
          </button>
        </div>
      </div>
    ))
  }
  return (
    <section className='lg:container px-4 mx-auto pt-12 min-h-screen'>
      <Helmet> <title>Bite Bank | Manage Food </title></Helmet>
      <div className='flex items-center gap-x-3'>
        <h2 className='text-lg font-medium text-gray-800 dark:text-gray-200 '>My Posted Foods</h2>

        <span className='px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full '>
          {foods.length} Food
        </span>
      </div>

      <div className='flex flex-col mt-6'>
        <div className='-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
          <div className='inline-block min-w-full py-2 align-middle md:px-6 lg:px-8'>
            <div className='overflow-hidden border border-gray-200  md:rounded-lg'>
              <table className='min-w-full divide-y divide-gray-200 dark:bg-[#252525] dark:text-gray-200'>
                <thead className='bg-gray-50 dark:bg-[#252525] dark:text-gray-200'>
                  <tr>
                    <th
                      scope='col'
                      className='py-3.5 px-4 text-sm font-normal text-left rtl:text-right dark:text-gray-200 text-gray-500'
                    >
                      <div className='flex items-center gap-x-3'>
                        <span>Title</span>
                      </div>
                    </th>

                    <th
                      scope='col'
                      className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right dark:text-gray-200 text-gray-500'
                    >
                      <span>Expired Date</span>
                    </th>

                    <th
                      scope='col'
                      className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right dark:text-gray-200 text-gray-500'
                    >
                      <button className='flex items-center gap-x-2'>
                        <span>Quantity</span>
                      </button>
                    </th>

                    <th
                      scope='col'
                      className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right dark:text-gray-200 text-gray-500'
                    >
                      Status
                    </th>
                    <th
                      scope='col'
                      className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right dark:text-gray-200 text-gray-500'
                    >
                      Location
                    </th>

                    <th className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right dark:text-gray-200 text-gray-500'>
                      Edit
                    </th>
                    <th className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right dark:text-gray-200 text-gray-500'>
                      Delete
                    </th>
                  </tr>
                </thead>
                <tbody className='bg-white divide-y divide-gray-200  dark:bg-[#252525] dark:text-gray-200'>
                  {/* Generate dynamic tr */}
                  {foods.map(food => (
                    <tr key={food._id}>
                      <td className='px-4 py-4 text-sm text-gray-500 dark:text-gray-200  whitespace-nowrap'>
                        {food.title}
                      </td>

                      <td className='px-4 py-4 text-sm text-gray-500 dark:text-gray-200  whitespace-nowrap'>
                        {format(new Date(food.deadline), 'P')}
                      </td>

                      <td className='px-4 py-4 text-sm text-gray-500 dark:text-gray-200   whitespace-nowrap'>
                        {food.quantity}
                      </td>
                      <td className='px-4 py-4 text-sm whitespace-nowrap'>
                        <div className='flex items-center gap-x-2'>
                          <p
                           className={`px-3 py-1  ${
                            food.status === "Available" && "text-green-500 dark:bg-[#252525] bg-green-100/60"
                          } ${food.status === "Not Available" && "text-red-500 bg-red-100/60"}
                                        ${
                                          food.status === "Requested" &&
                                          "text-yellow-500 bg-yellow-100/60"
                                        } text-xs  rounded-full`}
                          >
                            {food.status}
                          </p>
                        </div>
                      </td>
                      <td className='px-4 py-4 text-sm text-gray-500 dark:text-gray-200  whitespace-nowrap'>
                        {food.location}
                      </td>
                      <td className='px-4 py-4 text-sm whitespace-nowrap'>
                        <div className='flex items-center gap-x-6'>
                          <Link
                            to={`/update-food/${food._id}`}
                            className='text-gray-500 transition-colors duration-200 dark:text-gray-200 dark:hover:text-yellow-500   hover:text-yellow-500 focus:outline-none'
                          >
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              fill='none'
                              viewBox='0 0 24 24'
                              strokeWidth='1.5'
                              stroke='currentColor'
                              className='w-5 h-5'
                            >
                              <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                d='M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10'
                              />
                            </svg>
                          </Link>
                        </div>
                      </td>
                      <td className='px-4 py-4 text-sm whitespace-nowrap'>
                        <div className='flex items-center gap-x-6'>
                        <Link>
                        <button
                            onClick={() => modernDelete(food._id)}
                            className='text-gray-500 transition-colors duration-200  dark:text-gray-200 dark:hover:text-red-500  hover:text-red-500 focus:outline-none'
                          >
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              fill='none'
                              viewBox='0 0 24 24'
                              strokeWidth='1.5'
                              stroke='currentColor'
                              className='w-5 h-5'
                            >
                              <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                d='M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0'
                              />
                            </svg>
                          </button>
                        </Link>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ManageMyFood
