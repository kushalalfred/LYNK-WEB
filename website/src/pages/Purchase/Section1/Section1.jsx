import React, { useEffect, useRef } from 'react'
import laptopImg from "../../../assets/laptopImg.png";
import "./Section1.css";
import { gsap } from "gsap";

export default function Section1() {

    const manageHeaderRef1 = useRef(null);
    useEffect(()=>{
        const manageHeader1 = manageHeaderRef1.current?.querySelector(".product-header");
        gsap.fromTo(
            manageHeader1,
            {
                opacity: 0,
                y: -50,
            },
            {
              opacity: 1,
              y: 0,
              delay :0.1,
              duration : 0.7,
              ease: 'power2.out',
            }
        );

        const manageDesc1 = manageHeaderRef1.current?.querySelector(".manageDesc1");
        gsap.fromTo(
            manageDesc1,
            {
                opacity: 0,
                y: -40,
            },
            {
              opacity: 1,
              y: 0,
              delay :0.4,
              duration : 0.5,
              ease: 'power2.out',
            }
        );

        const manageBtn = manageHeaderRef1.current?.querySelector(".manageBtn");
        gsap.fromTo(
            manageBtn,
            {
                opacity: 0,
            
            },
            {
              opacity: 1,
       
              delay :0.6,
              duration : 0.7,
              ease: 'power2.out',
            }
        );

        const manageHeader2 = manageHeaderRef1.current?.querySelector(".manageHeader2");
        gsap.fromTo(
            manageHeader2,
            {
                opacity: 0,
            },
            {
              opacity: 1,
       
              delay :0.8,
              duration : 0.7,
              ease: 'power2.out',
            }
        );

    },[]);


  return (
    <div className='flex justify-center items-center mt-[70px] gap-[40px] flex-col sm:flex-row' ref={manageHeaderRef1}>

        <div className='w-full sm:w-[800px] '>
            <h1 className='font-bold lg:text-4xl text-2xl mt-1 text-[#3A3A3A] product-header'>
                <span className='text-[#ff5a5f]'>Management App</span> : Efficiently manage guests, increase revenue & data driven insights
            </h1>
            <p className='my-7 text-gray-400 manageDesc1 text-md pe-2'>
            A one-stop platform to manage all the guest-related tasks in an efficient way with smart resource allocation.
            With the management app, hotel managers and owners can scale up their revenue,
            promote property in a much better way & provide utmost guest satisfaction.
            </p>
            <a 
            href="https://partner.thealfredapp.com"
            target='_blank'
            rel='noopener noreferrer'
            className=' mt-8 bg-[#ff5a5f] py-2 px-5 font-bold rounded-xl hover:bg-white hover:border border-[#ff5a5f] hover:text-[#ff5a5f] manageBtn'
            
            >
                Get the App Now
            </a>
        </div>

        <div className='w-full sm:w-[700px] manageHeader2'>
            <img src={laptopImg} className='w-full h-full object-cover' alt="Error" />
        </div>
    </div>

  )
}
