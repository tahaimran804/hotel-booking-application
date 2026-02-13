import React, { useEffect, useState } from 'react'
import PriceCalendar from './RangeCalendar';
import { IoAdd } from "react-icons/io5";
import { FiMinus } from "react-icons/fi";
import Skeleton from 'react-loading-skeleton';

const bookingFields = {
    destination: {
        label: "Where do you want to go?",
        placeholder: "Enter a destination or hotel name",
    },
    checkIn: { label: "Check-in" },
    checkOut: { label: "Check-out" },
    guests: { label: "Guests and rooms" },
};

const SearchRoomAndRates = () => {
    const [showCalendar, setShowCalendar] = useState(false);
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState({
        destination: "",
        checkIn: "",
        checkOut: "",
        rooms: 4,
        adults: 8,
        children: 1,
        childrenAges: [0],
        freeCancellation: false,
        fourStars: false,
    });
    const [showGuests, setShowGuests] = useState(false);
    const updateChildren = (count) => {
        setData({
            ...data,
            children: count,
            childrenAges: count > 0 ? Array(count).fill(0) : [],
        });
    };

    // useEffect(() => {
    //     setTimeout(() => {
    //         setLoading(false)
    //     }, 2000);
    // }, [])


    return (
        <div className="py-4 flex flex-col gap-4 px-4 w-full bg-white shadow-sm rounded-sm">
            <div className="grid grid-cols-12 gap-3 items-end">
                <div className="lg:col-span-6 col-span-12 relative">
                    <p className="text-xs text-gray-500">Check-in — Check-out</p>

                    {loading ? (
                        <Skeleton height={38} className="mt-1" />
                    ) : (
                        <>
                            <div
                                onClick={() => setShowCalendar(!showCalendar)}
                                className="w-full mt-1 border border-gray-200 rounded-sm px-2 py-2 text-sm cursor-pointer hover:bg-gray-100"
                            >
                                {data.checkIn && data.checkOut
                                    ? `${data.checkIn} → ${data.checkOut}`
                                    : "Select dates"}
                            </div>

                            {showCalendar && (
                                <PriceCalendar
                                    data={data}
                                    setData={setData}
                                    close={() => setShowCalendar(false)}
                                />
                            )}
                        </>
                    )}
                </div>
                <div className="lg:col-span-3 col-span-12 relative">
                    <p className="text-xs text-gray-500">{bookingFields.guests.label}</p>
                    {loading ? (
                        <Skeleton height={38} className="mt-1" />
                    ) : (
                        <>
                            <div
                                className="border hover:bg-gray-100 border-gray-200 whitespace-nowrap rounded-sm px-2 py-2 text-sm mt-1 cursor-pointer"
                                onClick={() => setShowGuests(!showGuests)}
                            >
                                {data.adults} adults, {data.rooms} rooms
                            </div>
                            {showGuests && (
                                <div className="absolute z-10 bg-white border border-gray-100 rounded-md shadow-xl p-4 mt-2 w-72">
                                    <GuestCounter
                                        label="Rooms"
                                        value={data.rooms}
                                        onChange={(val) => setData({ ...data, rooms: val })}
                                        min={1}
                                    />
                                    <GuestCounter
                                        label="Adults"
                                        value={data.adults}
                                        onChange={(val) => setData({ ...data, adults: val })}
                                        min={1}
                                    />
                                    <GuestCounter
                                        label="Children"
                                        value={data.children}
                                        onChange={updateChildren}
                                        min={0}
                                    />
                                </div>
                            )}
                        </>
                    )}
                </div>

                <div className="lg:col-span-3 col-span-12">
                    {loading ? (
                        <Skeleton height={38} />
                    ) : (
                        <button className="w-full py-2 bg-orange-600 text-white rounded-lg text-sm">
                            Search
                        </button>
                    )}
                </div>

            </div>
        </div>
    );
};
const GuestCounter = ({ label, value, onChange, min }) => (
    <div className="flex items-center justify-between mb-3">
        <span className="text-sm">{label}</span>
        <div className="flex items-center gap-3">
            <button
                className="w-6 h-6 border border-gray-100 flex items-center justify-center text-sm cursor-pointer rounded"
                onClick={() => value > min && onChange(value - 1)}
            ><FiMinus /></button>
            <span className="text-sm">{value}</span>
            <button
                className="w-6 h-6 border border-gray-100 flex items-center justify-center text-sm cursor-pointer rounded"
                onClick={() => onChange(value + 1)}
            ><IoAdd /></button>
        </div>
    </div>
);

export default SearchRoomAndRates;
