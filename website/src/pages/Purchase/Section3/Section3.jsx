import React, { useEffect, useRef } from 'react'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export default function Section3() {
 
    const sectionRef3 = useRef(null);
    const cardsRefs = useRef([]);

    useEffect(()=>{

        const headerText = sectionRef3?.current?.querySelector(".includeText")
        gsap.fromTo(
            headerText,
            {
                opacity: 0, 
                y : -50, // Start from 50px below
            },
            {
            opacity: 1,
            y: 0, // End at the original position
            scrollTrigger: {
                delay : 0.3,
                trigger: headerText,
                start: 'top 70%', // Trigger when the card is 80% in view
                end: 'top 30%',
                toggleActions: 'play none none reverse', // Reverse the animation when the card leaves view
            },
            }
        );
    
        const includeText = sectionRef3?.current?.querySelector(".subHeaderText")
        gsap.fromTo(
            includeText,
            {
                opacity: 0, 
                y : -30, // Start from 50px below
            },
            {
                delay : 0.1,
                opacity: 1,
                y: 0, // End at the original position
                scrollTrigger: {
                    trigger: includeText,
                    start: 'top 50%', // Trigger when the card is 80% in view
                    end: 'top 30%',
                    toggleActions: 'play none none reverse', // Reverse the animation when the card leaves view
                },
            }
        );

        // Animate each card when it comes into view
        cardsRefs.current.forEach((card, index) => {
            gsap.fromTo(
            card,
            {
                opacity: 0, 
                x : 500,  
            },
            {
                delay: index * 0.3, // Stagger animation by 0.3s for each card
                opacity: 1,
                x: 0,  
                scrollTrigger: {
                trigger: card,
                start: 'top 50%', // Trigger when the card is 80% in view
                end: 'top 50%',
                toggleActions: 'play none none reverse', // Reverse the animation when the card leaves view
                },
                
            }
            );
        });

    },[])

    const data = [
        {
            title : "Faster Checkin and Checkout",
            description : "App based pre arrival check-in & post arrival check-out support"
        },
        {
            title : "Limited scope for amenities monetization",
            description : " No modern way to showcase & generate income from amenities Very less utilization of costly amenities like cabs, spas etc"
        },
        {
            title : "Minimum Documentation Handling",
            description : "App based services handling results in no hassle to bookkeep & manage paperwork"
        },
        {
            title : "Real Time Staff Allocation",
            description : "Management App support to allocate & track staff action"
        }
    ]

    return(         
  
    <div className='flex flex-col gap-[20px] sm:gap-[40px] mt-[60px] w-full overflow-hidden' ref = {sectionRef3}>
        
        <h2 className='font-bold text-[#ff5a5f] includeText'>
            What’s included ?
        </h2>

    
        <div className='mt-1'>
            
            <h2 className='text-2xl lg:text-3xl font-bold text-[#3A3A3A] subHeaderText'>
            Better insights into your business performance
            </h2>

            <div className='flex lg:flex-row flex-col gap-10 justify-center  mt-10'>
                
                {
                    data.map((item,index)=>{
                        return(
                            <div key={index}  ref={(el) => (cardsRefs.current[index] = el)} className='includedManageCards'>
                                <h2 className='font-semibold'>
                                     {item.title}
                                </h2>
                                <p className='mt-4 text-gray-400'>
                                    {item.description}
                                </p>
                            </div>
                        )
                    })
                }
         

            </div>
        
 
        </div>

    </div>

)
}
