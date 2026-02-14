import React from 'react'
import Container from '../components/Container'
import Corporate_hero_background from "../assets/corporate_hero_background.jpg"
import { CiLollipop } from 'react-icons/ci'
import Explore from "../assets/Explore-Everywhere-Article-Cards.jpg"


import About_Us_Hero1 from "../assets/About-Us_Hero1.jpg"
import otscher from "../assets/otscher.jpg"
import Our_People from "../assets/Our-People_Hero4.jpg"
import Silver_Article from "../assets/Silver-Article-10.jpg"
import AboutDetailsCard from '../components/AboutDetailsCard'



const About = () => {
    return (
        <>
            <div
                style={{ backgroundImage: `url(${Corporate_hero_background})` }}
                className="w-full h-[300px] px-4 lg:px-16 flex items-center bg-cover bg-center relative"
            >
                <div className="absolute inset-0 bg-black/40"></div>
                <h1
                    className="text-2xl md:text-4xl font-bold text-white relative z-10"
                    style={{ fontFamily: "'Roboto', sans-serif" }}
                >
                    Confident Booking starts at KAYAK.
                </h1>
            </div>

            <div className='bg-gray-100 h-full w-full'>
                <Container className='flex flex-col items-start w-full gap-4 sm:gap-10 py-10 '>
                    <div className='flex flex-col items-start gap-4 w-full'>
                        <h1 className="text-xl md:text-3xl font-bold text-black"
                            style={{ fontFamily: "'Roboto', sans-serif" }}>
                            Since 2004, KAYAK has been revolutionizing the travel industry. Metasearch for travel? No one was doing it. Until we did.

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

            <Container className='py-10 flex flex-col items-center gap-10'>
                <div className='bg-[#F5BFC3] flex flex-col items-start gap-1 w-full py-4 px-4 rounded-md'>
                    <h1 className='text-2xl font-bold flex items-center gap-1' style={{ fontFamily: "'Roboto', sans-serif" }}> <CiLollipop /> Top tip</h1>
                    <p className='text-2xl font-normal' style={{ fontFamily: "'Lobster Two', sans-serif" }}>We’re on a mission to become the world’s number one travel ally, helping people everywhere move faster, travel smarter and discover more of the world with confidence.</p>
                </div>

                <section className='flex flex-col items-start w-full gap-5'>
                    <AboutDetailsCard image={Explore} title={"Global leader in travel"} desc={"Travel is all about freedom. So it makes sense that planning and booking your trip should be simple, not a chore. We know you're looking for the best prices and maximum flexibility to choose what's right for you. That’s why we're always hard at work making sure our app and website offer a super straightforward and speedy experience. With more than 1200 partners across the world we’re constantly developing our best-in-class network to connect travellers with the most accurate, trusted options so everyone can find the best offer for them. With over 80 billion prices searched every day, travellers can be sure they've seen the best possible options, all in one place."} />
                    <AboutDetailsCard image={About_Us_Hero1} title={"Effortless travel planning for everyone"} desc={"We do the hard work so our travellers don’t have to. We use our data, insights and tech innovation to make the complex simple, so you can get back to the more important stuff - stress-free planning, booking and travelling."} />
                    <AboutDetailsCard image={otscher} title={"A force for positive change"} desc={"We believe that travel should have a positive impact. That’s why we’re committed to helping shape a more responsible future for travel in collaboration with our partners. From communicating the environmental impact of flights and sharing unbiased information so you can make an informed choice, to making our site as accessible as possible and our business as inclusive as can be, our thinking isn’t just for today and tomorrow, it’s for generations to come."} />
                    <AboutDetailsCard image={Our_People} title={"Always unbiased, honest and transparent"} desc={"As travellers ourselves, we always lead with honesty and transparency - and we hold our partners to the same high standards. That means no hidden fees, no secret charges, no added cost to you, so we always remain unbiased."} />
                    <AboutDetailsCard image={Silver_Article} title={"Hotels"} desc={"Getting there is only part of the journey. We're here to help round-off your entire trip with millions of rooms from all around the world, from low-cost to luxury. Compare all the biggest names right here. And with our great rates with the world's leading hotels, you’ll save even more."} />
                </section>
            </Container>


        </>
    )
}

export default About