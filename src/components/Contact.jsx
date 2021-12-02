import React, {useState} from 'react';
import ReactModal from 'react-modal';


function Contact() {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    return (
        <div>
            <h1 className="text-white">Contact Us Goes Here</h1>
                <button onClick={() => setModalIsOpen(true)} className="bg-green-400 p-2">Open Modal</button>
                <ReactModal isOpen={modalIsOpen}>
                    <div className="bg-white">
                    <h1>Modal Title</h1>
                    <p>Modal Content</p>
                    <div>
                        <button onClick={() => setModalIsOpen(false)} className="bg-green-400 p-2">Close Modal</button>
                    </div>
                    </div>
                </ReactModal> 
        </div>
    )
}

export default Contact
