import React from 'react'
import HeroSection from '../components/HeroSection'
import WhyChooseUs from '../components/WhyChooseUs'
import TravelDeals from '../components/TravelDeals'
import Travelpros from '../components/Travelpros'
import FindAccommodations from '../components/FindAccommodations'
import SaveSearch from '../components/SaveSearch'

const Home = () => {
    return (
        <>
            <HeroSection />
            <SaveSearch />
            <WhyChooseUs />
            <TravelDeals />
            <Travelpros />
            <FindAccommodations />
        </>
    )
}

export default Home