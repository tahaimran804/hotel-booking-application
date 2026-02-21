import React, { useContext, useState } from 'react'
import { MdDashboard, MdAnalytics, MdSecurity } from "react-icons/md";
import { FaUsers, FaHotel, FaBlog, FaPlug } from "react-icons/fa";
import { Link, useLocation } from 'react-router-dom';
import { ToggleContext } from '../../Context/ToggleMenu';
import { IoClose } from 'react-icons/io5';
import SidebarCMSDropdown from './SidebarCMSDropdown';
import { FaMoneyBillTrendUp } from 'react-icons/fa6';

const AsideBar = () => {
    const Location = useLocation();
    const { openAsideBar, setOpenAsideBar } = useContext(ToggleContext);

    const menuItems = [
        { id: 1, title: "Dashboard", pathName: "/admin-dashboard", icon: <MdDashboard /> },
        { id: 2, title: "Manage All Users", pathName: "/manage-all-users", icon: <FaUsers /> },
        { id: 3, title: "Hotel Listings", pathName: "/manage-all-hotel-listings", icon: <FaHotel /> },
        { id: 4, title: "Affiliate APIs", pathName: "#", icon: <FaPlug /> },
        { id: 5, title: "Tracking IDs", pathName: "/manage-tracking-ids", icon: <FaMoneyBillTrendUp /> },
        { id: 6, title: "Analytics", pathName: "/analytics-dashboard", icon: <MdAnalytics /> },
        {
            id: 7,
            title: "CMS Content",
            pathName: "#",
            ManageContent: [
                { id: 1, page: "Manage About Content", path: "/manage-about-content", content: "This is the About page content..." },
                { id: 2, page: "Manage FAQ Content", path: "/manage-faq-content", content: "Q1: How to book?\nA1: Use the search feature..." },
                { id: 3, page: "Manage Blog Content", path: "/manage-blog-content", content: "This is the blog content..." },
                { id: 4, page: "Manage Privacy Content Policy", path: "/manage-privacy-content-policy", content: "Your privacy is important to us..." },
                { id: 5, page: "Manage Terms Content & Conditions", path: "/manage-terms-content-conditions", content: "These are the terms & conditions..." }
            ],
            icon: <FaBlog />
        },
        { id: 8, title: "Security Logs", pathName: "#", icon: <MdSecurity /> }
    ];

    return (
        <div className={`h-full w-full pt-10 lg:mt-0 mt-5 flex flex-col gap-2 bg-white border-r border-gray-200
            ${openAsideBar ? "translate-x-0" : "-translate-x-full"} 
            lg:translate-x-0 fixed lg:static top-0 left-0 z-30 transition-transform duration-300`}>

            <span className='lg:hidden inline absolute top-0 cursor-pointer text-2xl left-2'>
                <IoClose onClick={() => setOpenAsideBar(false)} />
            </span>

            {menuItems.map(item => (
                <div key={item.id}>
                    {item.ManageContent ? (
                        <SidebarCMSDropdown item={item} />
                    ) : (
                        <Link onClick={() => setOpenAsideBar(false)} to={item.pathName}>
                            <div
                                className={`flex items-center gap-3 px-6 py-3 cursor-pointer hover:bg-[var(--primary-color)] hover:text-white duration-200 
                                    ${Location.pathname === item.pathName ? "bg-[var(--primary-color)]  text-white " : ""}`}
                            >
                                <span className='text-xl'>{item.icon}</span>
                                <h2 style={{ fontFamily: "'Roboto', sans-serif" }} className='text-sm font-normal'>
                                    {item.title}
                                </h2>
                            </div>
                        </Link>
                    )}
                </div>
            ))}
        </div>
    )
}

export default AsideBar
