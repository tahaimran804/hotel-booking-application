import React, { useState } from 'react'
import RoomImage1 from "../../assets/RoomImage1.jpg";
import RoomImage2 from "../../assets/RoomImage2.jpg";
import RoomImage3 from "../../assets/RoomImage3.jpg";
import RoomImage4 from "../../assets/RoomImage4.jpg";
import RoomImage5 from "../../assets/RoomImage5.jpg";

import HotelImage1 from "../../assets/HotelImage.jpg";
import HotelImage2 from "../../assets/HotelImage1.jpg";
import HotelImage3 from "../../assets/HotelImage2.jpg";
import HotelImage4 from "../../assets/HotelImage3.jpg";
import HotelImage5 from "../../assets/HotelImage4.jpg";


import RoomImage6 from "../../assets/RoomImage6.jpg";
import MasterCard from "../../assets/masterCard.svg";
import visaCard from "../../assets/visaCard.svg";
import BookingPartner from "../../assets/BookingPartner.svg";
import Container from '../../components/Container';
import RatingStar from '../../components/RatingStar';
import { IoLocation } from "react-icons/io5";
import { FaRegClock, FaRegHeart } from "react-icons/fa";
import { MdIosShare } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { IoShareSocialOutline } from "react-icons/io5";
import { IoCopyOutline } from "react-icons/io5";
import { IoMdArrowDropdown, IoMdInformationCircle } from 'react-icons/io';
import { useEffect, useRef } from "react";
import { GrLocationPin } from "react-icons/gr";
import Amenities from '../../components/Amenities';
import ScrollToTop from '../../components/ScrollToTop';
import CheckIn from '../../components/CheckIn';
import SearchRoomAndRates from '../../components/SearchRoomAndRate';


const HotelDetails = () => {
    const [showShare, setShowShare] = useState(false)
    const [showinfo, setShowinfo] = useState(false)
    const [activeSection, setActiveSection] = useState("");
    const [isFixed, setIsFixed] = useState(false);
    const [cashToggle, setCashToggle] = useState(false);
    const sectionRef = useRef(null);


    useEffect(() => {
        const handleScroll = () => {
            if (!sectionRef.current) return;
            const sectionTop = sectionRef.current.offsetTop;
            if (window.scrollY > sectionTop) {
                setIsFixed(true);
            } else {
                setIsFixed(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);

    }, []);

    useEffect(() => {
        const sections = document.querySelectorAll(
            "#overView, #Deals, #Location, #Details, #facilities"
        );

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            {
                rootMargin: "-120px 0px -50% 0px",
                threshold: 0
            }
        );
        sections.forEach((sec) => observer.observe(sec));
        return () => observer.disconnect();
    }, [])


    const images = [
        RoomImage1,
        RoomImage2,
        RoomImage3,
        RoomImage4,
        RoomImage5,
        RoomImage6
    ];
    const HotelImage = [
        HotelImage1,
        HotelImage2,
        HotelImage3,
        HotelImage4,
        HotelImage5,
    ];




    return (
        <>
            <ScrollToTop />
            <section
                id="overView"
                className="grid grid-cols-4 md:grid-cols-2 md:grid-rows-3 gap-2 h-full md:h-[400px]"
            >
                <div className="col-span-4 md:col-span-1 md:row-span-2">
                    <img
                        src={images[0]}
                        alt="hotel"
                        className="w-full h-full object-cover"
                    />
                </div>

                <div>
                    <img
                        src={images[1]}
                        alt="hotel"
                        className="w-full h-full object-cover"
                    />
                </div>

                <div>
                    <img
                        src={images[2]}
                        alt="hotel"
                        className="w-full h-full object-cover"
                    />
                </div>

                <div>
                    <img
                        src={images[3]}
                        alt="hotel"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div>
                    <img
                        src={images[4]}
                        alt="hotel"
                        className="w-full h-full object-cover"
                    />
                </div>
            </section>

            <Container className='py-10'>
                <div className='flex flex-col w-full items-start gap-4'>
                    <div className='flex flex-col-reverse sm:flex-row w-full items-start sm:items-center justify-start sm:justify-between gap-2'>
                        <div className='flex  w-full flex-col gap-2 items-start'>
                            <div className='flex items-start flex-wrap md:items-center gap-2'>
                                <h2 className='text-xl sm:text-2xl md:text-3xl lg:text-5xl font-extrabold' style={{
                                    fontFamily: "'Roboto', sans-serif"
                                }}>Mövenpick Hotel Karachi</h2>
                                <RatingStar item={2} />
                            </div>
                            <p style={{
                                fontFamily: "'Roboto', sans-serif"
                            }} className='flex cursor-pointer items-start gap-1 hover:underline  text-sm font-normal'><span className='text-xl text-black '><IoLocation /></span> Near R-11 Row-4, Block-D, Block 10-A Block 10 A National Cement Employees CHS, Karachi, 75300, Pakistan</p>
                        </div>
                        <div className='flex sm:w-auto w-full items-center gap-2 relative'>
                            <span onClick={() => setShowShare((prev) => !prev)} className='text-2xl font-bold text-black cursor-pointer'><MdIosShare /></span>
                            {showShare && (
                                <div className='h-auto w-full sm:w-100 absolute top-7 z-50 left-0 sm:right-0 rounded-md bg-white shadow-2xl border border-gray-100'>
                                    <div className="flex px-4 items-center justify-between border-b border-gray-100 py-4">
                                        <div className="flex items-center gap-2 font-semibold">
                                            <IoShareSocialOutline className="text-lg" />
                                            <span>Share</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2 mt-2 cursor-pointer hover:bg-gray-50 px-4 py-2 rounded-md transition">
                                        <div className="bg-blue-600 text-white w-8 flex items-center justify-center h-8 rounded-full">
                                            <FaFacebookF />
                                        </div>
                                        <div>
                                            <p className="font-medium">Share on Facebook</p>
                                            <p className="text-sm text-gray-500">
                                                Share this hotel with friends
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3 mt-2 cursor-pointer hover:bg-gray-50 px-4 py-2 rounded-md transition">
                                        <div className="bg-gray-200 p-2 rounded-full">
                                            <IoCopyOutline />
                                        </div>
                                        <p className="font-medium">Copy link</p>
                                    </div>
                                    {/* Close Button */}
                                    <button onClick={() => setShowShare(false)} className="w-full mt-4 border-t cursor-pointer border-gray-100 rounded-md py-2 font-medium hover:bg-gray-100 transition">
                                        Close
                                    </button>
                                </div>
                            )}
                            <span className='text-2xl font-bold text-black cursor-pointer'><FaRegHeart /></span>
                        </div>
                    </div>


                    <div
                        ref={sectionRef}
                        className={`flex flex-col-reverse md:flex-row h-auto md:h-20 w-full items-end border-b border-gray-200 justify-between gap-0 md:gap-2 z-40
      ${isFixed ? "fixed top-0 left-0 px-4 bg-white" : "bg-white "}`}
                    >

                        <div className='flex overflow-x-scroll no_scrollBar items-start md:w-auto justify-start w-full gap-6'>
                            <a href="#overView">
                                <button className={`text-sm cursor-pointer py-4 font-semibold hover:text-orange-600 
                                     ${activeSection === "overView" ? "text-orange-600" : "text-black"}
                                    `}>Overview</button>
                            </a>
                            <a href="#Deals">
                                <button className={`text-sm cursor-pointer py-4 font-semibold hover:text-orange-600
                                     ${activeSection === "Deals" ? "text-orange-600" : "text-black"}
                                    `}>Deals</button>
                            </a>
                            <a href="#Location">
                                <button className={`text-sm cursor-pointer py-4 font-semibold hover:text-orange-600
                                     ${activeSection === "Location" ? "text-orange-600" : "text-black"}
                                    `}>Location</button>
                            </a>
                            <a href="#Details">
                                <button className={`text-sm cursor-pointer py-4 font-semibold hover:text-orange-600
                                     ${activeSection === "Details" ? "text-orange-600" : "text-black"}
                                    `}>Details</button>
                            </a>
                            <a href="#facilities">
                                <button className={`text-sm cursor-pointer py-4 font-semibold hover:text-orange-600 
                                     ${activeSection === "facilities" ? "text-orange-600" : "text-black"}
                                    `}>Amenities</button>
                            </a>
                        </div>


                        <div className='flex py-2 items-center gap-2'>
                            <h2 className='text-sm md:text-2xl font-bold' style={{
                                fontFamily: "'Roboto', sans-serif"
                            }}>Rs 2,987</h2>
                            <button className='py-2 px-4 md:px-5 rounded-md bg-orange-600 text-white'>View deals</button>
                        </div>
                    </div>

                </div>

                <div className='flex flex-col w-full items-start gap-4 py-10'>
                    <div className='flex flex-col md:flex-row justify-between w-full items-start md:items-end gap-2'>
                        <div className='flex flex-col w-full gap-2 items-start'>
                            <h2 className='text-2xl lg:text-4xl font-normal' style={{
                                fontFamily: "'Roboto', sans-serif"
                            }}>Compare rooms and prices</h2>
                            <p style={{
                                fontFamily: "'Roboto', sans-serif"
                            }} className='flex cursor-pointer items-start gap-1 hover:underline  text-sm font-normal'>We compare 100s of sites to get you the best deal</p>
                        </div>
                        <div>
                            <img src={BookingPartner} alt="Booking Partner Logos" />
                        </div>
                    </div>

                    <div className='w-full bg-white flex flex-col gap-2 md:gap-5 items-center rounded-md border py-6 border-gray-300 px-5'>
                        <div className='flex cursor-pointer items-center gap-2 md:gap-5 justify-between w-full'>
                            <h1 style={{
                                fontFamily: "'Roboto', sans-serif"
                            }} className='text-lg md:text-xl font-bold'>You’ve found a gem! Prices for your hotel are currently <span className='text-orange-600'>lower</span> than usual</h1>
                        </div>
                        <div style={{
                            fontFamily: "'Roboto', sans-serif"
                        }} className='flex items-start flex-col gap-10 md:flex-row md:items-center justify-between w-full relative'>
                            <p className='text-sm w-full md:w-140 inline-block items-center font-normal'>The lowest price for Karachi Family Guest House on your dates is Rs 2,987 a night. Usually rooms for this hotel in February range from Rs 3,045 to Rs 3,045 a night<span onClick={() => setShowinfo((prev) => !prev)} className='inline-block text-lg  cursor-pointer ml-2`'><IoMdInformationCircle /></span></p>

                            {showinfo && (
                                <div className='w-92 overflow-y-scroll no_scrollBar h-32 py-4 px-4 rounded-md bg-white flex flex-col items-start gap-2 border top-10 left-50 border-gray-100 absolute'>
                                    <p className='text-sm w-full font-normal'>We’ve tracked prices over a 12-month period for similar trips (same month, hotel, number of guests and rooms).</p>
                                    <button onClick={() => setShowinfo((prev) => !prev)} className='cursor-pointer border-b text-sm border-gray-500'>Close</button>
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
                    </div>


                    <section id='Deals' className='w-full h-full py-4 px-4 rounded-md bg-gray-100 flex flex-col gap-6'>
                        <SearchRoomAndRates />
                        {/* Filter Section */}
                        <div className='flex flex-col gap-3'>
                            <h2 className='text-lg text-black font-semibold'>Filter by</h2>
                            <div className='flex flex-row items-start flex-wrap gap-2 text-sm'>
                                {[
                                    "Free cancellation",
                                    "Breakfast included",
                                    "Half board (breakfast & dinner)",
                                    "Double room",
                                    "Twin room",
                                    "All taxes and fees included"
                                ].map((filter, index) => (
                                    <label key={index} className='flex items-center gap-2 cursor-pointer'>
                                        <input type="checkbox" className='accent-blue-600' />
                                        {filter}
                                    </label>
                                ))}

                            </div>
                        </div>
                        {/* Price Cards */}
                        <div className='flex flex-col items-start gap-2 w-full'>
                            <p className='text-lg text-black'>All taxes and fees included</p>
                            <div className='flex flex-col gap-2 w-full'>
                                {/* Trip.com */}
                                <div className='bg-white rounded-lg p-4 shadow-sm border h-48 overflow-auto no_scrollBar border-gray-200 flex justify-between items-start'>
                                    <div className='flex flex-col gap-1 h-full justify-between'>
                                        <div className='flex items-start flex-col'>
                                            <p className='text-sm text-gray-500'>Our cheapest price</p>
                                            <p className='text-blue-600 font-semibold'>on Trip.com</p>
                                        </div>
                                        <div className='flex flex-col items-start gap-2'>
                                            <p className='text-sm font-semibold'>Twin room</p>
                                            <ul className='flex pl-4 flex-col items-start'>
                                                <li className='text-xs list-disc text-gray-500'>Non refundable</li>
                                                <li className='text-xs list-disc text-gray-500'>Meals not included</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className='flex items-end flex-col justify-between h-full'>
                                        <div className='flex flex-col items-end gap-1'>
                                            <h2 className='text-xl font-bold'>Rs 78,190</h2>
                                            <p className='text-sm text-gray-500'>a night</p>
                                        </div>

                                        <button className='py-2 px-5 bg-orange-600 text-white rounded-md'>Go to site</button>
                                    </div>

                                </div>


                                {/* Agoda */}
                                <div className='bg-white rounded-lg p-4 shadow-sm h-48 overflow-scroll no_scrollBar border border-gray-200 flex justify-between items-start'>
                                    <div className='flex flex-col gap-1 h-full justify-between items-start'>
                                        <p className='text-blue-600 font-semibold'>on Agoda</p>
                                        <div className='flex flex-col items-start gap-2'>
                                            <p className='text-sm font-semibold'>Twin room</p>
                                            <ul className='flex flex-col items-start pl-4'>
                                                <li className='text-xs list-disc text-gray-500'>Non refundable</li>
                                                <li className='text-xs list-disc text-gray-500'>Breakfast included</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className='flex flex-col gap-4 items-end justify-between h-full'>
                                        <div className='flex flex-col items-end gap-1'>
                                            <span className='bg-green-100 text-green-700 text-xs px-2 py-1 rounded'>
                                                52% off
                                            </span>
                                            <p className='line-through text-gray-400 text-sm'>Rs 186,866</p>
                                            <h2 className='text-xl font-bold'>Rs 89,918</h2>
                                            <p className='text-sm text-gray-500'>a night</p>
                                        </div>
                                        <button className='py-2 px-5 bg-orange-600 text-white rounded-md'>Go to site</button>
                                    </div>

                                </div>


                                {/* Booking.com */}
                                <div className='bg-white rounded-lg p-4 shadow-sm h-48 overflow-scroll no_scrollBar border border-gray-200 flex justify-between items-start'>

                                    <div className='flex flex-col gap-1 h-full justify-between'>
                                        <p className='text-blue-600 font-semibold'>on Booking.com</p>

                                        <div className='flex flex-col items-start gap-2'>
                                            <p className='text-sm font-semibold'>Double room</p>
                                            <ul className='flex flex-col items-start gap-1 pl-4'>
                                                <li className='text-xs text-gray-500 list-disc'>Non refundable</li>
                                                <li className='text-xs text-gray-500 list-disc'>Meals not included</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className='flex items-end  flex-col justify-between h-full'>
                                        <div className='flex flex-col items-end gap-1'>
                                            <h2 className='text-xl font-bold'>Rs 89,885</h2>
                                            <p className='text-sm text-gray-500'>a night</p>
                                        </div>
                                        <button className='py-2 px-5 bg-orange-600 text-white rounded-md'>Go to site</button>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </section>
                </div>


                <section id='Location' className='flex flex-col w-full items-start gap-4 py-10'>
                    <div className='flex flex-col gap-2 items-start'>
                        <h2 className='text-4xl font-normal' style={{
                            fontFamily: "'Roboto', sans-serif"
                        }}>Location</h2>
                        <p style={{
                            fontFamily: "'Roboto', sans-serif"
                        }} className='flex items-start gap-1  text-sm font-normal'><span><GrLocationPin /></span> Near R-11 Row-4, Block-D, Block 10-A Block 10 A National Cement Employees CHS, Karachi, 75300, Pakistan|3 km from Karachi Expo Center</p>
                    </div>


                    <div className='flex flex-col items-start w-full'>
                        <div className='bg-white rounded-xl w-full shadow-lg border border-gray-100 overflow-hidden'>
                            <iframe
                                title="hotel-location"
                                src="https://www.google.com/maps?q=Karachi+Expo+Center&output=embed"
                                className="w-full h-96 border-0"
                            ></iframe>
                        </div>
                        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 items-start w-full'>
                            {
                                [
                                    {
                                        id: 1, name: "10 things to do", km: "within 0.28 km", funFact: [
                                            { id: 1, name: "Karachi Expo Center", km: "3.00 km" },
                                            { id: 2, name: "PCB Training Club", km: "2.75 km" },
                                            { id: 3, name: "Imambargah Yasrab Gulshan-e-Iqbal Block 10-A Karachi, Pakistan", km: "0.61 km" }
                                        ]
                                    },
                                    {
                                        id: 2, name: "10 things to do", km: "within 0.28 km", funFact: [
                                            { id: 4, name: "Karachi Expo Center", km: "3.00 km" },
                                            { id: 5, name: "PCB Training Club", km: "2.75 km" },
                                            { id: 6, name: "Imambargah Yasrab Gulshan-e-Iqbal Block 10-A Karachi, Pakistan", km: "0.61 km" }
                                        ]
                                    },
                                    {
                                        id: 3, name: "10 things to do", km: "within 0.28 km", funFact: [
                                            { id: 7, name: "Karachi Expo Center", km: "3.00 km" },
                                            { id: 8, name: "PCB Training Club", km: "2.75 km" },
                                            { id: 9, name: "Imambargah Yasrab Gulshan-e-Iqbal Block 10-A Karachi, Pakistan", km: "0.61 km" }
                                        ]
                                    },
                                ].map((elemItem) => {
                                    return (
                                        <div key={elemItem.id} className='w-full justify-between flex flex-col items-start gap-5 h-60 no_scrollBar overflow-y-scroll bg-white py-4 px-3 rounded-xl shadow-lg border border-gray-100'>
                                            <div className='flex items-end gap-2 '>
                                                <h1 style={{
                                                    fontFamily: "'Roboto', sans-serif"
                                                }} className='text-xl font-semibold'>{elemItem.name}</h1>
                                                <p className='text-sm text-gray-500'>{elemItem.km}</p>
                                            </div>
                                            <ul className='flex flex-col w-full items-start gap-1'>
                                                {elemItem.funFact.map((item) => {
                                                    return <li key={item.id} className='flex items-start flex-wrap justify-between w-full'>
                                                        <h3 className='text-sm font-normal line-clamp-1 w-80 text-gray-500'>
                                                            {item.name}
                                                        </h3>
                                                        <p className='text-sm font-normal text-gray-500'>{item.km}</p>
                                                    </li>
                                                })}
                                            </ul>
                                            <button className='bg-orange-600 text-white text-sm py-2 px-5 rounded-full '>View More</button>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </section>

                <section id='Details' className='flex flex-col w-full items-start gap-4 py-10'>
                    <h1 className='text-2xl lg:text-4xl font-semibold' style={{
                        fontFamily: "'Roboto', sans-serif"
                    }} >Check in and check out</h1>

                    <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 w-full items-start sm:items-center gap-4'>
                        <span className='text-[3rem] sm:text-[4rem] font-bold text-gray-800'><FaRegClock /></span>
                        <div className='flex flex-col items-start gap-1'>
                            <p className='text-sm sm:text-2xl font-normal'>Check in from:</p>
                            <h4 className='text-lg sm:text-2xl font-semibold'>12:00</h4>
                        </div>
                        <div className='flex flex-col items-start gap-1'>
                            <p className='text-sm sm:text-2xl font-normal'>Check out before:</p>
                            <h4 className='text-lg sm:text-2xl font-semibold'>12:00</h4>
                        </div>
                    </div>
                </section>

                <div className='flex flex-col w-full items-start gap-4 py-10'>
                    <h1
                        className='text-2xl lg:text-4xl font-semibold'
                        style={{ fontFamily: "'Roboto', sans-serif" }}
                    >
                        Good to know
                    </h1>
                    <div className='flex flex-col gap-6 rounded-md w-full text-gray-700 bg-[#EFF3F8] py-4 px-4'>
                        <div>
                            <h2 className='font-semibold text-lg'>Children</h2>
                            <p>Children are welcome at this hotel</p>
                        </div>

                        <div>
                            <h2 className='font-semibold text-lg'>Extra beds</h2>
                            <p>All ages</p>
                            <p>Rs 10 per person per night</p>
                        </div>

                        <div>
                            <h2 className='font-semibold text-lg'>Cot</h2>
                            <p>Please contact the hotel for details about adding a cot.</p>
                        </div>

                        <div>
                            <h2 className='font-semibold text-lg'>Pets</h2>
                            <p>Pets not allowed</p>
                        </div>

                        <div>
                            <h2 className='font-semibold text-lg'>Breakfast</h2>
                            <p>Breakfast available</p>
                            <p className='mt-2'>Asian breakfast, Halal breakfast</p>
                            <p className='mt-2'>Price: Rs 4,000 / person</p>
                            <p>Timing: 07:00 - 10:00 (Monday to Sunday)</p>
                        </div>

                        <div>
                            <h2 className='font-semibold text-lg'>
                                Important information from the hotel
                            </h2>
                            <ul className='list-disc pl-5 space-y-2 text-sm leading-relaxed'>
                                <li>
                                    Guests must show photo ID and credit card at check-in. Special requests
                                    depend on availability and may include extra charges.
                                </li>
                                <li>
                                    Early departure will be charged full stay amount.
                                </li>
                                <li>
                                    Guests under 18 must check in with parent or guardian.
                                </li>
                                <li>
                                    Covid vaccination certificate (NADRA approved) required.
                                </li>
                                <li>
                                    Cash deposit or card imprint required for incidental charges.
                                </li>
                                <li>
                                    American Express cards are not accepted.
                                </li>
                                <li>
                                    Swimming pool closed from 21 July 2024 to 05 September 2024.
                                    Alternative facility available offsite.
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h2 className='font-semibold text-lg'>
                                Important information about the city
                            </h2>
                            <p className='text-sm'>
                                All Chinese guests require security and bulletproof escort vehicles
                                for check-in. Without this arrangement, check-in will not be possible.
                            </p>
                        </div>

                        {/* Payment Methods */}
                        <div>
                            <h2 className='font-semibold text-lg'>Accepted payment methods</h2>

                            <div className='flex relative items-center gap-2 mt-2'>
                                <img src={MasterCard} alt="Visa" className='h-8' />
                                <img src={visaCard} alt="MasterCard" className='h-8' />
                                <button
                                    onClick={() => setCashToggle((prev) => !prev)}
                                    style={{ fontFamily: "'Roboto', sans-serif" }}
                                    className='text-sm cursor-pointer flex items-center font-semibold'>View more <span className='text-lg font-extrabold'><IoMdArrowDropdown /></span></button>
                                {cashToggle && (
                                    <div className='w-20 rounded-md h-20 flex flex-col items-start justify-between overflow-auto no_scrollBar bg-white shadow-2xl border border-gray-100 absolute py-2 px-4 top-6 left-32'>
                                        <p className="text-lg font-semibold text-black">Cash</p>
                                        <button onClick={() => setCashToggle(false)} className='text-sm text-black hover:no-underline cursor-pointer capitalize  underline'>close</button>
                                    </div>
                                )}
                            </div>
                        </div>

                    </div>
                </div>

                <div className='flex flex-col w-full items-start gap-4 py-10'>
                    <h1
                        className='text-2xl lg:text-4xl font-semibold'
                        style={{ fontFamily: "'Roboto', sans-serif" }}
                    >
                        Hotel description
                    </h1>

                    <div className="grid grid-cols-4 md:grid-cols-6 grid-rows-2 gap-2 h-full md:h-80">

                        {/* Left Big Image */}
                        <div className="col-span-2 row-span-2">
                            <img
                                src={HotelImage[0]}
                                alt="hotel"
                                className="w-full h-full object-cover cursor-pointer"
                            />
                        </div>

                        {/* Top Small Images */}
                        <div className="md:col-span-1 md:row-span-1">
                            <img
                                src={HotelImage[1]}
                                alt="hotel"
                                className="w-full h-full object-cover cursor-pointer"
                            />
                        </div>

                        <div className="md:col-span-1 md:row-span-1">
                            <img
                                src={HotelImage[2]}
                                alt="hotel"
                                className="w-full h-full object-cover cursor-pointer"
                            />
                        </div>

                        {/* Right Big Image */}
                        <div className="md:col-span-2 md:row-span-2">
                            <img
                                src={HotelImage[3]}
                                alt="hotel"
                                className="w-full h-full object-cover cursor-pointer"
                            />
                        </div>

                        {/* Center Bottom Big Image */}
                        <div className="md:col-span-2 md:row-span-2 ">
                            <img
                                src={HotelImage[4]}
                                alt="hotel"
                                className="w-full h-full object-cover cursor-pointer"
                            />
                        </div>

                    </div>

                    <div className='flex flex-col items-start gap-2'>
                        <h1
                            className='text-2xl lg:text-xl font-semibold'
                            style={{ fontFamily: "'Roboto', sans-serif" }}
                        >
                            Mövenpick Hotel Karachi
                        </h1>
                        <p className='text-sm text-gray-600'>Boasting 4 dining options, Mövenpick Hotel Karachi features an outdoor pool, fitness centre, free parking and luxurious rooms with city views. Conference and banquet facilities can be arranged, while the friendly staff is available round-the-clock.</p>
                    </div>


                </div>

                <section id='facilities' className='flex flex-col w-full items-start gap-4 py-10'>
                    <Amenities />
                </section>
            </Container >
            <div className='bg-gray-100 py-10 px-0 md:px-5 w-full h-full'>
                <Container>
                    <div className='flex flex-col w-full items-start gap-4 py-10'>

                        <h1
                            className='text-lg sm:text-2xl font-semibold'
                            style={{ fontFamily: "'Roboto', sans-serif" }}
                        >
                            Couldn’t find the right hotel for you?
                        </h1>

                        <CheckIn />
                    </div>
                </Container>
            </div>
        </>
    )
}

export default HotelDetails
