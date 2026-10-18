import React, { useEffect, useRef } from 'react'
import blog1 from "../../../assets/hotelBlog1.jpg"
import blog2 from "../../../assets/blog2.jpg"
import blog3 from "../../../assets/blog3.avif"
import blog4 from "../../../assets/blog4.jpg"
import blog5 from "../../../assets/blog5.jpg"
import blog6 from "../../../assets/blog6.jpg"
import blog7 from "../../../assets/blog7.png"
import "./Section1.css"

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export default function Section1() {


    const blogs = [
        {
            title : "Key figures on the role of technology in the hotel guest experience",
            img : blog7,
            para : "The hotel industry is constantly changing, driven by the rapid advancement of technology which inevitably influences guests' expectationsof their travel experience, and more specifically, of their stay. Mass investment in digital transformation, growing automation, and the emergence of self-service are redefining the guest experience in hotels worldwide. In this article, we will take a look at the key figures that illustrate the crucial role of technology in the hotel guest experience, to highlight the major trends and opportunities that hotels should consider when devising strategies.",
            link : "https://en.loungeup.com/blog/key-figures-on-the-role-of-technology-in-the-hotel-guest-experience?form=MG0AV3"
        },
        {
            title : " Benefits of Upselling in the Hotel Industry: Boost Your Hotel Revenue",
            img : blog1,
            para : "Hotel upselling is all about delighting your valuable guests by offering them additional products and upgrades beyond their initial booking. With the aim of increasing revenue and enhancing the overall guest experience. It involves suggesting higher room categories, tempting room upgrades, premium amenities, and tailored experiences that perfectly match your guests’ desires and requirements. Upselling allows hotels to, maximize their revenue potential while giving guests a chance to elevate their entire hotel experience to new heights.",
            link : "https://digitalguest.com/benefits-of-upselling-in-the-hotel-industry/"
        },
        {
            title : "How Technology Can Help Hoteliers Improve Their Upselling Techniques to Boost Revenue and Guest Satisfaction"
            ,img : blog2,
            para : "Mastering the art of upselling is not just about increasing profits; it’s about creating value for guests and elevating their stay to an unforgettable experience.  The following are six tech-enabled upselling techniques that can transform your hotel’s approach to service (and selling). By offering strategic enhancements and thoughtful add-ons, hoteliers can create a memorable guest experience.",
            link : "https://hoteltechnologynews.com/2024/05/how-technology-can-help-hoteliers-improve-their-upselling-techniques-to-boost-revenue-and-guest-satisfaction/"
        },
        {
            title : "10 Popular Upselling Examples for Hotels",
            img : blog3,
            para : "After a few rough years of riding out the COVID-19 pandemic, hotel owners and operators are more inclined than ever to find new ways to increase the amount of revenue they receive per guest. One way to do this is to simply increase the price of rooms; however, this may just end up driving potential guests directly into the lobbies of rival hotels.",
            link : "https://www.canarytechnologies.com/post/upselling-hotel-examples?form=MG0AV3"
        },
        {
            title : "The Art of Hotel Upselling: Techniques to Increase Revenue per Guest",
            img : blog4,
            para : "Welcome to the world of hotel revenue management! In this article, we will explore the art of hotel upselling and the techniques that can help hotels maximize their revenue per guest. In today’s competitive hospitality industry, it is essential for hotels to focus on increasing their profitability, and upselling plays a crucial role in achieving this goal.By utilizing effective upselling strategies, hotels can enhance the guest experience while generating additional revenue. From offering room upgrades to suggesting personalized services, the art of upselling allows hotels to cater to the unique needs and preferences of their guests.",
            link : 'https://planethms.com/the-art-of-hotel-upselling-techniques-to-increase-revenue-per-guest/?form=MG0AV3'
        },
        {
            title : "The crucial role of technology in hospitality management",
            para : "What is the role of technology in hospitality operations? It facilitates smooth service, empowers hotel guests, automates menial tasks, and delivers a better experience for everyone involved.Hoteliers must meet and exceed guest expectations to keep their properties competitive. Technology reduces friction points throughout the guest journey, ensuring the delivery of memorable experiences.",
            img  : blog5,
            link : "https://www.mews.com/en/blog/technology-in-hospitality-operations?form=MG0AV3"
        },
        {
            title : "Technology in the hotel industry and gaining its full benefits",
            para : "The hotel industry has experienced a radical transformation in recent years, largely driven by rapid technological advancements.From the moment when guests start researching hotel accommodations and making reservations to when they check out, technology is now an integral part of their journey and shapes their experience. For current and aspiring hotel professionals, including those studying degrees in hospitality at a hotel management school like Glion, exploring the role of technology within a hospitality business is essential.",
            img : blog6,
            link : "https://www.glion.edu/magazine/technology-hotel-industry/?form=MG0AV3"
        }
    ]

    const blogRefs = useRef([]);
    const blogHeader = useRef(null);
 

    useEffect(() => {

        blogRefs.current.forEach((card, index) => {      
        // Animate blog title link image
        const img = card.querySelector('.blogImg');
        gsap.fromTo(
            img,
            {
                opacity: 0,
   
            },
            {
                opacity: 1,
                x: 0,
                delay :1,
                duration : 1.1,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: card,
                    start: "top 50%",
                    end: "top 50%",
                    toggleActions: "play none none reverse",
                },
            }
        );

        const title = card.querySelector('.blogTitle');
        gsap.fromTo(
        title,
        {
            opacity: 0,
            y: -40,
        },
        {
            opacity: 1,
            y: 0,
            delay :0.6,
            duration : 1.1,
            ease: 'power2.out',
            scrollTrigger: {
            trigger: card,
            start: "top 50%",
            end: "top 50%",
            toggleActions: "play none none reverse",
            },
        }
        );

        const para = card.querySelector('.blogPara');
        gsap.fromTo(
        para,
        {
            opacity: 0,
            y: -40,
        },
        {
            opacity: 1,
            y: 0,
            delay :0.8,
            duration : 1.1,
            ease: 'power2.out',
            scrollTrigger: {
            trigger: card,
            start: "top 50%",
            end: "top 50%",
            toggleActions: "play none none reverse",
            },
        }
        );

        const link = card.querySelector('.blogLink');
        gsap.fromTo(
        link,
        {
            opacity: 0,
            y: -40,
        },
        {
            opacity: 1,
            y: 0,
            delay :0.9,
            duration : 1.1,
            ease: 'power2.out',
            scrollTrigger: {
            trigger: card,
            start: "top 50%",
            end: "top 50%",
            toggleActions: "play none none reverse",
            },
        }
        );
    
        // Animate blog card
        if (index % 2 === 0) {
        gsap.fromTo(
            card,
            {
            opacity: 0,
            x: -400
            },
            {
            opacity: 1,
            x: 0,
            delay: 0.2,
            scrollTrigger: {
                trigger: card,
                start: "top 50%",
                end: "top 50%",
                toggleActions: "play none none reverse",
            },
            }
        );
        } 
        else {
            gsap.fromTo(
                card,
                {
                    opacity: 0,
                    x: 400
                },
                {
                    opacity: 1,
                    x: 0,
                    delay: 0.2,
                    scrollTrigger: {
                        trigger: card,
                        start: "top 60%",
                        end: "top 40%",
                        toggleActions: "play none none reverse",
                    },
                }
            );
        }
        
        });

 
        gsap.fromTo(
            blogHeader.current,
            {
                opacity: 0,
           
            },
            {
                opacity: 1,
                duration : 1
            }
        );

      }, []);


  return (
    <div className='mt-12 lg:mt-[70px]'>

 

        <div className='my-12 flex flex-col gap-12'>
            {
                blogs.map((blog,index)=>{
                    return(

                        <div className='blogBoxShadow rounded-xl' key={index} 
                            ref={(el) => (blogRefs.current[index] = el)}
                        >
                        
                            <div className='flex items-center  p-4 lg:p-10 gap-4 lg:flex-row flex-col-reverse'>
                                <div className='flex-1'>
                                    <h2 className='lg:text-3xl text-xl font-semibold blogTitle' 
                                       
                                    > 
                                    {blog.title}
                                    </h2>
                                    <p className='my-8 text-gray-400 text-sm lg:text-lg blogPara'
                                  
                                    >
                                    {blog.para}
                                    </p>
                                    <a href={blog.link} target='_blank' 
                                        rel='noopener noreferrer'
                                        className='font-bold text-[#ff5a5f] blogLink'
                      
                           
                                    >
                                        Read More
                                    </a>
                                </div>
                                <div className='flex-1 p-1 lg:p-4'>
                                    <img src={blog.img} className='w-full h-full object-cover rounded-lg blogImg' alt="Error"
                                     
                                    />
                                </div>
                            </div>
                        </div>
                    )
                })
            }

        </div>

    </div>
  )
}
