import React, { useState } from 'react'
import HeadingComp from '../Components/HeadingComp'
import { AiOutlineEye } from 'react-icons/ai'


const BookingData = [
    {
        "id": "TRK-10234",
        "fullName": "Ali Khan",
        "email": "ali@gmail.com",
        "phone": "+923001234567",
        "address": "Lahore, Pakistan",
        "hotelName": "Grand Royal Hotel",
        "roomType": "Deluxe Room",
        "guests": 2,
        "nights": 3,
        "bookingDate": "12 Feb 2026",
        "checkIn": "15 Feb 2026",
        "checkOut": "18 Feb 2026",
        "amount": "$320",
        "paymentMethod": "Credit Card",
        "paymentStatus": "Paid",
        "affiliateSource": "Booking.com",
        "commission": "$32",
        "status": "Confirmed",
        "specialRequest": "Sea view room"
    },
    {
        "id": "TRK-10235",
        "fullName": "Usman Tariq",
        "email": "usman@gmail.com",
        "phone": "+923221112233",
        "address": "Karachi, Pakistan",
        "hotelName": "Sea View Resort",
        "roomType": "Standard Room",
        "guests": 1,
        "nights": 2,
        "bookingDate": "10 Feb 2026",
        "checkIn": "20 Feb 2026",
        "checkOut": "22 Feb 2026",
        "amount": "$180",
        "paymentMethod": "PayPal",
        "paymentStatus": "Pending",
        "affiliateSource": "Agoda",
        "commission": "$18",
        "status": "Pending",
        "specialRequest": "Late check-in"
    },
    {
        "id": "TRK-10236",
        "fullName": "Hassan Raza",
        "email": "hassan@gmail.com",
        "phone": "+923334445566",
        "address": "Islamabad, Pakistan",
        "hotelName": "Mountain View Lodge",
        "roomType": "Family Suite",
        "guests": 4,
        "nights": 3,
        "bookingDate": "09 Feb 2026",
        "checkIn": "14 Feb 2026",
        "checkOut": "17 Feb 2026",
        "amount": "$410",
        "paymentMethod": "Debit Card",
        "paymentStatus": "Paid",
        "affiliateSource": "Expedia",
        "commission": "$41",
        "status": "Confirmed",
        "specialRequest": "Extra beds required"
    }
]

const TrackingIDs = () => {
    const [bookings] = useState(BookingData)
    return (
        <div className='flex flex-col items-start gap-5 w-full'>
            <HeadingComp PageHeading="Manage Tracking IDs" />

            <div className='w-full bg-white shadow-md rounded-md overflow-x-auto'>

                <table className='w-full text-left border-collapse'>

                    <thead className='bg-gray-100'>
                        <tr className='text-gray-600 text-sm'>
                            <th className='p-3 whitespace-nowrap'>Tracking ID</th>
                            <th className='p-3 whitespace-nowrap'>Customer</th>
                            <th className='p-3 whitespace-nowrap'>Hotel</th>
                            <th className='p-3 whitespace-nowrap'>Booking Date</th>
                            <th className='p-3 whitespace-nowrap'>Room Type</th>
                            <th className='p-3 whitespace-nowrap'>Guests</th>
                            <th className='p-3 whitespace-nowrap'>CheckIn</th>
                            <th className='p-3 whitespace-nowrap'>CheckOut</th>
                            <th className='p-3 whitespace-nowrap'>Amount</th>
                            <th className='p-3 whitespace-nowrap'>Payment Status</th>
                            <th className='p-3 whitespace-nowrap'>Affiliate</th>
                            <th className='p-3 whitespace-nowrap'>Status</th>
                            <th className='p-3 whitespace-nowrap'>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {bookings.map((booking) => (
                            <tr key={booking.id} className='border-t border-gray-100 hover:bg-gray-50'>
                                <td className='p-3 whitespace-nowrap font-medium'>{booking.id}</td>
                                <td className='p-3 whitespace-nowrap'>
                                    <p className='font-semibold'>{booking.fullName}</p>
                                    <p className='text-sm text-gray-500'>{booking.email}</p>
                                    <p className='text-sm text-gray-500'>{booking.phone}</p>
                                </td>
                                <td className='p-3 whitespace-nowrap'>{booking.hotelName}</td>
                                <td className='p-3 whitespace-nowrap'>{booking.bookingDate}</td>
                                <td className='p-3 whitespace-nowrap'>{booking.roomType}</td>
                                <td className='p-3 whitespace-nowrap'>{booking.guests}</td>
                                <td className='p-3 whitespace-nowrap'>{booking.checkIn}</td>
                                <td className='p-3 whitespace-nowrap'>{booking.checkOut}</td>
                                <td className='p-3 whitespace-nowrap font-semibold'>{booking.amount}</td>
                                <td className='p-3 whitespace-nowrap font-semibold'>{booking.paymentStatus}</td>
                                <td className='p-3 whitespace-nowrap'>{booking.affiliateSource}</td>
                                <td className='p-3 whitespace-nowrap'>
                                    <span className={`px-3 py-1 rounded-full text-xs font-semibold 
                                        ${booking.status === "Confirmed"
                                            ? "bg-green-100 text-green-600"
                                            : booking.status === "Pending"
                                                ? "bg-yellow-100 text-yellow-600"
                                                : "bg-red-100 text-red-600"
                                        }`}
                                    >
                                        {booking.status}
                                    </span>
                                </td>
                                <td className='p-3 whitespace-nowrap'>
                                    <button className='text-[var(--primary-color)] hover:text-[var(--primary-color)]/95 cursor-pointer transition'>
                                        <AiOutlineEye size={20} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>

                </table>
            </div>
        </div>
    )
}

export default TrackingIDs
