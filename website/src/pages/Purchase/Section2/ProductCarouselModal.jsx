import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";

export default function ProductCarouselModal(props) {

    const navigate = useNavigate();
    const modalRef = useRef(null);
    const modalContentRef = useRef(null);

    const [currentSlide, setCurrentSlide] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    
    const handleCloseModal = () => {
        // GSAP animation for closing modal
        gsap.to(modalRef.current, {
            opacity: 0,
            scale: 0.9,
            duration: 0.3,
            ease: "power2.out",
            onComplete: () => {
                props.setIsModalOpen(false);
                props.setModalContent(null);
            },
        });
    };

    useEffect(() => {
        if (props.isModalOpen) {
            // GSAP animation for opening modal
            gsap.fromTo(
                modalRef.current,
                {
                    opacity: 0,
                    y : 400
                },
                {
                    opacity: 1,
                    y :0,
                    duration: 0.5,
                    ease: "power2.out",
                }
            );

            // GSAP animation for modal content
            gsap.fromTo(
                modalContentRef.current,
                {
                    opacity: 0,
                    y: 20,
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.5,
                    ease: "power2.out",
                }
            );
        }
    }, []);

    const viewDemo = ()=>{
        navigate("/demo");
        window.scrollTo(0, 0);  // Scroll to top when navigating to home
    }

     useEffect(() => {
        if (isHovered) {
            return
        } // Stop the auto-sliding when hovered
        const timer = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % props.modalContent.images.length);
        }, 3000);

        return () => clearInterval(timer); // Cleanup the timer
    }, [isHovered]);
    
    const handleNext = ()=>{
        setCurrentSlide((prevSlide) => (prevSlide - 1 + props.modalContent.images.length) % props.modalContent.images.length);
    }

    const handlePrev = ()=>{
        setCurrentSlide((prevSlide) => (prevSlide + 1) % props.modalContent.images.length);
    }


  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 z-50 flex justify-center items-center w-full"
        ref={modalRef}
    >

        <div className="bg-white w-full lg:w-4/5 p-4 lg:p-8 rounded-lg max-h-screen flex flex-col gap-2 lg:gap-9"
            ref={modalContentRef}
        >

            {/* Header */}
            <div className="flex justify-between items-center">
                <h2 className="text-[#ff5a5f] text-md lg:text-2xl font-bold">
                    <span className="text-gray-600">Feature :</span> {props?.modalContent?.title || ""}
                </h2>
                <h2 className="font-bold text-md lg:text-2xl text-gray-400 cursor-pointer"  onClick={()=>handleCloseModal()}>
                    X
                </h2>

            </div>

            {/* Image */}
            <div className="w-full h-[200px] lg:h-[400px] overflow-hidden relative">
                {props.modalContent.images.map((image, index) => (
                    <img
                        src={image}
                        alt=""
                        key={index}
                        className={`${
                        index === currentSlide ? 'opacity-100' : 'opacity-0'
                        } absolute top-0 left-0 w-full h-full lg:object-contain md:object-contain object-contain transition-opacity duration-500 ease-in-out rounded-lg`}
                        onMouseEnter={() => setIsHovered(true)}  // Trigger setIsHovered on hover
                        onMouseLeave={() => setIsHovered(false)}  // Optionally reset when mouse leaves
                    />
                ))}

                <button
                    className='absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md'
                    onClick={() => handleNext()}
                >
                    <FaChevronLeft/>
                </button>

                <button
                    className='absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md'
                    onClick={() => handlePrev()}
                >
                    <FaChevronRight/>
                </button>

            </div>

            <div className="relative flex justify-center mt-2">
                <div className="flex gap-2">
                    {props.modalContent.images.map((_, index) => (
                        <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        onMouseOver={() => setIsHovered(true)} // Stop auto slide on hover
                        onMouseOut={() => setIsHovered(false)} // Resume auto slide when not hovering
                        
                        className={`w-2 h-2 rounded-full bg-gray-400 transition-all duration-300 ease-in-out 
                            ${index === currentSlide ? 'bg-[#ff5a5f] w-2 h-2' : 'bg-opacity-50'}
                        `}
                        />
                    ))}
                </div>
            </div>

            <div>
                <p className="text-gray-400 text-sm lg:text-lg">
                    {props?.modalContent?.description || ""}
                </p>
                <button className="mt-3 lg:mt-5 font-bold text-sm lg:text-md" onClick={()=>viewDemo()}>
                    View Demo
                </button>
            </div>

        </div>

    </div>
  )
}
