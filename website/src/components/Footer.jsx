import React from 'react'
import { Link } from 'react-router-dom'
 
export default function Footer() {

    const handleLinkClick = () => {
        window.scrollTo(0, 0);  // Scroll to top whenever any link is clicked
    };

  return (
    <div className='pt-12 bg-[#162032]'>
        
        <div className='flex flex-col   lg:flex-row  px-4 lg:px-12 text-white p-12 justify-center gap-[30px] items-center '>
            <div className='flex-1 '>
                <h2 className='text-3xl lg:text-4xl ' >
                LYNK – Smart Modular Carry Systems
                </h2>
                <p className='  mt-7 text-md ' style={{lineHeight : "25px"}}>
               Designed for seamless everyday mobility, LYNK modular ID holders and access accessories keep your essential cards, badges, and keys secure, organized, and effortlessly within reach.
                </p>
            </div>

            <div className='flex-1 '>
                <div className='flex justify-center gap-[40px] flex-wrap  '>
                    <Link className="" to="/" onClick={()=>handleLinkClick()}>Home</Link>
                    <Link className="" to="/purchase" onClick={()=>handleLinkClick()}>Purchase</Link>
                    <Link className="" to="/demo" onClick={()=>handleLinkClick()}>Demo</Link>
                    {/* <Link className="" to="/blogs" onClick={()=>handleLinkClick()}>Blogs</Link> */}
                    <Link className="" to="/contact" onClick={()=>handleLinkClick()}>Contact</Link>
                </div>
            </div>
        </div>

        <div className='text-center  py-5 border border-t-1 border-white'>
            <h2 className='font-bold text-white '>
                © 2026 Copyright LYNK. All Rights Reserved.
            </h2>
        </div>
 
    </div>
  )
}
