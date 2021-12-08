import React, {useState} from 'react'
import ReactModal from 'react-modal';
import {SliderData} from "./SliderData";

// import "./card.css";

//Card + Modal and all data associated with it
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
        <div className="bg-white">
          <h1>{name}</h1>
          <p>{bio}</p>
        <div>
          <button onClick={() => setModalIsOpen(false)} className="bg-green-400 p-2">Close Modal</button>
        </div>
        </div>
    </ReactModal> 
    </div>
  );
}



//Our main Export Rendering each card 

const StaffHardCoded = (props) => {
    
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

export default StaffHardCoded


// className="card justify-center transform transition duration-500 ease-in-out hover:scale-105 cursor-pointer flex-wrap max-w-sm rounded overflow-hidden ml-4 bg-white inline-block"