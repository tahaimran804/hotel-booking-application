import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios'
import AllFilters from '../../components/AllFilters'
import FiltersButtons from '../../components/FiltersButtons'
import HotelsList from '../../components/HotelsList'
import HotelsMap from '../../components/HotelMap'
import CheckIn from '../../components/CheckIn'

const Hotels = () => {
    const location = useLocation();
    const [hoveredHotel, setHoveredHotel] = useState(null);
    const [hotelData, setHotelData] = useState([]);
    const queryParams = new URLSearchParams(location.search);
    const dataParam = queryParams.get("data");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedLocation, setSelectedLocation] = useState(null);

    const navigate = useNavigate();
    const searchData = dataParam ? JSON.parse(decodeURIComponent(dataParam)) : null;
    useEffect(() => {
        if (!searchData) {
            navigate("/");
        }

        if (searchData.lat && searchData.lng) {
            setSelectedLocation([searchData.lat, searchData.lng]);
        }
    }, [])

    useEffect(() => {
        if (!searchData) return;
        const fetchHotels = async () => {
            try {
                setLoading(true);
                const payload = JSON.stringify({
                    country_name: searchData.country_name,
                    country_code: searchData.country_code,
                    city_name: searchData.city_name,
                    city_code: searchData.city_code,
                    hotel_name: searchData.hotel_name,
                    page: 1,
                    limit: 100
                });

                const response = await axios.post(
                    'http://172.16.253.49:5001/hotels?action=get_hotels_searches', JSON.stringify({ params: payload }), {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                    },
                });
                if (response.data.success === true) {
                    setHotelData(response.data.data);
                    console.log("Hotels Data:", response.data.data);
                }
            } catch (error) {
                console.error('Error fetching hotels:', error);
                setError('Failed to fetch hotels. Please try again later.', error.message);
            } finally {
                setLoading(false);
            }
        };
        fetchHotels();
    }, [location.search, searchData]);
    return (
        <section className="w-full bg-gray-50">
            <div className="flex w-full h-full">
                <div className="w-full lg:w-[70%] h-full">
                    <div className="flex flex-col gap-5 px-4 py-4">

                        <CheckIn />

                        <AllFilters hotelData={hotelData} />
                        <FiltersButtons />

                        <div className="h-[300px] w-full lg:hidden">
                            <HotelsMap
                                setHoveredHotel={setHoveredHotel}
                                hoveredHotel={hoveredHotel}
                                hotels={hotelData}
                                loading={loading}
                                error={error}
                                selectedLocation={selectedLocation}
                            />

                        </div>

                        <HotelsList
                            hotels={hotelData}
                            setHoveredHotel={setHoveredHotel}
                        />

                    </div>
                </div>

                <div className="hidden lg:block lg:w-[30%]">
                    <div className="sticky top-0 h-screen">
                        <HotelsMap
                            setHoveredHotel={setHoveredHotel}
                            hoveredHotel={hoveredHotel}
                            hotels={hotelData}
                            loading={loading}
                            error={error}
                        />
                    </div>
                </div>

            </div>
        </section>
    )

}

export default Hotels
