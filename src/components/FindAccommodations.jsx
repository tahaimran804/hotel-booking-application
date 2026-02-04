import React, { useState } from 'react'
import Container from './Container'
import { Link } from 'react-router-dom'
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const FindAccommodations = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (id) => {
        setOpenIndex(openIndex === id ? null : id);
    };

    const accommodationData = [
        {
            id: 1,
            countryData: [
                { id: 1, country: "United States Hotels", url: "#" },
                { id: 2, country: "Iceland Hotels", url: "#" },
            ],
            CitesData: [
                {
                    id: 1,
                    city: "Las Vegas Hotels",
                    hotels: [
                        { name: "OYO Hotel And Casino Las Vegas", price: "$10+" },
                        { name: "Excalibur", price: "$10+" },
                        { name: "Silver Sevens Hotel & Casino", price: "$11+" },
                        { name: "Rio Hotel & Casino, a Destination by Hyatt Hotel", price: "$12+" },
                        { name: "Circus Circus Hotel, Casino & Theme Park", price: "$12+" },
                        { name: "Flamingo Las Vegas", price: "$13+" },
                        { name: "Horseshoe Las Vegas", price: "$13+" },
                        { name: "The LINQ Hotel & Casino", price: "$15+" },
                        { name: "Luxor", price: "$18+" },
                        { name: "Harrah's Las Vegas Hotel & Casino", price: "$24+" },
                    ],
                },
                {
                    id: 2,
                    city: "New York Hotels",
                    hotels: [
                        { name: "Hi New York City Hostel", price: "$36+" },
                        { name: "Central Park West Hostel", price: "$51+" },
                        { name: "West Side Ymca", price: "$81+" },
                        { name: "The Gallivant Times Square", price: "$88+" },
                        { name: "Pod 51", price: "$95+" },
                        { name: "OYO Times Square", price: "$106+" },
                        { name: "Radio Hotel", price: "$109+" },
                        { name: "Pod Times Square", price: "$109+" },
                        { name: "Paramount Hotel Times Square", price: "$110+" },
                        { name: "The Manhattan at Times Square", price: "$111+" },
                    ],
                },
                {
                    id: 3,
                    city: "Chicago Hotels",
                    hotels: [
                        { name: "The Chicago Hotel Collection Ambassador Gold Coast", price: "$17+" },
                        { name: "The Chicago Hotel Collection Magnificent Mile", price: "$21+" },
                        { name: "HI Chicago Hostel", price: "$36+" },
                        { name: "Freehand Chicago", price: "$43+" },
                        { name: "Travelodge by Wyndham Downtown Chicago", price: "$65+" },
                        { name: "Warwick Allerton Chicago", price: "$70+" },
                        { name: "Chicago South Loop Hotel", price: "$74+" },
                        { name: "Hotel Saint Clair - Magnificent Mile", price: "$74+" },
                        { name: "The Whitehall Hotel, BW Premier Collection", price: "$78+" },
                        { name: "Cambria Hotel Chicago Loop - Theatre District", price: "$87+" },
                    ],
                },
                {
                    id: 4,
                    city: "Los Angeles Hotels",
                    hotels: [
                        { name: "The Hollywood Roosevelt", price: "$120+" },
                        { name: "Loews Hollywood Hotel", price: "$130+" },
                        { name: "Kimpton Everly Hotel", price: "$140+" },
                        { name: "Shore Hotel Santa Monica", price: "$150+" },
                        { name: "The LINE Hotel", price: "$125+" },
                    ],
                },
                {
                    id: 5,
                    city: "Miami Hotels",
                    hotels: [
                        { name: "Fontainebleau Miami Beach", price: "$200+" },
                        { name: "Loews Miami Beach Hotel", price: "$180+" },
                        { name: "Eden Roc Miami Beach", price: "$190+" },
                        { name: "W South Beach", price: "$220+" },
                        { name: "1 Hotel South Beach", price: "$210+" },
                    ],
                },
                {
                    id: 6,
                    city: "San Francisco Hotels",
                    hotels: [
                        { name: "Fairmont San Francisco", price: "$150+" },
                        { name: "Hotel Nikko San Francisco", price: "$160+" },
                        { name: "Argonaut Hotel", price: "$170+" },
                        { name: "Clift Hotel", price: "$165+" },
                        { name: "Marriott Marquis", price: "$180+" },
                    ],
                },
                {
                    id: 7,
                    city: "Boston Hotels",
                    hotels: [
                        { name: "Boston Harbor Hotel", price: "$140+" },
                        { name: "The Godfrey Hotel", price: "$130+" },
                        { name: "XV Beacon", price: "$150+" },
                        { name: "Boston Marriott Copley Place", price: "$160+" },
                        { name: "The Westin Copley Place", price: "$155+" },
                    ],
                },
            ]
        },
        {
            id: 2,
            countryData: [
                { id: 3, country: "England Hotels", url: "#" },
                { id: 4, country: "Wales Hotels", url: "#" },
                { id: 5, country: "Scotland Hotels", url: "#" },
                { id: 6, country: "Northern Ireland Hotels", url: "#" },
            ],

            CitesData: [
                {
                    id: 8,
                    city: "London Hotels",
                    hotels: [
                        { name: "The Ritz London", price: "$450+" },
                        { name: "The Savoy", price: "$400+" },
                        { name: "Corinthia Hotel London", price: "$420+" },
                        { name: "The Langham London", price: "$380+" },
                        { name: "The Ned", price: "$350+" },
                        { name: "Rosewood London", price: "$410+" },
                        { name: "Mandarin Oriental Hyde Park", price: "$430+" },
                        { name: "The Connaught", price: "$390+" },
                        { name: "Four Seasons London", price: "$460+" },
                    ],
                },
                {
                    id: 9,
                    city: "Manchester Hotels",
                    hotels: [
                        { name: "Hotel Gotham", price: "$180+" },
                        { name: "The Edwardian Manchester", price: "$200+" },
                        { name: "Britannia Hotel", price: "$120+" },
                        { name: "Radisson Blu Manchester", price: "$150+" },
                        { name: "Macdonald Manchester", price: "$170+" },
                        { name: "Hilton Manchester Deansgate", price: "$190+" },
                        { name: "Hotel Football Manchester", price: "$160+" },
                        { name: "Innside Manchester", price: "$155+" },
                        { name: "King Street Townhouse", price: "$175+" },
                    ],
                },
                {
                    id: 10,
                    city: "Edinburgh Hotels",
                    hotels: [
                        { name: "The Balmoral", price: "$350+" },
                        { name: "Radisson Blu Edinburgh", price: "$280+" },
                        { name: "Sheraton Grand", price: "$300+" },
                        { name: "Fraser Suites", price: "$260+" },
                        { name: "Apex Grassmarket", price: "$250+" },
                        { name: "Crowne Plaza Edinburgh", price: "$270+" },
                        { name: "Novotel Edinburgh", price: "$220+" },
                        { name: "Kimpton Charlotte Square", price: "$310+" },
                        { name: "Old Town Chambers", price: "$240+" },
                    ],
                },
                {
                    id: 11,
                    city: "Glasgow Hotels",
                    hotels: [
                        { name: "Blythswood Square Hotel", price: "$200+" },
                        { name: "Radisson Blu Glasgow", price: "$180+" },
                        { name: "Grand Central Hotel", price: "$160+" },
                        { name: "Malmaison Glasgow", price: "$190+" },
                        { name: "Hilton Glasgow", price: "$170+" },
                        { name: "Hotel Indigo Glasgow", price: "$185+" },
                        { name: "Jurys Inn Glasgow", price: "$150+" },
                        { name: "Novotel Glasgow", price: "$155+" },
                        { name: "Dakota Glasgow", price: "$210+" },
                    ],
                },
                {
                    id: 12,
                    city: "Cardiff Hotels",
                    hotels: [
                        { name: "Hotel Indigo Cardiff", price: "$160+" },
                        { name: "Radisson Blu Cardiff", price: "$180+" },
                        { name: "Hilton Cardiff", price: "$170+" },
                        { name: "Copthorne Hotel Cardiff", price: "$150+" },
                        { name: "Park Plaza Cardiff", price: "$165+" },
                        { name: "Clayton Hotel Cardiff", price: "$175+" },
                        { name: "Future Inn Cardiff", price: "$155+" },
                        { name: "Mercure Cardiff Holland House", price: "$145+" },
                        { name: "Novotel Cardiff Center", price: "$160+" },
                    ],
                },
                {
                    id: 13,
                    city: "Belfast Hotels",
                    hotels: [
                        { name: "The Fitzwilliam Hotel Belfast", price: "$140+" },
                        { name: "Europa Hotel Belfast", price: "$120+" },
                        { name: "Malmaison Belfast", price: "$135+" },
                        { name: "Titanic Hotel Belfast", price: "$150+" },
                        { name: "Holiday Inn Belfast City Centre", price: "$110+" },
                        { name: "Clayton Hotel Belfast", price: "$115+" },
                        { name: "Bullitt Hotel Belfast", price: "$125+" },
                        { name: "Crowne Plaza Belfast", price: "$130+" },
                        { name: "Stormont Hotel Belfast", price: "$105+" },
                    ],
                },
                {
                    id: 14,
                    city: "Dublin Hotels",
                    hotels: [
                        { name: "The Shelbourne Dublin", price: "$250+" },
                        { name: "The Westbury Dublin", price: "$240+" },
                        { name: "The Merrion", price: "$260+" },
                        { name: "InterContinental Dublin", price: "$230+" },
                        { name: "Radisson Blu St. Helen's", price: "$220+" },
                        { name: "Clayton Hotel Burlington Road", price: "$210+" },
                        { name: "Mespil Hotel Dublin", price: "$200+" },
                        { name: "The Gibson Hotel", price: "$215+" },
                        { name: "Camden Court Hotel", price: "$225+" },
                    ],
                },
            ],
        },
        {
            id: 3,
            countryData: [
                { id: 7, country: "United Arab Emirates Hotels", url: "#" },
            ],
            CitesData: [
                {
                    id: 15,
                    city: "Dubai Hotels",
                    hotels: [
                        { name: "Burj Al Arab", price: "$1200+" },
                        { name: "Atlantis The Palm", price: "$950+" },
                        { name: "Armani Hotel Dubai", price: "$850+" },
                        { name: "Jumeirah Beach Hotel", price: "$780+" },
                        { name: "Address Downtown", price: "$700+" },
                        { name: "Rixos The Palm", price: "$650+" },
                        { name: "One&Only The Palm", price: "$900+" },
                        { name: "Palace Downtown", price: "$720+" },
                        { name: "Four Seasons Resort Dubai", price: "$880+" },
                    ],
                },
                {
                    id: 16,
                    city: "Abu Dhabi Hotels",
                    hotels: [
                        { name: "Emirates Palace", price: "$1100+" },
                        { name: "St. Regis Abu Dhabi", price: "$900+" },
                        { name: "Rosewood Abu Dhabi", price: "$800+" },
                        { name: "Jumeirah at Etihad Towers", price: "$850+" },
                        { name: "The Ritz-Carlton Abu Dhabi", price: "$950+" },
                        { name: "InterContinental Abu Dhabi", price: "$750+" },
                        { name: "Khalidiya Palace Rayhaan", price: "$700+" },
                        { name: "Sofitel Abu Dhabi Corniche", price: "$720+" },
                        { name: "Novotel Center Hotel", price: "$680+" },
                    ],
                },
                {
                    id: 17,
                    city: "Sharjah Hotels",
                    hotels: [
                        { name: "Sheraton Sharjah Beach Resort", price: "$250+" },
                        { name: "Radisson Blu Resort Sharjah", price: "$220+" },
                        { name: "Hilton Sharjah", price: "$200+" },
                        { name: "Al Maha Resort Sharjah", price: "$280+" },
                        { name: "Le Meridien Sharjah", price: "$230+" },
                        { name: "Pearl Hotel Sharjah", price: "$210+" },
                        { name: "Coral Beach Resort Sharjah", price: "$240+" },
                        { name: "Centro Sharjah", price: "$190+" },
                        { name: "Golden Tulip Sharjah", price: "$200+" },
                    ],
                },
                {
                    id: 18,
                    city: "Ajman Hotels",
                    hotels: [
                        { name: "Ajman Saray, a Luxury Collection Resort", price: "$400+" },
                        { name: "Fairmont Ajman", price: "$350+" },
                        { name: "Holiday Inn Ajman", price: "$220+" },
                        { name: "Ajman Hotel", price: "$180+" },
                        { name: "The Oberoi Beach Resort", price: "$420+" },
                        { name: "Bahi Ajman Palace Hotel", price: "$300+" },
                        { name: "Ajman Beach Hotel", price: "$210+" },
                        { name: "Golden Sands Hotel Ajman", price: "$190+" },
                        { name: "City Tower Hotel Ajman", price: "$200+" },
                    ],
                },
                {
                    id: 19,
                    city: "Ras Al Khaimah Hotels",
                    hotels: [
                        { name: "Waldorf Astoria Ras Al Khaimah", price: "$500+" },
                        { name: "Hilton Ras Al Khaimah Resort", price: "$450+" },
                        { name: "DoubleTree by Hilton", price: "$350+" },
                        { name: "Rixos Bab Al Bahr", price: "$480+" },
                        { name: "Marriott Resort Ras Al Khaimah", price: "$400+" },
                        { name: "The Cove Rotana Resort", price: "$420+" },
                        { name: "Hilton Garden Inn", price: "$300+" },
                        { name: "Bin Majid Beach Hotel", price: "$320+" },
                        { name: "Al Hamra Hotel", price: "$280+" },
                    ],
                },
                {
                    id: 20,
                    city: "Fujairah Hotels",
                    hotels: [
                        { name: "Le Meridien Al Aqah Beach Resort", price: "$380+" },
                        { name: "Radisson Blu Resort Fujairah", price: "$350+" },
                        { name: "InterContinental Fujairah", price: "$330+" },
                        { name: "Novotel Fujairah", price: "$280+" },
                        { name: "Hilton Fujairah Resort", price: "$360+" },
                        { name: "Grand Horizon Hotel Fujairah", price: "$310+" },
                        { name: "Swiss-Belresort Fujairah", price: "$300+" },
                        { name: "Royal M Hotel Fujairah", price: "$290+" },
                        { name: "Dibba Al Fujairah Beach Hotel", price: "$270+" },
                    ],
                },
                {
                    id: 21,
                    city: "Sharjah City Hotels",
                    hotels: [
                        { name: "Al Qasba Hotel", price: "$220+" },
                        { name: "Sharjah Premiere Hotel", price: "$210+" },
                        { name: "City Stay Sharjah", price: "$190+" },
                        { name: "Royal Sharjah Hotel", price: "$200+" },
                        { name: "Sharjah Rotana Hotel", price: "$230+" },
                        { name: "Hilton Sharjah City", price: "$240+" },
                        { name: "Sharjah Palace Hotel", price: "$220+" },
                        { name: "Centro Sharjah City", price: "$210+" },
                        { name: "Al Hamra City Hotel", price: "$200+" },
                    ],
                },
            ],
        },
    ];




    return (
        <Container>
            <div className='flex flex-col items-start'>
                <h1 className='text-2xl sm:text-4xl font-bold' style={{
                    fontFamily: "'Roboto', sans-serif"
                }}>Search for places to stay by destination</h1>
                <p style={{
                    fontFamily: "'Roboto', sans-serif"
                }} className='text-sm sm:text-lg font-normal'>Find Accommodations</p>
            </div>
            <p style={{
                fontFamily: "'Roboto', sans-serif"
            }} className='text-sm py-5 font-normal'>Can I really save on places to stay near me and lodging in other popular destinations by using KAYAK? Yes! KAYAK searches for accommodation deals on hundreds of accommodation comparison sites to help you find deals on <Link to={"/"} className='text-[#07647E]'>hotels, vacation rentals</Link> and more.</p>

            <div className='gap-1 md:gap-4 grid items-start grid-cols-1 md:grid-cols-3'>
                {accommodationData.map((elemItem) => (
                    <section key={elemItem.id} className='w-full py-2 md:py-10 flex flex-col items-start gap-5'>
                        {elemItem.CitesData.map((cityData) => (
                            <div key={cityData.id} className='w-full flex flex-col gap-2'>
                                <div className='flex w-full border-b border-gray-200 pb-2 items-center justify-between'>
                                    <h1 className='text-sm hover:underline cursor-pointer font-bold'>
                                        <Link to="#">{cityData.city}</Link>
                                    </h1>
                                    <span
                                        onClick={() => toggleAccordion(`${elemItem.id}-${cityData.id}`)}
                                        className={`text-2xl transition-transform cursor-pointer duration-300 ${openIndex === `${elemItem.id}-${cityData.id}` ? "rotate-180" : ""
                                            }`}>
                                        <IoIosArrowDown />
                                    </span>

                                </div>
                                <div
                                    className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === `${elemItem.id}-${cityData.id}` ? "max-h-[500px]" : "max-h-0"
                                        }`}
                                >
                                    <ul className='flex flex-col gap-2 w-full py-2'>
                                        {cityData.hotels.map((hotel, i) => (
                                            <Link key={i} to="#" className='w-full'>
                                                <li className="flex justify-between w-full group cursor-pointer">
                                                    <span className="text-sm text-gray-500 group-hover:underline truncate flex-1">{hotel.name}</span>
                                                    <span className="text-sm text-gray-500 group-hover:underline flex-shrink-0">{hotel.price}</span>
                                                </li>
                                            </Link>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}

                        {elemItem.countryData.map((country) => (
                            <div key={country.id} className='w-full flex flex-col gap-2'>
                                <div className='flex w-full border-b border-gray-200 pb-2 items-center justify-between cursor-pointer'>
                                    <Link to={country.url}>
                                        <h1 className='text-sm hover:underline font-bold'>{country.country}</h1>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </section>
                ))}

            </div>

            <div className='flex flex-col pb-10 items-start gap-1'>
                <p style={{
                    fontFamily: "'Roboto', sans-serif"
                }} className='text-sm pt-5 font-normal'>

                    Search cheap hotels with KAYAK. Use the hotel finder to search for the cheapest hotel deal for all major destinations <Link to={"/"} className='text-[#07647E]'>around the world</Link>. KAYAK searches hundreds of hotel booking sites to help you find hotels and book hotels that suit you best. Since KAYAK searches many hotel sites at once, you can find discount hotels quickly, including <Link to={"/"} className='text-[#07647E]'>Hotels Under $50</Link> and   <Link to={"/"} className='text-[#07647E]'>Hotels Under $100</Link> Discover hotel discounts now and make your hotel reservation today.
                    Not what you’re looking for? Find tho
                </p>
                <p style={{
                    fontFamily: "'Roboto', sans-serif"
                }} className='text-sm pt-5 font-normal'>
                    Not what you’re looking for? Find thousands of other <Link to={"/"} className='text-[#07647E]'>hotels</Link>, <Link to={"/"} className='text-[#07647E]'>flights</Link> and <Link to={"/"} className='text-[#07647E]'>car rentals</Link> with KAYAK.
                </p>
            </div>


        </Container >
    )
}

export default FindAccommodations