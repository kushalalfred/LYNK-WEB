import React, { useEffect, useRef } from 'react';
import "./Section1.css";
// import { FaArrowRight } from "react-icons/fa";
import img1 from "../../../assets/productImages/Card/card1.png";
// import img2 from "../../../assets/mobileSec1.png";
import { gsap } from "gsap";
import { useNavigate } from 'react-router-dom';


export default function Section1() {

  const homeSection1 = useRef(null);
  const navigate = useNavigate()

  useEffect(()=>{
    
    const homeSec1 = homeSection1.current?.querySelector(".homeHeader");
    gsap.fromTo(
      homeSec1,
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

    const homeSec2 = homeSection1.current?.querySelector(".homeHeader1");
    gsap.fromTo(
      homeSec2,
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

    const homePara = homeSection1.current?.querySelector(".homeDesc");
    gsap.fromTo(
      homePara,
      {
        opacity: 0,
        y: -40,
      },
      {
        opacity: 1,
        y: 0,
        delay :0.5,
        duration : 0.6,
        ease: 'power2.out',
      }
    );

    const homeBtn = homeSection1.current?.querySelector(".homeBtn");
    gsap.fromTo(
      homeBtn,
      {
        opacity: 0,
        y: -40,
      },
      {
        opacity: 1,
        y: 0,
        delay :0.8,
        duration : 0.6,
        ease: 'power2.out',
      }
    );
    const homeImg = homeSection1.current?.querySelector(".homeImgs");
    gsap.fromTo(
      homeImg,
      {
        opacity: 0,
      
      },
      {
        opacity: 1,
        delay :1,
        duration : 0.6,
        ease: 'power2.out',
      }
    );



  },[]);

  const handleViewDemo = ()=>{
    navigate("/demo");
    window.scrollTo(0, 0);  // Scroll to top when navigating to home
  }

  return (
 
    <div className='w-full  px-4 lg:px-[70px] pt-10  lg:py-[60px] overflow-hidden ' ref = {homeSection1}>

      <div className='flex justify-between gap-4 lg:gap-12 items-center flex-col lg:flex-row '>
        
        <div className='w-full lg:w-[600px]'>
          <h2 className='title  text-[#3A3A3A] homeHeader'>
            Your keys and cards, together & within reach
          </h2>
           
          
          <p className='mt-8  text-gray-400 text-md homeDesc'>
            LYNK  combines an ID card holder with optional key and attachment modules to keep your everyday essentials organised and easy to access.
          </p>

          <button className='mt-10  bg-[#121D31] px-8 py-2
          rounded-full text-white font-semibold homeBtn'
            onClick={()=>handleViewDemo()}
          > 
            View Demo 
          </button>
        </div>
        
        <div className='relative w-full  lg:w-[600px] my-[60px] homeImgs'>
          <img src={img1} alt="Error" className='w-full h-full object-cover' />
          {/* <img src={img2} alt="Error" className='w-[230px] h-full object-contain absolute  mobileImg' /> */}
        </div> 

      </div>

    </div>
 
  )
}
 