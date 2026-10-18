import React, { useEffect, useRef, useState } from 'react'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../Section2/Section2.css";
 
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";
import { guestFeatures } from '../../../data/data.js';
import Card from '../Section2/Card.jsx';
import CardCarousel from '../Section2/CardCarousel.jsx';
import ProductModal from '../Section2/ProductModal.jsx';
import ProductCarouselModal from '../Section2/ProductCarouselModal.jsx';


// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export default function Section5() {
  const productRef = useRef(null);
  const [isModalOpenSingle, setIsModalOpenSingle] = useState(false);
  const [modalContentSingle, setModalContentSingle] = useState(null);

  const [isModalOpenMulti, setIsModalOpenMuli] = useState(false);
  const [modalContentMulti, setModalContentMulti] = useState(null);

  const sliderRef = useRef(null);

  // Function to calculate scroll amount based on window width
  const getScrollAmount = () => {
    const containerWidth = sliderRef.current ? sliderRef.current.offsetWidth : 0;
    const isLargeDevice = window.innerWidth > 1024; // Large device if width > 1024px
    return isLargeDevice ? containerWidth * 0.32 : containerWidth; // 30% for large, 100% for small/medium
  };

  // Function to scroll the slider manually
  const scrollSlider = (direction) => {
    if (sliderRef.current) {
      const scrollAmount = direction === 'right' ? getScrollAmount() : -getScrollAmount();
      sliderRef.current.scrollLeft += scrollAmount;
    }
  };

  useEffect(() => {
    const headerText = productRef?.current.querySelector(".header-text");
    gsap.fromTo(
      headerText,
      {
        opacity: 0, 
        y: -50, // Start from 50px below
      },
      {
        opacity: 1,
        y: 0, // End at the original position
        scrollTrigger: {
          delay: 0.3,
          trigger: headerText,
          start: 'top 50%', // Trigger when the card is 80% in view
          end: 'top 30%',
          toggleActions: 'play none none reverse', // Reverse the animation when the card leaves view
        },
      }
    );

    const manageCardsData = productRef?.current.querySelector(".manageCardsData");
    gsap.fromTo(
      manageCardsData,
      {
        opacity: 0,
        y: -50, // Start from 50px below
      },
      {
        opacity: 1,
        y: 0, // End at the original position
        scrollTrigger: {
          delay: 0.3,
          trigger: manageCardsData,
          start: 'top 45%', // Trigger when the card is 80% in view
          end: 'top 30%',
          toggleActions: 'play none none reverse', // Reverse the animation when the card leaves view
        },
      }
    );


    const arrowTextLeft = productRef?.current.querySelector(".arrowTextLeft");
    gsap.fromTo(
      arrowTextLeft,
      {
        opacity: 0,
        y: -50, // Start from 50px below
      },
      {
        opacity: 1,
        y: 0, // End at the original position
        scrollTrigger: {
          trigger: arrowTextLeft,
          start: 'top 60%', // Trigger when the card is 80% in view
          end: 'top 30%',
          toggleActions: 'play none none reverse', // Reverse the animation when the card leaves view
        },
      }
    );

    const arrowTextRight = productRef?.current.querySelector(".arrowTextRight");
    gsap.fromTo(
      arrowTextRight,
      {
        opacity: 0,
        y: -50, // Start from 50px below
      },
      {
        opacity: 1,
        y: 0, // End at the original position
        scrollTrigger: {
          trigger: arrowTextRight,
          start: 'top 60%', // Trigger when the card is 80% in view
          end: 'top 30%',
          toggleActions: 'play none none reverse', // Reverse the animation when the card leaves view
        },
      }
    );


  }, []);

  return (
    <>
      <div className='flex flex-col gap-[20px] lg:gap-[40px] mt-[60px] w-full overflow-hidden' ref={productRef}>
        <div className='mt-1 mb-0 lg:mb-6'>
          <h2 className='text-2xl lg:text-3xl font-bold text-[#3A3A3A] header-text'>
            Some Features of Guest Application
          </h2>

          <div className='relative'>
            <div className='flex gap-0 lg:gap-8 w-full overflow-hidden  py-8 manageCardsData scroll-smooth' ref={sliderRef}>
              {guestFeatures.map((feature, index) => {
                return feature.type === "single" ? (
                  <Card
                    feature={feature}
                    key={index}
                    setIsModalOpen={setIsModalOpenSingle}
                    setModalContent={setModalContentSingle}
                  />
                ) : (
                  <CardCarousel
                    key={index}
                    feature={feature}
                    setIsModalOpen={setIsModalOpenMuli}
                    setModalContent={setModalContentMulti}
                  />
                );
              })}
            </div>

            {/* Scroll buttons */}
            <button
              className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white text-black p-2 rounded-full
                shadow-xl arrowTextLeft
              "
              onClick={() => scrollSlider('left')}
            >
              <FaChevronLeft/>
            </button>
            <button
              className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white text-black p-2 rounded-full
                shadow-xl arrowTextRight
              "
              onClick={() => scrollSlider('right')}
            >
             <FaChevronRight/>
            </button>
          </div>
        </div>
      </div>

      {isModalOpenSingle && (
        <ProductModal
          isModalOpen={isModalOpenSingle}
          modalContent={modalContentSingle}
          setIsModalOpen={setIsModalOpenSingle}
          setModalContent={setModalContentSingle}
        />
      )}

      {isModalOpenMulti && (
        <ProductCarouselModal
          isModalOpen={isModalOpenMulti}
          modalContent={modalContentMulti}
          setIsModalOpen={setIsModalOpenMuli}
          setModalContent={setModalContentMulti}
        />
      )}
    </>
  );
}
