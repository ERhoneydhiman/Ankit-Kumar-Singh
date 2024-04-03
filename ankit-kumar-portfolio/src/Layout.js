import React from 'react'
import { Outlet } from 'react-router-dom'

import Header from './comps/Header'
import Footer from './comps/Footer'



function Layout() {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />

        </div>
    )
}

export default Layout