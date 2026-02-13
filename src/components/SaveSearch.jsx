import React, { useEffect, useState } from "react";
import Container from "./Container";
import { IoBedOutline, IoSearchOutline } from "react-icons/io5";
import { MdArrowRight } from "react-icons/md";
import Carousel from "react-multi-carousel";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "react-multi-carousel/lib/styles.css";

const SaveSearch = () => {

    const [loading, setLoading] = useState(true);

    const hotelDeals = [
        {
            id: 1,
            location: "London, England, United Kingdom",
            checkIn: "Tue 5/5",
            checkOut: "Wed 5/6",
            rooms: "3 rooms, 3 guests",
            price: 17,
            oldPrice: 20
        },
        {
            id: 2,
            location: "Dubai, United Arab Emirates",
            checkIn: "Mon 6/10",
            checkOut: "Tue 6/11",
            rooms: "2 rooms, 4 guests",
            price: 45,
            oldPrice: 60
        }
    ];

    const responsive = {
        desktop: { breakpoint: { max: 3000, min: 1400 }, items: 4 },
        laptop: { breakpoint: { max: 1400, min: 1024 }, items: 3 },
        tablet: { breakpoint: { max: 1024, min: 640 }, items: 2 },
        mobile: { breakpoint: { max: 640, min: 0 }, items: 1 }
    };

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);

    return (
        <section className="w-full py-10">
            <Container className="flex flex-col w-full gap-5">

                <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
                    Your recent searches
                </h1>

                <Carousel
                    responsive={responsive}
                    infinite
                    arrows={false}
                    itemClass="px-2"
                >

                    {(loading ? Array(hotelDeals.length).fill({}) : hotelDeals).map((item, index) => (

                        <div
                            key={index}
                            className="h-[250px] border border-gray-100 bg-white rounded-xl flex flex-col gap-4 py-6 px-6"
                        >

                            {/* Location */}
                            <div className="flex items-start gap-2">
                                <span className="text-2xl bg-gray-700 text-white p-2 rounded-full">
                                    <IoBedOutline />
                                </span>

                                <p className="text-lg font-semibold text-gray-700">
                                    {loading ? <Skeleton width={180} /> : item.location}
                                </p>
                            </div>

                            {/* Dates */}
                            <div className="flex flex-col gap-1">

                                <li className="flex text-sm text-gray-500 font-semibold items-center gap-2">
                                    {loading ? (
                                        <Skeleton width={150} />
                                    ) : (
                                        <>
                                            {item.checkIn} <MdArrowRight /> {item.checkOut}
                                        </>
                                    )}
                                </li>

                                <li className="flex text-sm text-gray-500 font-semibold">
                                    {loading ? <Skeleton width={120} /> : item.rooms}
                                </li>

                            </div>

                            {/* Price */}
                            <div className="flex justify-between items-center">
                                <div>
                                    <h1 className="text-xl font-semibold">
                                        {loading ? <Skeleton width={60} /> : `$${item.price}`}
                                    </h1>

                                    <p className="text-sm text-gray-400 line-through">
                                        {loading ? <Skeleton width={80} /> : `Was $${item.oldPrice}`}
                                    </p>
                                </div>

                                <button className="h-12 w-12 rounded-md bg-orange-600 text-white text-2xl flex items-center justify-center">
                                    <IoSearchOutline />
                                </button>
                            </div>

                        </div>
                    ))}

                </Carousel>

            </Container>
        </section>
    );
};

export default SaveSearch;
