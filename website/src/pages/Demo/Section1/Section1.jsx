import React, { useEffect, useRef,useState } from 'react'
import img from "../../../assets/key-card.jpeg"
import { MdOutlinePlayCircleOutline } from "react-icons/md";
import "./Section1.css"
import video from "../../../assets/keycardDemo.mp4";
import { gsap } from "gsap";
 
export default function Section1() {
 
    const player = useRef(null);
    const [playState,setPlayState] = useState(false);

    const closePlayer = (e)=>{
        if(e.target === player.current){
            setPlayState(false)
        }
    }

    const demoRef = useRef(null);

    useEffect(() => {
        if (player.current) {
          const videoElement = player.current.querySelector('video');
          if (videoElement) {
            if (playState) {
              videoElement.play();
            } else {
              videoElement.pause();
              videoElement.currentTime = 0; // Optionally reset video to the start
            }
          }
        }
      }, [playState]);


    const playVideo = ()=>{
        setPlayState(true)
        // player.current.play()
    }


    useEffect(()=>{
        const title = demoRef.current?.querySelector('.demoTitle');
            gsap.fromTo(
            title,
            {
                opacity: 0,
                y: -40,
            },
            {
                opacity: 1,
                y: 0,
                delay :0.3,
                duration : 0.7,
                ease: 'power2.out',
            }
        );

        const header = demoRef.current?.querySelector('.demoHeader');
        gsap.fromTo(
            header,
            {
                opacity: 0,
                x: -300,
            },
            {
                opacity: 1,
                x: 0,
                delay :0.4,
                duration : 0.8,
                ease: 'power2.out',
            }
        );

        const videoPlayer = demoRef.current?.querySelector('.demoVidePlayer');
        gsap.fromTo(
            videoPlayer,
            {
                opacity: 0,
                x : 200
            },
            {
                opacity: 1,
                x : 0,
                delay :0.5,
                duration : 1,
                ease: 'power2.out',
            }
        );

    },[]);

 
  return (
    <>
        
        <div className='pt-12 lg:py-[70px] ' ref= {demoRef}>

   
            
            <div className='flex justify-center items-center gap-[30px] flex-col lg:flex-row '>
            
                <div className='flex-1 -500'>
                    <h2 className='demoHeader text-xl lg:text-3xl font-semibold text-[#3A3A3A]'>
                   Watch a Full Demo to Understand the Features & See What Our{' '}
                    <span className="text-[#CBA569] px-1 font-extrabold">Key</span> and{' '}
                    <span className="text-[#CBA569] px-1 font-extrabold">Card Access Organizer</span>{' '}
                    Offers You
                    </h2>
                </div>

                <div className='demoVidePlayer flex-1 relative cursor-pointer' onClick = {()=>playVideo()}>
                    <div className='absolute inset-0 bg-gray-500 opacity-55 rounded-xl '></div> {/* Light grey background */}
                    <MdOutlinePlayCircleOutline  className='absolute demoVideo' size={80} color='white'
              
                    />
                    <img src={img}  alt="Error" className='w-full h-full object-contain' />
                </div>
            
            </div>

        </div> 

        <div className={`videoPlayer ${playState ? '' : 'hide'}`} ref={player} onClick={closePlayer}>
            <video src={video} autoPlay  controls></video>
        </div>


    </>
  )
}
