import logo from '../assets/NFM-Logo.png'


function Header(props) {
    return (
        <nav className="bg-black flex justify-between py-3">            
        
        {/* left side  */}
            <div className="content-around bg-green-400 inline-grid " >
                <h1 className="text-red-400 py-4 px-2 content-evenly">Home</h1>
            </div>
            
        {/* middle  */}
            <div className="relative inline-grid w-20 h-20 cursor-pointer">
                <img src={logo} alt="NFM Indoor Percussion"/>
            </div>

        {/* right side  */}
            <div className="content-around bg-yellow-400 inline-grid " >
                <h1 className="text-red-400 py-4 px-2 content-evenly">About</h1>
            </div>

        </nav>
    )
}

export default Header


