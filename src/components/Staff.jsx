import {SliderData} from "./SliderData";
import "./hr.css";
import React, {useState} from 'react';
import ReactModal from 'react-modal';



const Staff = (props) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
    return(
 
        <div className="items-center text-center">  
        
            <h1 className="text-white text-5xl text-center mb-4 font-serif">{props.name}</h1>

            <ReactModal isOpen={modalIsOpen}>
                <div className="bg-white">
                <h1>{props.name}</h1>
                <p>Modal Content</p>
                <div>
                    <button onClick={() => setModalIsOpen(false)} className="bg-green-400 p-2">Close Modal</button>
                </div>
                </div>
            </ReactModal>  
            {SliderData.map((slide) => {
                return (
                    
                    <div  class="card transform transition duration-500 ease-in-out hover:scale-105 cursor-pointer flex-wrap max-w-sm rounded overflow-hidden  shadow-inner-lg bg-white m-2 inline-block">
                    <button className='bg-green-400' onClick={() => setModalIsOpen(true)}>Click Me</button>

                        <img class="w-full h-auto" src={slide.image} alt="Sunset in the mountains" />
                        <div class="px-6 py-4 bg-white">
                            <div class="font-bold text-xl mb-2 bg-white">{slide.name}</div>
                                <hr className="hr-black"/>
                                <p class="text-gray-700 text-base bg-white">
                                        {slide.role}

                                </p>
                        </div>
                        
                    </div>
                    
                );
            })}
        </div> 
    );

}; 

export default Staff;



// onClick={() => setModalIsOpen(true)}