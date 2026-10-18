
import React, { useEffect, useRef, useState } from 'react';
import img from "../../../assets/key-card.jpeg";
import { MdOutlinePlayCircleOutline } from "react-icons/md";
import "./Section1.css";
import video from "../../../assets/keycardDemo.mp4";
import { gsap } from "gsap";
import pdf from "../../../assets/userModule/LYNK User Manual.pdf";

export default function Section1() {
    const player = useRef(null);
    const demoRef = useRef(null);
    const [playState, setPlayState] = useState(false);

    const closePlayer = (e) => {
        if (e.target === player.current) {
            setPlayState(false);
        }
    };

    const playVideo = () => {
        setPlayState(true);
    };

    // Play and pause video when the modal opens or closes
    useEffect(() => {
        if (player.current) {
            const videoElement = player.current.querySelector('video');

            if (videoElement) {
                if (playState) {
                    videoElement.play().catch(() => {});
                } else {
                    videoElement.pause();
                    videoElement.currentTime = 0;
                }
            }
        }
    }, [playState]);

    // GSAP animations
    useEffect(() => {
        const ctx = gsap.context(() => {
            const title = demoRef.current?.querySelector('.demoTitle');
            const header = demoRef.current?.querySelector('.demoHeader');
            const videoPlayer = demoRef.current?.querySelector('.demoVidePlayer');
            const button = demoRef.current?.querySelector('.downloadManualBtn');

            // Title animation
            if (title) {
                gsap.fromTo(
                    title,
                    {
                        opacity: 0,
                        y: -40,
                    },
                    {
                        opacity: 1,
                        y: 0,
                        delay: 0.3,
                        duration: 0.7,
                        ease: 'power2.out',
                    }
                );
            }

            // Header animation
            if (header) {
                gsap.fromTo(
                    header,
                    {
                        opacity: 0,
                        x: -300,
                    },
                    {
                        opacity: 1,
                        x: 0,
                        delay: 0.4,
                        duration: 0.8,
                        ease: 'power2.out',
                    }
                );
            }

            // Video image animation
            if (videoPlayer) {
                gsap.fromTo(
                    videoPlayer,
                    {
                        opacity: 0,
                        x: 200,
                    },
                    {
                        opacity: 1,
                        x: 0,
                        delay: 0.5,
                        duration: 1,
                        ease: 'power2.out',
                    }
                );
            }

            // Download button entrance animation
            if (button) {
                gsap.fromTo(
                    button,
                    {
                        opacity: 0,
                        y: 35,
                        scale: 0.9,
                    },
                    {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        delay: 0.7,
                        duration: 0.8,
                        ease: 'back.out(1.7)',
                    }
                );

                // Button hover animation
                const hoverIn = () => {
                    gsap.to(button, {
                        scale: 1.05,
                        y: -4,
                        backgroundColor: '#b58f4e',
                        boxShadow: '0px 10px 25px rgba(203, 165, 105, 0.35)',
                        duration: 0.3,
                        ease: 'power2.out',
                    });
                };

                const hoverOut = () => {
                    gsap.to(button, {
                        scale: 1,
                        y: 0,
                        backgroundColor: '#CBA569',
                        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                        duration: 0.3,
                        ease: 'power2.out',
                    });
                };

                button.addEventListener('mouseenter', hoverIn);
                button.addEventListener('mouseleave', hoverOut);
            }
        }, demoRef);

        // Revert GSAP animations and remove event listeners
        return () => ctx.revert();
    }, []);

    return (
        <>
            <div
                className="pt-12 lg:py-[70px]"
                ref={demoRef}
            >
                <div className="flex justify-center items-center gap-[30px] flex-col lg:flex-row">

                    {/* Text and download button */}
                    <div className="flex-1">
                        <h2 className="demoHeader text-xl lg:text-3xl font-semibold text-[#3A3A3A]">
                            Watch a Full Demo to Understand the Features & See What Our{' '}
                            <span className="text-[#CBA569] px-1 font-extrabold">
                                Key
                            </span>{' '}
                            and{' '}
                            <span className="text-[#CBA569] px-1 font-extrabold">
                                Card Access Organizer
                            </span>{' '}
                            Offers You
                        </h2>

                        <div className="flex mt-8">
                            <a
                                href={pdf}
                                download="LYNK-User-Manual.pdf"
                                className="downloadManualBtn inline-flex items-center gap-2 bg-[#CBA569] text-white font-semibold px-4 py-3 rounded-lg shadow-md"
                            >
                                <span>Download User Manual</span>

                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                    <polyline points="7 10 12 15 17 10" />
                                    <line x1="12" y1="15" x2="12" y2="3" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Video preview */}
                    <div
                        className="demoVidePlayer flex-1 relative cursor-pointer"
                        onClick={playVideo}
                    >
                        <div className="absolute inset-0 bg-gray-500 opacity-55 rounded-xl"></div>

                        <MdOutlinePlayCircleOutline
                            className="absolute demoVideo"
                            size={80}
                            color="white"
                        />

                        <img
                            src={img}
                            alt="Key and card access organizer demo"
                            className="w-full h-full object-contain"
                        />
                    </div>

                </div>
            </div>

            {/* Video modal */}
            <div
                className={`videoPlayer ${playState ? '' : 'hide'}`}
                ref={player}
                onClick={closePlayer}
            >
                <video
                    src={video}
                    autoPlay
                    controls
                />
            </div>
        </>
    );
}
