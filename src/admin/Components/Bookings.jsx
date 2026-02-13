import React from 'react'
import avatar from "../../assets/avatar-1.png"
import avatar1 from "../../assets/avatar-1.png"
import avatar2 from "../../assets/avatar-1.png"

const Bookings = () => {

    const bookingData = [
        {
            id: 1865,
            image: avatar,
            name: "Anne Ortha",
            checkIn: "28/02/2024",
            checkOut: "05/03/2024",
            proof: "Passport",
            payment: "Cash",
            amount: "$800",
            roomNo: "Deluxe : 304, 305",
            rooms: "7 Member / 2 Room"
        },
        {
            id: 1945,
            name: "Sarah Moanees",
            checkIn: "25/02/2024",
            checkOut: "25/02/2024",
            image: avatar1,
            proof: "Pan Card",
            payment: "Pending",
            amount: "$400",
            roomNo: "VIP : 104",
            rooms: "1 Member / 1 Room"
        }
    ]

    return (
        <div className='w-full border bg-white shadow-md border-gray-100 rounded-md overflow-hidden'>
            <h1
                style={{ fontFamily: "'Roboto', sans-serif" }}
                className='text-xl font-bold text-black py-4 px-4 border-b border-gray-200'
            >
                Bookings
            </h1>

            <div className='overflow-x-auto w-full'>
                <table className='w-full text-sm text-left'>
                    <thead className='bg-gray-50 text-gray-700'>
                        <tr>
                            <th className='px-4 whitespace-nowrap py-3'>ID</th>
                            <th className='px-4 whitespace-nowrap py-3'>Image</th>
                            <th className='px-4 whitespace-nowrap py-3'>Name</th>
                            <th className='px-4 whitespace-nowrap py-3'>CheckIn</th>
                            <th className='px-4 whitespace-nowrap py-3'>CheckOut</th>
                            <th className='px-4 whitespace-nowrap py-3'>Proof</th>
                            <th className='px-4 whitespace-nowrap py-3'>Payment</th>
                            <th className='px-4 whitespace-nowrap py-3'>Amount</th>
                            <th className='px-4 whitespace-nowrap py-3'>Room No</th>
                            <th className='px-4 whitespace-nowrap py-3'>Rooms</th>
                            <th className='px-4 whitespace-nowrap py-3'>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {bookingData.map((item) => (
                            <tr key={item.id} className='border-t border-gray-200 hover:bg-gray-50 transition'>
                                <td className='px-4 whitespace-nowrap py-3'>{item.id}</td>
                                <td className='px-4 whitespace-nowrap py-3 font-medium'><img src={item.image} alt="avatar" className="w-8 h-8 rounded-full object-cover" /></td>
                                <td className='px-4 whitespace-nowrap py-3'>{item.name}</td>
                                <td className='px-4 whitespace-nowrap py-3'>{item.checkIn}</td>
                                <td className='px-4 whitespace-nowrap py-3'>{item.checkOut}</td>
                                <td className='px-4 whitespace-nowrap py-3'>{item.proof}</td>

                                <td className='px-4 whitespace-nowrap py-3'>
                                    <span className={`px-2 py-1 rounded text-xs font-semibold
                                        ${item.payment === "Pending"
                                            ? "bg-yellow-100 text-yellow-700"
                                            : "bg-green-100 text-green-700"
                                        }`}>
                                        {item.payment}
                                    </span>
                                </td>

                                <td className='px-4 whitespace-nowrap py-3 font-semibold'>{item.amount}</td>
                                <td className='px-4 whitespace-nowrap py-3'>{item.roomNo}</td>
                                <td className='px-4 whitespace-nowrap py-3'>{item.rooms}</td>

                                <td className='px-4 whitespace-nowrap py-3'>
                                    <button className='bg-orange-600 text-white px-3 py-1 rounded text-xs hover:bg-orange-700'>
                                        View
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

export default Bookings
