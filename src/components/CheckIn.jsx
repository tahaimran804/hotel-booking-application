import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const CheckIn = ({ countries, setSelectedCountry, cities, setSelectedCity, selectedCountry }) => {
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
            city_name: city?.city_name || "",
            city_code: city?.city_code || "",
            country_name: selectedCountry?.country_name || "",
            country_code: selectedCountry?.country_code || "",
            hotel_name: hotel || "",

            lat: city?.lat || selectedCountry?.lat || null,
            lng: city?.lng || selectedCountry?.lng || null,
        };
        navigate(`/hotels?data=${encodeURIComponent(JSON.stringify(searchData))}`);
        console.log("Search Data:", searchData);
    };

    return (
        <div className="py-4 px-4 w-full bg-white shadow-sm rounded-sm">
            <div className="grid w-full grid-cols-12 gap-3 items-end">
                <div className="col-span-12 sm:col-span-3">
                    <p className="text-xs text-gray-500">Select Hotels</p>
                    <input value={hotel} onChange={(e) => setHotel(e.target.value)} type="text" placeholder="Search Your Hotels" className="border mt-1 border-gray-200 rounded-sm w-full outline-0 px-2 py-2 text-s" />
                </div>

                <div className="col-span-12 sm:col-span-3">
                    <p className="text-xs text-gray-500">Select Country</p>
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

                </div>

                <div className="col-span-12 sm:col-span-3">
                    <p className="text-xs text-gray-500">Select City</p>
                    <select
                        value={city?.city_name || ""}
                        disabled={!country}
                        onChange={(e) => {
                            const selectedCityObj = cities.find(
                                (c) => c.city_name === e.target.value
                            );
                            setCity(selectedCityObj || null);
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
                </div>

                <div className="col-span-12 sm:col-span-3">
                    <button

                        onClick={handleSearch}
                        className="w-full py-2 cursor-pointer bg-(--primary-color) text-white rounded-lg text-sm hover:bg-(--primary-color)/90 transition">
                        Search
                    </button>
                </div>

            </div>
            {
                error && (
                    <p className="text-red-500 text-sm mt-3">{error}</p>
                )
            }
            {
                (country || city || hotel) && (
                    <div className="mt-4 text-sm text-gray-600">
                        Selected: {country} {city && `→ ${city?.city_name}`} {hotel && `→ ${hotel}`}
                    </div>
                )
            }
        </div >
    );
};

export default CheckIn;
