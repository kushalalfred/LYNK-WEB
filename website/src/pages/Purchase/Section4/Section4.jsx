import React, { useEffect, useRef } from 'react'
import mobileImg from "../../../assets/mobileImg.png";
import { gsap } from "gsap"; 
import { ScrollTrigger } from "gsap/ScrollTrigger";
// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);
export default function Section4() {

    const guestAppRef = useRef(null);
    useEffect(() => {

        const guestHeader1 = guestAppRef.current?.querySelector(".product-header");
        gsap.fromTo(
            guestHeader1,
            {
                opacity: 0,
                y: -50,
            },
            {
                opacity: 1,
                y: 0,
                delay: 0.1,
                duration: 0.7,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: guestHeader1,
                    start: 'top 60%',
                    end: 'top 30%',
                    toggleActions: 'play none none reverse',
                    delay: 0.3, // optional delay added as per your example
                },
            }
        );

        const guestDesc1 = guestAppRef.current?.querySelector(".guest-desc");
        gsap.fromTo(
            guestDesc1,
            {
                opacity: 0,
                y: -40,
            },
            {
                opacity: 1,
                y: 0,
                delay: 0.4,
                duration: 0.5,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: guestDesc1,
                    start: 'top 60%',
                    end: 'top 30%',
                    toggleActions: 'play none none reverse',
                    delay: 0.2, // optional delay added as per your example
                },
            }
        );

        const guestBtn = guestAppRef.current?.querySelector(".guest-btn");
        gsap.fromTo(
            guestBtn,
            {
                opacity: 0,
            },
            {
                opacity: 1,
                delay: 0.6,
                duration: 0.7,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: guestBtn,
                    start: 'top 60%',
                    end: 'top 30%',
                    toggleActions: 'play none none reverse',
                    delay: 0.1, // optional delay added as per your example
                },
            }
        );

        const guestImg = guestAppRef.current?.querySelector(".guest-img");
        gsap.fromTo(
            guestImg,
            {
                opacity: 0,
            },
            {
                opacity: 1,
                delay: 0.8,
                duration: 0.7,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: guestImg,
                    start: 'top 60%',
                    end: 'top 30%',
                    toggleActions: 'play none none reverse',
                    delay: 0.3, // optional delay added as per your example
                },
            }
        );

    }, []);

  return (
    <div className='flex justify-center items-center mt-[78px] gap-[40px] flex-col sm:flex-row' ref = {guestAppRef}>
        
        <div className='w-full sm:w-[800px]'>
            <h1 className='font-bold lg:text-4xl text-2xl mt-1 text-[#3A3A3A] product-header'>
                <span className='text-[#ff5a5f]'>Guest App</span> : One App for All Your Hotel Needs: Book, Stay, Explore, Enjoy Effortlessly.
            </h1>
            <p className='my-7 text-gray-400 guest-desc text-md'>
            One stop solution for all travellers need. With the user app, people will be able to become part of the new age travel ecosystem. From staying in hotels to roam around the city, this app will enable users to make amazing choices during their trip.
            </p>
            <a 
            href="https://guest.thealfredapp.com/"
            target='_blank'
            rel="noopener noreferrer"
            className=' mt-8 bg-[#ff5a5f] py-2 px-5 font-bold rounded-xl hover:bg-white hover:border border-[#ff5a5f] hover:text-[#ff5a5f]
            guest-btn'
            
            >
                Get the App Now
            </a>
        </div>


        <div className='w-full h-[400px] sm:w-[700px] guest-img'>
            <img src={mobileImg} className='w-full h-full object-contain' alt="Error" />
        </div>

   
    </div>

  )
}
