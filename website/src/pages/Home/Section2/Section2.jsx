import React, { useEffect, useRef } from 'react';
import img1 from "../../../assets/productImages/card-key-storage/card-key-storage-2.png";
import img2 from "../../../assets/productImages/Card-key/card-key.png";
import img3 from "../../../assets/productImages/card-storage/card-storage2.png";
import img4 from "../../../assets/productImages/Card/card1.png"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Keep static product data outside the component
  const data = [
    {
      title : "LYNK Slim ID Wallet",
      description : "The LYNK Slim ID Wallet combines ultra-sleek minimalism with everyday utility. It features a clear display window for effortless ID scans, an intuitive quick-card ejector for instant access, and an integrated attachment loop to easily connect lanyards or keyrings—keeping your essential cards secure and accessible",
      img : img4
    },
    {
      title: "LYNK Key Edition",
      description: "The LYNK Key Edition unites your cards and keys into one compact design. Featuring a clear ID window, a quick-eject card lever, and an integrated top key module, it eliminates pocket clutter while keeping your most important everyday items secure and immediately accessible.",
      img : img2
    },
    {
      title: "LYNK Storage Edition",
      description:  "The LYNK Storage Edition pairs a slim card holder with an integrated side pocket for added utility. Featuring a clear ID display, a quick-card ejector, and a secure storage compartment, it easily accommodates folded cash, coins, and small daily essentials without bulk.",
      img : img3
    },
    {
      title : 'LYNK Modular EDC (Every-Day-Carry) System',
      description : "The LYNK Modular EDC System unifies cards, keys, and gear into one ultimate pocket setup. Combining a clear ID window, quick-eject card lever, top key module, and side storage compartment, it keeps all your daily essentials neatly organized, secure, and immediately accessible",
      img : img1
    },
  ];

export default function Section2() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      data.forEach((item, index) => {
        const titleElement = sectionRef.current?.querySelector(
          `#title-${index}`
        );
        const descElement = sectionRef.current?.querySelector(
          `#desc-${index}`
        );
        const imgElement = sectionRef.current?.querySelector(
          `#img-${index}`
        );

        // Title animation
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
            ease: "power2.out",
            scrollTrigger: {
              trigger: titleElement,
              start: "top 80%",
              end: "top 30%",
              toggleActions: "play none none reverse",
            },
          }
        );

        // Description animation
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
            ease: "power2.out",
            scrollTrigger: {
              trigger: descElement,
              start: "top 80%",
              end: "top 30%",
              toggleActions: "play none none reverse",
            },
          }
        );

        // Image animation
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
            ease: "power2.out",
            scrollTrigger: {
              trigger: imgElement,
              start: "top 80%",
              end: "top 30%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }, sectionRef);

    // Clean up animations and ScrollTriggers when the component unmounts
    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <div
      className="pt-[60px] px-4 w-full overflow-hidden bg-[#F7F5F0]"
      ref={sectionRef}
    >
      <div className="flex flex-col gap-[30px] w-full">
        <div className="flex flex-col gap-4">
          {data.map((item, index) => (
            <React.Fragment key={index}>
              <div>
                <h2
                  id={`title-${index}`}
                  className="font-bold text-2xl lg:text-8xl text-[#3A3A3A]"
                  style={{ lineHeight: "38px" }}
                >
                  {item.title}
                </h2>

                <p
                  id={`desc-${index}`}
                  className="text-sm text-gray-400 mt-4"
                >
                  {item.description}
                </p>
              </div>

              <div className="w-full h-[300px]">
                <img
                  id={`img-${index}`}
                  src={item.img}
                  className="w-full h-full object-contain"
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
