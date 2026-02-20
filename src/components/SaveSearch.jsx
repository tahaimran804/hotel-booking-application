import React, { useEffect, useState } from "react";
import Container from "./Container";
import { IoArrowForward, IoBedOutline, IoSearchOutline } from "react-icons/io5";
import { MdArrowRight } from "react-icons/md";
import Carousel from "react-multi-carousel";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "react-multi-carousel/lib/styles.css";
import { Link, useNavigate } from "react-router-dom";

const SaveSearch = () => {
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
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
        desktop: { breakpoint: { max: 3000, min: 1400 }, items: 6 },
        laptop: { breakpoint: { max: 1400, min: 1024 }, items: 5 },
        tablet: { breakpoint: { max: 1024, min: 640 }, items: 3 },
        mobile: { breakpoint: { max: 640, min: 0 }, items: 2 },
        minemobile: { breakpoint: { max: 400, min: 0 }, items: 1 }
    };

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);

    return (
        <section className="w-full py-4 sm:py-10">
            <Container className="flex flex-col w-full gap-2">
                <div className="w-full flex items-center justify-between">
                    <h1
                        style={{ fontFamily: "'Roboto', sans-serif" }}
                        className="text-lg md:text-xl font-bold text-[var(--text-color)]"
                    >
                        Your recent searches
                    </h1>
                    <Link to="/profile/search-preferences">
                        <span className="text-sm text-[var(--primary-color)] font-semibold flex items-center gap-1 cursor-pointer">
                            View All <IoArrowForward className="text-lg" />
                        </span>
                    </Link>
                </div>

                <Carousel
                    responsive={responsive}
                    infinite
                    arrows={false}
                    itemClass="pr-2"
                >
                    {(loading ? Array(hotelDeals.length).fill({}) : hotelDeals).map((item, index) => (
                        <div
                            key={index}
                            className="h-[200px] cursor-pointer 
                            border border-[var(--border-color)] 
                            bg-[var(--accent-color)] 
                            rounded-xl flex flex-col gap-4 py-4 px-4"
                        >

                            <div className="flex items-center gap-2">
                                <span className="text-lg bg-[var(--primary-color)] text-[var(--accent-color)] p-2 rounded-full">
                                    <IoBedOutline />
                                </span>

                                <p
                                    style={{ fontFamily: "'Roboto', sans-serif" }}
                                    className="text-sm font-semibold line-clamp-1 w-full text-[var(--text-color)]"
                                >
                                    {loading ? <Skeleton width={180} /> : item.location}
                                </p>
                            </div>

                            <div className="flex flex-col gap-1">
                                <li
                                    style={{ fontFamily: "'Roboto', sans-serif" }}
                                    className="flex text-sm font-semibold items-center gap-2 text-[var(--text-color)]"
                                >
                                    {loading ? (
                                        <Skeleton width={150} />
                                    ) : (
                                        <>
                                            {item.checkIn} <MdArrowRight /> {item.checkOut}
                                        </>
                                    )}
                                </li>

                                <li
                                    style={{ fontFamily: "'Roboto', sans-serif" }}
                                    className="flex text-sm font-semibold text-[var(--text-color)]"
                                >
                                    {loading ? <Skeleton width={120} /> : item.rooms}
                                </li>
                            </div>

                            <div className="flex justify-end w-full items-center mt-auto">
                                <button
                                    style={{ fontFamily: "'Roboto', sans-serif" }}
                                    className="h-10 w-10 rounded-full 
                                    bg-[var(--primary-color)] 
                                    text-[var(--accent-color)] 
                                    text-lg flex items-center justify-center 
                                    transition duration-300 hover:opacity-90"
                                >
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
