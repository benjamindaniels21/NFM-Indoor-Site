import {SliderData} from "./SliderData";

const Staff = () => {

    return (
        <>
        <h1 className="text-white">Staff</h1>
         {SliderData.map((slide) => {
            return ( 
            <div>
                <h1 className="text-white">{slide.name}</h1>
                <img src = {slide.image} alt={slide.name} height='200' width= '200'/>
               
            </div>
            );
        })}             
        </>
    );
}; 

export default Staff;


