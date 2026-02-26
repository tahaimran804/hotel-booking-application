import Container from "./Container";
import Our_Partne1 from "../assets/Booking.com_transprent.png";
import Our_Partne2 from "../assets/Hotels.com_transprent2.png";
import Our_Partne3 from "../assets/Expedia_logo_transprent3.png";
import Our_Partne4 from "../assets/kayak-logo_transprent5.png";
import Our_Partne5 from "../assets/Hotwire_Logotransprent.png";
import Our_Partne6 from "../assets/trivago-logo-png-transparent.png";
import Our_Partne7 from "../assets/Priceline_Logo_transprent.png";
import Our_Partne8 from "../assets/travelocity_logo_transprent.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

function MultipleItems() {

    const PartnerLogosData = [
        { id: 1, logo: Our_Partne1 },
        { id: 2, logo: Our_Partne2 },
        { id: 3, logo: Our_Partne3 },
        { id: 4, logo: Our_Partne4 },
        { id: 5, logo: Our_Partne5 },
        { id: 6, logo: Our_Partne6 },
        { id: 7, logo: Our_Partne7 },
        { id: 8, logo: Our_Partne8 },
    ];

    return (
        <section className="py-8 bg-gray-100">
            <Swiper
                modules={[Autoplay]}
                loop={true}
                speed={2500}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                }}
                spaceBetween={20}
                breakpoints={{
                    0: {
                        slidesPerView: 2,
                    },
                    480: {
                        slidesPerView: 3,
                    },
                    780: {
                        slidesPerView: 5,
                    },
                    1024: {
                        slidesPerView: 7,
                    },
                }}
                className="w-full"
            >
                {PartnerLogosData.map((partner) => (
                    <SwiperSlide key={partner.id}>
                        <div className="px-5 sm:px-10">
                            <div className="h-14 flex items-center justify-center transition duration-300">
                                <img
                                    src={partner.logo}
                                    alt={`Partner ${partner.id}`}
                                    className="h-full object-contain"
                                />
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}

export default MultipleItems;