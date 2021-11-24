import {SliderData} from "./SliderData";

const Staff = () => {
    return (
        <>
        <h1 className="text-white">Staff</h1>
         {SliderData.map((slide, index) => {
            return <img src={slide.image} alt="name" />;
        })}             
        </>
    );
};

export default Staff;


