import React from 'react'
import Container from '../../components/Container'
import HotelImage1 from "../../assets/HotelImage1.jpg"
import HotelImage2 from "../../assets/HotelImage2.jpg"
import HotelImage3 from "../../assets/HotelImage3.jpg"
import HotelImage4 from "../../assets/HotelImage4.jpg"
import HotelImage5 from "../../assets/HotelImage5.jpg"
import HotelImage6 from "../../assets/HotelImage.jpg"
import { IoStar } from 'react-icons/io5'
import { FaHeart } from 'react-icons/fa'

const favoriteHotelsData = [
    {
        id: 1,
        name: "Hill View Guest House - Family Hotel at Central Location, Near to Airport, Food Street and all Amenities",
        location: "Karachi, Pakistan",
        rating: 4.4,
        reviews: 1,
        date: "Feb 12 - Feb 13",
        guests: "2 adults, 1 room",
        image: HotelImage1
    },
    {
        id: 2,
        name: "Luxury Palace Hotel",
        location: "Lahore, Pakistan",
        rating: 4.6,
        reviews: 12,
        date: "Feb 15 - Feb 16",
        guests: "2 adults, 1 room",
        image: HotelImage2
    },
    {
        id: 3,
        name: "Ocean Breeze Resort",
        location: "Gwadar, Pakistan",
        rating: 4.3,
        reviews: 5,
        date: "Feb 18 - Feb 19",
        guests: "2 adults, 1 room",
        image: HotelImage3
    },
    {
        id: 4,
        name: "Mountain View Lodge",
        location: "Murree, Pakistan",
        rating: 4.7,
        reviews: 20,
        date: "Feb 20 - Feb 21",
        guests: "2 adults, 1 room",
        image: HotelImage4
    },
    {
        id: 5,
        name: "City Star Hotel",
        location: "Islamabad, Pakistan",
        rating: 4.2,
        reviews: 8,
        date: "Feb 22 - Feb 23",
        guests: "2 adults, 1 room",
        image: HotelImage5
    },
    {
        id: 6,
        name: "Royal Inn Hotel",
        location: "Multan, Pakistan",
        rating: 4.5,
        reviews: 9,
        date: "Feb 25 - Feb 26",
        guests: "2 adults, 1 room",
        image: HotelImage6
    }
];


const Favorite_hotels = () => {
    return (
        <div className='lg:py-5'>
            <h1 className='text-4xl font-bold text-black' style={{
                fontFamily: "'Roboto', sans-serif"
            }}>Saved</h1>

            <div className='flex pt-5 flex-col items-start gap-4'>
                <div className='grid sm:grid-cols-2 lg:grid-cols-3 items-start gap-2 w-full'>
                    {favoriteHotelsData.map((ElemItem) => {
                        return (
                            <div className='flex overflow-auto cursor-pointer no_scrollBar items-start flex-col gap-2 h-64 sm:h-72 hover:shadow-lg rounded-lg w-full bg-white border border-gray-100 shadow-sm'>
                                <div className='relative w-full h-32 sm:h-40'>
                                    <img src={ElemItem.image} className='w-full rounded-t-lg h-full line-clamp-1' alt={ElemItem.name} />
                                    <span className='absolute top-2 right-2 w-8 text-md h-8 rounded-full p-1 bg-gray-100 cursor-pointer text-orange-600 flex items-center justify-center'><FaHeart /></span>
                                </div>
                                <div className='flex flex-col gap-2 items-start py-2 w-full'>
                                    <div className='flex flex-col items-start px-4  w-full'>
                                        <h1
                                            style={{
                                                fontFamily: "'Roboto', sans-serif"
                                            }}
                                            className='text-sm line-clamp-1 w-full font-semibold text-black'>
                                            {ElemItem.name}
                                        </h1>
                                        <p className='text-sm line-clamp-2 w-60 text-gray-500'>
                                            {ElemItem.location}</p>
                                    </div>

                                    <div className='flex flex-col border-t py-2 border-gray-100 px-4 items-start w-full'>
                                        <h1
                                            style={{
                                                fontFamily: "'Roboto', sans-serif"
                                            }}
                                            className='text-sm line-clamp-2 w-60 font-semibold text-black'>
                                            {ElemItem.date}
                                        </h1>
                                        <p className='text-xs line-clamp-2 w-60 text-gray-500'>{ElemItem.guests}</p>

                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Favorite_hotels