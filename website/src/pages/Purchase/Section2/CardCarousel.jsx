import React, { useEffect, useState } from 'react'
import "./Styles/Card.css";
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
// import ProductCarouselModal from './ProductCarouselModal';

export default function CardCarousel(props) {

    const navigate = useNavigate();
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isHovered, setIsHovered] = useState(false);



    useEffect(() => {
        if (isHovered) {
            return
        } // Stop the auto-sliding when hovered
        const timer = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % props.feature.images.length);
        }, 3000);

        return () => clearInterval(timer); // Cleanup the timer
    }, [isHovered]);


    const handleNext = ()=>{
        setCurrentSlide((prevSlide) => (prevSlide - 1 + props.feature.images.length) % props.feature.images.length);
    }

    const handlePrev = ()=>{
        setCurrentSlide((prevSlide) => (prevSlide + 1) % props.feature.images.length);
    }

    const handleNavigate = ()=>{
        navigate("/demo");
    }

    const openModalAndSetContent = (feature)=>{
        props.setIsModalOpen(true);
        props.setModalContent(feature);
    }
    
  return (
    <>
        <div className='p-2  rounded-lg shrink-0 productCard'>

            <div className='relative w-full h-[250px] overflow-hidden flex'>
                {props.feature.images.map((image, index) => (
                <img
                    src={image}
                    alt=""
                    key={index}
                    className={`${
                    index === currentSlide ? 'opacity-100' : 'opacity-0'
                    } absolute top-0 left-0 w-full h-full lg:object-cover md:object-cover object-cover transition-opacity duration-500 ease-in-out rounded-lg`}
                    onMouseEnter={() => setIsHovered(true)}  // Trigger setIsHovered on hover
                    onMouseLeave={() => setIsHovered(false)}  // Optionally reset when mouse leaves
                />
                ))}

                <button
                    className='absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md opacity-50'
                    onClick={() => handleNext()}
                >
                    <FaChevronLeft/>
                </button>

                <button
                    className='absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md opacity-50'
                    onClick={() => handlePrev()}
                >
                    <FaChevronRight/>
                </button>
            </div>

            <div className="relative flex justify-center mt-2">
                <div className="flex gap-2">
                    {props.feature.images.map((_, index) => (
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

            <div className='p-2'>
                <h2 className='font-semibold text-xl my-2 text-[#ff5a5f]'>
                    {props.feature?.title || ""}
                </h2>
                <p className='text-sm text-gray-400'>
                    {
                    props.feature?.description?.length > 180
                        ? props.feature.description.substring(0, 180) + "..."
                        : props.feature?.description || ""
                    }
                </p>
                <div className='w-full flex justify-between'>
                    <button className='mt-4 text-sm py-2 px-3 font-semibold' onClick = {()=>{handleNavigate()}}>
                        View Demo 
                    </button>
                    <button className='mt-4 text-sm py-2 px-3 font-semibold text-[#ff5a5f]' 
                        onClick={()=>openModalAndSetContent(props.feature)}
                    >
                        Read More... 
                    </button>
                </div>
            </div>

        </div>
 

    </>
  )
}
