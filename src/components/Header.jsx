import logo from '../assets/NFM-Logo.png';
import {Link} from "react-router-dom";

function Header(props) {
    return (
        <div>
        <nav className="bg-black flex py-3 justify-between sticky top-0">            
        
        {/* left side  */}
          <div> 
                <div className="  inline-grid" >
                    <Link to="/">
                    <h1 className="cursor-pointer hover:text-red-500 text-white ml-7 mt-10 text-xl font-serif">Home</h1>
                    </Link>
                </div>
                <div className=" inline-grid justify-center ml-7" >
                    <Link to="/staff">
                    <h1 className="text-white cursor-pointer hover:text-red-500 text-xl font-serif">Staff</h1>
                    </Link>
                </div>
            </div>
        {/* middle  */}
            <div className="inline-grid w-20 h-20 cursor-pointer  ">
                <Link to="/">
                <img src={logo} alt="NFM Indoor Percussion"/>
                </Link>
           </div>

        {/* right side  */}
              <div className=" "> 
                <div className="  inline-grid justify-center mr-7 mt-10" >
                    <Link to="/contact">
                    <h1 className="text-white cursor-pointer hover:text-red-500 text-xl font-serif">Contact</h1>
                    </Link>               
                </div>
                <div className=" inline-grid justify-center mr-7 " >
                    <Link to="/about">
                    <h1 className="text-white cursor-pointer hover:text-red-500 text-xl font-serif">About</h1>
                    </Link>
                </div>
                
            </div>
            

        </nav>
                

</div>
    )
}

export default Header


