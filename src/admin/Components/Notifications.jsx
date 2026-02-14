import React, { useContext } from 'react'
import { IoIosClose } from 'react-icons/io'
import { MdError } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import { MdCampaign } from "react-icons/md";
import { ToggleContext } from '../../Context/ToggleMenu';

const Notifications = () => {
    const { openNotifacation, setOpenNotifacation } = useContext(ToggleContext)
    const notifications = [
        {
            id: 1,
            title: "Your final report is overdue",
            desc: "Please submit your quarterly report before June 15.",
            time: "Just now",
            icon: <MdError className='text-red-500' />
        },
        {
            id: 2,
            title: "Your Booking campaign is stop!",
            desc: "Please submit your quarterly report before Jun 15.",
            time: "5:45 AM - 25/05/2024",
            icon: <MdCampaign className='text-yellow-500' />
        },
        {
            id: 3,
            title: "Your payment is successfully processed",
            desc: "Check your account wallet. If there is any issue, create support ticket.",
            time: "9:20 PM - 19/06/2024",
            icon: <FaCheckCircle className='text-green-500' />
        },
        {
            id: 4,
            title: "New user registered",
            desc: "A new user has created an account on your platform.",
            time: "11:40 AM - 21/06/2024",
            icon: <FaCheckCircle className='text-blue-500' />
        },
        {
            id: 5,
            title: "Affiliate API disconnected",
            desc: "Agoda API connection lost. Please reconnect to continue tracking.",
            time: "8:10 PM - 22/06/2024",
            icon: <MdError className='text-red-500' />
        },
        {
            id: 6,
            title: "New hotel listing added",
            desc: "A hotel listing has been successfully added by admin.",
            time: "3:30 PM - 23/06/2024",
            icon: <FaCheckCircle className='text-green-500' />
        },
        {
            id: 7,
            title: "Commission received",
            desc: "You earned $120 commission from Booking.com partner.",
            time: "6:45 PM - 24/06/2024",
            icon: <FaCheckCircle className='text-green-500' />
        },
        {
            id: 8,
            title: "High traffic detected",
            desc: "Your website traffic increased by 35% today.",
            time: "9:15 AM - 25/06/2024",
            icon: <MdCampaign className='text-purple-500' />
        },
        {
            id: 9,
            title: "CMS content updated",
            desc: "FAQ section has been updated successfully.",
            time: "1:00 PM - 26/06/2024",
            icon: <FaCheckCircle className='text-blue-500' />
        },
        {
            id: 10,
            title: "Security alert",
            desc: "Multiple failed login attempts detected.",
            time: "2:50 AM - 27/06/2024",
            icon: <MdError className='text-red-500' />
        }
    ]
    return (
        <>
            {openNotifacation && (
                <div
                    className="fixed inset-0 all_Filter bg-black/50 backdrop-blur-sm"
                    onClick={() => setOpenNotifacation(false)}
                ></div>
            )}
            <div className={`max-[500px]:w-full w-96 bg-white border-l border-gray-200 h-screen fixed top-0 right-0 shadow-xl 
              transform transition-all duration-500 ease-in-out all_Filter z-50 ${openNotifacation ? "translate-x-0" : "translate-x-[100%]"}`}>
                <div className='py-3 px-4 border-b flex items-center justify-between border-gray-200'>
                    <h1
                        style={{ fontFamily: "'Roboto', sans-serif" }}
                        className='text-lg font-semibold flex items-center gap-2'
                    >
                        Notifications
                        <span className='text-xs text-white bg-orange-600 py-1 px-2 rounded'>
                            {notifications.length}
                        </span>
                    </h1>

                    <button
                        onClick={() => setOpenNotifacation(false)}
                        className='text-3xl cursor-pointer text-gray-500 hover:text-red-500'
                    >
                        <IoIosClose />
                    </button>
                </div>
                <ul className='flex flex-col divide-y overflow-y-auto h-[calc(100vh-60px)] no_scrollBar'>
                    {
                        notifications.map((item) => (
                            <li
                                key={item.id}
                                className='flex gap-3 p-4 hover:bg-gray-50 border items-start border-gray-200 cursor-pointer duration-200'
                            >
                                <span className='text-xl flex items-center justify-center mt-1'>
                                    {item.icon}
                                </span>

                                <div className='flex flex-col'>
                                    <h3 className='text-sm font-semibold text-gray-800'>
                                        {item.title}
                                    </h3>

                                    <p className='text-xs text-gray-500 mt-1'>
                                        {item.desc}
                                    </p>

                                    <span className='text-xs text-gray-400 mt-2'>
                                        {item.time}
                                    </span>
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </>
    )
}

export default Notifications
