import React, { useEffect, useRef } from 'react';
import "../Section4/Section4.css";
import img1 from "../../../assets/icon1.webp";
import img2 from "../../../assets/key.webp";
import img3 from "../../../assets/module.webp";
// import img4 from "../../../assets/carry.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export default function Section4() {
    const sectionRef = useRef(null);
    const cardRefs = useRef([]);

    useEffect(() => {
        // Animate each card when it comes into view
        cardRefs.current.forEach((card, index) => {
            if(index<2){
                gsap.fromTo(
                    card,
                    {
                        opacity : 0,
                        x : -400
                    },
                    {
                        opacity : 1,
                        x : 0,
                        delay : 0.2,
                        scrollTrigger : {
                            trigger : card,
                            start : "top 70%",
                            end : "top 40%",
                            ease: 'power2.out',
                            toggleActions: "play none none reverse",
                        },

                    }
                )
            }
            else{
                gsap.fromTo(
                    card,
                    {
                        opacity : 0,
                        x : 400
                    },
                    {
                        opacity : 1,
                        x : 0,
                        delay : 0.2,
                        scrollTrigger : {
                            trigger : card,
                            start : "top 70%",
                            end : "top 40%",
                            toggleActions: "play none none reverse", 
                        },

                    }
                )

            }
 
        });

    }, []);

    const data = [
        {
            img: img1,
            title: "Clear Front ID Window",
            description: "Transparent front pocket displays ID cards securely and clearly.",
        },
        {
            img: img2,
            title: "Key Module",
            description: "Built-in loop securely attaches keys for convenient carrying.",
        },
        {
            img: img3,
            title: "Modular Slide",
            description: "Side clips enable modular attachment, interlocking, and secure holder insertion.",
        },
        // {
        //     img: img4,
        //     title: "Attachment Clip",
        //     description: "Heavy-duty carabiner securely attaches holders to belts, bags, and keychains.",
        // },
    ];

    return (
        <div className='py-8 lg:px-12 px-4 w-full overflow-hidden bg-[#F7F5F0]' ref={sectionRef}>
            <div className='section4-home'>
                {data.map((item, index) => (
                    <div
                        className='elem'
                        key={index}
                        ref={(el) => (cardRefs.current[index] = el)}
                    >
                        <div className='elem-side1'>
                            <h2 className='font-bold uppercase text-[#162032]'>{item.title}</h2>
                            <p className='mt-2 text-gray-400'>{item.description}</p>
                        </div>
                        <div className='elem-side2'>
                            <img src={item.img} alt="Error" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}