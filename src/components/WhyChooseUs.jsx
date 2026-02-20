import React, { useState, useEffect } from 'react'
import Container from './Container'
import { IoStar } from "react-icons/io5";
import BusinessPartner1 from "../assets/HYATT.png"
import BusinessPartner2 from "../assets/IHG.png"
import BusinessPartner3 from "../assets/MARRIOTT.png"
import BusinessPartner4 from "../assets/PRICELINE.png"
import BusinessPartner5 from "../assets/CHOICE.png"
import avatar1 from "../assets/avatar-1.png"
import avatar2 from "../assets/avatar-2.png"
import avatar3 from "../assets/avatar-3.png"
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const WhyChooseUs = () => {
    const [loading, setLoading] = useState(true)
    const Data = [
        {
            id: 1,
            images: [
                { id: 1, alt: "HYATT", img: BusinessPartner1 },
                { id: 2, alt: "IHG", img: BusinessPartner2 },
                { id: 3, alt: "MARRIOTT", img: BusinessPartner3 },
                { id: 4, alt: "PRICELINE", img: BusinessPartner4 },
                { id: 5, alt: "CHOICE", img: BusinessPartner5 },
            ],
            title: "Save when you compare",
            desc: "More deals. More sites. One search.",
        },
        {
            id: 2,
            title: "41,000,000+",
            images: [
                { id: 1, alt: "avatar 1", img: avatar1 },
                { id: 2, alt: "avatar 2", img: avatar2 },
                { id: 3, alt: "avatar 3", img: avatar3 },
            ],
            desc: "searches this week",
        },
        {
            id: 3,
            title: "Travelers love us",
            ratingStar: [1, 2, 3, 4, 5],
            desc: "1M+ ratings on our app",
        }
    ]

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 2000);
    }, [])

    return (
        <Container>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 w-full px-0 lg:pr-2 py-5'>
                {(loading ? Array(Data.length).fill({}) : Data).map((ElemItem, index) => (
                    <div
                        key={index}
                        className='flex flex-col items-start justify-between gap-2 py-6 px-5 w-full h-44 rounded-3xl border border-gray-200'
                    >
                        {loading ? (
                            <div className="flex w-full items-center gap-2">
                                <Skeleton circle width={12} height={12} count={3} />
                            </div>

                        ) : ElemItem.images ? (
                            <div className="flex items-center">
                                {ElemItem.images.map((item, index) => (
                                    <img
                                        key={item.id}
                                        src={item.img}
                                        alt={item.alt}
                                        className={`w-12 h-12 rounded-full border-2 border-gray-100 bg-white ${index !== 0 ? "-ml-3" : ""}`}
                                    />
                                ))}
                            </div>
                        ) : (
                            <div className='flex items-center gap-1'>
                                {ElemItem.ratingStar.map((item) => (
                                    <span key={item} className='text-2xl text-yellow-500'>
                                        <IoStar />
                                    </span>
                                ))}
                            </div>
                        )}
                        <div className='flex flex-col items-start w-full'>
                            <h1 className='text-2xl font-semibold'>
                                {loading ? <Skeleton width={180} /> : ElemItem.title}
                            </h1>

                            <p className='text-sm text-gray-600'>
                                {loading ? <Skeleton width={140} /> : ElemItem.desc}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </Container>
    )
}

export default WhyChooseUs
