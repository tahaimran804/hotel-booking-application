import React, { useContext } from 'react';
import { IoNotificationsOutline } from 'react-icons/io5';
import AdminProfile from "../../assets/avatar-3.png"
import { FaRegBell } from 'react-icons/fa';
import { IoIosSearch } from 'react-icons/io';
import { ToggleContext } from '../../Context/ToggleMenu';
import { MdMenu } from 'react-icons/md';

const Navbar = () => {
    const { setOpenNotifacation, openAsideBar, setOpenAsideBar } = useContext(ToggleContext)
    return (
        <div className="grid grid-cols-12 items-center sticky top-0 gap-4 h-16 px-6 z-40 bg-white border-b border-gray-200">
            <div className="col-span-3 border-r border-gray-100 h-full flex items-center gap-1">
                <span onClick={() => setOpenAsideBar(!openAsideBar)} className='text-2xl cursor-pointer lg:hidden inline'><MdMenu /></span>
                <span className="bg-orange-600 text-white font-bold px-3 py-1 rounded text-lg">K</span>
                <span className="bg-orange-600 text-white font-bold px-3 py-1 rounded text-lg hidden lg:inline">A</span>
                <span className="bg-orange-600 text-white font-bold px-3 py-1 rounded text-lg hidden lg:inline">Y</span>
                <span className="bg-orange-600 text-white font-bold px-3 py-1 rounded text-lg hidden lg:inline">A</span>
                <span className="bg-orange-600 text-white font-bold px-3 py-1 rounded text-lg hidden lg:inline">K</span>
            </div>
            <div className='w-full sm:w-3/5 col-span-6'>
                <div className='py-2 rounded-md px-4 border border-gray-100 flex items-center gap-2'>
                    <input type="text" placeholder='Search' className='h-full outline-0 border-0 text-sm text-gray-600 w-full' />
                    <span className='text-lg text-gray-600'><IoIosSearch /></span>
                </div>
            </div>
            <div className="col-span-3 flex items-center justify-end gap-4">
                <button onClick={() => setOpenNotifacation(true)} className="relative cursor-pointer text-gray-600 hover:text-gray-900">
                    <FaRegBell size={24} />
                    <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
                </button>
                <div className="flex items-center gap-2">
                    <img
                        src={AdminProfile}
                        alt="Profile"
                        className="w-10 h-10 rounded-full cursor-pointer border border-gray-200"
                    />
                    <span className="text-gray-700 font-medium hidden sm:inline">Admin</span>
                </div>
            </div>
        </div>
    )
}

export default Navbar;
