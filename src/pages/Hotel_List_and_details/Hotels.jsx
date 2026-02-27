import React, { useEffect, useMemo, useState } from 'react'
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
    const [currentPage, setCurrentPage] = useState(1);
    const hotelsPerPage = 200;
    const [totalPages, setTotalPages] = useState(1);

    const navigate = useNavigate();
    const searchData = useMemo(() => {
        return dataParam ? JSON.parse(decodeURIComponent(dataParam)) : null;
    }, [dataParam]);

    useEffect(() => {
        // if (!searchData) navigate("/hotels");
        if (searchData?.lat && searchData?.lng) setSelectedLocation([searchData.lat, searchData.lng]);
    }, [searchData, navigate]);

    const fetchHotels = async (page = 1) => {
        try {
            setLoading(true);
            const payload = JSON.stringify({
                country_name: searchData.country_name,
                country_code: searchData.country_code,
                city_name: searchData.city_name,
                city_code: searchData.city_code,
                hotel_name: searchData.hotel_name,
                page: page,
                limit: hotelsPerPage,
            });

            const response = await axios.post(
                'http://10.10.10.10:5001/hotels?action=get_hotels_searches',
                JSON.stringify({ params: payload }),
                { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
            );

            if (response.data.success) {
                setHotelData(response.data.data);
                setTotalPages(response.data.pagination.total_pages);
            } else {
                setError('No hotels found.');
            }
        } catch (err) {
            console.error(err);
            setError('Failed to fetch hotels.');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (!searchData) return;
        fetchHotels(currentPage);
    }, [location.search, searchData, currentPage]);

    const handlePageChange = (pageNumber) => {
        window.scrollTo({ top: 0, behavior: "smooth" });
        setCurrentPage(pageNumber);
        fetchHotels(pageNumber);
    };

    return (
        <section className="w-full bg-gray-50">
            <div className="flex w-full h-full">
                <div className="w-full lg:w-[60%] h-full">
                    <div className="flex flex-col gap-5 px-4 py-4">
                        <AllFilters hotelData={hotelData} />
                        <FiltersButtons />

                        <div className="h-[300px] w-full lg:hidden">
                            <HotelsMap
                                setHoveredHotel={setHoveredHotel}
                                hoveredHotel={hoveredHotel}
                                hotels={hotelData}
                                selectedLocation={selectedLocation}
                            />
                        </div>

                        <HotelsList
                            hotels={hotelData}
                            loading={loading}
                            error={error}
                            currentPage={currentPage}
                            totalPages={totalPages}
                            onPageChange={handlePageChange}
                            setHoveredHotel={setHoveredHotel}
                        />
                    </div>
                </div>

                <div className="hidden lg:block lg:w-[40%]">
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
    );
};

export default Hotels;
