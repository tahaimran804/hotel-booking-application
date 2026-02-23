import { GiCommercialAirplane } from "react-icons/gi";
import { FaCarSide } from "react-icons/fa";
import { MdTravelExplore } from "react-icons/md";
import BgImage from "../assets/Bg_image.jpg"
import BgImage1 from "../assets/Bg_image1.jpg"
import BgImage2 from "../assets/Bg_image2.jpg"
import { IoBedOutline } from "react-icons/io5";
import { LuShip } from "react-icons/lu";
import Container from './Container'
import { Link, useLocation } from "react-router-dom";
import CheckIn from "./CheckIn";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const HeroSection = ({ countries, setSelectedCountry, cities, setSelectedCity, selectedCountry, hotels, selectedHotel, setSelectedHotel, hotelSearch, setHotelSearch, loading }) => {
    const bgImages = [BgImage]
    return (
        <section className="relative w-full h-[600px] md:h-[500px]">

            <Swiper
                modules={[Autoplay]}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                loop={true}
                speed={800}
                loopAdditionalSlides={1}
                className="absolute inset-0 w-full h-full z-0"
            >
                {bgImages.map((img, index) => (
                    <SwiperSlide key={index}>
                        <div
                            className="w-full h-full bg-cover bg-center"
                            style={{ backgroundImage: `url(${img})` }}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Dark Overlay */}
            <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-10"></div>

            <div className="absolute inset-0 z-20 flex items-center">
                <Container className="relative z-20 h-full">
                    <div className="w-full h-full flex items-center justify-center">
                        <div className="grid grid-cols-10 gap-4 w-full h-full">
                            <div className="col-span-10 w-full h-full flex flex-col gap-0 items-center justify-center py-10 rounded-xl">
                                <div className="flex flex-col text-start items-start gap-1 text-white">
                                    <h1
                                        className="text-lg sm:text-2xl md:text-4xl font-bold"
                                        style={{
                                            fontFamily: "'Roboto', sans-serif"
                                        }}
                                    >
                                        Discover the Best Hotel Prices Worldwide
                                    </h1>
                                    <p className="text-sm sm:text-lg text-gray-200 w-full leading-relaxed">
                                        Easily compare hotel deals from hundreds of trusted booking platforms in one place.
                                        Find exclusive discounts, read verified reviews, and choose the perfect stay
                                        that matches your budget and travel style.
                                    </p>
                                </div>
                                {/* <div className="flex px-2 my-4 items-start gap-5 flex-wrap md:gap-8">
                                {navData.map((item) => {
                                    const isActive = location.pathname === item.url
                                    return (
                                        <Link to={item.url} key={item.id}>
                                            <div className="flex flex-col items-center gap-1">
                                                <span className={`w-10 md:w-13 h-10 md:h-13 rounded-md shadow-lg flex items-center justify-center  ${isActive ? "bg-orange-600 text-white text-lg md:text-2xl" : "bg-white text-sm md:text-xl text-black"}`}>{item.icon}</span>
                                                <p className="text-sm text-white font-normal">{item.name}</p>
                                            </div>
                                        </Link>
                                    )
                                })}
                            </div> */}
                                <div className="mt-5 flex flex-col gap-4 items-start w-full h-auto pr-0 xl:h-28 xl:pr-4">
                                    <CheckIn
                                        countries={countries}
                                        setSelectedCountry={setSelectedCountry}
                                        cities={cities}
                                        setSelectedCity={setSelectedCity}
                                        selectedCountry={selectedCountry}
                                        hotels={hotels}
                                        selectedHotel={selectedHotel}
                                        setSelectedHotel={setSelectedHotel}
                                        hotelSearch={hotelSearch}
                                        setHotelSearch={setHotelSearch}
                                        loading={loading}
                                    />
                                    {/* <div className="flex items-start flex-wrap gap-4">
                                    <p className="text-sm font-normal text-white">Compare vs. KAYAK</p>
                                    <div className="flex items-center gap-1">
                                        <input type="checkbox" className="bg-white border border-gray-100 cursor-pointer" />
                                        <label className="text-white">Booking.com</label>
                                    </div>
                                </div> */}
                                </div>
                            </div>
                            {/* <div className="col-span-3 hidden xl:flex gap-4 overflow-hidden">
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
                        </div> */}
                        </div>
                    </div>
                </Container>
            </div>
        </section>
    )
}

export default HeroSection