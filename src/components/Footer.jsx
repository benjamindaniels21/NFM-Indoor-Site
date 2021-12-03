import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function Footer(props) {
    return (
        <div className="h-20 justify-around text-center">
            <div>
                <h1 className="text-white mt-2">&copy; 2021 NFM Indoor Percussion</h1>
                <a href="#"><FontAwesomeIcon className="transform hover:scale-125 duration-200 text-white inline-block text-3xl m-2 " icon={['fab', 'facebook']} /></a>
                <a href="https://www.instagram.com/nfmhspercussion/"><FontAwesomeIcon className="transform hover:scale-125 duration-200 text-white inline-block text-3xl m-2" icon={['fab', 'instagram']} /></a>
                <a href="#"><FontAwesomeIcon className="transform hover:scale-125 duration-200 text-white inline-block text-3xl m-2" icon={['fab', 'twitter']} /></a>
                
            </div>
        </div>
    )
}


export default Footer

