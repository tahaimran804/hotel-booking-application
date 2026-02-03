import React, { useState } from 'react'

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

    // 🔹 Update children count + ages
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
                <div className="col-span-4 relative">
                    <p className="text-xs text-gray-500">{bookingFields.destination.label}</p>
                    <input
                        type="text"
                        placeholder={bookingFields.destination.placeholder}
                        className="w-full mt-1 border border-gray-200 rounded-sm px-2 py-2 text-sm outline-none"
                        value={data.destination}
                        onChange={(e) => {
                            setData({ ...data, destination: e.target.value });
                            setShowCities(true);
                        }}
                    />

                    {showCities && data.destination && (
                        <div className="absolute z-10 bg-white border border-gray-100 w-full mt-1 rounded-sm shadow-lg">
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
                <div className="col-span-2">
                    <p className="text-xs text-gray-500">{bookingFields.checkIn.label}</p>
                    <input
                        type="date"
                        className="w-full mt-1 border border-gray-200 rounded-sm px-2 py-2 text-sm"
                        value={data.checkIn}
                        onChange={(e) => setData({ ...data, checkIn: e.target.value })}
                    />
                </div>
                <div className="col-span-2">
                    <p className="text-xs text-gray-500">{bookingFields.checkOut.label}</p>
                    <input
                        type="date"
                        className="w-full mt-1 border border-gray-200 rounded-sm px-2 py-2 text-sm"
                        value={data.checkOut}
                        onChange={(e) => setData({ ...data, checkOut: e.target.value })}
                    />
                </div>
                <div className="col-span-3 relative">
                    <p className="text-xs text-gray-500">{bookingFields.guests.label}</p>
                    <div
                        className="border border-gray-200 whitespace-nowrap rounded-sm px-2 py-2 text-sm mt-1 cursor-pointer"
                        onClick={() => setShowGuests(!showGuests)}
                    >
                        {data.adults} adults, {data.rooms} rooms
                    </div>

                    {/* Guests Dropdown */}
                    {showGuests && (
                        <div className="absolute z-50 bg-white border border-gray-100 rounded-md shadow-xl p-4 mt-2 w-72">

                            {/* Rooms */}
                            <GuestCounter
                                label="Rooms"
                                value={data.rooms}
                                onChange={(val) => setData({ ...data, rooms: val })}
                                min={1}
                            />

                            {/* Adults */}
                            <GuestCounter
                                label="Adults"
                                value={data.adults}
                                onChange={(val) => setData({ ...data, adults: val })}
                                min={1}
                            />

                            {/* Children */}
                            <GuestCounter
                                label="Children"
                                value={data.children}
                                onChange={updateChildren}
                                min={0}
                            />

                            {/* Children Ages */}
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
                                                className="border rounded-sm px-2 py-1 text-sm"
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

                <div className="col-span-1">
                    <button className="w-full py-3 bg-orange-600 text-white rounded-lg text-sm">
                        Search
                    </button>
                </div>
            </div>
        </div>
    );
};

/* 🔹 Reusable Counter Component */
const GuestCounter = ({ label, value, onChange, min }) => (
    <div className="flex items-center justify-between mb-3">
        <span className="text-sm">{label}</span>
        <div className="flex items-center gap-3">
            <button
                className="w-6 h-6 border rounded"
                onClick={() => value > min && onChange(value - 1)}
            >−</button>
            <span className="text-sm">{value}</span>
            <button
                className="w-6 h-6 border rounded"
                onClick={() => onChange(value + 1)}
            >+</button>
        </div>
    </div>
);

export default CheckIn;
