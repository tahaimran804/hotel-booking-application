import Container from "./Container";
import { IoIosArrowForward } from "react-icons/io";
const Travelpros = () => {
    const travelServices = [
        { id: 1, image: "/-1a3I2tW.svg", title: "KAYAK.ai", tag: "BETA", description: "Get travel questions answered" },
        { id: 2, image: "/B-tEPtQ6.svg", title: "Best Time to Travel", description: "Know when to save" },
        { id: 3, image: "/B32i3foc.svg", title: "Explore", description: "See destinations on your budget" },
        { id: 4, image: "/BBrD9s_s.svg", title: "Trips", description: "Keep all your plans in one place" },
        { id: 5, image: "/BX1aI09U.svg", title: "Price Alerts", description: "Know when prices change" },
        { id: 6, image: "/Di-YN3mi.svg", title: "Flight Tracker", description: "See real-time delays" },
    ];

    return (
        <section className="w-full pt-10 pb-20 bg-white">
            <Container className="flex flex-col items-start gap-5">
                <div className="flex items-center w-full justify-between">
                    <div className="flex flex-col gap-2 max-w-2xl">
                        <h1 style={{ fontFamily: "'Roboto', sans-serif" }} className="text-2xl md:text-3xl font-semibold text-gray-900">
                            For travel pros
                        </h1>
                    </div>
                    <button className="text-sm font-semibold hidden lg:flex items-center gap-1 hover:bg-[#E6EBEF] duration-300 cursor-pointer px-6 py-2 rounded-md">
                        Explore More <IoIosArrowForward />
                    </button>
                </div>

                <div className="flex w-full transition-transform duration-500">
                    <div className={`grid w-full items-start gap-2 sm:gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4`}>
                        {travelServices.map((item) => (
                            <div key={item.id} className="bg-white shadow-lg w-full transform transition-transform cursor-pointer hover:scale-105 rounded-4xl overflow-hidden hover:shadow-2xl duration-300 py-5 border border-gray-100 px-4 flex flex-col gap-5 items-start h-52 sm:h-80 justify-between">
                                <div className="flex items-start flex-col gap-1">
                                    <h3 className="font-semibold max-[500px]:text-sm text-xl">
                                        {item.title}
                                        {item.tag && (
                                            <span className="text-xs text-white py-1 px-1 rounded-md max-[500px]:lowercase uppercase bg-black ml-1">
                                                {item.tag}
                                            </span>
                                        )}
                                    </h3>
                                    <p className="max-[500px]:text-xs text-sm text-gray-600">{item.description}</p>
                                </div>
                                <div className="w-full h-20 sm:h-44">
                                    <img src={item.image} alt={item.title} className="w-full h-full object-contain" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Travelpros;
