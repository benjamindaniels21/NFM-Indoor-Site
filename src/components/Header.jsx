import logo from '../assets/NFM-Logo.png'


function Header(props) {
    return (
        <nav className="bg-black flex py-3 justify-between sticky top-0">            
        
        {/* left side  */}
          <div> 
                <div className="  inline-grid" >
                    <h1 className="text-white ml-3 mt-10">Home</h1>
                </div>
                <div className=" inline-grid justify-center ml-7" >
                    <h1 className="text-white ">Staff</h1>
                </div>
            </div>
        {/* middle  */}
            <div className="inline-grid w-20 h-20 cursor-pointer  ">
                <img src={logo} alt="NFM Indoor Percussion"/>
            </div>

        {/* right side  */}
              <div className=" "> 
                <div className="  inline-grid justify-center mr-7 mt-10" >
                    <h1 className="text-white">Contact</h1>
                </div>
                <div className=" inline-grid justify-center mr-3 " >
                    <h1 className="text-white ">About</h1>
                </div>
            </div>

        </nav>
    )
}

export default Header


