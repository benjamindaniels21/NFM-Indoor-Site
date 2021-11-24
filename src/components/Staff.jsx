import {StaffImages} from "./staffImages";

function Staff() {
    return (
        <div>
            <h1 className="text-white">Staff Images</h1>
        {StaffImages.map((staff, index) => {
            return <img src={staff.image} alt={staff.name} />
        })}            
        </div>
    );
};

export default Staff
