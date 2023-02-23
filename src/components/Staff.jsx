import React, {useState} from 'react'
import ReactModal from 'react-modal';
import {SliderData} from "./SliderData";

function Card({ name, role, bio, image }) {

  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div className="justify-center transform transition duration-500 ease-in-out hover:scale-105 cursor-pointer flex-wrap max-w-sm rounded overflow-hidden m-4 items-center bg-white inline-block">
      <div onClick={() => setModalIsOpen(true)}>
        <img className="max-w-sm" src={image} alt="Staff member" />
        <div class="px-6 py-4 bg-white">
            <div class="font-bold text-xl mb-2 mx-auto bg-white text-center">{name}</div>
                <hr className="hr-black"/>
                <p class="text-gray-700 text-base bg-white text-center">{role}</p>
        </div>
      </div>
      <ReactModal isOpen={modalIsOpen}>
        <div className="bg-white ">
            <h1 className="text-center font-bold mb-2">{name}</h1>
            <div className="inline-block">
                <img className="rounded-full md:float-left md:mr-5 m-auto " src={image} alt={name} width="400" />
                <p className="ml-8">{bio}</p>
            </div>
            <div className="m-auto text-center">
                <button onClick={() => setModalIsOpen(false)} className="bg-red-400 p-2 m-auto mt-5">Close</button>
            </div>
        </div>
    </ReactModal> 
    </div>
  );
}



//Main Export Rendering each card 

const Staff = (props) => {
    
    return(
        <div className="items-center text-center">
              {SliderData.map((slide) => {
                return (
                    
                    <Card image={slide.image} name={slide.name} role={slide.role} bio={slide.bio}/>
                    

                );
            })}
        </div>
    );
}

export default Staff


