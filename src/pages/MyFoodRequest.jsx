import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../providers/AuthProvider'
import { format } from 'date-fns'
import useAxiosSecure from '../Hooks/useAxiosSecure'
import { Helmet } from 'react-helmet-async'
import LoadingSpinner from '../components/LoadingSpinner'
import { useQuery } from '@tanstack/react-query'

const MyFoodRequest = () => {
  const axiosSecure = useAxiosSecure()
  const { user } = useContext(AuthContext)
 

  const { data:foods , isLoading} = useQuery({ queryKey:['requestFoods'], queryFn: async ()=>{
    const { data } = await axiosSecure.get(`/request-by/${user?.email}`) 
    return data 
}})
// console.log(foods, isLoading)

if(isLoading) return <LoadingSpinner></LoadingSpinner>

  if (foods.length == 0) {
    return (
      <div className="py-[100px] min-h-screen">
        <h2 className="text-4xl text-center font-bold dark:text-gray-200">
          You Have no Food Request
        </h2>
        
      </div>
    );
  }


  
  return (
    <section className='lg:container px-4 mx-auto pt-12 min-h-screen'>
      <Helmet> <title>Bite Bank | My Food Request </title></Helmet>
      <div className='flex items-center gap-x-3'>
        <h2 className='text-lg font-medium text-gray-800 dark:text-gray-200 '>My Food Request</h2>

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
                      className='py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-200'
                    >
                      <div className='flex items-center gap-x-3'>
                        <span>Title</span>
                      </div>
                    </th>

                    <th
                      scope='col'
                      className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-200'
                    >
                      <span>Expired Date</span>
                    </th>
                    <th
                      scope='col'
                      className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-200'
                    >
                      <span>Request Date</span>
                    </th>

                    <th
                      scope='col'
                      className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-200'
                    >
                      <button className='flex items-center gap-x-2'>
                        <span>Quantity</span>
                      </button>
                    </th>

                    <th
                      scope='col'
                      className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-200'
                    >
                      Status
                    </th>
                    <th
                      scope='col'
                      className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-200'
                    >
                      Location
                    </th>

                    <th className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-200'>
                      Donator Name
                    </th>
                    <th className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-200'>
                      Donar Photo
                    </th>
                  </tr>
                </thead>
                <tbody className='bg-white divide-y divide-gray-200 dark:bg-[#252525] dark:text-gray-200 '>
                  {/* Generate dynamic tr */}
                  {foods.map(food => (
                    <tr key={food._id}>
                      <td className='px-4 py-4 text-sm text-gray-500 dark:text-gray-200  whitespace-nowrap'>
                        {food.title}
                      </td>

                      <td className='px-4 py-4 text-sm text-gray-500  dark:text-gray-200 whitespace-nowrap'>
                        {format(new Date(food.deadline), 'P')}
                      </td>

                      <td className='px-4 py-4 text-sm text-gray-500 dark:text-gray-200  whitespace-nowrap'>
                        {food.reqDate && format(new Date(food.reqDate), 'P')}
                      </td>

                      <td className='px-4 py-4 text-sm text-gray-500 dark:text-gray-200   whitespace-nowrap'>
                        {food.quantity}
                      </td>
                      <td className='px-4 py-4 text-sm whitespace-nowrap'>
                        <div className='flex items-center gap-x-2'>
                          <p
                           className={`px-3 py-1  ${
                            food.status === "Requested" && "text-yellow-500 dark:bg-[#252525] bg-yellow-100/60"
                          } text-xs  rounded-full dark:bg-[#252525]`}
                          >
                            {food.status}
                          </p>
                        </div>
                      </td>
                      <td className='px-4 py-4 text-sm text-gray-500 dark:text-gray-200  whitespace-nowrap'>
                        {food.location}
                      </td>
                      <td className='px-4 py-4 text-sm text-gray-500  dark:text-gray-200 whitespace-nowrap'>
                        {food.donator.name}
                      </td>
                      <td className='px-4 py-4 text-sm whitespace-nowrap'>
                        <div className='flex items-center gap-x-6'>
                       <img src={food.donator.photo} alt="" className='h-10 w-10 rounded-full' />
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

export default MyFoodRequest
