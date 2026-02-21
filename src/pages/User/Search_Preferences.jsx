import React, { useEffect, useState } from "react";
import { IoArrowForward, IoBedOutline, IoSearchOutline } from "react-icons/io5";
import { MdArrowRight } from "react-icons/md";
import Carousel from "react-multi-carousel";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "react-multi-carousel/lib/styles.css";
import { Link, useNavigate } from "react-router-dom";



const Search_Preferences = () => {
    const [loading, setLoading] = useState(true);
    const hotelDeals = [
        {
            id: 1,
            location: "London, England, United Kingdom",
            checkIn: "Tue 5/5",
            checkOut: "Wed 5/6",
            rooms: "3 rooms, 3 guests",
            price: 17,
            oldPrice: 20
        },
        {
            id: 2,
            location: "Dubai, United Arab Emirates",
            checkIn: "Mon 6/10",
            checkOut: "Tue 6/11",
            rooms: "2 rooms, 4 guests",
            price: 45,
            oldPrice: 60
        }
    ];

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);
    return (
        <div className="lg:py-10 flex flex-col items-start gap-6 w-full">
            <h1
                className="text-2xl font-bold text-[var(--text-color)]"
                style={{ fontFamily: "'Roboto', sans-serif" }}
            >
                Search Preferences
            </h1>


            <div className='w-full grid grid-cols-1 sm:grid-cols-2 items-start gap-2'>
                {(loading ? Array(hotelDeals.length).fill({}) : hotelDeals).map((item, index) => (
                    <div
                        key={index}
                        className="h-[200px] cursor-pointer 
                            border border-gray-200
                            bg-[var(--accent-color)] 
                            rounded-xl flex flex-col gap-4 py-4 px-4"
                    >

                        <div className="flex items-center gap-2">
                            <span className="text-lg bg-[var(--primary-color)] text-[var(--accent-color)] p-2 rounded-full">
                                <IoBedOutline />
                            </span>

                            <p
                                style={{ fontFamily: "'Roboto', sans-serif" }}
                                className="text-sm font-semibold line-clamp-1 w-full text-[var(--text-color)]"
                            >
                                {loading ? <Skeleton width={180} /> : item.location}
                            </p>
                        </div>

                        <div className="flex flex-col gap-1">
                            <li
                                style={{ fontFamily: "'Roboto', sans-serif" }}
                                className="flex text-sm font-semibold items-center gap-2 text-[var(--text-color)]"
                            >
                                {loading ? (
                                    <Skeleton width={150} />
                                ) : (
                                    <>
                                        {item.checkIn} <MdArrowRight /> {item.checkOut}
                                    </>
                                )}
                            </li>

                            <li
                                style={{ fontFamily: "'Roboto', sans-serif" }}
                                className="flex text-sm font-semibold text-[var(--text-color)]"
                            >
                                {loading ? <Skeleton width={120} /> : item.rooms}
                            </li>
                        </div>

                        <div className="flex justify-end w-full items-center mt-auto">
                            <button
                                style={{ fontFamily: "'Roboto', sans-serif" }}
                                className="h-10 w-10 rounded-full 
                                    bg-[var(--primary-color)] 
                                    text-[var(--accent-color)] 
                                    text-lg flex items-center justify-center 
                                    transition duration-300 hover:opacity-90"
                            >
                                <IoSearchOutline />
                            </button>
                        </div>

                    </div>
                ))}
            </div>


        </div>
    )
}

export default Search_Preferences