import React, { useContext, useState } from 'react'
import { IoMenu } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { BsPersonFill } from "react-icons/bs";
import { Link, useLocation } from 'react-router-dom';
import { ToggleContext } from './../Context/ToggleMenu';
import Container from './Container';
import { OpenLoginFromContext } from '../Context/OpenLoginFrom';

const Navbar = () => {
    const { setOpenMenuAsideBar } = useContext(ToggleContext);
    const { setOpenFrom } = useContext(OpenLoginFromContext)
    const location = useLocation()
    const isHotelDetails = location.pathname.includes("hoteldetails");
    return (
        <div className={`border-b ${!isHotelDetails ? "sticky top-0" : ""} bg-white z-50 border-gray-100`}>
            <Container>
                <header className='py-4 w-full h-auto'>
                    <nav className='flex items-center justify-between w-full'>
                        <div className='flex items-center gap-1 sm:gap-2'>
                            <span onClick={() => setOpenMenuAsideBar((prev) => !prev)} className='text-2xl hover:bg-[#E6EBEF] duration-300 cursor-pointer px-2 py-2 rounded-md'><IoMenu /></span>
                            <Link to={"/"}>
                                <div className='flex items-center gap-1'>
                                    <span style={{ fontFamily: "'Roboto', sans-serif" }} className='bg-orange-600 px-2 font-semibold text-white text-lg'>K</span>
                                    <span style={{ fontFamily: "'Roboto', sans-serif" }} className='bg-orange-600 px-2 font-semibold max-[500px]:hidden text-white text-lg'>A</span>
                                    <span style={{ fontFamily: "'Roboto', sans-serif" }} className='bg-orange-600 px-2 font-semibold max-[500px]:hidden text-white text-lg'>Y</span>
                                    <span style={{ fontFamily: "'Roboto', sans-serif" }} className='bg-orange-600 px-2 font-semibold max-[500px]:hidden text-white text-lg'>A</span>
                                    <span style={{
                                        fontFamily: "'Roboto', sans-serif"
                                    }} className='bg-orange-600 px-2 font-semibold max-[500px]:hidden text-white text-lg' > K</span >
                                </div >
                            </Link>
                        </div >
                        <div></div>
                        <div className='flex items-center gap-1'>
                            <Link to={"/favorite-hotels"}>
                                <span className='text-sm sm:text-lg w-10 sm:w-12 h-10 sm:h-12 cursor-pointer rounded-full flex items-center justify-center bg-white shadow-lg text-[#192024]'><FaHeart /></span>
                            </Link>
                            <span onClick={() => setOpenFrom(true)} className='text-sm cursor-pointer sm:text-lg w-10 sm:w-12 h-10 sm:h-12 sm:hidden flex rounded-full items-center justify-center bg-white shadow-lg text-[#192024]'><BsPersonFill /></span>
                            <button onClick={() => setOpenFrom(true)} className='text-sm sm:text-lg items-center cursor-pointer sm:flex hidden gap-1 py-2 px-4 rounded-md border border-[#192024]'><BsPersonFill /> Sign in</button>
                        </div>
                    </nav >
                </header>
            </Container>
        </div>
    )
}

export default Navbar