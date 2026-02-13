import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
import Asidebar from './Asidebar'
import RegisterAccount from './RegisterAccount'

const Layout = () => {
    return (
        <>
            <Navbar />
            <Asidebar />
            <RegisterAccount />
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout