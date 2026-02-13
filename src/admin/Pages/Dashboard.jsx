import React from 'react'
import HeadingComp from '../Components/HeadingComp'
import { BsPersonWorkspace } from 'react-icons/bs'
import { FaArrowTrendUp } from 'react-icons/fa6'
import { LuBadgeDollarSign, LuCircleDollarSign, LuShoppingBag } from 'react-icons/lu'
import VisitorChart from '../Components/VisitorChart'
import BookingsChart from '../Components/BookingsChart'
import RevenueCharts from '../Components/RevenueCharts'
import RoomsChart from '../Components/RoomsChart'
import OverviewChart from '../Components/OverviewChart'
import Bookings from '../Components/Bookings'

const Dashboard = () => {
    const DashboardStats = [
        {
            id: 1,
            name: "Visitor",
            value: "698k",
            percent: "25%",
            lastMonth: "Last Month",
            icon: <BsPersonWorkspace />,
            bgColor: "bg-[#dfe5fa]"
        },
        {
            id: 2,
            name: "Bookings",
            value: "10.63k",
            percent: "0.5%",
            lastMonth: "Last Month",
            icon: <LuShoppingBag />,
            bgColor: "bg-[#fde1f5]"
        },
        {
            id: 3,
            name: "Revenue",
            value: "$85420",
            percent: "2.1%",
            lastMonth: "Last Month",
            icon: <LuCircleDollarSign />,
            bgColor: "bg-[#fde1f5]"
        },
        {
            id: 4,
            name: "Rooms",
            value: "45/365",
            percent: "9%",
            lastMonth: "Last Month",
            icon: <LuBadgeDollarSign />,
            bgColor: "bg-[#d8f6d8]"
        }
    ]

    return (
        <div className='flex flex-col items-start gap-5'>
            <HeadingComp PageHeading="Dashboard" />
            <div className='grid  sm:grid-cols-2 xl:grid-cols-4 items-start gap-2 w-full'>
                {DashboardStats.map((elemItem) => {
                    return (
                        <div key={elemItem.id} className={`w-full h-60 overflow-scroll no_scrollBar flex border border-gray-200 items-start flex-col gap-2  ${elemItem.bgColor} rounded-md`}>
                            <div className='w-full flex items-start gap-2 justify-between px-2 pt-4'>
                                <div className='flex flex-col items-start'>
                                    <p style={{ fontFamily: "'Roboto', sans-serif" }} className='text-lg font-normal text-gray-500'>{elemItem.name}</p>
                                    <h1 style={{ fontFamily: "'Roboto', sans-serif" }} className='text-xl font-bold text-black'>{elemItem.value}</h1>
                                    <p style={{ fontFamily: "'Roboto', sans-serif" }} className='flex items-center gap-1 text-sm font-normal text-gray-500'><span className='text-[#2BBB93] flex items-center gap-1'><FaArrowTrendUp /> {elemItem.percent}</span> {elemItem.lastMonth}</p>
                                </div>
                                <span className='py-3 px-3 rounded-sm text-lg bg-gray-100'>{elemItem.icon}</span>
                            </div>
                            <div className='w-full'>
                                {elemItem.name === "Visitor" && <VisitorChart />}
                                {elemItem.name === "Bookings" && <BookingsChart />}
                                {elemItem.name === "Revenue" && <RevenueCharts />}
                                {elemItem.name === "Rooms" && <RoomsChart />}
                            </div>
                        </div>
                    )
                })}
            </div>
            <OverviewChart />
            <Bookings />
        </div>
    )
}
export default Dashboard