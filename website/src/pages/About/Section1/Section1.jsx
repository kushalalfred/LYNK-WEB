 import React, { useEffect, useRef } from 'react'
import "./Section1.css"
import img1 from "../../../assets/about1.webp"
import img2 from "../../../assets/about2.webp"
import img3 from "../../../assets/about3.webp"
import { gsap } from "gsap";


export default function Section1() {
    
    const peoples = [
        {
            img : img1,
            name : "Ravi Gupta",
            designation : "Co-Founder Alfred",
            mail : "abc@gmail.com",
            description : "Co-Fouder and Backend Developer"
        },
        {
            img : img2,
            name : "Prakhar Mathur",
            designation : "Co-Founder Alfred",
            mail : "abc@gmail.com",
            description : "Co-Fouder and Backend Developer"
        },
        {
            img : img3,
            name : "Kushal Khandhara",
            designation : "Frontend Intern Alfred",
            mail : "kushal01@alfredsolutions.com",
            description : "Frontend Developer"
        }
    ]

    const aboutRef = useRef(null);
    const cardRefs = useRef([]);

    useEffect(() => {

        const aboutHeader1 = aboutRef.current?.querySelector(".aboutHeader1");
        gsap.fromTo(
            aboutHeader1,
            {
                opacity: 0,
                y: -40,
            },
            {
                opacity: 1,
                y: 0,
                delay: 0.2,
                duration: 0.6,
                ease: 'power2.out',
            }
        );

        const aboutHeader2 = aboutRef.current?.querySelector(".aboutHeader2");
        gsap.fromTo(
            aboutHeader2,
            {
                opacity: 0,
                y: -50,
            },
            {
                opacity: 1,
                y: 0,
                delay: 0.4,
                duration: 0.8,
                ease: 'power2.out',
            }
        );

        const aboutPara = aboutRef.current?.querySelector(".aboutPara");
        gsap.fromTo(
            aboutPara,
            {
                opacity: 0,
            },
            {
                opacity: 1,
                delay: 0.9,
                duration: 0.9,
                ease: 'power2.out',
            }
        );
        
        const cardItems = aboutRef.current?.querySelector(".cardItems");
        gsap.fromTo(
            cardItems,
            {
                opacity: 0,
                x: -600,
            },
            {
                x: 0,
                opacity: 1,
                delay: 1.2,
                duration: 1.2,
                ease: 'power2.out',
    
            }
        );

        // Animate each card with a delay for sequential appearance
        peoples.forEach((people, index) => {
            gsap.fromTo(
                cardRefs.current[index],
                {
                    opacity: 0,
                    y: 100, // Start from a bit lower than its final position
                },
                {
                    opacity: 1,
                    y: 0,
                    delay: 1.5 + index * 0.3, // Increase delay progressively for each card
                    duration: 1,
                    ease: 'power2.out',             
                }
            );
        });
        
    }, []);

  return (
    <div className='mt-10 lg:mt-[40px]' ref={aboutRef}>
    
        <div className='text-center'>
            <h4 className='text-[#FF5A5F] font-bold aboutHeader1'>
                About Us
            </h4>
            <h2 className='mt-5 font-semibold text-2xl lg:text-6xl text-[#3A3A3A] aboutHeader2'>
                We are the people who <br /> make up <span className='text-[#FF5A5F] font-bold'>Alfred</span>
            </h2>
            <p className='mt-8 text-xs lg:text-sm text-gray-600 aboutPara'>
            Our <span className='text-[#FF5A5F] font-bold'>philosophy</span> is simple: to provide top-quality products that enhance hotel experiences <br /> and ensure a comfortable stay for guests.
            </p>
        </div>
    
        <div className='mt-12'>
            <div className='flex flex-wrap justify-center gap-12 cardItems'>
                {
                    peoples.map((people, index) => (
                        <div key={index} className='w-[300px] overflow-hidden flex flex-col gap-5' ref={el => cardRefs.current[index] = el}>
                            <div className='w-full h-full object-cover'>
                                <img src={people.img} alt="Error" className='rounded-xl' />
                            </div>
                            <div className='px-2'>
                                <h4 className='text-xl font-semibold'>
                                    {people.name}
                                </h4>
                                <p className='mt-1 text-sm'>
                                    {people.designation}
                                </p>
                                <p className='text-gray-700 mt-1 text-sm'>
                                    {people.mail}
                                </p>
                                <p className='mt-2 text-gray-500'>
                                    {people.description} 
                                </p>
                            </div>

                        </div>
                    ))
                }
            </div>
        </div>
    
    </div>
  )
}
