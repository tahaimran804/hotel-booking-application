import { GiCommercialAirplane } from "react-icons/gi";
import { FaCarSide } from "react-icons/fa";
import { MdTravelExplore } from "react-icons/md";
import { IoBedOutline } from "react-icons/io5";
import { LuShip } from "react-icons/lu";
import Container from './Container'
import { Link, useLocation } from "react-router-dom";
import CheckIn from "./CheckIn";
import HeroImage1 from "../assets/hero-image-1.png"
import HeroImage2 from "../assets/hero-image-2.png"
import HeroImage3 from "../assets/hero-image-3.png"
import HeroImage4 from "../assets/hero-image-4.png"
import HeroImage5 from "../assets/hero-image-5.png"
import HeroImage6 from "../assets/hero-image-6.png"

const HeroSection = () => {
    const location = useLocation()
    const navData = [
        {
            id: 1,
            name: "Flights",
            icon: <GiCommercialAirplane />,
            url: "#",
        },
        {
            id: 2,
            name: "Stays",
            icon: <IoBedOutline />,
            url: "/",
        },
        {
            id: 3,
            name: "Cars",
            icon: <FaCarSide />,
            url: "#cars",
        },
        {
            id: 4,
            name: "Packages",
            icon: <MdTravelExplore />,
            url: "#packages",
        },
        {
            id: 5,
            name: "Cruises",
            icon: <LuShip />,
            url: "#cruises",
        },
    ];
    return (
        <section className="mx-4 rounded-2xl bg-[#f0f3f5]">
            <Container>
                <div className="w-full h-full  lg:h-110">
                    <div className="grid grid-cols-10 gap-4 w-full h-full">
                        <div className="col-span-10 xl:col-span-7 w-full h-full flex flex-col gap-0 items-center justify-center xl:justify-start xl:items-start py-10 px-0 md:px-5 rounded-xl">
                            <h1 className='text-4xl font-bold hidden md:flex items-end gap-1 text-black'
                                style={{
                                    fontFamily: "'Roboto', sans-serif"
                                }}>Compare hotel deals from 100s of sites <span className="w-2 h-2 bg-orange-600"></span></h1>
                            <div className="flex px-2 my-4 items-start gap-4 flex-wrap md:gap-8">
                                {navData.map((item) => {
                                    const isActive = location.pathname === item.url
                                    return (
                                        <Link to={item.url} key={item.id}>
                                            <div className="flex flex-col items-center gap-1">
                                                <span className={`w-10 md:w-13 h-10 md:h-13 rounded-md shadow-lg flex items-center justify-center  ${isActive ? "bg-orange-600 text-white text-lg md:text-2xl" : "bg-white text-sm md:text-xl text-black"}`}>{item.icon}</span>
                                                <p className="text-sm font-normal">{item.name}</p>
                                            </div>
                                        </Link>
                                    )
                                })}
                            </div>
                            <div className="mt-5 flex flex-col gap-4 items-start w-full h-full pr-0 xl:h-28 xl:pr-4">
                                <CheckIn />
                                <div className="flex items-start flex-wrap gap-4">
                                    <p className="text-sm font-normal">Compare vs. KAYAK</p>
                                    <div className="flex items-cente gap-1">
                                        <input type="checkbox" className="bg-white border border-gray-100 cursor-pointer" />
                                        <label>Booking.com</label>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="col-span-3 hidden xl:flex gap-4 overflow-hidden">
                            <div className="flex flex-col gap-4 scroll-up">
                                {[1, 2].map((_, i) => (
                                    <>
                                        {[
                                            HeroImage1,
                                            HeroImage2,
                                            HeroImage3,
                                        ].map((img, index) => (
                                            <div key={`${i}-${index}`} className="w-40 xl:w-44 h-40 xl:h-44">
                                                <img
                                                    src={img}
                                                    alt=""
                                                    className="w-full h-full object-cover rounded-xl"
                                                />
                                            </div>
                                        ))}
                                    </>
                                ))}
                            </div>

                            <div className="flex flex-col gap-4 scroll-down">
                                {[1, 2].map((_, i) => (
                                    <>
                                        {[
                                            HeroImage4,
                                            HeroImage5,
                                            HeroImage6,
                                        ].map((img, index) => (
                                            <div key={`${i}-${index}`} className="w-40 xl:w-44 h-40 xl:h-44">
                                                <img
                                                    src={img}
                                                    alt=""
                                                    className="w-full h-full object-cover rounded-xl"
                                                />
                                            </div>
                                        ))}
                                    </>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default HeroSection