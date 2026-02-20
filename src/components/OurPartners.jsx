import React from "react";
import Slider from "react-slick";
import PartnerLogo1 from "../assets/PartnerLogo1.png";
import PartnerLogo2 from "../assets/PartnerLogo2.webp";
import PartnerLogo3 from "../assets/PartnerLogo3.avif";
import PartnerLogo4 from "../assets/PartnerLogo4.avif";
import PartnerLogo5 from "../assets/PartnerLogo5.avif";
import PartnerLogo6 from "../assets/PartnerLogo6.avif";
import PartnerLogo7 from "../assets/PartnerLogo7.avif";
import Container from "./Container";

function MultipleItems() {
    const PartnerLogosData = [
        { id: 1, logo: PartnerLogo1 },
        { id: 2, logo: PartnerLogo2 },
        { id: 3, logo: PartnerLogo3 },
        { id: 4, logo: PartnerLogo4 },
        { id: 5, logo: PartnerLogo5 },
        { id: 6, logo: PartnerLogo6 },
        { id: 7, logo: PartnerLogo7 },
    ];

    const settings = {
        dots: false,
        infinite: true,
        speed: 2500,
        slidesToShow: 6,
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
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                },
            },
        ],
    };

    return (
        <section className="py-8 bg-gray-100">
            <Container>
                <Slider {...settings}>
                    {PartnerLogosData.map((partner) => (
                        <div key={partner.id} className="px-4">
                            <div className="max-[480px]:h-10 h-14 flex items-center justify-center transition duration-300">
                                <img
                                    src={partner.logo}
                                    alt={`Partner ${partner.id}`}
                                    className="h-14 object-contain grayscale hover:grayscale-0 transition duration-300"
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