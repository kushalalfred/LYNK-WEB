import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import img1 from "../../../assets/productImages/card-key-storage/card-key-storage-2.png";
import img2 from "../../../assets/productImages/Card-key/card-key.png";
import img3 from "../../../assets/productImages/card-storage/card-storage2.png";
import img4 from "../../../assets/productImages/Card/card1.png"

gsap.registerPlugin(ScrollTrigger);

const Section3 = () => {
useEffect(() => {
  const details = gsap.utils.toArray(
    ".desktopContentSection:not(:first-child)"
  );

  // Select ALL images
  const photos = gsap.utils.toArray(".desktopPhoto");

  // Hide all images except the first
  gsap.set(photos, { autoAlpha: 0 });
  gsap.set(photos[0], { autoAlpha: 1 });

  const mm = gsap.matchMedia();

  mm.add("(min-width: 600px)", () => {
    ScrollTrigger.create({
      trigger: ".gallery",
      start: "top top",
      end: "bottom bottom",
      pin: ".right",
    });

    details.forEach((detail, index) => {
      const headline = detail.querySelector("h2");

      const animation = gsap.timeline()
        .to(photos[index + 1], { autoAlpha: 1 })
        .to(photos[index], { autoAlpha: 0 });

      ScrollTrigger.create({
        trigger: headline,
        start: "top 70%",
        end: "top 40%",
        animation,
        scrub: true,
        markers: false,
      });
    });
  });

  return () => mm.revert();
}, []);

  const data = [
    {
      title : "LYNK Slim ID Wallet",
      description : "The LYNK Slim ID Wallet combines ultra-sleek minimalism with everyday utility. It features a clear display window for effortless ID scans, an intuitive quick-card ejector for instant access, and an integrated attachment loop to easily connect lanyards or keyrings—keeping your essential cards secure and accessible"
    },
    {
      title: "LYNK Key Edition",
      description: "The LYNK Key Edition unites your cards and keys into one compact design. Featuring a clear ID window, a quick-eject card lever, and an integrated top key module, it eliminates pocket clutter while keeping your most important everyday items secure and immediately accessible."
    },
    {
      title: "LYNK Storage Edition",
      description:  "The LYNK Storage Edition pairs a slim card holder with an integrated side pocket for added utility. Featuring a clear ID display, a quick-card ejector, and a secure storage compartment, it easily accommodates folded cash, coins, and small daily essentials without bulk."
    },
    {
      title : 'LYNK Modular EDC (Every-Day-Carry) System',
      description : "The LYNK Modular EDC System unifies cards, keys, and gear into one ultimate pocket setup. Combining a clear ID window, quick-eject card lever, top key module, and side storage compartment, it keeps all your daily essentials neatly organized, secure, and immediately accessible"
    },
  ];

  return (
    <div className="bg-[#F7F5F0] text-[#333] ">
      {/* <div className="spacer bg-[#ffff] w-full h-[18vh]"></div> */}

      <div className="gallery flex">
        
        <div className="left w-1/2 ">
          <div className="desktopContent mx-auto w-4/5">
            {data.map((data, index) => (
              <div key={index} className="desktopContentSection min-h-[100vh] flex flex-col justify-center max-w-[420px]">
                <h2 className="text-4xl font-bold" style={{ lineHeight: "45px" }}>
                  {data.title}
                </h2>
                <p className="mt-8 text-gray-400">
                  {data.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="right w-1/2 h-[100vh] flex flex-col justify-center lg:pe-[70px]">
          <div className="desktopPhotos ml-auto w-[50vw] h-[50vw] rounded-[20px] relative overflow-hidden ">
            {[img4,img2,img3,img1].map((img, index) => (
              <img
                key={index}
                src={img}
                alt=""
                className="desktopPhoto absolute w-full h-full object-contain"
              />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Section3;