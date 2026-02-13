import React, { useContext } from 'react'
import Asidebar from '../Components/AsideBar'
import { Outlet } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import Notifications from '../Components/Notifications'
import { ToggleContext } from '../../Context/ToggleMenu'

const Layout = () => {
    const { openAsideBar, setOpenAsideBar } = useContext(ToggleContext)
    return (
        <>
            <Navbar />
            <Notifications />
            {openAsideBar && (
                <div
                    className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
                    onClick={() => setOpenAsideBar(false)}
                ></div>
            )}
            <div className="w-full grid grid-cols-12 lg:h-[calc(100vh-64px)]">
                <div
                    className={`bg-white no_scrollBar overflow-y-auto
                    fixed lg:static top-[0px] left-0 h-[100vh] lg:h-auto
                   max-[400px]:w-full  w-[300px] lg:w-auto z-50
                    transform transition-transform duration-300
                    lg:col-span-3 border-r border-gray-100
                    ${openAsideBar ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
                    `}
                >
                    <Asidebar />
                </div>

                {/* Main Content */}
                <div className="overflow-y-auto bg-gray-50 p-4 col-span-12 lg:col-span-9">
                    <Outlet />
                </div>

            </div>
        </>
    )
}

export default Layout
