import React, { useEffect, useState } from 'react'
import HeroSection from '../components/HeroSection'
import WhyChooseUs from '../components/WhyChooseUs'
import TravelDeals from '../components/TravelDeals'
import Travelpros from '../components/Travelpros'
import FindAccommodations from '../components/FindAccommodations'
import SaveSearch from '../components/SaveSearch'
import axios from 'axios'
import { json } from 'd3'
import OurPartners from '../components/OurPartners'

const Home = () => {
    const [countries, setCountries] = useState([])
    const [selectedCountry, setSelectedCountry] = useState(null)
    const [cities, setCities] = useState([])
    const [selectedCity, setSelectedCity] = useState(null)
    const [hotels, setHotels] = useState([])
    const [selectedHotel, setSelectedHotel] = useState(null)
    const [hotelSearch, setHotelSearch] = useState("")
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                setLoading(true)
                const json = JSON.stringify({});
                const response = await axios.post('http://172.16.253.49:5001/hotels?action=get_countries', JSON.stringify({ params: json }), {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                    },
                });
                if (response.data.success === true) {
                    setCountries(response.data.data)
                }
            } catch (error) {
                console.error('Error fetching user data:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchUserData()
    }, []);

    useEffect(() => {
        if (selectedCountry) {
            console.log(selectedCountry)
            const fetchCities = async () => {
                try {
                    setLoading(true)
                    const json = JSON.stringify({ country_name: selectedCountry.country_name, country_code: selectedCountry.country_code });
                    const response = await axios.post('http://172.16.253.49:5001/hotels?action=get_cities_by_country', JSON.stringify({ params: json }), {
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded',
                        },
                    });
                    if (response.data.success === true) {
                        setCities(response.data.data)
                    }
                } catch (error) {
                    console.error('Error fetching cities:', error);
                } finally {
                    setLoading(false);
                }
            };
            fetchCities()
        }
    }, [selectedCountry]);


    useEffect(() => {
        if (hotelSearch?.length < 3) return;
        const fetchHotels = async () => {
            try {
                setLoading(true)
                const json = JSON.stringify({ hotel_name: hotelSearch });
                const response = await axios.post(
                    'http://172.16.253.49:5001/hotels?action=get_hotels_suggestions',
                    JSON.stringify({ params: json }),
                    {
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded',
                        },
                    }
                )
                if (response.data.success === true) {
                    setHotels(response.data.data)
                    console.log("Check The Search Data", response.data.data)
                } else {
                    setHotels([])
                }
            } catch (error) {
                console.error('Error fetching hotels:', error);
                setHotels([])
            } finally {
                setLoading(false);
            }
        };
        fetchHotels()
    }, [hotelSearch]);

    useEffect(() => {
        if (selectedHotel) {
            const matchedCountry = countries.find(
                (c) => c.country_name === selectedHotel.countyName
            );
            if (matchedCountry) {
                setSelectedCountry({
                    country_name: matchedCountry.country_name,
                    country_code: matchedCountry.country_code,
                });
            } else {
                setSelectedCountry({
                    country_name: selectedHotel.countyName,
                    country_code: selectedHotel.countyCode,
                });
            }

            const matchedCity = cities.find(
                (c) => c.city_name === selectedHotel.cityName
            );
            if (matchedCity) {
                setSelectedCity({
                    city_name: matchedCity.city_name,
                    city_code: matchedCity.city_code,
                });
            } else {
                setSelectedCity({
                    city_name: selectedHotel.cityName,
                    city_code: selectedHotel.cityCode,
                });
            }
        }
    }, [selectedHotel]);

    return (
        <>
            <HeroSection
                countries={countries}
                setSelectedCountry={setSelectedCountry}
                selectedCountry={selectedCountry}
                cities={cities}
                selectedCity={selectedCity}
                setSelectedCity={setSelectedCity}
                loading={loading}

                hotels={hotels}
                selectedHotel={selectedHotel}
                setSelectedHotel={setSelectedHotel}
                hotelSearch={hotelSearch}
                setHotelSearch={setHotelSearch}
            />
            <OurPartners />
            <SaveSearch />
            {/* <WhyChooseUs /> */}
            <TravelDeals />
            {/* <Travelpros /> */}
            <FindAccommodations />
        </>
    )
}

export default Home