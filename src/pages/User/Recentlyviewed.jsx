import React from "react";
import { IoSearchOutline, IoLocationOutline } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";
import { MdDateRange } from "react-icons/md";
import HotelImage1 from "../../assets/HotelImage1.jpg"
import HotelImage2 from "../../assets/HotelImage2.jpg"
import HotelImage3 from "../../assets/HotelImage3.jpg"


const RecentlyViewed = () => {

    const recentData = [
        {
            id: 1,
            name: "Grand Royal Hotel",
            location: "London, United Kingdom",
            date: "12 May - 15 May",
            price: "$120 / night",
            image: HotelImage1
        },
        {
            id: 2,
            name: "Palm Resort & Spa",
            location: "Dubai, UAE",
            date: "20 June - 25 June",
            price: "$210 / night",
            image: HotelImage2
        },
        {
            id: 3,
            name: "Ocean View Inn",
            location: "Maldives",
            date: "5 July - 10 July",
            price: "$350 / night",
            image: HotelImage3
        }
    ];

    return (
        <div className="lg:py-10 flex flex-col items-start gap-6 w-full">

            <h1
                className="text-2xl font-bold text-[var(--text-color)]"
                style={{ fontFamily: "'Roboto', sans-serif" }}
            >
                Recently Viewed
            </h1>

            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 w-full">
                {recentData.map((item) => (
                    <div
                        key={item.id}
                        className="border border-[var(--border-color)] 
                        bg-[var(--card-bg-color)] 
                        cursor-pointer
                        rounded-xl overflow-hidden 
                        h-80 w-full
                        flex flex-col items-start
                        shadow-sm hover:shadow-lg transition duration-300"
                    >
                        <div className="border-b border-gray-100 h-48 w-full">
                            <img
                                src={item.image}
                                alt={item.name}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <div className="p-4 w-full relative flex flex-col gap-1">
                            <h2 className="text-lg font-semibold text-[var(--text-color)]">
                                {item.name}
                            </h2>

                            <div className="flex items-center gap-2 text-sm text-[var(--muted-text-color)]">
                                <IoLocationOutline />
                                {item.location}
                            </div>

                            <div className="flex items-center gap-2 text-sm text-[var(--muted-text-color)]">
                                <MdDateRange />
                                {item.date}
                            </div>

                            <div className="flex justify-between items-center mt-3">
                                <button className="h-9 w-9 rounded-full 
                                bg-[var(--primary-color)] 
                                text-[var(--accent-color)] 
                                absolute top-2 right-2
                                cursor-pointer
                                flex items-center justify-center 
                                hover:opacity-90 transition">
                                    <IoSearchOutline />
                                </button>

                            </div>

                        </div>
                    </div>
                ))}
            </section>
        </div>
    );
};

export default RecentlyViewed;
