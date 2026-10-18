import React from 'react';
import img from "../../assets/404NotFound.gif";
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className='w-full h-screen overflow-hidden flex items-center justify-center m-auto p-4'>
      
      <div className='text-center'>
        <div className='w-[300px] h-[400px] lg:w-fit overflow-hiddne'>
          <img src={img} className='w-full h-full object-contain' alt="Error" />
        </div>
        <div className='mt-4'>
          <h1 className='text-2xl font-bold text-gray-700'>Page Not Found Return to <Link to="/" className='text-[#ff5a5f]'>Home</Link>!!</h1>
        </div>
      </div>

    </div>
  )
}
