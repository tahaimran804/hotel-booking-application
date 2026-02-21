import React, { useContext } from 'react';
import { IoNotificationsOutline } from 'react-icons/io5';
import AdminProfile from "../../assets/avatar-3.png"
import { FaRegBell } from 'react-icons/fa';
import { IoIosSearch } from 'react-icons/io';
import { ToggleContext } from '../../Context/ToggleMenu';
import { MdMenu } from 'react-icons/md';
import { Link } from 'react-router-dom';
import logo from "../../assets/MainLogo.png"

const Navbar = () => {
    const { setOpenNotifacation, openAsideBar, setOpenAsideBar } = useContext(ToggleContext)
    return (
        <div className="grid grid-cols-12 items-center sticky top-0 gap-4 h-16 px-6 z-40 bg-[var(--primary-color)] border-b border-gray-200">
            <Link to={"/admin-dashboard"} className='col-span-3 flex items-center gap-2'>
                <div className='max-[400px]:w-40 max-[400px]:h-8  w-52 h-10 sm:w-60 sm:h-12'>
                    <img src={logo} alt="Logo" className='w-full h-full' />
                </div>
            </Link>
            <div className='w-full sm:w-3/5 col-span-6'>
                <div className='py-2 rounded-md px-4 border border-gray-100 flex items-center gap-2'>
                    <input type="text" placeholder='Search' className='h-full outline-0 border-0 text-sm text-white placeholder:text-white w-full' />
                    <span className='text-lg text-white'><IoIosSearch /></span>
                </div>
            </div>
            <div className="col-span-3 flex items-center justify-end gap-4">
                <button onClick={() => setOpenNotifacation(true)} className="relative cursor-pointer text-white hover:text-gray-200 transition">
                    <FaRegBell size={24} />
                    <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
                </button>
                <div className="flex items-center gap-2">
                    <Link to={"/admin-profile"}>
                        <img
                            src={AdminProfile}
                            alt="Profile"
                            className="w-10 h-10 rounded-full cursor-pointer border border-gray-200"
                        />
                    </Link>
                    <span className="text-white font-medium hidden sm:inline">Admin</span>
                </div>
            </div>
        </div>
    )
}

export default Navbar;
