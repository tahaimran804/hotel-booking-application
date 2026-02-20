import React, { useContext, useState } from 'react'
import { IoMenu } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { BsPersonFill } from "react-icons/bs";
import { Link, useLocation } from 'react-router-dom';
import { ToggleContext } from './../Context/ToggleMenu';
import Container from './Container';
import { OpenLoginFromContext } from '../Context/OpenLoginFrom';
import logo from "../assets/MainLogo.png"



const Navbar = () => {
    const { setOpenMenuAsideBar } = useContext(ToggleContext);
    const { setOpenFrom } = useContext(OpenLoginFromContext)
    const location = useLocation()
    const isHotelDetails = location.pathname.includes("hoteldetails");
    return (
        <div className={`sticky bg-(--primary-color) z-50`}>
            <Container>
                <header className='py-4 w-full h-auto'>
                    <nav className='flex items-center justify-between w-full'>
                        <div className='flex items-center gap-1 sm:gap-2'>
                            <Link to={"/"}>
                                <div className='max-[400px]:w-40 max-[400px]:h-8  w-52 h-10 sm:w-60 sm:h-12'>
                                    <img src={logo} alt="Logo" className='w-full h-full' />
                                </div>
                            </Link>
                        </div >
                        <div className='flex items-center gap-1'>
                            <span onClick={() => setOpenMenuAsideBar((prev) => !prev)} className='text-sm sm:text-lg w-8 sm:w-10 h-8 sm:h-10 cursor-pointer rounded-full flex items-center justify-center bg-(--accent-color) shadow-lg text-(--primary-color) duration-300'><IoMenu /></span>
                            <Link to={"/profile/favorite-hotels"}>
                                <span className='text-sm max-[350px]:hidden sm:text-lg w-8 sm:w-10 h-8 sm:h-10 cursor-pointer rounded-full flex items-center justify-center bg-(--accent-color) shadow-lg text-(--primary-color)'><FaHeart /></span>
                            </Link>
                            <span onClick={() => setOpenFrom(true)} className='text-sm  w-8 sm:w-10 h-8 sm:h-10 sm:hidden cursor-pointer rounded-full flex items-center justify-center bg-(--accent-color) shadow-lg text-(--primary-color)'><BsPersonFill /></span>
                            <button onClick={() => setOpenFrom(true)} className='text-sm items-center cursor-pointer text-(--accent-color) sm:flex hidden gap-1 py-2 px-4 rounded-md border border-(--accent-color)'><BsPersonFill /> Sign in</button>
                        </div>
                    </nav>
                </header>
            </Container>
        </div>
    )
}

export default Navbar