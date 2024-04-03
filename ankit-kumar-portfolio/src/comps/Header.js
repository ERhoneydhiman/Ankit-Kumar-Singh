import React, { useState } from 'react'
import { Link } from 'react-router-dom';


function Header() {
    const [sidebar, setSidebar] = useState(false)
    const [menuBtn, setMenuBtn] = useState(true)





    const showSidebar = () => {
        setMenuBtn(!menuBtn)
        setSidebar(!sidebar)
        console.log("hello")
    }
    return (

        <div className='head'>

            <div className="img">

            </div>

            <div className="navbar">

                <div className="sidebar-icon">

                    <button onClick={showSidebar}>
                        {menuBtn ? (<svg xmlns="http://www.w3.org/2000/svg"
                            height="40"
                            viewBox="0 -960 960 960"
                            width="40">
                            <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
                        </svg>) : (<svg xmlns="http://www.w3.org/2000/svg"
                            height="40"
                            viewBox="0 -960 960 960"
                            width="40">
                            <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
                        </svg>)}
                    </button>

                </div>

                <h1 className='title'>Ankit Kumar Singh</h1>

                <ul className='nav-links'>
                    <li><Link to="/">Home</Link></li>
                    <li><Link
                        to="/About">
                        About
                    </Link></li>
                    <li><Link
                        to="/Contect">
                        Contect
                    </Link></li>
                </ul>

            </div>

            <div className={`side-bar ${sidebar ? "show" : ""}`}>

                <ul className='nav-links-sidebar'>
                    <li><Link
                        to="/">
                        Home
                    </Link></li>
                    <li><Link
                        to="/About">
                        About
                    </Link></li>
                    <li><Link
                        to="/Contect">
                        Contect
                    </Link></li>
                </ul>

                <div className="copy-sidebar">
                    <span>&copy; 2024 <a href="https://github.com/ERhoneydhiman" target="_blank" rel="noopener noreferrer">Honey Dhiman</a></span>
                </div>

            </div>

        </div>



    )
}

export default Header