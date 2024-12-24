import React, { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
/* eslint-disable react/prop-types */
import { format } from "date-fns";
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { AuthContext } from "../providers/AuthProvider";
import toast from "react-hot-toast";

const FoodDetails = () => {

  const { id } = useParams();
  const { user } = useContext(AuthContext)
  const navigate = useNavigate();
  const [food, setFood] = useState({});
  const [startDate, setStartDate] = useState(new Date())
  const {
    title,
    image,
    quantity,
    deadline,
    location,
    status,
    notes,
    _id,
    donator,
  } = food || {};
  const { name, email, photo } = donator || {};

  useEffect(() => {
    fetchFoodData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const fetchFoodData = async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_API_URL}/food/${id}`
    );
    setFood(data);
    // setStartDate(new Date(data.deadline))
  };


  // modal form related function 

  const handleSubmit = async(e) => {
    e.preventDefault()
    // user cheek 

    if(email === user?.email){
      return toast.error('You can not request your own food')
    }



    const form = e.target
    const title = form.name.value
    const image = form.image.value

    const quantity = form.quantity.value
    const location = form.location.value
    const deadline = form.deadline.value
    const reqDate = startDate
    const foodId = form.id.value
    const status = "Requested"
    const notes = form.notes.value
   

    const requestData = {
      title,
      image,
      quantity,
      location,
      deadline,
      reqDate,
      status,
      notes,
      foodId,
      donator: {
        email: email,
        name: name,
        photo: photo,
      },
      reqUser: {
        email: user?.email,
        name: user?.displayName,
        photo: user?.photoURL,
      },
     
    }
    console.log(requestData)
    // document.getElementById("my_modal_3").close()
    try {
      // 1. make a post request
      await axios.post(`${import.meta.env.VITE_API_URL}/add-request`, requestData)
      .then(res=>{
        // console.log(res.data)
        if(res.data.insertedId){
          toast.success('Food Request  Added Successfully!!')
           document.getElementById("my_modal_3").close()
          // form.reset()
          navigate('/my-food-requests')
        }
      })
    } catch (err) {
      // console.log(err)
      toast.error(err.message)
    }
  }


  
  

  return (
    <div className="container mx-auto bg-white shadow rounded-lg p-4">
      
        <div className="flex flex-col md:flex-row items-start gap-10 sm:p-6">
          {/* Left Section: Image */}
          <div className="w-full md:w-1/2">
            <img
              src={image} // Replace with actual image URL
              alt="food"
              className="rounded-md shadow-lg h-[400px] w-full object-cover"
            />
          </div>

          {/* Right Section: Content */}
          <div className="w-full md:w-1/2 h-[400px] ">
            {/* Content Section */}
            <div className=" flex flex-col justify-between h-full">
              {/* Title and Favorite Icon */}
             
                <h3 className="text-lg  font-semibold text-gray-800">
                  {title}
                </h3>
                <h3
                  className={`px-3 py-1 w-[80px] text-center  ${
                    status === "Available" && "text-green-500 bg-green-100/60"
                  }  text-xs  rounded-full`}
                >
                  {status}
                </h3>
              
              <p className="text-sm text-red-500 font-semibold">
                Quantity: <span className="text-gray-600">{quantity}</span>
              </p>

              {/* Cuisine and Location */}
              <p className="text-sm text-gray-600 font-semibold">
                    Location: <span className="text-gray-600">{location}</span>
                  </p>

              {/* Closing Time */}

              <p className="mt-6 text-sm font-bold text-gray-600 ">
                Donator Details:
              </p>
              <div className="flex items-center gap-5">
                <div className="flex flex-col gap-2">
                  <p className="text-sm text-gray-600 font-semibold">
                    Name: <span className="text-gray-600">{name}</span>
                  </p>
                  <p className="text-sm text-gray-600 font-semibold">
                    Email: <span className="text-gray-600">{email}</span>
                  </p>
                </div>
                <div className="rounded-full object-cover overflow-hidden w-14 h-14">
                  <img referrerPolicy="no-referrer" src={photo} alt="" />
                </div>
              </div>
              <p className="text-sm text-gray-600 font-semibold">
                Expiry Date: <span className="text-gray-600">{deadline ? format(new Date(deadline), 'P') : ''}</span>
              </p>
              <p className="text-sm text-gray-600 font-semibold">
                Notes: <span className="text-gray-600">{notes}</span>
              </p>

              {/* Price and Distance */}
              <div className="flex items-center justify-between text-sm text-gray-500">
                <button onClick={() => document.getElementById("my_modal_3").showModal()}
                className="w-full px-2 py-3 mt-4 rounded-md text-white font-bold capitalize transition-colors duration-300 transform bg-[#ebb475] hover:text-black focus:outline-none focus:text-black">
                  Request
                </button>
              </div>
            </div>
          </div>
        </div>
      
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      <button
        className="btn hidden"
        onClick={() => document.getElementById("my_modal_3").showModal()}
      >
        open modal
      </button>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          {/* modal content text */}
          <div className="modal-content flex flex-col justify-center items-center p-4">
          <form className='px-2 w-full' onSubmit={handleSubmit}>
          <div className='grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2'>
            {/* food name  */}
            <div>
              <label className='text-gray-700 ' htmlFor='food_name'>
                Food Name
              </label>
              <input
                id='name'
                name='name'
                type='text'
                defaultValue={title}
                readOnly
                required
                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
              />
            </div>

            {/* food image */}

            <div>
              <label className='text-gray-700 ' htmlFor='emailAddress'>
                Food Image Url
              </label>
              <input
                id='food_image'
                type='text'
                name='image'
                defaultValue={image}
                readOnly
                required
                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
              />
            </div>

            {/* food id  */}
            <div>
              <label className='text-gray-700 ' htmlFor='_id'>
                Food ID
              </label>
              <input
                id='food_id'
                type='text'
                name='id'
                defaultValue={_id}
                readOnly
                required
                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
              />
            </div>
            {/* donator email  */}
            <div>
              <label className='text-gray-700 ' htmlFor='emailAddress'>
                Food Donator Email
              </label>
              <input
                id='email'
                type='email'
                name='email'
                defaultValue={email}
                readOnly
                required
                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
              />
            </div>
            {/* donator name  */}
            <div>
              <label className='text-gray-700 ' htmlFor='name'>
                Food Donator Name
              </label>
              <input
                id='donatorName'
                type='text'
                name='donatorName'
                defaultValue={name}
                readOnly
                required
                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
              />
            </div>
            {/* current user email  */}
            <div>
              <label className='text-gray-700 ' htmlFor='name'>
                Current User Email
              </label>
              <input
                id='user email'
                type='email'
                name='user-email'
                defaultValue={user?.email}
                readOnly
                required
                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
              />
            </div>
            {/* request date  */}
            <div className='flex flex-col gap-2 '>
              <label className='text-gray-700'>Request Date</label>

              {/* Date Picker Input Field */}
              <DatePicker
                className='border p-2 w-full rounded-md'
                selected={startDate}
                required
                readOnly
                onChange={date => setStartDate(date)}
              />
            </div>
             {/* expired date */}
             <div>
              <label className='text-gray-700'>Expired Date</label>
              <input
                id='deadline'
                name='deadline'
                readOnly
                defaultValue={deadline ? format(new Date(deadline), 'P') : ''}
                required
                type='text'
                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
              />
            </div>
           
            {/* food location  */}
            <div className="">
              <label className='text-gray-700 ' htmlFor='location'>
                Pickup Location
              </label>
              <input
                id='location'
                name='location'
                readOnly
                defaultValue={location}
                required
                type='text'
                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
              />
            </div>
           
            {/* quantity  */}
            <div className="">
              <label className='text-gray-700 ' htmlFor='quantity'>
                Quantity
              </label>
              <input
                id='quantity'
                name='quantity'
                readOnly
                defaultValue={quantity}
                required
                type='text'
                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
              />
            </div>
           {/* notes 
            <div>
              <label className='text-gray-700 ' htmlFor='status'>
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
            </div> */}

           
          </div>
          <div className='flex flex-col gap-2 mt-4'>
            <label className='text-gray-700 ' htmlFor='notes'>
              Additional Notes
            </label>
            <textarea
              className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
              name='notes'
              id='notes'
              defaultValue={notes}
              required
            ></textarea>
          </div>
          <div className='flex justify-end mt-10'>
            <button className=' px-8 py-2.5 w-full leading-5 text-white transition-colors duration-300 transhtmlForm bg-[#ebb475] rounded-md hover:text-black focus:outline-none focus:text-black'>
              Request
            </button>
          </div>
        </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default FoodDetails;
