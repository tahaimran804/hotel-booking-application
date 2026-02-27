import React from "react";
import Slider from "react-slick";
import { FaHeart } from "react-icons/fa";
import hotelPlaceholder from "../assets/HotelImage.jpg";
import RatingStar from "../components/RatingStar";


const HotelsList = ({ hotels, loading, error, currentPage, totalPages, onPageChange, setHoveredHotel }) => {
    const sliderSettings = { autoplay: false, infinite: true, speed: 500, arrows: false, slidesToShow: 1, slidesToScroll: 1 };
    if (loading) {
        return (
            <div className="flex flex-col gap-4">
                {[...Array(4)].map((_, i) => (
                    <div key={i} className="animate-pulse bg-white border border-gray-200 rounded-xl p-4 grid grid-cols-12 gap-4">
                        <div className="col-span-3 bg-gray-200 h-[200px] rounded"></div>
                        <div className="col-span-6 space-y-3">
                            <div className="h-5 bg-gray-200 rounded w-3/4"></div>
                            <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                            <div className="h-4 bg-gray-200 rounded w-1/3"></div>
                        </div>
                        <div className="col-span-3 space-y-3">
                            <div className="h-6 bg-gray-200 rounded w-2/3"></div>
                            <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                            <div className="h-10 bg-gray-200 rounded"></div>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
    if (error) return <p className="text-center py-10 text-red-500">{error}</p>;
    if (!loading && (!hotels || hotels.length === 0)) return <p className="text-center py-10 text-gray-500 font-semibold">No Hotels Found</p>;

    console.log(hotels)

    return (
        <div className="flex flex-col  pb-10 gap-2">
            {hotels.map(hotel => (
                <div key={hotel.id} className="border border-gray-200 h-[240px] rounded-xl overflow-auto no_scrollBar shadow-sm hover:shadow-md transition grid grid-cols-12">
                    <div className="col-span-12 sm:col-span-3">
                        <Slider {...sliderSettings}>
                            {(hotel.images && hotel.images.length > 0 ? hotel.images : [hotelPlaceholder]).map((img, idx) => (
                                <img key={idx} src={img} alt="hotel" className="w-full cursor-grab h-[240px] object-cover" />
                            ))}
                        </Slider>
                    </div>

                    <div className="col-span-6 sm:col-span-6 py-2 px-4 flex flex-col gap-2 cursor-pointer">
                        <div className="flex justify-between items-start">
                            <h2 className="text-xl font-semibold line-clamp-1 hover:underline">{hotel.HotelName}</h2>
                            <FaHeart className="text-gray-400 hover:text-red-500 cursor-pointer" />
                        </div>
                        <p className="text-sm text-gray-600">{hotel.Address}</p>
                        <div className="flex items-center gap-2">
                            <RatingStar item={hotel.HotelRating} />
                            {/* <span className="font-semibold">{hotel.HotelRating}</span> */}
                            <span className="text-sm text-gray-500">{hotel.reviews || "4.6"} reviews</span>
                        </div>
                        {/* <span className="bg-blue-100 text-[var(--primary-color)] text-xs px-2 py-1 rounded w-fit">{hotel.tag}</span> */}
                        <div className="text-sm line-clamp-2 w-full text-gray-500">
                            {hotel.Description
                                ? hotel.Description.replace(/<[^>]+>/g, "")
                                : "Description"}
                        </div>

                        <div className="flex flex-col itens-start gap-2 w-full">
                            <div className="flex w-full items-start gap-2 flex-wrap text-sm text-gray-600">

                                <p>
                                    <span className="font-semibold">Country:</span>{" "}
                                    {hotel.countyName || "N/A"}
                                </p>

                                <p>
                                    <span className="font-semibold">City:</span>{" "}
                                    {hotel.cityName || "N/A"}
                                </p>

                            </div>
                            {hotel.HotelWebsiteUrl ? (
                                <a href={hotel.HotelWebsiteUrl}>
                                    <button className="bg-[var(--primary-color)] text-white py-2 px-4 rounded-lg hover:bg-[var(--primary-color)]/90 transition cursor-pointer"> Visit Official Website →</button>
                                </a>
                            ) : (
                                null
                            )}
                        </div>



                    </div>
                    <div className="col-span-6 sm:col-span-3 p-4 border-l border-gray-100 flex flex-col justify-between">
                        <div>
                            <p className="text-sm text-red-500">Our cheapest price</p>
                            <h2 className="text-2xl font-bold">Rs {(hotel.price || 0).toLocaleString()}</h2>
                            <p className="text-sm text-gray-500">a night</p>
                            <p className="text-[var(--primary-color)] font-medium mt-2">{hotel.provider}</p>
                            <p className="text-sm text-gray-600">{hotel.cancellation}</p>
                        </div>
                        <button className="bg-[var(--primary-color)] text-white py-2 rounded-lg hover:bg-[var(--primary-color)]/90 transition cursor-pointer">Go to site</button>
                    </div>
                </div>
            ))
            }

            {
                !loading && totalPages > 1 && (
                    <div className="flex justify-center gap-2 mt-8 flex-wrap">
                        <button disabled={currentPage === 1} onClick={() => onPageChange(currentPage - 1)} className="px-3 py-2 cursor-pointer bg-gray-100 rounded-md disabled:opacity-50">Prev</button>

                        {[...Array(totalPages)].map((_, idx) => {
                            const pageNumber = idx + 1;
                            return (
                                <button
                                    key={pageNumber}
                                    onClick={() => onPageChange(pageNumber)}
                                    className={`px-4 py-2 cursor-pointer rounded-md text-sm font-medium ${currentPage === pageNumber ? "bg-[var(--primary-color)] text-white" : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                                        }`}
                                >
                                    {pageNumber}
                                </button>
                            );
                        })}

                        <button disabled={currentPage === totalPages} onClick={() => onPageChange(currentPage + 1)} className="px-3 py-2     bg-gray-100 rounded-md disabled:opacity-50">Next</button>
                    </div>
                )
            }
        </div >
    );
};

export default HotelsList;