import React from 'react'
import Asidebar from '../components/Asidebar'
import HeroSection from '../components/HeroSection'
import WhyChooseUs from '../components/WhyChooseUs'
import TravelDeals from '../components/TravelDeals'
import Travelpros from '../components/Travelpros'
import Footer from '../components/Footer'
import FindAccommodations from '../components/FindAccommodations'

const Home = () => {
    return (
        <>
            <Asidebar />
            <HeroSection />
            <WhyChooseUs />
            <TravelDeals />
            <Travelpros />
            <FindAccommodations />
            <Footer />
        </>
    )
}

export default Home