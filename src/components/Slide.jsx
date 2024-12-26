/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'
import 'animate.css';

const Slide = ({ image, text ,link , linkText }) => {
  return (
    <div
      className='w-full bg-center bg-cover h-[38rem]'
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className='flex items-center justify-center w-full h-full bg-gray-900/70'>
        <div className='text-center'>
          <h1 className='text-3xl mb-4 font-semibold text-white lg:text-4xl animate__animated animate__slideInDown'>
            {text}
          </h1>
          <br />
          <Link
            to= {link}
            className='w-full px-5 py-4 mt-4 text-white font-bold capitalize transition-colors duration-300 transform bg-[#ebb475] rounded-md lg:w-auto
             hover:bg-slate-200 hover:text-[#ebb475] hover:border-4 hover:border-[#ebb475] focus:outline-none focus:bg-white animate__flash animate__animated'
          >
            {linkText}
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Slide
