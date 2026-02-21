import React, { useContext, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";
import { ToggleContext } from '../../Context/ToggleMenu';

const SidebarCMSDropdown = ({ item }) => {
    const [isOpen, setIsOpen] = useState(false)
    const { setOpenAsideBar } = useContext(ToggleContext)
    const location = useLocation()
    const toggleDropdown = () => setIsOpen(!isOpen)
    return (
        <div className='w-full'>
            <div
                onClick={toggleDropdown}
                className={`flex items-center gap-3 px-6 py-3 cursor-pointer hover:bg-[var(--primary-color)] hover:text-white duration-200 
                    ${location.pathname.startsWith(item.pathName) ? "bg-[var(--primary-color)] text-white" : ""}`}
            >
                <span className='text-xl'>{item.icon}</span>
                <h2 style={{ fontFamily: "'Roboto', sans-serif" }} className='text-sm font-normal'>
                    {item.title}
                </h2>
                <span className='ml-auto'>{isOpen ? <TiArrowSortedDown /> : <TiArrowSortedUp />}</span>
            </div>
            {isOpen && (
                <div className='flex flex-col ml-8 border-l gap-1 border-gray-200'>
                    {item.ManageContent.map(subItem => (
                        <Link
                            onClick={() => setOpenAsideBar(false)}
                            to={subItem.path}
                            key={subItem.id}
                            className={`px-4 py-2 text-sm hover:bg-[var(--primary-color)] hover:text-white rounded transition
                                ${location.pathname === subItem.path ? "bg-[var(--primary-color)] text-white" : ""}`}
                        >
                            {subItem.page}
                        </Link>
                    ))}
                </div>
            )}

        </div>
    )
}

export default SidebarCMSDropdown
