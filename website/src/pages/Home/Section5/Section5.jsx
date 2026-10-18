import React from 'react';
import "./Section5.css";
import { useNavigate } from 'react-router-dom';

export default function Section5() {

  const navigate = useNavigate();
  const handleClickNavigation = ()=>{
    navigate('/demo')
  }

  return (
    <div className='my-8 '>
        <section className='section5'>
            <div className='section5-content px-4 lg:px-12'>
            </div>

            <div className='max-w-[320px]'>
                <h2 className='text-4xl text-white font-bold'>
                    The backbone for global commerce
                </h2>
                <p className='mt-7 text-gray-100'>
                Stripe makes moving money as easy and programmable as moving data. Our teams are based in offices around the world and we process hundreds of billions of dollars each year for ambitious businesses of all sizes.
                </p>
            </div>
        
        </section>
    </div>
  )
}
