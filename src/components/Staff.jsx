import {SliderData} from "./SliderData";

const Staff = () => {

    return(
        <div className="items-center text-center">   
            <h1 className="text-white text-5xl text-center mb-4">Staff</h1>

            {SliderData.map((slide) => {
                return (
                    <div class="flex flex-wrap max-w-sm rounded overflow-hidden shadow-lg bg-white mb-2">
                        <img class="w-full h-auto" src={slide.image} alt="Sunset in the mountains" />
                        <div class="px-6 py-4 bg-white">
                            <div class="font-bold text-xl mb-2 bg-white">{slide.name}</div>
                                <p class="text-gray-700 text-base bg-white">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                                </p>
                        </div>
                    </div>
                );
            })}
        </div> 
    );

}; 

export default Staff;


