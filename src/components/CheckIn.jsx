import React, { useState } from 'react'
import PriceCalendar from './RangeCalendar';
import { IoAdd } from "react-icons/io5";
import { FiMinus } from "react-icons/fi";

const bookingFields = {
    destination: {
        label: "Where do you want to go?",
        placeholder: "Enter a destination or hotel name",
    },
    checkIn: { label: "Check-in" },
    checkOut: { label: "Check-out" },
    guests: { label: "Guests and rooms" },
};

const cities = ["Dubai", "London", "New York", "Paris", "Istanbul"];

const CheckIn = () => {
    const [showCalendar, setShowCalendar] = useState(false);
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

    const [showCities, setShowCities] = useState(false);
    const [showGuests, setShowGuests] = useState(false);

    const filteredCities = cities.filter(city =>
        city.toLowerCase().includes(data.destination.toLowerCase())
    );

    const updateChildren = (count) => {
        setData({
            ...data,
            children: count,
            childrenAges: count > 0 ? Array(count).fill(0) : [],
        });
    };

    return (
        <div className="py-4 flex flex-col gap-4 px-4 w-full bg-white shadow-sm rounded-sm">
            <div className="grid grid-cols-12 gap-3 items-end">
                <div className="col-span-12 lg:col-span-4 relative">
                    <p className="text-xs text-gray-500">{bookingFields.destination.label}</p>
                    <input
                        type="text"
                        placeholder={bookingFields.destination.placeholder}
                        className="w-full hover:bg-gray-100 mt-1 border border-gray-200 rounded-sm px-2 py-2 text-sm outline-none"
                        value={data.destination}
                        onChange={(e) => {
                            setData({ ...data, destination: e.target.value });
                            setShowCities(true);
                        }}
                    />

                    {showCities && data.destination && (
                        <div className="bg-white border absolute z-10 border-gray-100 w-full mt-1 rounded-sm shadow-lg">
                            {filteredCities.map((city, i) => (
                                <div
                                    key={i}
                                    className="px-3 py-2 text-sm hover:bg-gray-100 cursor-pointer"
                                    onClick={() => {
                                        setData({ ...data, destination: city });
                                        setShowCities(false);
                                    }}
                                >
                                    {city}
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                <div className="lg:col-span-4 col-span-12 relative">
                    <p className="text-xs text-gray-500">Check-in — Check-out</p>
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

                </div>

                <div className="lg:col-span-2 col-span-12 relative">
                    <p className="text-xs text-gray-500">{bookingFields.guests.label}</p>
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

                            {data.children > 0 && (
                                <div className="mt-3">
                                    <p className="text-xs text-gray-500 mb-2">Age of child</p>
                                    <div className="grid grid-cols-2 gap-2">
                                        {data.childrenAges.map((age, i) => (
                                            <input
                                                key={i}
                                                type="number"
                                                min="0"
                                                max="17"
                                                className="border border-gray-300 outline-0 rounded-sm px-2 py-1 text-sm"
                                                value={age}
                                                onChange={(e) => {
                                                    const updatedAges = [...data.childrenAges];
                                                    updatedAges[i] = e.target.value;
                                                    setData({ ...data, childrenAges: updatedAges });
                                                }}
                                            />
                                        ))}
                                    </div>
                                </div>
                            )}

                        </div>
                    )}
                </div>
                <div className="lg:col-span-2 col-span-12">
                    <button className="w-full py-2 bg-orange-600 text-white rounded-lg text-sm">
                        Search
                    </button>
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

export default CheckIn;
