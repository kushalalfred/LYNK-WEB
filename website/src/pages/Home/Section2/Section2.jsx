import React, { useEffect, useRef } from 'react';
import img1 from "../../../assets/productImages/card-key-storage/card-key-storage-2.png";
import img2 from "../../../assets/product_Images/key-card-removebg-preview.png";
import img3 from "../../../assets/product_Images/small-card-removebg-preview.png";
import img4 from "../../../assets/product_Images/without-removebg-preview.png"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Section2() {
  const sectionRef = useRef(null);

  const data = [
    {
      title : "LYNK Essential ID & Key Card Holder",
      description : "The foundational LYNK card sleeve engineered with a crystal-clear front viewing window, top quick-slide access slot, and side connection rails. Provides everyday protection for RFID key cards, transit passes, and student IDs with instant side-interlock capability."
      ,
      img : img4
    },
    {
      title: "LYNK Modular Badge Holder with Mounting Rail & Attachment Loop",
      description: " A versatile ID card holder equipped with integrated side interlock tabs and a heavy-duty bottom attachment loop. Designed to securely display standard identification badges while offering fast, modular attachment to keychains, lanyards, or complementary LYNK accessories."
      ,
      img : img2
    },
    {
      title: "LYNK Minimalist Badge Holder with Swing Hinge Mount",
      description: "A streamlined, low-profile ID holder featuring a durable side-swing hinge mechanism and integrated attachment loop. Ideal for clean, snag-free carrying on belt clips, lanyards, or bags while preserving quick access to student or employee cards"
      ,
      img : img3
    },
    {
      title : 'LYNK Pro Modular Key Card & ID Organizer Setup',
      description : "The complete, fully loaded LYNK modular system featuring top-mounting key access attachments, side interlock tabs, and a bottom keyring loop. Engineered for maximum utility, this setup allows seamless integration with additional key modules, lanyards, and carabiners, making it the ultimate everyday carry solution for students, professionals, and secure facility access."
      ,
      img : img1
    },
  ];

  useEffect(() => {
    data.forEach((item, index) => {
      const titleElement = sectionRef.current?.querySelector(`#title-${index}`);
      const descElement = sectionRef.current?.querySelector(`#desc-${index}`);
      const imgElement = sectionRef.current?.querySelector(`#img-${index}`);

      // Title Animation
      gsap.fromTo(
        titleElement,
        {
          opacity: 0,
          y: -50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: titleElement,
            start: 'top 80%',
            end: 'top 30%',
            toggleActions: 'play none none reverse',
          }
        }
      );

      // Description Animation
      gsap.fromTo(
        descElement,
        {
          opacity: 0,
          y: 40,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: 0.3,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: descElement,
            start: 'top 80%',
            end: 'top 30%',
            toggleActions: 'play none none reverse',
          }
        }
      );

      // Image Animation
      gsap.fromTo(
        imgElement,
        {
          opacity: 0,
          y: 40,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: imgElement,
            start: 'top 80%',
            end: 'top 30%',
            toggleActions: 'play none none reverse',
          }
        }
      );
    });
  }, [data]);

  return (
    <div className='pt-[60px] px-4 w-full overflow-hidden bg-[#F7F5F0]' ref={sectionRef}>
      <div className='flex flex-col gap-[30px] w-full'>
        <div className='flex flex-col gap-4'>
          {data.map((item, index) => (
            <React.Fragment key={index}>
              <div>
                <h2
                  id={`title-${index}`}
                  className='font-bold text-2xl lg:text-8xl text-[#3A3A3A]'
                  style={{ lineHeight: "38px" }}
                >
                  {item.title}
                </h2>
                <p
                  id={`desc-${index}`}
                  className='text-sm text-gray-400 mt-4'
                >
                  {item.description}
                </p>
              </div>
              <div className='w-full h-[300px]'>
                <img
                  id={`img-${index}`}
                  src={item.img}
                  className='w-full h-full object-contain'
                  alt={item.title}
                />
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
