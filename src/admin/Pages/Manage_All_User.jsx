import React from 'react'
import HeadingComp from '../Components/HeadingComp'
import avatar from "../../assets/avatar-1.png"
import { MdDeleteOutline } from 'react-icons/md'
import { FiEdit } from 'react-icons/fi'

const Manage_All_User = () => {
    const guestData = [
        {
            id: 1865,
            image: avatar,
            name: "Anne Ortha",
            email: "anne@gmail.com",
            phone: "+92 300 1234567",
            role: "Guest",
            status: "Active",
            checkIn: "25/02/2024",
            checkOut: "25/02/2024",
        },
        {
            id: 1945,
            image: avatar,
            name: "Sarah Moanees",
            email: "sarah@gmail.com",
            phone: "+92 301 9876543",
            role: "Guest",
            status: "Inactive",
            checkIn: "25/02/2024",
            checkOut: "25/02/2024",
        }
    ]

    return (
        <div className='flex flex-col items-start gap-5 w-full'>
            <HeadingComp PageHeading="Guest" />
            <div className='w-full border bg-white shadow-md border-gray-100 rounded-md overflow-hidden'>
                <div className='overflow-x-auto w-full'>
                    <table className='w-full text-sm text-left'>
                        <thead className='bg-gray-50 text-gray-700'>
                            <tr>
                                <th className='px-4 py-3 whitespace-nowrap'>ID</th>
                                <th className='px-4 py-3 whitespace-nowrap'>Image</th>
                                <th className='px-4 py-3 whitespace-nowrap'>Name</th>
                                <th className='px-4 py-3 whitespace-nowrap'>Email</th>
                                <th className='px-4 py-3 whitespace-nowrap'>Phone</th>
                                <th className='px-4 py-3 whitespace-nowrap'>Role</th>
                                <th className='px-4 whitespace-nowrap py-3'>CheckIn</th>
                                <th className='px-4 whitespace-nowrap py-3'>CheckOut</th>
                                <th className='px-4 py-3 whitespace-nowrap'>Status</th>
                                <th className='px-4 py-3 whitespace-nowrap'>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {guestData.map((user) => (
                                <tr key={user.id} className='border-t border-gray-200 hover:bg-gray-50 transition'>
                                    <td className='px-4 py-3 whitespace-nowrap'>{user.id}</td>
                                    <td className='px-4 py-3 whitespace-nowrap'>
                                        <img
                                            src={user.image}
                                            alt="avatar"
                                            className="w-8 h-8 rounded-full object-cover"
                                        />
                                    </td>
                                    <td className='px-4 py-3 whitespace-nowrap font-medium'>{user.name}</td>
                                    <td className='px-4 py-3 whitespace-nowrap'>{user.email}</td>
                                    <td className='px-4 py-3 whitespace-nowrap'>{user.phone}</td>
                                    <td className='px-4 py-3 whitespace-nowrap'>{user.role}</td>
                                    <td className='px-4 py-3 whitespace-nowrap'>{user.checkIn}</td>
                                    <td className='px-4 py-3 whitespace-nowrap'>{user.checkOut || "N/A"}</td>
                                    <td className='px-4 py-3 whitespace-nowrap'>
                                        <span className={`px-2 py-1 rounded text-xs font-semibold
                                            ${user.status === "Active"
                                                ? "bg-green-100 text-green-700"
                                                : "bg-red-100 text-red-700"
                                            }`}>
                                            {user.status}
                                        </span>
                                    </td>
                                    <td className='px-4 py-3 whitespace-nowrap'>
                                        <div className='flex items-center gap-2'>
                                            <button className='cursor-pointer    text-orange-600 hover:text-orange-700 text-lg transition'>
                                                <FiEdit />
                                            </button>

                                            <button className='cursor-pointer    text-red-500 hover:text-red-700 text-lg transition'>
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

export default Manage_All_User
