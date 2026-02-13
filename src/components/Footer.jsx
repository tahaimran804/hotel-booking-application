import React from 'react'
import Container from './Container'
import { Link } from 'react-router-dom'
import { FaFacebook, FaYoutube, FaInstagram } from 'react-icons/fa'
import { FaXTwitter } from "react-icons/fa6";
import PlayStore from "../assets/playstore-android.svg"
import AppStore from "../assets/app-store.svg"
const Footer = () => {

    const companyLinks = [
        {
            id: 1,
            name: "About",
            url: "/about-us"
        },
        {
            id: 2,
            name: "Careers",
            url: "#"
        },
        {
            id: 3,
            name: "Mobile",
            url: "#"
        },
        {
            id: 4,
            name: "Blog",
            url: "/blog"
        },
        {
            id: 5,
            name: "How we work",
            url: "#"
        }
    ]
    const contactLinks = [
        {
            id: 1,
            name: "Help/FAQ",
            url: "#"
        },
        {
            id: 2,
            name: "Press",
            url: "#"
        },
        {
            id: 3,
            name: "Affiliates",
            url: "#"
        },
        {
            id: 4,
            name: "Hotel owners",
            url: "#"
        },
        {
            id: 5,
            name: "Partners",
            url: "#"
        },
        {
            id: 6,
            name: "Advertise with us",
            url: "#"
        }
    ]
    const moreLinks = [
        {
            id: 1,
            name: "Airline fees",
            url: "#"
        },
        {
            id: 2,
            name: "Airlines",
            url: "#"
        },
        {
            id: 3,
            name: "Low fare tips",
            url: "#"
        },
        {
            id: 4,
            name: "Badges & Certificates",
            url: "#"
        },
        {
            id: 5,
            name: "Security",
            url: "#"
        },
    ]
    const resourcesLink = [
        { id: 1, name: "Guides", url: "#" },
        { id: 2, name: "Tips & Tricks", url: "#" },
        { id: 3, name: "Travel Blog", url: "#" },
        { id: 4, name: "Customer Stories", url: "#" },
    ]

    return (
        <div className='border-t border-gray-100'>
            <Container>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2 items-start border-b border-[#ccc] py-10 ">
                    <div className="border-gray-200 border-b pb-2 sm:border-0 ">
                        <h1 style={{
                            fontFamily: "'Roboto', sans-serif"
                        }} className="text-[#212A30] text-[14px] font-bold  mt-2">
                            Company
                        </h1>
                        <ul className="text-[#192024] flex flex-col gap-2 mt-3 text-[14px] capitalize">
                            {companyLinks.map((item) => (
                                <Link to={item.url} key={item.id}>
                                    <li className="underline text-sm font-normal">{item.name}</li>
                                </Link>
                            ))}
                        </ul>
                    </div>
                    <div className="border-gray-200 border-b pb-2 sm:border-0 ">
                        <h1 style={{
                            fontFamily: "'Roboto', sans-serif"
                        }} className="text-[#212A30] text-[14px] font-bold  mt-2">
                            Contact
                        </h1>
                        <ul className="text-[#192024] flex flex-col gap-2 mt-3 text-[14px] capitalize">
                            {contactLinks.map((item) => (
                                <Link to={item.url} key={item.id}>
                                    <li className="underline text-sm font-normal">{item.name}</li>
                                </Link>
                            ))}
                        </ul>
                    </div>
                    <div className="border-gray-200 border-b pb-2 sm:border-0 ">
                        <h1 style={{
                            fontFamily: "'Roboto', sans-serif"
                        }} className="text-[#212A30] text-[14px] font-bold  mt-2">More</h1>
                        <ul className="text-[#192024] flex flex-col gap-2 mt-3 text-[14px] capitalize">
                            {moreLinks.map((item) => (
                                <Link to={item.url} key={item.id}>
                                    <li className="underline text-sm font-normal">{item.name}</li>
                                </Link>
                            ))}
                        </ul>
                    </div>
                    <div className="border-gray-200 border-b pb-2 sm:border-0 ">
                        <h1 className="text-[#212A30] text-[14px] font-bold mt-2" style={{ fontFamily: "'Roboto', sans-serif" }}>
                            Resources
                        </h1>
                        <ul className="text-[#192024] flex flex-col gap-2 mt-3 text-[14px] capitalize">
                            {resourcesLink.map((item) => (
                                <Link to={item.url} key={item.id}>
                                    <li className="underline text-sm font-normal">{item.name}</li>
                                </Link>
                            ))}
                        </ul>
                    </div>

                    <div className="border-gray-200 border-b pb-2 sm:border-0 ">
                        <h1 style={{
                            fontFamily: "'Roboto', sans-serif"
                        }} className="text-[#212A30] text-[14px] font-bold  mt-2">
                            Get the KAYAK app
                        </h1>
                        <ul className="text-[#192024] flex items-center gap-2 mt-3 text-[14px] capitalize">
                            <Link to={"#"}>
                                <li className="w-10 h-12">
                                    <img className='w-full h-full' src={PlayStore} alt="Google play store" />
                                </li>
                            </Link>
                            <Link to={"#"}>
                                <li className="w-10 h-12">
                                    <img className='w-full h-full' src={AppStore} alt="App store" />
                                </li>
                            </Link>
                        </ul>
                    </div>
                </div>

                <div className="pt-4 pb-10 mt-1">
                    <div className="flex gap-2 flex-col-reverse sm:flex-row items-strart sm:items-center justify-between">
                        <div className="flex flex-wrap items-start gap-4 text-[#192024] text-[14px] capitalize">
                            <h5>©2026 KAYAK</h5>

                            <div className='flex items-center gap-4'>
                                {[
                                    { id: 1, name: "Privacy", url: "#" },
                                    { id: 1, name: "Terms & Conditions", url: "#" },
                                    { id: 1, name: "Ad Choices", url: "#" }
                                ].map((item) => (
                                    <>
                                        <Link to={item.url} key={item.id}>
                                            <li className="underline list-none text-sm font-normal">{item.name}</li>
                                        </Link>
                                    </>
                                ))}
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="cursor-pointer p-2.5 rounded-sm hover:bg-[#F3F3F9] ">
                                <FaFacebook size={20} />
                            </div>
                            <div className="cursor-pointer p-2.5 rounded-sm hover:bg-[#F3F3F9] ">
                                <FaXTwitter size={20} />
                            </div>
                            <div className="cursor-pointer p-2.5 rounded-sm hover:bg-[#F3F3F9] ">
                                <FaYoutube size={20} />
                            </div>
                            <div className="cursor-pointer p-2.5 rounded-sm hover:bg-[#F3F3F9] ">
                                <FaInstagram size={20} />
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Footer