import React, { useCallback, useState } from 'react'

function Header() {
    const [sidebar, setSidebar] = useState(false)

    

    const showSidebar = () => {
        setSidebar(!sidebar)
        console.log("hello")
    }
    return (

        <div className='head'>
            <div className="img"></div>
            <div className="navbar">
                <div className="sidebar-icon"><button onClick={showSidebar}>
                    <svg  xmlns="http://www.w3.org/2000/svg" height="40" viewBox="0 -960 960 960" width="40"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" /></svg></button>
                </div>
                <h1 className='title'>Ankit Kumar Singh</h1>
                <ul className='nav-links'>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                </ul>

            </div>
            <div className={`side-bar ${sidebar ? "show" : ""}`}>
                <ul className='nav-links-sidebar'>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>

                </ul>
                <div className="copy-sidebar">
                    <span>&copy; 2024 <a href="https://github.com/ERhoneydhiman" target="_blank" >Honey Dhiman</a></span>
                </div>
            </div>

        </div>



    )
}

export default Header