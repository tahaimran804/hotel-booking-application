import React, { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const MAX_MONTHS = 11;

const priceColors = {
    cheap: "bg-green-200",
    average: "bg-orange-200",
    high: "bg-red-200",
};

const getRandomPrice = () => {
    const types = ["cheap", "average", "high"];
    return types[Math.floor(Math.random() * 3)];
};

const PriceCalendar = ({ data, setData, close }) => {

    const today = new Date();
    const [monthOffset, setMonthOffset] = useState(0);

    const [checkIn, setCheckIn] = useState(
        data.checkIn ? new Date(data.checkIn) : null
    );
    const [checkOut, setCheckOut] = useState(
        data.checkOut ? new Date(data.checkOut) : null
    );

    const generateMonth = (offset) => {

        const base = new Date(
            today.getFullYear(),
            today.getMonth() + offset,
            1
        );

        const days = new Date(
            base.getFullYear(),
            base.getMonth() + 1,
            0
        ).getDate();

        const dates = [];

        for (let i = 1; i <= days; i++) {
            dates.push({
                date: new Date(base.getFullYear(), base.getMonth(), i),
                day: i,
                price: getRandomPrice(),
            });
        }

        return {
            name: base.toLocaleString("default", { month: "long" }),
            year: base.getFullYear(),
            dates,
        };
    };

    const handleSelect = (date) => {

        if (!checkIn || (checkIn && checkOut)) {
            setCheckIn(date);
            setCheckOut(null);
        } else if (date > checkIn) {
            setCheckOut(date);

            setData({
                ...data,
                checkIn: checkIn.toISOString().split("T")[0],
                checkOut: date.toISOString().split("T")[0],
            });

            close();
        }
    };

    const Month = ({ month }) => (
        <div>
            <h3 className="text-center font-semibold mb-3">
                {month.name} {month.year}
            </h3>

            <div className="grid max-[430px]:grid-cols-5 grid-cols-7 gap-2">
                {month.dates.map((d, i) => {
                    const isPast = d.date < new Date(today.setHours(0, 0, 0, 0));
                    const selected =
                        d.date.toDateString() === checkIn?.toDateString() ||
                        d.date.toDateString() === checkOut?.toDateString();
                    return (
                        <div
                            key={i}
                            onClick={() => !isPast && handleSelect(d.date)}
                            className={`h-8 w-8 flex items-center justify-center text-sm rounded
                ${priceColors[d.price]}
                ${selected && "ring-2 ring-black"}
                ${isPast && "opacity-40 cursor-not-allowed"}
                ${!isPast && "cursor-pointer hover:scale-105 transition"}
              `}
                        >
                            {d.day}
                        </div>
                    );
                })}
            </div>
        </div>
    );
    return (
        <div className="absolute top-full mt-3 max-[430px]:w-full w-92 md:w-140 bg-white shadow-xl border border-gray-200 rounded-md py-4 px-4 z-20">
            <div className="flex justify-between mb-4">
                <button
                    disabled={monthOffset === 0}
                    onClick={() => setMonthOffset(monthOffset - 1)}
                    className="p-2 rounded cursor-pointer hover:bg-gray-100 disabled:opacity-30"
                >
                    <IoIosArrowBack size={20} />
                </button>
                <button
                    disabled={monthOffset >= MAX_MONTHS}
                    onClick={() => setMonthOffset(monthOffset + 1)}
                    className="p-2 rounded cursor-pointer hover:bg-gray-100 disabled:opacity-30"
                >
                    <IoIosArrowForward size={20} />
                </button>
            </div>
            <div className="flex gap- md:gap-8 gap-4 md:flex-row flex-col">
                <Month month={generateMonth(monthOffset)} />
                <Month month={generateMonth(monthOffset + 1)} />
            </div>
            <div className="flex gap-3 mt-4 max-[500px]:flex-wrap items-start text-sm">
                <span className="bg-green-200 px-3 py-1 rounded">Cheaper</span>
                <span className="bg-orange-200 px-3 py-1 rounded">Average</span>
                <span className="bg-red-200 px-3 py-1 rounded">Higher</span>
            </div>
        </div>
    );
};

export default PriceCalendar;
