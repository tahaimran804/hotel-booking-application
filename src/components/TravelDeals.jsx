import React, { useState, useEffect } from "react";
import Container from "./Container";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { IoStar } from "react-icons/io5";

const TravelDeals = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [slidesToShow, setSlidesToShow] = useState(4);

    const hotelDeals = [
        {
            id: 1,
            image: "/hotel1.jpg",
            name: "Dubai",
            countryName: "United Arab Emirates",
            fromText: "From",
            stayPrice: "Rs 5,867",
            perNight: "a night",
            rating: 4.8,
            reviews: "2,340 reviews",
        },
        {
            id: 2,
            image: "/hotel2.jpg",
            name: "Istanbul",
            countryName: "Turkey",
            fromText: "From",
            stayPrice: "Rs 4,120",
            perNight: "a night",
            rating: 4.6,
            reviews: "1,890 reviews",
        },
        {
            id: 3,
            image: "/hotel3.jpg",
            name: "Paris",
            countryName: "France",
            fromText: "From",
            stayPrice: "Rs 9,450",
            perNight: "a night",
            rating: 4.9,
            reviews: "3,120 reviews",
        },
        {
            id: 4,
            image: "/hotel4.jpg",
            name: "Kuala Lumpur",
            countryName: "Malaysia",
            fromText: "From",
            stayPrice: "Rs 3,980",
            perNight: "a night",
            rating: 4.5,
            reviews: "1,420 reviews",
        },
        {
            id: 5,
            image: "/hotel5.jpg",
            name: "Riyadh",
            countryName: "Saudi Arabia",
            fromText: "From",
            stayPrice: "Rs 6,300",
            perNight: "a night",
            rating: 4.7,
            reviews: "980 reviews",
        },
    ];

    useEffect(() => {
        const updateSlides = () => {
            if (window.innerWidth < 550) setSlidesToShow(1);
            else if (window.innerWidth < 800) setSlidesToShow(2);
            else if (window.innerWidth < 1200) setSlidesToShow(2);
            else setSlidesToShow(4);
        };
        updateSlides();
        window.addEventListener("resize", updateSlides);
        return () => window.removeEventListener("resize", updateSlides);
    }, []);

    const nextSlide = () => {
        if (currentSlide < hotelDeals.length - slidesToShow) {
            setCurrentSlide(currentSlide + 1);
        }
    };

    const prevSlide = () => {
        if (currentSlide > 0) {
            setCurrentSlide(currentSlide - 1);
        }
    };

    return (
        <section className="w-full py-10 bg-gray-50">
            <Container className="flex flex-col w-full items-end justify-end gap-5">
                <div className="flex w-full items-center justify-between">
                    <div className="flex flex-col gap-2 max-w-2xl">
                        <h1 className="text-2xl md:text-3xl font-semibold text-gray-900">
                            Travel deals under $230
                        </h1>

                        <p className="text-sm md:text-base text-gray-600">
                            The key to a great city break is a perfectly placed stay.
                        </p>
                    </div>

                    <button className="text-sm hidden lg:flex font-semibold items-center gap-1 hover:bg-[#E6EBEF] duration-300 cursor-pointer px-6 py-2 rounded-md">
                        Explore More <IoIosArrowForward />
                    </button>
                </div>

                <div className="overflow-hidden w-full">
                    <div
                        className="flex py-5 transition-transform duration-500"
                        style={{
                            transform: `translateX(-${currentSlide * (100 / slidesToShow)}%)`,
                        }}
                    >
                        {hotelDeals.map((item) => (
                            <div
                                key={item.id}
                                className="px-2 flex-shrink-0"
                                style={{ width: `${100 / slidesToShow}%` }}
                            >
                                <div className="bg-white cursor-pointer rounded-xl overflow-hidden shadow-sm hover:shadow-md duration-300">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-full h-56 object-cover"
                                    />

                                    <div className="p-4">
                                        <h2 className="text-lg font-semibold">{item.name}</h2>
                                        <p className="text-sm text-gray-500">{item.countryName}</p>

                                        <div className="mt-2">
                                            <span className="text-sm text-gray-500">
                                                {item.fromText}
                                            </span>{" "}
                                            <span className="text-lg font-semibold">
                                                {item.stayPrice}
                                            </span>
                                            <span className="text-sm text-gray-500">
                                                {item.perNight}
                                            </span>
                                        </div>

                                        <p className="text-sm flex items-center gap-2 text-gray-600 mt-1">
                                            <span className="text-yellow-600"><IoStar /></span> {item.rating} · {item.reviews}
                                        </p>
                                    </div>

                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="lg:hidden flex items-center w-full justify-between">
                    <button className="text-sm lg:hidden flex font-semibold items-center gap-1 hover:bg-[#E6EBEF] duration-300 cursor-pointer px-6 py-2 rounded-md">
                        Explore More <IoIosArrowForward />
                    </button>

                    <div className="flex gap-2 ">
                        <button
                            onClick={prevSlide}
                            disabled={currentSlide === 0}
                            className={`w-9 h-9 rounded-full flex items-center justify-center border border-gray-300 ${currentSlide === 0
                                ? "text-gray-300 cursor-not-allowed"
                                : "text-black hover:bg-gray-100 cursor-pointer"
                                }`}
                        >
                            <IoIosArrowBack />
                        </button>

                        <button
                            onClick={nextSlide}
                            disabled={currentSlide >= hotelDeals.length - slidesToShow}
                            className={`w-9 h-9 rounded-full flex items-center justify-center border border-gray-300 ${currentSlide >= hotelDeals.length - slidesToShow
                                ? "text-gray-300 cursor-not-allowed"
                                : "text-black hover:bg-gray-100 cursor-pointer"
                                }`}
                        >
                            <IoIosArrowForward />
                        </button>
                    </div>
                </div>

                <div className="lg:flex hidden items-end justify-end gap-2 w-full ">
                    <button
                        onClick={prevSlide}
                        disabled={currentSlide === 0}
                        className={`w-9 h-9 rounded-full flex items-center justify-center border border-gray-300 ${currentSlide === 0
                            ? "text-gray-300 cursor-not-allowed"
                            : "text-black hover:bg-gray-100 cursor-pointer"
                            }`}
                    >
                        <IoIosArrowBack />
                    </button>

                    <button
                        onClick={nextSlide}
                        disabled={currentSlide >= hotelDeals.length - slidesToShow}
                        className={`w-9 h-9 rounded-full flex items-center justify-center border border-gray-300 ${currentSlide >= hotelDeals.length - slidesToShow
                            ? "text-gray-300 cursor-not-allowed"
                            : "text-black hover:bg-gray-100 cursor-pointer"
                            }`}
                    >
                        <IoIosArrowForward />
                    </button>
                </div>
            </Container>
        </section>
    );
};

export default TravelDeals;
