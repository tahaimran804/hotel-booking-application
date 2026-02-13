import {
    IoWifi
} from "react-icons/io5";

import {
    CiParking1
} from "react-icons/ci";

import {
    TbAirConditioning
} from "react-icons/tb";

import {
    MdPool,
    MdFitnessCenter,
    MdOutlineAirportShuttle,
    MdRestaurant,
    MdSpa,
    MdMeetingRoom,
    MdLocalLaundryService
} from "react-icons/md";

import {
    FaWheelchair,
    FaSmoking,
    FaLeaf,
    FaTshirt,
    FaTv,
    FaFax,
    FaLanguage,
    FaConciergeBell,
    FaDumbbell,
    FaShuttleVan
} from "react-icons/fa";

import { BiFirstAid } from "react-icons/bi";
import { GiTennisCourt } from "react-icons/gi";

const Amenities = () => {

    const amenitiesData = [

        {
            title: "Accessibility",
            items: [
                { name: "Wheelchair access", icon: <FaWheelchair /> },
                { name: "Accessible parking", icon: <CiParking1 /> },
                { name: "Lift", icon: <MdMeetingRoom /> }
            ]
        },

        {
            title: "Business facilities",
            items: [
                { name: "Meeting facilities", icon: <MdMeetingRoom /> },
                { name: "Business centre", icon: <MdMeetingRoom /> }
            ]
        },

        {
            title: "Food and drink",
            items: [
                { name: "Restaurant", icon: <MdRestaurant /> },
                { name: "Café", icon: <MdRestaurant /> },
                { name: "Lobby bar", icon: <MdRestaurant /> }
            ]
        },

        {
            title: "Healthcare",
            items: [
                { name: "First aid kit", icon: <BiFirstAid /> }
            ]
        },

        {
            title: "Hotel and outdoor facilities",
            items: [
                { name: "Non-smoking", icon: <FaLeaf /> },
                { name: "Smoking areas", icon: <FaSmoking /> },
                { name: "Garden", icon: <FaLeaf /> },
                { name: "Laundry", icon: <MdLocalLaundryService /> }
            ]
        },

        {
            title: "In the rooms",
            items: [
                { name: "Air conditioning", icon: <TbAirConditioning /> },
                { name: "Fire extinguishers", icon: <BiFirstAid /> }
            ]
        },

        {
            title: "Leisure and entertainment",
            items: [
                { name: "Spa", icon: <MdSpa /> },
                { name: "Sauna", icon: <MdSpa /> },
                { name: "Massage", icon: <MdSpa /> },
                { name: "Steam room", icon: <MdSpa /> }
            ]
        },

        {
            title: "Media and technology",
            items: [
                { name: "Television", icon: <FaTv /> },
                { name: "Fax", icon: <FaFax /> },
                { name: "Photocopier", icon: <FaFax /> }
            ]
        },

        {
            title: "Services",
            items: [
                { name: "Multilingual staff", icon: <FaLanguage /> },
                { name: "Concierge", icon: <FaConciergeBell /> },
                { name: "Room service", icon: <FaConciergeBell /> },
                { name: "Luggage storage", icon: <FaConciergeBell /> }
            ]
        },

        {
            title: "Sport and fitness",
            items: [
                { name: "Pool", icon: <MdPool /> },
                { name: "Outdoor pool", icon: <MdPool /> },
                { name: "Fitness centre", icon: <MdFitnessCenter /> },
                { name: "Tennis court", icon: <GiTennisCourt /> }
            ]
        },

        {
            title: "Transport and parking",
            items: [
                { name: "Parking", icon: <CiParking1 /> },
                { name: "Airport shuttle", icon: <MdOutlineAirportShuttle /> },
                { name: "Car hire", icon: <FaShuttleVan /> },
                { name: "Valet parking", icon: <CiParking1 /> }
            ]
        },

        {
            title: "WiFi and internet",
            items: [
                { name: "WiFi", icon: <IoWifi /> },
                { name: "Internet access", icon: <IoWifi /> }
            ]
        }

    ];

    return (
        <div className='flex flex-col w-full items-start gap-8 py-10'>

            <h1 className='text-2xl lg:text-4xl font-semibold'
                style={{ fontFamily: "'Roboto', sans-serif" }}>
                Amenities
            </h1>

            <div className='grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 items-start lg:items-center gap-2 w-full'>
                {
                    [
                        {
                            id: 1,
                            name: "Wi-Fi",
                            icon: <IoWifi />
                        },
                        {
                            id: 2,
                            name: "Parking",
                            icon: <CiParking1 />
                        },
                        {
                            id: 3,
                            name: "Air conditioning",
                            icon: <TbAirConditioning />
                        },
                        {
                            id: 4,
                            name: "Airport shuttle",
                            icon: <MdOutlineAirportShuttle />
                        },
                        {
                            id: 5,
                            name: "Pool",
                            icon: <MdPool />
                        },
                        {
                            id: 6,
                            name: "Fitness centre",
                            icon: <MdFitnessCenter />
                        },
                    ].map((item) => {
                        return (
                            <div key={item.id} className='rounded-md flex items-center justify-center w-full h-32 bg-gray-50 border border-gray-100'>
                                <div className='flex flex-col items-center gap-1'>
                                    <span className='text-xl sm:text-3xl font-bold text-black'>{item.icon}</span>
                                    <h1 className='text-sm sm:text-lg text-center  text-black'>{item.name}</h1>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

            {/* Categories */}
            <div className="flex flex-col gap-10 w-full">

                {amenitiesData.map((category, index) => (
                    <div key={index} className="flex flex-col gap-4">

                        <h2 className="text-xl font-semibold">
                            {category.title}
                        </h2>

                        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4">

                            {category.items.map((item, i) => (
                                <div
                                    key={i}
                                    className="flex items-center gap-3 p-4 bg-gray-50 border border-gray-100 rounded-lg"
                                >
                                    <span className="text-2xl">
                                        {item.icon}
                                    </span>

                                    <p className="text-sm font-medium">
                                        {item.name}
                                    </p>
                                </div>
                            ))}

                        </div>

                    </div>
                ))}

            </div>

        </div>
    );
};

export default Amenities;
