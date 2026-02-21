import React from 'react'
import HeadingComp from '../Components/HeadingComp'
import hotel1 from "../../assets/HotelImage1.jpg"
import { FiEdit } from "react-icons/fi";
import { MdDeleteOutline } from "react-icons/md";
import { IoIosStar } from 'react-icons/io';

const Manage_hotel_listings = () => {

    const hotelData = [
        {
            id: 1,
            image: hotel1,
            name: "Luxury Palace Hotel",
            location: "Lahore",
            price: "$120 / Night",
            rating: "4.5",
            rooms: 45,
            guests: 120,
            amenities: "Wifi, Pool, Parking",
            owner: "Ali Khan",
            contact: "+92 300 4567890",
            checkIn: "02:00 PM",
            checkOut: "12:00 PM",
            status: "Active",
            created: "12 Feb 2024"
        },
        {
            id: 2,
            image: hotel1,
            name: "Royal Star Hotel",
            location: "Karachi",
            price: "$95 / Night",
            rating: "4.2",
            rooms: 30,
            guests: 80,
            amenities: "Wifi, Gym, Parking",
            owner: "Usman Tariq",
            contact: "+92 301 2233445",
            checkIn: "01:00 PM",
            checkOut: "11:00 AM",
            status: "Active",
            created: "05 Jan 2024"
        },
        {
            id: 3,
            image: hotel1,
            name: "Mountain View Resort",
            location: "Murree",
            price: "$150 / Night",
            rating: "4.7",
            rooms: 25,
            guests: 60,
            amenities: "Wifi, Bonfire, Breakfast",
            owner: "Hassan Raza",
            contact: "+92 302 9988776",
            checkIn: "03:00 PM",
            checkOut: "12:00 PM",
            status: "Inactive",
            created: "20 Dec 2023"
        },
        {
            id: 4,
            image: hotel1,
            name: "Ocean Pearl Hotel",
            location: "Gwadar",
            price: "$180 / Night",
            rating: "4.6",
            rooms: 40,
            guests: 110,
            amenities: "Wifi, Pool, Sea View",
            owner: "Bilal Ahmed",
            contact: "+92 303 4455667",
            checkIn: "02:00 PM",
            checkOut: "12:00 PM",
            status: "Active",
            created: "10 Mar 2024"
        },
        {
            id: 5,
            image: hotel1,
            name: "City Lights Hotel",
            location: "Islamabad",
            price: "$130 / Night",
            rating: "4.4",
            rooms: 35,
            guests: 90,
            amenities: "Wifi, Gym, Restaurant",
            owner: "Farhan Malik",
            contact: "+92 304 5566778",
            checkIn: "01:30 PM",
            checkOut: "11:30 AM",
            status: "Active",
            created: "28 Feb 2024"
        }
    ];


    return (
        <div className='flex flex-col items-start gap-5 w-full'>

            <HeadingComp PageHeading="Manage Hotel Listings" />

            <div className='w-full border bg-white shadow-md border-gray-100 rounded-md overflow-hidden'>

                <div className='overflow-x-auto'>
                    <table className='w-full text-sm text-left'>

                        {/* Table Head */}
                        <thead className='bg-gray-50 border-t-4 border-gray-200 text-gray-700'>
                            <tr>
                                <th className='px-4 whitespace-nowrap py-3'>Hotel</th>
                                <th className='px-4 whitespace-nowrap py-3'>Location</th>
                                <th className='px-4 whitespace-nowrap py-3'>Rooms</th>
                                <th className='px-4 whitespace-nowrap py-3'>Guests</th>
                                <th className='px-4 whitespace-nowrap py-3'>Amenities</th>
                                <th className='px-4 whitespace-nowrap py-3'>Owner</th>
                                <th className='px-4 whitespace-nowrap py-3'>Contact</th>
                                <th className='px-4 whitespace-nowrap py-3'>Check In</th>
                                <th className='px-4 whitespace-nowrap py-3'>Check Out</th>
                                <th className='px-4 whitespace-nowrap py-3'>Price</th>
                                <th className='px-4 whitespace-nowrap py-3'>Rating</th>
                                <th className='px-4 whitespace-nowrap py-3'>Status</th>
                                <th className='px-4 whitespace-nowrap py-3'>Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            {hotelData.map((hotel) => (
                                <tr key={hotel.id} className='border-t border-gray-200 hover:bg-gray-50 transition'>
                                    <td className='px-4 whitespace-nowrap py-3'>
                                        <div className='flex items-start flex-col gap-1'>
                                            <img
                                                src={hotel.image}
                                                alt="hotel"
                                                className='w-10 h-10 rounded-md object-cover'
                                            />
                                            <span className='font-medium whitespace-nowrap'>{hotel.name}</span>
                                        </div>
                                    </td>
                                    <td className='px-4 whitespace-nowrap py-3'>{hotel.location}</td>
                                    <td className='px-4 whitespace-nowrap py-3'>{hotel.rooms}</td>
                                    <td className='px-4 whitespace-nowrap py-3'>{hotel.guests}</td>
                                    <td className='px-4 whitespace-nowrap py-3'>{hotel.amenities}</td>
                                    <td className='px-4 whitespace-nowrap py-3'>{hotel.owner}</td>
                                    <td className='px-4 whitespace-nowrap py-3'>{hotel.contact}</td>
                                    <td className='px-4 whitespace-nowrap py-3'>{hotel.checkIn}</td>
                                    <td className='px-4 whitespace-nowrap py-3'>{hotel.checkOut}</td>
                                    <td className='px-4 whitespace-nowrap py-3 font-semibold'>{hotel.price}</td>
                                    <td className='px-4 whitespace-nowrap py-3'><IoIosStar className='text-yellow-600' /> {hotel.rating}</td>

                                    {/* Status */}
                                    <td className='px-4 whitespace-nowrap py-3'>
                                        <span className={`px-2 py-1 rounded text-xs font-semibold
                                            ${hotel.status === "Active"
                                                ? "bg-green-100 text-green-700"
                                                : "bg-red-100 text-red-700"
                                            }`}>
                                            {hotel.status}
                                        </span>
                                    </td>

                                    {/* Actions */}
                                    <td className='px-4 whitespace-nowrap py-3'>
                                        <div className='flex gap-3'>
                                            <button className='text-[var(--primary-color)] cursor-pointer text-lg'>
                                                <FiEdit />
                                            </button>

                                            <button className='text-red-500 cursor-pointer hover:text-red-700 text-lg'>
                                                <MdDeleteOutline />
                                            </button>
                                        </div>
                                    </td>

                                </tr>
                            ))}
                        </tbody>

                    </table>
                </div>

            </div>

        </div>
    )
}

export default Manage_hotel_listings
