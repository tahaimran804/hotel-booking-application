import React from 'react'
import Container from '../components/Container'
import Corporate_hero_background from "../assets/corporate_hero_background.jpg"

const About = () => {
    return (
        <>
            <div
                style={{ backgroundImage: `url(${Corporate_hero_background})` }}
                className="w-full h-[300px] px-16 flex items-center bg-cover bg-center relative"
            >
                <div className="absolute inset-0 bg-black/40"></div>
                <h1
                    className="text-4xl font-bold text-white relative z-10"
                    style={{ fontFamily: "'Roboto', sans-serif" }}
                >
                    Confident Booking starts at KAYAK.
                </h1>
            </div>

            <div className='bg-gray-100 h-full w-full'>
                <Container className='flex flex-col items-start w-full gap-4 sm:gap-10 py-10 '>
                    <div className='flex flex-col items-start gap-4 w-full'>
                        <h1 className="text-3xl font-bold text-black"
                            style={{ fontFamily: "'Roboto', sans-serif" }}>
                            Helping travelers find the perfect stay with confidence and transparency.
                        </h1>
                        <div className='flex flex-col items-start w-full'>
                            <p className='text-sm w-full text-gray-600'>
                                Our platform was built with one goal in mind — to simplify hotel booking and give travelers complete control over their accommodation choices. Finding the right hotel shouldn’t mean searching dozens of websites, comparing prices manually, or worrying about hidden fees.

                                We bring together hotel listings, pricing, amenities, and availability from multiple trusted booking providers into one easy-to-use platform. Whether you're planning a luxury vacation, business trip, family stay, or quick weekend getaway, our system helps you compare options, evaluate prices, and make smarter booking decisions.

                                By combining advanced search technology with real-time pricing comparisons, we ensure travelers always get the best available options. Our goal is to remove confusion, save time, and create a smooth, reliable booking experience for users around the world.
                            </p>
                        </div>

                    </div>

                    <section className="flex flex-col gap-8 mt-10">

                        {/* What Drives Platform */}
                        <div className="flex flex-col gap-3">
                            <h1
                                className="text-2xl font-bold text-black"
                                style={{ fontFamily: "'Roboto', sans-serif" }}
                            >
                                What drives our hotel booking platform.
                            </h1>
                        </div>

                        {/* Beliefs Grid */}
                        <div className="grid md:grid-cols-2 grid-cols-1 gap-6">

                            {/* Item 1 */}
                            <div className="flex flex-col gap-2">
                                <h1 className="text-lg font-semibold text-black">
                                    Smart comparison leads to better travel decisions.
                                </h1>

                                <p className="text-sm text-gray-600">
                                    Our hotel comparison system gathers rates from multiple booking partners, allowing users to view pricing differences instantly. This ensures travelers never overpay and always understand their options clearly before choosing a hotel.
                                </p>
                            </div>

                            {/* Item 2 */}
                            <div className="flex flex-col gap-2">
                                <h1 className="text-lg font-semibold text-black">
                                    Transparency builds trust.
                                </h1>

                                <p className="text-sm text-gray-600">
                                    We believe travelers deserve complete clarity when booking hotels. Our platform displays accurate pricing, cancellation policies, room details, and booking provider information so users can make confident decisions without hidden costs or surprises.
                                </p>
                            </div>

                            {/* Item 3 */}
                            <div className="flex flex-col gap-2">
                                <h1 className="text-lg font-semibold text-black">
                                    Wide selection for every type of traveler.
                                </h1>

                                <p className="text-sm text-gray-600">
                                    From luxury hotels to budget stays, beachfront resorts to business accommodations, our system helps users discover properties that match their travel style, budget, and comfort preferences.
                                </p>
                            </div>

                            {/* Item 4 */}
                            <div className="flex flex-col gap-2">
                                <h1 className="text-lg font-semibold text-black">
                                    Seamless booking experience.
                                </h1>

                                <p className="text-sm text-gray-600">
                                    Our platform connects users directly with trusted booking partners through secure affiliate integrations. This allows travelers to complete reservations safely while benefiting from competitive pricing and verified hotel listings.
                                </p>
                            </div>

                            {/* Item 5 */}
                            <div className="flex flex-col gap-2">
                                <h1 className="text-lg font-semibold text-black">
                                    Innovation powered by technology.
                                </h1>

                                <p className="text-sm text-gray-600">
                                    We continuously improve our search algorithms, filtering systems, and map integrations to help travelers quickly find hotels based on location, price, ratings, and amenities. Our mission is to make hotel booking faster, smarter, and more personalized for every traveler.
                                </p>
                            </div>

                        </div>

                        {/* Mission Section */}
                        <div className="flex flex-col gap-2 mt-4">
                            <h1 className="text-lg font-semibold text-black">
                                Our mission
                            </h1>

                            <p className="text-sm text-gray-600">
                                We aim to become a trusted global platform where travelers can confidently compare hotels, discover new destinations, and book accommodations with complete peace of mind.
                            </p>
                        </div>
                    </section>
                </Container>
            </div>
        </>
    )
}

export default About