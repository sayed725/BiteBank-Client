import { Helmet } from "react-helmet-async";
import toast from "react-hot-toast";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Contact = () => {

    const handleSubmit = (e)=>{
        e.preventDefault()
        toast.success('Thanks For Your Response')
    }


  return (
   <div className="py-[50px] lg:mt-10 min-h-screen">
     <Helmet><title>BiteBank | Contact</title></Helmet>
     
     <div className="flex flex-col md:flex-row gap-10 items-center justify-center p-6 sm:px-[100px] lg:px-[200px]">
      {/* Left Section */}
      <div className="w-full flex flex-col gap-5">
      <h2 className="text-4xl font-bold dark:text-gray-200 mb-4 animate__fadeInLeft animate__animated">GET IN TOUCH</h2>
        <p className="text-gray-600 mb-6 dark:text-gray-200">
        We’d love to hear from you! Whether you have a question or just want to <br />
        get in touch, feel free to drop us a message.
        </p>
        <div className="space-y-8">
          <div className="flex items-center">
            <FaMapMarkerAlt className="text-[#ebb475] text-xl mr-4" />
            <div className="dark:text-gray-200"> 
              <h3 className="font-bold ">ADDRESS</h3>
              <p> 60 Wall Street, New York, NY 10018 US</p>
            </div>
          </div>
          <div className="flex items-center">
            <FaPhoneAlt className="text-[#ebb475] text-xl mr-4 animate__shakeX animate__animated " />
            <div className="dark:text-gray-200">
              <h3 className="font-bold">PHONE</h3>
              <p>1-800-123-4567
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <FaEnvelope className="text-[#ebb475] text-xl mr-4" />
            <div className="dark:text-gray-200">
              <h3 className="font-bold">EMAIL</h3>
              <p>ssayed725332@gmail.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full">
        <form onSubmit={handleSubmit} className=" grid grid-cols-2 gap-10">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-2 border-b border-gray-300 rounded-none focus:outline-none focus:border-black"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-2 border-b border-gray-300 rounded-none focus:outline-none focus:border-black"
          />
          <input
            type="text"
            placeholder="Subject"
            className="w-full p-2 border-b border-gray-300 rounded-none col-span-2 focus:outline-none focus:border-black"
          />
          <textarea
            placeholder="Message"
            rows="4"
            className="w-full p-2 border-b border-gray-300 rounded-none col-span-2 focus:outline-none focus:border-black"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-[#ebb475] text-white btn rounded-lg dark:text-gray-700 hover:bg-[#ebb475] transition col-span-2 hover:text-black"
          >
            SEND YOUR MESSAGE
          </button>
        </form>
      </div>
    </div>
   </div>
  );
};

export default Contact;