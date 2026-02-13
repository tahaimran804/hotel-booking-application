import React from 'react'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import { Link } from "react-router-dom"
const HeadingComp = ({ PageHeading }) => {
    return (
        <div className='flex flex-col items-start gap-1'>
            <h1 style={{ fontFamily: "'Roboto', sans-serif" }} className='text-2xl font-bold text-black'>{PageHeading}</h1>
            <div className='flex items-center'>
                <Link to={"/admin-dashboard"}>
                    <p className='text-sm cursor-pointer font-normal text-gray-500'>Home</p>
                </Link>
                <span className='text-lg font-normal text-gray-500'><MdOutlineKeyboardArrowRight /></span>
                <p className='text-sm font-normal text-gray-500'>{PageHeading}</p>
            </div>
        </div>
    )
}

export default HeadingComp