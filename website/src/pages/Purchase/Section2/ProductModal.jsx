import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';

export default function ProductModal(props) {
    const navigate = useNavigate();
    const modalRef = useRef(null);
    const modalContentRef = useRef(null);

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

    const viewDemo = () => {
        gsap.to(modalRef.current, {
            opacity: 0,
            scale: 0.9,
            duration: 0.3,
            ease: "power2.out",
            onComplete: () => {
                props.setIsModalOpen(false);
                props.setModalContent(null);
                navigate("/demo");
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

    return (
        <div
            className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 z-50 flex justify-center items-center w-full"
            ref={modalRef}
        >
            <div
                className="bg-white w-full lg:w-4/5 p-4 lg:p-8 rounded-lg max-h-screen flex flex-col gap-2 lg:gap-9"
                ref={modalContentRef}
            >
                {/* Header */}
                <div className="flex justify-between items-center">
                    <h2 className="text-[#ff5a5f] text-md lg:text-2xl font-bold">
                        <span className="text-gray-600">Feature :</span> {props.modalContent.title}
                    </h2>
                    <h2
                        className="font-bold text-md lg:text-2xl text-gray-400 cursor-pointer"
                        onClick={handleCloseModal}
                    >
                        X
                    </h2>
                </div>

                {/* Image */}
                <div className="w-full h-[200px] lg:h-[400px] overflow-hidden">
                    <img
                        src={props.modalContent.img}
                        className="w-full h-full object-contain"
                        alt="Error"
                    />
                </div>

                <div>
                    <p className="text-gray-400 text-sm lg:text-lg">
                        {props.modalContent.description}
                    </p>
                    <button
                        className="mt-3 lg:mt-5 font-bold text-sm lg:text-md"
                        onClick={viewDemo}
                    >
                        View Demo
                    </button>
                </div>
            </div>
        </div>
    );
}
