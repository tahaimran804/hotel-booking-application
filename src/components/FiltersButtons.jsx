import React, { useState } from 'react'
import { MdOutlineExpandMore } from "react-icons/md";
import { IoMdInformationCircle } from "react-icons/io";
import { Link, useLocation } from 'react-router-dom';
import { GiAirplaneDeparture } from "react-icons/gi";
import { FaLandmark, FaGraduationCap } from "react-icons/fa";
import { MdOutlineFilterAlt, MdOutlineShoppingCart } from "react-icons/md";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";


const FiltersButtons = () => {
    const [activeFilter, setActiveFilter] = useState("Recommended")
    const [showInfo, setShowInfo] = useState(false)
    const [showPriceInfo, setShowPriceInfo] = useState(false)
    const [hidePriceData, setHidePriceData] = useState(false)
    const [newerestLocation, setnewerestLocation] = useState(false)

    const FiltersButtonData = [
        { id: 1, name: "Recommended" },
        { id: 2, name: "Top reviews" },
        { id: 3, name: "Lowest price" },
        { id: 4, name: "Most stars" },
        { id: 5, name: "Nearest first" },
    ]

    const nearbyPlacesData = {
        cityDistance: {
            label: "Distance from city centre",
            value: "5.2 km"
        },

        airport: [
            {
                id: 1,
                name: "Jinnah International Airport",
                city: "Karachi",
                distance: "18 km"
            }
        ],

        landmarks: [
            {
                id: 1,
                name: "Karachi Expo Center",
                distance: "6.8 km"
            },
            {
                id: 2,
                name: "National Museum of Pakistan",
                distance: "5.5 km"
            },
            {
                id: 3,
                name: "Clifton Beach, Karachi",
                distance: "7.1 km"
            },
            {
                id: 4,
                name: "Mehran Handicrafts",
                distance: "4.3 km"
            },
            {
                id: 5,
                name: "Karachi Beach Hut # A-55 Turtle Beach",
                distance: "9 km"
            }
        ],

        entertainment: [
            {
                id: 1,
                name: "PCB Training Club",
                distance: "2.8 km"
            },
            {
                id: 2,
                name: "Mehran Gym",
                distance: "5.2 km"
            },
            {
                id: 3,
                name: "PCSIR Society Play Ground",
                distance: "6 km"
            },
            {
                id: 4,
                name: "Korangi 5 Football Ground",
                distance: "8.5 km"
            },
            {
                id: 5,
                name: "Bahria Town Eye",
                distance: "12.4 km"
            }
        ],

        shopping: [
            {
                id: 1,
                name: "Movenpick Shopping Arcade",
                distance: "7 km"
            },
            {
                id: 2,
                name: "Dolmen Mall Clifton",
                distance: "8.3 km"
            },
            {
                id: 3,
                name: "M..P..R",
                distance: "5.6 km"
            },
            {
                id: 4,
                name: "GBUY.PK",
                distance: "6.1 km"
            },
            {
                id: 5,
                name: "MAMA & KIDS",
                distance: "6.4 km"
            }
        ],

        education: [
            {
                id: 1,
                name: "Aga Khan University",
                distance: "9.6 km"
            },
            {
                id: 2,
                name: "Indus University",
                distance: "11.2 km"
            }
        ]
    };


    return (
        <div className='flex flex-col items-start w-full gap-2'>
            <div className='flex sm:grid relative w-full bg-white overflow-x-auto rounded-md border border-gray-100 items-center gap-2 sm:gap-4 sm:grid-cols-5'>
                {FiltersButtonData.map((items) => {

                    const isActive = activeFilter === items.name

                    return (
                        <button
                            key={items.id}
                            onClick={() => {
                                setActiveFilter(items.name)

                                if (items.name === "Nearest first") {
                                    setnewerestLocation(prev => !prev)
                                    setShowInfo(false)
                                } else {
                                    setnewerestLocation(false)
                                }

                                if (items.name === "Recommended") {
                                    setShowInfo(prev => !prev)
                                } else {
                                    setShowInfo(false)
                                }
                            }}
                            className={`
    py-3 w-full text-sm font-medium
    flex items-center justify-center gap-1
    transition-all duration-200
    // whitespace-nowrap
    cursor-pointer
    px-4
    ${isActive
                                    ? "bg-[var(--primary-color)] rounded-sm text-white shadow-sm"
                                    : "text-gray-600 hover:bg-white/60 hover:text-black"
                                }
`}
                        >

                            {items.name}

                            {items.name === "Recommended" && (
                                <span className="text-lg">
                                    <IoMdInformationCircle />
                                </span>
                            )}

                            {items.name === "Nearest first" && (
                                <span className={`text-lg transition ${newerestLocation ? "rotate-180" : ""}`}>
                                    <MdOutlineExpandMore />
                                </span>
                            )}
                        </button>
                    )
                })}

                {showInfo && (
                    <div className="absolute left-4 top-14 w-96 z-50 
        bg-white border border-gray-200 rounded-xl 
        shadow-xl p-5 animate-fadeIn">

                        <h1 className="text-base font-semibold text-gray-800 mb-2">
                            What is our ‘Recommended’ order?
                        </h1>

                        <p className="text-sm text-gray-600 leading-relaxed">
                            We find prices from all across the web – what providers pay us affects how we sort results.
                        </p>

                        <Link to="/about-us">
                            <span className="text-[var(--primary-color)] text-sm font-medium mt-3 inline-block hover:underline">
                                Learn how RateCompares works
                            </span>
                        </Link>
                    </div>
                )}

                {newerestLocation && (
                    <div className="absolute bg-white right-4 top-10 w-96 h-96 overflow-y-auto
        border border-gray-200 rounded-xl shadow-xl
        py-4 all_Filter z-50 animate-fadeIn">

                        <div className='flex flex-col items-start gap-2'>
                            <h4 className="font-semibold bg-gray-100 py-2 px-4 w-full text-sm">
                                {nearbyPlacesData.cityDistance.label}
                            </h4>
                        </div>
                        <div className='flex flex-col items-start gap-3'>
                            <h4 className="font-semibold bg-gray-100 py-2 px-4 w-full text-sm flex items-center gap-2"><span><GiAirplaneDeparture className='text-xl' /></span> Airport</h4>
                            {nearbyPlacesData.airport.map((item) => (
                                <p key={item.id} className="px-4 cursor-pointer text-gray-600 text-sm">
                                    {item.name}
                                </p>
                            ))}
                        </div>
                        <div className='flex flex-col items-start gap-2'>
                            <h4 className="font-semibold bg-gray-100 py-2 px-4 w-full text-sm flex items-center gap-2"><span><FaLandmark className='text-xl' /></span> Landmarks</h4>
                            {nearbyPlacesData.landmarks.map((item) => (
                                <p key={item.id} className="px-4 cursor-pointer text-gray-600 text-sm">
                                    {item.name}
                                </p>
                            ))}
                        </div>
                        <div className='flex flex-col items-start gap-2'>
                            <h4 className="font-semibold bg-gray-100 py-2 px-4 w-full text-sm flex items-center gap-2"><span><MdOutlineFilterAlt className='text-xl' /></span> Entertainment</h4>
                            {nearbyPlacesData.entertainment.map((item) => (
                                <p key={item.id} className="px-4 cursor-pointer text-gray-600 text-sm">
                                    {item.name}
                                </p>
                            ))}
                        </div>
                        <div className='flex flex-col items-start gap-2'>
                            <h4 className="font-semibold bg-gray-100 py-2 px-4 w-full text-sm flex items-center gap-2"><span><MdOutlineShoppingCart className='text-xl' /></span> Shopping</h4>
                            {nearbyPlacesData.shopping.map((item) => (
                                <p key={item.id} className="px-4 cursor-pointer text-gray-600 text-sm">
                                    {item.name}
                                </p>
                            ))}
                        </div>
                        <div className='flex flex-col items-start gap-2'>
                            <h4 className="font-semibold bg-gray-100 py-2 px-4 w-full text-sm flex items-center gap-2"><span><FaGraduationCap className='text-xl' /></span> Shopping</h4>
                            {nearbyPlacesData.education.map((item) => (
                                <p key={item.id} className="px-4 cursor-pointer text-gray-600 text-sm">
                                    {item.name}
                                </p>
                            ))}
                        </div>
                    </div>
                )}
            </div>




            {/* <div className='w-full bg-white flex items-center gap-2 rounded-md border py-3 border-gray-100 px-5'>
                <p className='text-sm text-black'>We find prices from all across the web – what providers pay us affects how we sort results.</p>
                <Link to={"/about-us"}>
                    <span className='text-[var(--primary-color)] text-sm capitalize'>Learn how RateCompares works</span>
                </Link>
            </div> */}



            {/* <div className='w-full bg-white flex flex-col gap-5 items-center rounded-md border py-3 border-gray-200 px-5'>
                <div onClick={() => setHidePriceData((prev) => !prev)} className='flex cursor-pointer items-center gap-5 justify-between w-full'>
                    <h1 style={{
                        fontFamily: "'Roboto', sans-serif"
                    }} className='text-xl font-bold'>Prices are <span className='text-[]'>lower</span> than usual</h1>
                    <button className='text-sm cursor-pointer font-semibold flex items-center gap-1'>{hidePriceData ? "Hide price data" : " Show price data"} <span> {hidePriceData ? <IoIosArrowUp /> : <IoIosArrowDown />}  </span></button>
                </div>
                {hidePriceData && (
                    <div style={{
                        fontFamily: "'Roboto', sans-serif"
                    }} className='flex items-center justify-between w-full relative'>
                        <p className='text-sm w-120 inline-block items-end gap-3 font-normal'>The average nightly price in Karachi for your dates is Rs 9,083. In February, Karachi hotels usually range from Rs 10,238 to Rs 15,167 a night.<span onClick={() => setShowPriceInfo((prev) => !prev)} className='inline-block text-lg  cursor-pointer ml-1`'><IoMdInformationCircle /></span></p>
                        {showPriceInfo && (
                            <div className='w-92 overflow-y-scroll no_scrollBar h-32 py-4 px-4 rounded-md bg-white flex flex-col items-start gap-2 border top-10 left-50 border-gray-100 absolute'>
                                <p className='text-sm w-full font-normal'>Insights come from tracking prices over the past 12 months for trips in the same month with the same destination, number of guests and rooms.</p>
                                <button onClick={() => setShowPriceInfo(false)} className='cursor-pointer border-b border-gray-500'>Close</button>
                            </div>
                        )}

                        <div className='grid grid-cols-12 w-56 items-center gap-0.5'>
                            <span className='bg-[#0c838a] col-span-3 w-full h-2.5 rounded-l-2xl relative'>
                                <span className='absolute -top-8 -left-2 bg-[#0c838a] px-2 py-1 rounded-sm text-white inline-block text-xs whitespace-nowrap font-bold'>Rs 9,083</span>
                                <span className='absolute top-4 left-0 inline-block text-xs whitespace-nowrap'>Rs 10,238</span>
                            </span>
                            <span className='bg-[#05203C] w-full col-span-6 h-2.5'></span>
                            <span className='bg-[#E70866] col-span-3 w-full h-2.5 relative rounded-r-2xl'>
                                <span className='absolute top-4 right-0 inline-block text-xs whitespace-nowrap'>Rs 15,167</span>
                            </span>
                        </div>
                    </div>
                )}
            </div> */}
        </div>
    )
}

export default FiltersButtons