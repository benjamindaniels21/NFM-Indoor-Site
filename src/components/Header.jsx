import logo from '../assets/NFM-Logo.png';
import {Link} from "react-router-dom";
import "./hamburger.css";

function Header(props) {
    return (
        <div>
        <nav className="bg-black flex py-3 justify-between sticky top-0">            
        
        {/* left side  */}
            <div className="hidden md:block"> 
                <div className="  inline-grid" >
                    <Link to="/">
                    <h1 className="cursor-pointer hover:text-red-500 text-white ml-28 mt-10 text-xl font-serif nav-link">Home</h1>
                    </Link>
                </div>
                <div className=" inline-grid justify-center ml-7" >
                    <Link to="/staff">
                    <h1 className="text-white cursor-pointer hover:text-red-500 text-xl font-serif nav-link">Staff</h1>
                    </Link>
                </div>
            </div>
        {/* middle  */}
            <div className="ml-8 md:ml-0 inline-grid w-20 h-20 cursor-pointer  ">
                <Link to="/">
                <img className="transform hover:scale-105 hover:rotate-12 duration-200" src={logo} alt="NFM Indoor Percussion"/>
                </Link>
           </div>

        {/* right side  */}
            <div className="hidden md:block"> 
                <div className="  inline-grid justify-center mr-7 mt-10" >
                    <Link to="/contact">
                    <h1 className="text-white cursor-pointer hover:text-red-500 text-xl font-serif nav-link">Contact</h1>
                    </Link>               
                </div>
                <div className=" inline-grid justify-center mr-28 " >
                    <Link to="/about">
                    <h1 className="text-white cursor-pointer hover:text-red-500 text-xl font-serif nav-link">About</h1>
                    </Link>
                </div>
                
            </div>
    
        </nav>
                
       
</div>
    )
}

export default Header


