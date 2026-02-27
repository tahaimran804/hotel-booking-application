import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Skeleton from "react-loading-skeleton";

const CheckIn = ({ countries, setSelectedCountry, cities, setSelectedCity, selectedCity, selectedCountry, hotels, selectedHotel, setSelectedHotel, hotelSearch, setHotelSearch, loading }) => {
    const [country, setCountry] = useState(null);
    const [city, setCity] = useState("");
    const [hotel, setHotel] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();
    // const countries = Object.keys(dataStructure);
    // const cities = country
    //     ? Object.keys(dataStructure[country])
    //     : [];
    // const hotels = country && city
    //     ? dataStructure[country][city]
    //     : [];
    const handleSearch = () => {
        if (!country) {
            setError("Please select Country, City and Hotel");
            return;
        }
        setError("");
        const searchData = {
            city_name: selectedCity?.city_name || "",
            city_code: selectedCity?.city_code || "",
            country_name: selectedCountry?.country_name || "",
            country_code: selectedCountry?.country_code || "",
            hotel_name: selectedHotel?.hotelName || "",
            lat: selectedCity?.lat || selectedCountry?.lat || null,
            lng: selectedCity?.lng || selectedCountry?.lng || null,
        };
        // navigate(
        //     `/hotels/${city_name}/${hotel_name}?data=${encodeURIComponent(
        //         JSON.stringify(searchData)
        //     )}`
        // );
        navigate(`/hotels?data=${encodeURIComponent(JSON.stringify(searchData))}`);
    };

    console.log("Check the data", country, city, hotel)

    return (
        <div className="py-4 px-4 w-full bg-white shadow-sm rounded-sm">
            <div className={`grid w-full grid-cols-12 gap-3 items-end`}>
                <div className="col-span-12 w-full sm:col-span-3 relative">
                    <p className="text-xs text-gray-500">Select Hotels</p>
                    <input value={hotelSearch} onChange={(e) => setHotelSearch(e.target.value)} type="text" placeholder="Search Your Hotels" className="border mt-1 border-gray-200 rounded-sm w-full outline-0 px-2 py-2 text-s" />
                    {hotelSearch?.length > 2 && (
                        <div className="absolute z-[9999] w-full bg-white border border-gray-200 shadow-md rounded-sm mt-1 max-h-60 overflow-y-auto">
                            {loading ? (
                                <div className="p-2">
                                    <Skeleton height={40} count={3} />
                                </div>
                            ) : hotels?.length > 0 ? (
                                <div>
                                    {hotels.map((hotel) => (
                                        <div
                                            key={hotel.id}
                                            onClick={() => {
                                                setSelectedHotel(hotel);
                                                setHotelSearch(hotel.hotelName);
                                                setHotel(hotel.hotelName);
                                                const matchedCountry = countries.find(
                                                    (c) =>
                                                        c.country_name === hotel.countyName
                                                );
                                                if (matchedCountry) {
                                                    setSelectedCountry(matchedCountry);
                                                    setCountry(matchedCountry.country_name);
                                                }

                                                const matchedCity = cities.find(
                                                    (c) =>
                                                        c.city_name === hotel.cityName
                                                );
                                                if (matchedCity) {
                                                    setSelectedCity({
                                                        city_name: hotel.cityName,
                                                        city_code: hotel.cityCode,
                                                    });

                                                    setCity(hotel.cityName);
                                                }
                                            }}
                                            className="px-3 py-3 border-b border-gray-200 cursor-pointer hover:bg-gray-100"
                                        >
                                            {hotel.hotelName}
                                            <div className="text-xs text-gray-700 flex items-center gap-2">
                                                <p>{hotel.countyName}</p>→<p>{hotel.cityName}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="p-2 text-sm text-gray-500">
                                    No hotels found
                                </div>
                            )}
                        </div>
                    )}
                </div>

                <div className="col-span-12 w-full sm:col-span-3">
                    <p className="text-xs text-gray-500">Select Country</p>
                    {loading ? (
                        <div>
                            <Skeleton height={40} count={1} />
                        </div>
                    ) : (
                        <select
                            value={country}
                            onChange={(e) => {
                                const value = e.target.value;
                                setCountry(value);
                                const selected = countries.find(
                                    (c) => c.country_name === value
                                );
                                setSelectedCountry(selected || null);
                                setCity("");
                                setError("");
                            }}
                            className="w-full mt-1 border border-gray-200 outline-0 rounded-sm px-2 py-2 text-sm"
                        >
                            <option value="">Choose Country</option>

                            {countries?.map((c) => (
                                <option
                                    key={c.country_code}
                                    value={c.country_name}
                                >
                                    {c.country_name}
                                </option>
                            ))}
                        </select>
                    )}
                </div>

                <div className="col-span-12 w-full sm:col-span-3">
                    <p className="text-xs text-gray-500">Select City</p>
                    {loading ? (
                        <div>
                            <Skeleton height={40} count={1} />
                        </div>
                    ) : (
                        <select
                            value={city || ""}
                            disabled={!country}
                            onChange={(e) => {
                                const selectedCityObj = cities.find(
                                    (c) => c.city_name === e.target.value
                                );
                                setCity(e.target.value);
                                setSelectedCity(selectedCityObj || null);
                                setError("");
                            }}
                            className="w-full mt-1 border outline-0 border-gray-200 rounded-sm px-2 py-2 text-sm disabled:bg-gray-100"
                        >
                            {!country ? (
                                <option value="">No country selected</option>
                            ) : (
                                <>
                                    <option value="">Choose City</option>
                                    {cities?.map((c, i) => (
                                        <option key={i} value={c.city_name}>
                                            {c.city_name}
                                        </option>
                                    ))}
                                </>
                            )}
                        </select>
                    )}
                </div>

                <div className="col-span-12 w-full sm:col-span-3">
                    <button

                        onClick={handleSearch}
                        className="w-full py-2 cursor-pointer bg-(--primary-color) text-white rounded-lg text-sm hover:bg-(--primary-color)/90 transition">
                        Search
                    </button>
                </div>

            </div >
            {
                error && (
                    <p className="text-red-500 text-sm mt-3">{error}</p>
                )
            }
            {
                (country || city || hotel) && (
                    <div className="mt-4 text-sm text-gray-600">
                        Selected: {country} {city && `→ ${city}`} {hotel && `→ ${hotel}`}
                    </div>
                )
            }
        </div >
    );
};

export default CheckIn;
