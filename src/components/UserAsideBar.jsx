import React, { useState } from 'react'
import { FaRegCircleUser } from 'react-icons/fa6'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { IoArrowBack, IoCloseOutline, IoSearchOutline, IoTimerOutline } from 'react-icons/io5'
import { IoMdHeartEmpty } from 'react-icons/io'
import { PiShoppingBagOpenDuotone, PiSuitcase } from "react-icons/pi";
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { IoMenu } from "react-icons/io5";


const UserAsideBar = () => {
    const location = useLocation()
    const navigateBack = useNavigate()
    const [openAsideMenu, setOpenAsideMenu] = useState(false)

    const UserProfile = [
        {
            id: 1,
            name: "Account",
            icon: <FaRegCircleUser />,
            url: "/user-profile"
        },
        {
            id: 2,
            name: "Favorites",
            icon: <IoMdHeartEmpty />,
            url: "/profile/favorite-hotels"
        },
        {
            id: 3,
            name: "Recently viewed",
            icon: <IoTimerOutline />,
            url: "/profile/recently-viewed"
        },
        {
            id: 4,
            name: "Bookings",
            icon: <PiSuitcase />,
            url: "#"
        },
        {
            id: 5,
            name: "Search preferences",
            icon: <IoSearchOutline />,
            url: "/profile/search-preferences"
        },
    ]
    return (
        <div className='flex flex-col w-full lg:pb-10 lg:sticky top-0 items-center gap-1'>
            <div className='flex flex-col mt-4 items-center gap-2 w-full'>
                <div className='w-full flex sticky top-0 items-center justify-between border-b py-4 px-4 rounded-t-md hover:bg-gray-100 border-gray-200'>
                    <div onClick={() => navigateBack("/")} className={`flex cursor-pointer items-center w-full gap-2 justify-between`}>
                        <li className='flex items-center gap-2 w-full'>
                            <span><IoArrowBack /></span>
                            Back
                        </li>
                    </div>

                    <button onClick={() => setOpenAsideMenu(!openAsideMenu)} className="text-xl cursor-pointer lg:hidden flex text-black"><IoMenu /></button>
                </div>

                {openAsideMenu && (
                    <div
                        className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
                        onClick={() => setOpenAsideMenu(false)}
                    ></div>
                )}

                <div
                    className={`
    ${openAsideMenu ? "translate-x-0  pt-8 lg:pt-8  fixed top-0 left-0 h-screen w-[20rem] max-[400px]:w-full z-50 bg-[var(--accent-color)] shadow-lg border-r border-gray-100 transform transition-all duration-300 ease-in-out block" : "w-full -translate-x-[0] hidden"}
                lg:block
  `}
                >
                    <span className="absolute top-2 text-xl right-2 hidden max-[400px]:block cursor-pointer text-black"><IoCloseOutline onClick={() => setOpenAsideMenu(false)} /></span>
                    {UserProfile.map((elemItem) => {
                        const isActive = location.pathname === elemItem.url;
                        return (
                            <div onClick={() => setOpenAsideMenu(false)} className={`flex border-b cursor-pointer border-gray-200 py-4 px-4 rounded-t-md hover:bg-gray-100 items-center w-full gap-2 justify-between ${isActive ? 'bg-gray-100' : ''}`}>
                                <Link to={elemItem.url} className='flex items-center gap-2 w-full'>
                                    <li className='flex items-center gap-2 w-full'>
                                        <span>{elemItem.icon}</span>
                                        {elemItem.name}
                                    </li>
                                    <span className="text-xl text-black"><MdKeyboardArrowRight /></span>
                                </Link>
                            </div>
                        )
                    })}
                    <button className='w-full rounded-md items-center justify-center py-3 px-4 text-black mt-4 cursor-pointer bg-gray-100'>Logout</button>
                </div>
            </div>
        </div >
    )
}

export default UserAsideBar