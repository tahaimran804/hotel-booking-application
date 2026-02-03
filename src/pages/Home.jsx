import React from 'react'
import Asidebar from '../components/Asidebar'
import HeroSection from '../components/HeroSection'

const Home = () => {
    return (
        <>
            <Asidebar />
            <HeroSection home={"Home Page"} />
        </>
    )
}

export default Home