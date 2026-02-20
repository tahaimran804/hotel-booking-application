import React from 'react'
import Container from './Container'
import { Link } from 'react-router-dom'
import { FaFacebook, FaYoutube, FaInstagram } from 'react-icons/fa'
import { FaXTwitter } from "react-icons/fa6";
import PlayStore from "../assets/playstore-android.svg"
import AppStore from "../assets/app-store.svg"

const Footer = () => {

    const footerData = [
        {
            title: "Company",
            links: ["About", "Careers", "Blog", "How we work", "Press"]
        },
        {
            title: "Support",
            links: ["Help Center", "Safety Information", "Cancellation Options", "Contact Us"]
        },
        {
            title: "Discover",
            links: ["Travel Guides", "Airport Transfers", "Hotel Deals", "Seasonal Offers"]
        },
        {
            title: "Legal",
            links: ["Privacy Policy", "Terms & Conditions", "Cookie Policy", "Security"]
        }
    ]

    return (
        <footer className="bg-[var(--primary-color)] border-t border-gray-200">
            <div className="bg-gray-100 text-black py-10">
                <Container>
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6">

                        <div>
                            <h2 className="text-2xl font-bold">
                                Save Time, Save Money!
                            </h2>
                            <p className="text-sm opacity-90">
                                Sign up and get the best travel deals.
                            </p>
                        </div>

                        <div className="flex w-full md:w-auto">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="px-4 py-3 w-full md:w-[280px] bg-white border border-gray-200 rounded-l-full text-black outline-none"
                            />
                            <button className="border cursor-pointer bg-[var(--primary-color)] border-gray-200 text-[var(--accent-color)] text-sm px-6 py-3 rounded-r-full font-semibold transition">
                                Subscribe
                            </button>
                        </div>

                    </div>
                </Container>
            </div>


            <Container>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 py-14">

                    <div className="col-span-2 lg:col-span-1">
                        <h2 className="text-[var(--accent-color)] text-xl font-bold mb-3">
                            Travel Booking
                        </h2>

                        <p className="text-[var(--accent-color)] text-sm leading-relaxed">
                            Compare hotel prices and find the best deals worldwide.
                            Making travel planning easier and smarter.
                        </p>

                        <div className="flex gap-3 mt-5">
                            <img
                                src={PlayStore}
                                alt="playstore"
                                className="h-11 cursor-pointer hover:scale-105 transition"
                            />

                            <img
                                src={AppStore}
                                alt="appstore"
                                className="h-11 cursor-pointer hover:scale-105 transition"
                            />
                        </div>
                    </div>

                    {footerData.map((section, index) => (
                        <div key={index}>
                            <h3 className="text-[var(--accent-color)] font-semibold mb-4 uppercase text-sm">
                                {section.title}
                            </h3>

                            <ul className="flex flex-col gap-2 text-sm">
                                {section.links.map((link, i) => (
                                    <li key={i}>
                                        <Link
                                            to="#"
                                            className="text-[var(--accent-color)] hover:text-[var(--accent-color)]/70 transition"
                                        >
                                            {link}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                </div>
            </Container>


            <div className="bg-[var(--primary-color)] border-t border-gray-600 text-white py-6">
                <Container>
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">

                        <div className="flex gap-3">
                            {[FaFacebook, FaXTwitter, FaYoutube, FaInstagram].map((Icon, index) => (
                                <div
                                    key={index}
                                    className="bg-[var(--accent-color)]  text-[var(--primary-color)] p-3 rounded-full cursor-pointer transition">
                                    <Icon size={18} />
                                </div>
                            ))}
                        </div>

                        <p className="text-sm text-[var(--accent-color)] text-center">
                            © 2026 Kayak Booking. All rights reserved.
                        </p>

                    </div>
                </Container>
            </div>

        </footer>
    )
}

export default Footer
