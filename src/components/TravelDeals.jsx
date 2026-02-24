import React, { useState, useEffect } from "react";
import Container from "./Container";
import city1 from "../assets/london.webp";
import city2 from "../assets/newYork.jpg";
import city3 from "../assets/rome.webp";
import city4 from "../assets/amsterdam.webp";
import city5 from "../assets/paris.webp";

const travelDealsData = [
    {
        id: 1,
        name: "London",
        avgPrice: "$233 Avg.",
        image: city1,
        dates: "Thu, 26 Feb - Thu, 5 Mar",
    },
    {
        id: 2,
        name: "New York",
        avgPrice: "$250 Avg.",
        image: city2,
        dates: "Thu, 26 Feb - Thu, 5 Mar",
    },
    {
        id: 3,
        name: "Rome",
        avgPrice: "$195 Avg.",
        image: city3,
        dates: "Thu, 26 Feb - Thu, 5 Mar",
    },
    {
        id: 4,
        name: "Amsterdam",
        avgPrice: "$220 Avg.",
        image: city4,
        dates: "Thu, 26 Feb - Thu, 5 Mar",
    },
    {
        id: 5,
        name: "Paris",
        avgPrice: "$220 Avg.",
        image: city5,
        dates: "Thu, 26 Feb - Thu, 5 Mar",
    },
];

const TravelDeals = () => {
    return (
        <section className="w-full pt-8 pb-14">
            <Container className="flex flex-col gap-10">
                <div className="flex flex-col gap-3 max-w-3xl">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                        Popular Destinations
                    </h1>
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                        Explore trending cities around the world and discover the best city
                        deals for your upcoming stay. Compare prices and book with confidence.
                    </p>
                </div>

                <div className="flex flex-col gap-2 w-full">
                    <div className="grid grid-cols-10 gap-2 w-full">
                        <div className="relative group max-[450px]:col-span-10 col-span-4 overflow-hidden rounded-sm cursor-pointer">
                            <img
                                src={travelDealsData[0].image}
                                alt={travelDealsData[0].name}
                                className="w-full max-[480px]:h-[280px] h-[320px] object-cover group-hover:scale-105 transition duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

                            <div className="absolute bottom-4 px-4 text-[var(--accent-color)] flex flex-col w-full">
                                <h2 className="text-2xl font-bold">
                                    {travelDealsData[0].name}
                                </h2>
                                <p className="text-xs opacity-90">
                                    {travelDealsData[0].dates}
                                </p>
                                <p className="text-lg font-semibold">
                                    {travelDealsData[0].avgPrice}
                                </p>
                                <button className="mt-2 bg-[var(--accent-color)] w-full text-black text-sm font-semibold px-4 py-2 rounded-md hover:bg-gray-200 transition">
                                    Find Hotels
                                </button>
                            </div>
                        </div>
                        <div className="relative group max-[450px]:col-span-10 col-span-6 overflow-hidden rounded-sm cursor-pointer">
                            <img
                                src={travelDealsData[1].image}
                                alt={travelDealsData[1].name}
                                className="w-full max-[480px]:h-[280px] h-[320px] object-cover group-hover:scale-105 transition duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                            <div className="absolute bottom-4 w-full px-4 text-[var(--accent-color)]">
                                <h2 className="text-2xl font-bold">
                                    {travelDealsData[1].name}
                                </h2>
                                <p className="text-xs opacity-90">
                                    {travelDealsData[1].dates}
                                </p>
                                <p className="text-lg font-semibold">
                                    {travelDealsData[1].avgPrice}
                                </p>

                                <button className="mt-2 bg-[var(--accent-color)] w-full text-black text-sm font-semibold px-4 py-2 rounded-md hover:bg-gray-200 transition">
                                    Find Hotels
                                </button>
                            </div>
                        </div>

                    </div>
                    <div className="grid max-[480px]:grid-cols-2 grid-cols-3 gap-2 w-full">
                        {travelDealsData.slice(2).map((city) => (
                            <div
                                key={city.id}
                                className="relative group overflow-hidden rounded-sm cursor-pointer"
                            >
                                <img
                                    src={city.image}
                                    alt={city.name}
                                    className="w-full h-[240px] object-cover group-hover:scale-105 transition duration-500"
                                />

                                <div className="absolute inset-0 bg-black/60"></div>

                                <div className="absolute bottom-4 px-4 w-full text-[var(--accent-color)]">
                                    <h3 className="font-semibold text-lg">{city.name}</h3>
                                    <p className="text-xs opacity-90">{city.dates}</p>
                                    <p className="text-sm font-medium">{city.avgPrice}</p>
                                    <button className="mt-2 bg-[var(--accent-color)] w-full text-black text-sm font-semibold px-4 py-2 rounded-md hover:bg-gray-200 transition">
                                        Find Hotels
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </Container>
        </section >
    );
};

export default TravelDeals;