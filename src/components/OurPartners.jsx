import Slider from "react-slick";
import Container from "./Container";
import Our_Partne1 from "../assets/Booking.com_transprent.png";
import Our_Partne2 from "../assets/Hotels.com_transprent2.png";
import Our_Partne3 from "../assets/Expedia_logo_transprent3.png";
import Our_Partne4 from "../assets/kayak-logo_transprent5.png";
import Our_Partne5 from "../assets/Hotwire_Logotransprent.png";
import Our_Partne6 from "../assets/trivago-logo-png-transparent.png";
import Our_Partne7 from "../assets/Priceline_Logo_transprent.png";
import Our_Partne8 from "../assets/travelocity_logo_transprent.png";
import { useEffect, useState } from "react";



function MultipleItems() {
    const [width, setWidth] = useState()
    useEffect(() => {
        const Resize = () => {
            setWidth(window.innerWidth)
        }
        window.addEventListener("resize", Resize);
        setTimeout(() => {
            setWidth(window.innerWidth)
        }, 100);
        return () => window.removeEventListener("resize", Resize)
    }, [])




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

    const settings = {
        dots: false,
        infinite: true,
        speed: 2500,
        slidesToShow: 7,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: false,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <section className="py-8 bg-gray-100">
            <Container>
                <Slider key={width} {...settings}>
                    {PartnerLogosData.map((partner) => (
                        <div key={partner.id} className="px-5 sm:px-10">
                            <div className="h-14 w-full flex items-center justify-center transition duration-300">
                                <img
                                    src={partner.logo}
                                    alt={`Partner ${partner.id}`}
                                    className="h-full object-contain transition duration-300"
                                />
                            </div>
                        </div>
                    ))}
                </Slider>
            </Container>
        </section>
    );
}

export default MultipleItems;