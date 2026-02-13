import React from "react";
import Slider from "react-slick";
import { FaHeart } from "react-icons/fa";
import { hotelsData } from "../Data/Data";
import RatingStar from "../components/RatingStar";
import { IoIosStar } from "react-icons/io";

const HotelsList = () => {

    const sliderSettings = {
        autoplay: false,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        infinite: true,
        speed: 500,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div className="flex flex-col pb-20 gap-2">
            {hotelsData.map((hotel) => (
                <div
                    key={hotel.id}
                    className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition 
                    grid grid-cols-12"
                >
                    <div className="col-span-12 sm:col-span-3">
                        <Slider {...sliderSettings}>
                            {hotel.images.map((img, index) => (
                                <img
                                    key={index}
                                    src={img}
                                    alt="hotel"
                                    className="w-full cursor-grab h-[220px] object-cover"
                                />
                            ))}
                        </Slider>
                    </div>
                    <div className="max-[450px]:col-span-12 col-span-6 sm:col-span-6 cursor-pointer flex flex-col gap-2 p-4">
                        <div className="flex justify-between items-start">
                            <h2 className="text-xl hover:underline font-semibold">
                                {hotel.name}
                            </h2>

                            <FaHeart className="text-gray-400 cursor-pointer hover:text-red-500 transition" />
                        </div>

                        {/* Stars */}
                        <RatingStar item={hotel} />

                        <p className="text-sm text-gray-600">
                            {hotel.distance}
                        </p>

                        <div className="flex items-center gap-2">
                            <span className="font-semibold">
                                {hotel.rating}
                            </span>
                            <span className="text-sm text-gray-500">
                                {hotel.reviews} reviews
                            </span>
                        </div>

                        <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded w-fit">
                            {hotel.tag}
                        </span>
                    </div>

                    <div className="max-[450px]:col-span-12 col-span-6 sm:col-span-3 border-gray-300 sm:border-l p-4 flex flex-col justify-between">

                        <div>
                            <p className="text-sm text-red-500">
                                Our cheapest price
                            </p>

                            <h2 className="text-2xl font-bold">
                                Rs {hotel.price.toLocaleString()}
                            </h2>

                            <p className="text-sm text-gray-500">a night</p>

                            <p className="text-blue-600 font-medium mt-2">
                                {hotel.provider}
                            </p>

                            <p className="text-sm text-gray-600">
                                {hotel.cancellation}
                            </p>
                        </div>

                        <button className="bg-orange-600 cursor-pointer text-white py-2 rounded-lg hover:bg-orange-600/90 transition">
                            Go to site
                        </button>

                    </div>

                </div>
            ))}
        </div>
    );
};

export default HotelsList;
