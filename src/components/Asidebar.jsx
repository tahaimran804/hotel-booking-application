import React, { useContext } from 'react'
import { Link, useLocation } from 'react-router-dom';
import { GiCommercialAirplane, GiCruiser, GiModernCity } from "react-icons/gi";
import { FaHotel, FaCarSide } from "react-icons/fa";
import { MdTravelExplore } from "react-icons/md";
import { IoBedOutline } from "react-icons/io5";
import { SiGooglegemini } from "react-icons/si";
import { LuShip } from "react-icons/lu";
import { FaHeart } from "react-icons/fa";
import { ToggleContext } from '../Context/ToggleMenu';

const Asidebar = () => {
    const location = useLocation()
    const { openMenuAsideBar, setOpenMenuAsideBar } = useContext(ToggleContext);

    const navData = [
        {
            id: 1,
            name: "Flights",
            icon: <GiCommercialAirplane />,
            url: "#",
        },
        {
            id: 2,
            name: "Stays",
            icon: <IoBedOutline />,
            url: "/",
        },
        {
            id: 3,
            name: "Cars",
            icon: <FaCarSide />,
            url: "#",
        },
        {
            id: 4,
            name: "Packages",
            icon: <MdTravelExplore />,
            url: "#",
        },
        {
            id: 5,
            name: "Cruises",
            icon: <LuShip />,
            url: "#",
        },
        {
            id: 6,
            name: "AI Mode",
            icon: <SiGooglegemini />,
            url: "#",
        },
    ];

    const navData1 = [
        {
            id: 1,
            name: "Flights",
            icon: <GiCommercialAirplane />,
            url: "#",
        },
        {
            id: 2,
            name: "Stays",
            icon: <IoBedOutline />,
            url: "/stays",
        },
        {
            id: 3,
            name: "Cars",
            icon: <FaCarSide />,
            url: "#",
        },
        {
            id: 4,
            name: "Packages",
            icon: <MdTravelExplore />,
            url: "#",
        },
        {
            id: 5,
            name: "Cruises",
            icon: <LuShip />,
            url: "#",
        },
        {
            id: 6,
            name: "AI Mode",
            icon: <SiGooglegemini />,
            url: "#",
        },
    ];

    const navData2 = [
        {
            id: 1,
            name: "Trips",
            icon: <FaHeart />,
            url: "#",
        },
    ];

    const settingData = [
        {
            id: 1,
            name: "Flights",
            icon: <GiCommercialAirplane />,
            url: "#",
        },
        {
            id: 2,
            name: "Stays",
            icon: <IoBedOutline />,
            url: "/stays",
        },
        {
            id: 3,
            name: "Cars",
            icon: <FaCarSide />,
            url: "#",
        },
        {
            id: 4,
            name: "Packages",
            icon: <MdTravelExplore />,
            url: "#",
        },
        {
            id: 5,
            name: "Cruises",
            icon: <LuShip />,
            url: "#",
        },
        {
            id: 6,
            name: "AI Mode",
            icon: <SiGooglegemini />,
            url: "#",
        },
    ];


    return (
        <>

            {openMenuAsideBar && (
                <div
                    onClick={() => setOpenMenuAsideBar(false)}
                    className="fixed inset-0 bg-black/40 z-40"
                />
            )}
            <div className={`w-64  border border-gray-100
        ${openMenuAsideBar ? "translate-x-0 z-50 duration-500" : "-translate-x-80 duration-500"}
        h-screen hover:overflow-auto pb-24 duration-500 bg-white fixed top-20 left-0 border-r border-gray-100`}>
                <div className='border-b border-gray-200 flex px-2 py-4 flex-col gap-2 items-start w-full'>
                    {navData.map((items) => {
                        const isActive = location.pathname === items.url;
                        return <Link key={items.id} to={items.url} className='w-full'>
                            <div className={`w-full rounded-sm py-2.5 px-4 flex items-center gap-3 text-sm
                        ${isActive ? "bg-[#E6EBEF] font-semibold" : "font-normal text-gray-500"}
                            `}><span className='text-xl'>{items.icon}</span> {items.name}</div>
                        </Link>
                    })}
                </div>

                <div className='border-b border-gray-200 flex px-2 py-4 flex-col gap-2 items-start w-full'>
                    {navData.map((items) => {
                        const isActive = location.pathname === items.url;
                        return <Link key={items.id} to={items.url} className='w-full'>
                            <div className={`w-full rounded-sm py-2.5 px-4 flex items-center gap-3 text-sm
                        ${isActive ? "bg-[#E6EBEF] font-semibold" : "font-normal text-gray-500"}
                            `}><span className='text-xl'>{items.icon}</span> {items.name}</div>
                        </Link>
                    })}
                </div>


                <div className='border-b border-gray-200 flex px-2 py-4 flex-col gap-2 items-start w-full'>
                    {navData.map((items) => {
                        const isActive = location.pathname === items.url;
                        return <Link key={items.id} to={items.url} className='w-full'>
                            <div className={`w-full rounded-sm py-2.5 px-4 flex items-center gap-3 text-sm
                        ${isActive ? "bg-[#E6EBEF] font-semibold" : "font-normal text-gray-500"}
                            `}><span className='text-xl'>{items.icon}</span> {items.name}</div>
                        </Link>
                    })}
                </div>

                <div className='flex px-2 pt-4 pb-10 flex-col gap-2 items-start w-full'>
                    {navData.map((items) => {
                        const isActive = location.pathname === items.url;
                        return <Link key={items.id} to={items.url} className='w-full'>
                            <div className={`w-full rounded-sm py-2.5 px-4 flex items-center gap-3 text-sm
                        ${isActive ? "bg-[#E6EBEF] font-semibold" : "font-normal text-gray-500"}
                            `}><span className='text-xl'>{items.icon}</span> {items.name}</div>
                        </Link>
                    })}
                </div>
            </div>
        </>
    )
}

export default Asidebar