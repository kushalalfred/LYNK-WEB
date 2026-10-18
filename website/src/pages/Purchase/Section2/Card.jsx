import React from 'react'
import "./Styles/Card.css";
import { useNavigate } from 'react-router-dom';
// import ProductModal from './ProductModal';

export default function Card(props) {
 
    const navigate = useNavigate();

    const handleNavigate = ()=>{
        navigate("/demo");
        window.scrollTo(0, 0);  // Scroll to top when navigating to home
    }
    const openModalAndSetContent = (feature)=>{
        props.setIsModalOpen(true);
        props.setModalContent(feature);
    }
    

  return (
    <>
        <div className='p-2  rounded-lg shrink-0 productCard'>
            <div className='w-full h-[250px] overflow-hidden'>
                <img src={props.feature.img} className='w-full h-full object-cover rounded-lg' alt="Error" />
            </div>

            <div className='p-3'>
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
                    <button className='mt-4 text-sm py-2 px-3 font-semibold text-[#ff5a5f]' onClick={()=>openModalAndSetContent(props.feature)}>
                        Read More... 
                    </button>
                </div>
            </div>

        </div>

    </>
  )
}
