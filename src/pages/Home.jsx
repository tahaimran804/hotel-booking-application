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
        if (hotelSearch.length < 3) return;
        const fetchHotels = async () => {
            try {
                setLoading(true)
                const json = JSON.stringify({ search: hotelSearch });
                const response = await axios.post(
                    'http://172.16.253.49:5001/hotels?action=search_hotels',
                    JSON.stringify({ params: json }),
                    {
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded',
                        },
                    }

                )
                if (response.data.success === true) {
                    setHotels(response.data.data)
                }
            } catch (error) {
                console.error('Error fetching hotels:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchHotels()
    }, [hotelSearch]);

    useEffect(() => {
        if (selectedCity) {
            selectedCountry({
                country_name: selectedHotel.country_name,
                country_code: selectedHotel.country_code
            });

            selectedCity({
                city_name: selectedHotel.city_name,
            })
        }
    }, [selectedHotel])



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