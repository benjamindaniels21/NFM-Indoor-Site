import {SliderData} from "./SliderData";
import "./hr.css";

const Staff = () => {

    return(
        <div className="items-center text-center">   
            <h1 className="text-white text-5xl text-center mb-4">Our Instructional Staff</h1>

            {SliderData.map((slide) => {
                return (
                    <div class="card transform transition duration-500 ease-in-out hover:scale-105 cursor-pointer flex-wrap max-w-sm rounded overflow-hidden  shadow-inner-lg bg-white m-2 inline-block">
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


