import React from 'react'
import Container from './Container'
import { IoStar } from "react-icons/io5";

const WhyChooseUs = () => {
    const Data = [
        {
            id: 1,
            images: [
                {
                    id: 1,
                    alt: "HYATT",
                    img: "HYATT.png"
                },
                {
                    id: 2,
                    alt: "IHG",
                    img: "IHG.png"
                },
                {
                    id: 3,
                    alt: "MARRIOTT",
                    img: "MARRIOTT.png"
                },
                {
                    id: 4,
                    alt: "PRICELINE",
                    img: "PRICELINE.png"
                },
                {
                    id: 5,
                    alt: "CHOICE",
                    img: "CHOICE.png"
                },
            ],
            title: "Save when you compare",
            desc: "More deals. More sites. One search.",
        },
        {
            id: 2,
            title: "41,000,000+",
            images: [
                {
                    id: 1,
                    alt: "avatar 1",
                    img: "avatar-1.png"
                },
                {
                    id: 2,
                    alt: "avatar 2",
                    img: "avatar-2.png"
                },
                {
                    id: 3,
                    alt: "avatar 3",
                    img: "avatar-3.png"
                },
            ],
            desc: "searches this week",
        },
        {
            id: 2,
            title: "Travelers love us",
            ratingStar: [
                {
                    id: 1,
                    icon: <IoStar />
                },
                {
                    id: 2,
                    icon: <IoStar />
                },
                {
                    id: 3,
                    icon: <IoStar />
                },
                {
                    id: 4,
                    icon: <IoStar />
                },
                {
                    id: 5,
                    icon: <IoStar />
                },
            ],
            desc: "1M+ ratings on our app",
        }
    ]



    return (
        <Container>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-start gap-2 w-full px-0 lg:px-4 py-10'>
                {Data.map((ElemItem) => {
                    return (
                        <div className='flex flex-col items-start justify-between gap-2 py-6 px-5 w-full h-44 rounded-3xl overflow-y-scroll no_scrollBar border border-gray-200'>
                            {ElemItem.images ? (
                                <div className="flex items-center">
                                    {ElemItem.images?.map((item, index) => (
                                        <img
                                            key={item.id}
                                            src={item.img}
                                            alt={item.alt}
                                            className={`w-12 bg-white h-12 rounded-full border-2 border-gray-100 ${index !== 0 ? "-ml-3" : ""}`} />
                                    ))}
                                </div>
                            ) : (
                                <div className='flex items-center gap-1'>
                                    {ElemItem.ratingStar.map((item) => (
                                        <span key={item.id} className='text-2xl text-yellow-500'>{item.icon}</span>
                                    ))}
                                </div>
                            )}


                            <div className='flex flex-col items-start'>
                                <h1 style={{
                                    fontFamily: "'Roboto', sans-serif"
                                }} className='text-2xl font-semibold '>{ElemItem.title}</h1>
                                <p className='text-sm font-normal text-gray-600'>{ElemItem.desc}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </Container>
    )
}

export default WhyChooseUs