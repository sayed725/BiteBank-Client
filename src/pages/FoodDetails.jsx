import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { format } from "date-fns";

const FoodDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [food, setFood] = useState({});
  const [showModal, setShowModal] = useState(false);
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

  const handleRequest = () => {
    const requestData = {
      userEmail: "loggedInUser@example.com", // Replace with actual logged-in user email
      requestDate: new Date(),
      additionalNotes: notes,
    };

    axios
      .put(`/api/food/${id}/request`, requestData)
      .then(() => {
        alert("Food requested successfully");
        setIsModalOpen(false);
        navigate("/my-requests");
      })
      .catch((error) => console.error(error));
  };

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
             
                <h3 className="text-lg mt-2 font-semibold text-gray-800">
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
                Expiry Date: <span className="text-gray-600">{deadline}</span>
              </p>
              <p className="text-sm text-gray-600 font-semibold">
                Notes: <span className="text-gray-600">{notes}</span>
              </p>

              {/* Price and Distance */}
              <div className="flex items-center justify-between text-sm text-gray-500">
                <button onClick={() => document.getElementById("my_modal_3").showModal()}
                className="w-full px-2 py-3 mt-4 rounded-md text-white font-bold capitalize transition-colors duration-300 transform bg-[#ebb475] hover:text-black focus:outline-none focus:text-black">
                  View Details
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
          <div>
            <div className="space-y-2">
              <div>
                <label>Food Name</label>
                <input
                  type="text"
                  value={food.name}
                  readOnly
                  className="input-class"
                />
              </div>
              <div>
                <label>Food Image</label>
                <img
                  src={food.image}
                  alt={food.name}
                  className="rounded-lg h-[200px]"
                />
              </div>
              <div>
                <label>Food ID</label>
                <input
                  type="text"
                  value={id}
                  readOnly
                  className="input-class"
                />
              </div>
              <div>
                <label>Donator Email</label>
                <input
                  type="text"
                  value={food.donatorEmail}
                  readOnly
                  className="input-class"
                />
              </div>
              <div>
                <label>Donator Name</label>
                <input
                  type="text"
                  value={food.donatorName}
                  readOnly
                  className="input-class"
                />
              </div>
              <div>
                <label>User Email</label>
                <input
                  type="text"
                  value="loggedInUser@example.com"
                  readOnly
                  className="input-class"
                />
              </div>
              <div>
                <label>Request Date</label>
                <input
                  type="text"
                  value={new Date().toLocaleString()}
                  readOnly
                  className="input-class"
                />
              </div>
              <div>
                <label>Pickup Location</label>
                <input
                  type="text"
                  value={food.pickupLocation}
                  readOnly
                  className="input-class"
                />
              </div>
              <div>
                <label>Expire Date</label>
                <input
                  type="text"
                  value={new Date(food.expireDate).toLocaleString()}
                  readOnly
                  className="input-class"
                />
              </div>
              <div>
                <label>Additional Notes</label>
                <textarea className="textarea-class" value={notes} />
              </div>
              <button
                onClick={handleRequest}
                className="mt-4 px-4 py-2 bg-green-600 text-white rounded"
              >
                Request
              </button>
            </div>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default FoodDetails;
