import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { FaHeart } from "react-icons/fa";
import hotelPlaceholder from "../assets/HotelImage.jpg";
import { hotelsData } from "../Data/Data";

const HotelsList = ({ hotels, error, loading }) => {
    const sliderSettings = {
        autoplay: false,
        infinite: true,
        speed: 500,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    if (loading) {
        return (
            <div className="flex flex-col gap-4">
                {[...Array(4)].map((_, i) => (
                    <div
                        key={i}
                        className="animate-pulse bg-white border border-gray-200 rounded-xl p-4 grid grid-cols-12 gap-4"
                    >
                        <div className="col-span-3 bg-gray-200 h-[200px] rounded"></div>

                        <div className="col-span-6 space-y-3">
                            <div className="h-5 bg-gray-200 rounded w-3/4"></div>
                            <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                            <div className="h-4 bg-gray-200 rounded w-1/3"></div>
                        </div>

                        <div className="col-span-3 space-y-3">
                            <div className="h-6 bg-gray-200 rounded w-2/3"></div>
                            <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                            <div className="h-10 bg-gray-200 rounded"></div>
                        </div>
                    </div>
                ))}
            </div>
        );
    }

    if (error) {
        return <p className="text-center py-10 text-red-500">{error}</p>;
    }

    if (!hotels || hotels.length === 0) {
        return <p className="text-center py-10">No Hotels Found</p>;
    }

    return (
        <div className="flex flex-col pb-10 gap-2">
            {hotels.map((hotel) => (
                <div
                    key={hotel.id}
                    className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition grid grid-cols-12"
                >
                    <div className="col-span-12 sm:col-span-3">
                        <Slider {...sliderSettings}>
                            {(hotel.images && hotel.images.length > 0
                                ? hotel.images
                                : [hotelPlaceholder]
                            ).map((img, index) => (
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
                                {hotel.HotelName}
                            </h2>
                            <FaHeart className="text-gray-400 cursor-pointer hover:text-red-500 transition" />
                        </div>

                        <p className="text-sm text-gray-600">
                            {hotel.distance}
                        </p>

                        <div className="flex items-center gap-2">
                            <span className="font-semibold">
                                {hotel.HotelRating}
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
                                Rs {(hotel.price || 0).toLocaleString()}
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
