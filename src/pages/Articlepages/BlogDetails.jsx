import React from 'react'
import Container from '../../components/Container'
import FAQAccordion from '../../components/FAQAccordion'
import BlogBanner from "../../assets/BlogBanner1.webp"
import AuthorImage from "../../assets/AuthorImage.jpeg"
import AuthorImage1 from "../../assets/AuthorImage1.jpeg"
import blogDetails1 from "../../assets/blogDetails1.webp"
import blogDetails2 from "../../assets/blogDetails2.webp"
import blogDetails3 from "../../assets/blogDetails3.webp"
import blogDetails4 from "../../assets/blogDetails4.webp"
import blogDetails5 from "../../assets/blogDetails5.webp"
import blogDetails6 from "../../assets/blogDetails6.webp"
import ArticleImage from "../../assets/Blog.webp"
import ArticleImage1 from "../../assets/ArticleImage.webp"
import ArticleImage2 from "../../assets/ArticleImage1.webp"
import AuthorImage2 from "../../assets/AuthorImage1.jpeg"
import { Link } from 'react-router-dom'
const BlogDetails = () => {

    const blogData = [
        {
            id: 1,
            category: "All about hotels",
            title: "The ultimate guide to visiting an onsen in Japan.",
            description:
                "Discover the best onsen in Japan, including historic ryokans, tranquil mountain escapes and luxurious stays.",
            author: "Chloe Gunning-Sherifi",
            readTime: "3 min read",
            image: ArticleImage,
            authorImage: AuthorImage,
        },
        {
            id: 2,
            category: "Hotel Tips",
            title: "How to find luxury hotels at budget prices.",
            description:
                "Learn smart comparison techniques and hidden booking strategies to enjoy premium hotels at lower costs.",
            author: "John Carter",
            readTime: "5 min read",
            image: ArticleImage1,
            authorImage: AuthorImage1,
        },
        {
            id: 3,
            category: "Travel Guide",
            title: "Best family-friendly hotels worldwide.",
            description:
                "Explore hotels offering kids activities, family suites, and relaxing environments for perfect vacations.",
            author: "Emily Watson",
            readTime: "4 min read",
            image: ArticleImage2,
            authorImage: AuthorImage2,
        },
    ];
    const shortData = blogData.slice(0, 3)

    return (
        <>
            <div className='w-full h-full lg:h-[400px] bg-gray-50 flex flex-col-reverse lg:grid lg:grid-cols-2 items-center'>
                <Container>
                    <div className='px-0 sm:px-4 py-4 lg:px-10 flex flex-col items-start gap-2'>
                        <h1 className='text-lg sm:text-2xl md:text-4xl font-bold text-black' style={{
                            fontFamily: "'Roboto', sans-serif"
                        }}>What is a resort fee and how to avoid it on your next trip</h1>
                        <p className='text-xs md:text-sm font-normal text-black'>11 min read</p>
                        <div className='flex items-center gap-2'>
                            <div className='flex items-center gap-1'>
                                <span className='w-8 h-8 rounded-full'><img className='w-full h-full rounded-full' src={AuthorImage} alt="Author Image" /></span>
                                <span className='w-8 h-8 rounded-full'><img className='w-full h-full rounded-full' src={AuthorImage1} alt="Author Image" /></span>
                            </div>
                            <div className='flex flex-col items-start'>
                                <h1 className='text-sm font-semibold text-black' style={{
                                    fontFamily: "'Roboto', sans-serif"
                                }}>Jenna Scatena, Blane Bachelor</h1>
                                <p className='text-xs md:text-sm font-normal text-black'>May 26, 2025</p>
                            </div>
                        </div>
                    </div>
                </Container>
                <div className='w-full h-[300px] sm:h-[400px]'><img src={BlogBanner} className='w-full h-full' alt="blog banner" /></div>
            </div>

            <Container className='flex flex-col items-start gap-4 my-10 w-full md:w-2/3'>
                <div className='flex flex-col items-start gap-4 border-b border-gray-200 pb-5 w-full'>
                    <p className='text-sm font-normal text-black'>Have you ever checked into a hotel and been caught off guard by a hefty resort fee? You’re not alone: It’s happened to the best of us. And what is a resort fee, anyway?</p>
                    <p className='text-sm font-normal text-black'>When booking a hotel, you should be aware of and budget for resort fees to avoid an unpleasant surprise during check-in. To help you navigate the process, here’s a handy guide that breaks down exactly what fees include and how to avoid them altogether.</p>
                    <p className='text-sm font-normal text-black'>A hotel resort fee is an additional charge to cover the cost of various services and amenities that guests are entitled to during their stay. This can include access to amenities such as the spa, pool, or gym, services like WiFi, and extras like in-room coffee or bottled water.</p>
                </div>

                <div className='grid grid-cols-2 items-start gap-4 border-b border-gray-200 pb-5 w-full'>
                    <h1 className='text-lg sm:text-2xl font-bold text-black' style={{
                        fontFamily: "'Roboto', sans-serif"
                    }}>In this post</h1>
                    <ul className='flex flex-col items-start gap-1'>
                        {
                            [
                                {
                                    id: 1,
                                    name: "What is a resort fee, anyway?",
                                },
                                {
                                    id: 2,
                                    name: "Why do hotels charge a resort fee?",
                                },
                                {
                                    id: 3,
                                    name: "What services and amenities do resort fees cover?",
                                },
                                {
                                    id: 4,
                                    name: "What is a destination fee and destination amenity fee?",
                                },
                                {
                                    id: 5,
                                    name: "Hotels with the worst resort fees",
                                },
                                {
                                    id: 6,
                                    name: "Hotels without resort fees",
                                },
                                {
                                    id: 7,
                                    name: "Other hidden costs and fees",
                                },
                                {
                                    id: 8,
                                    name: "How to avoid resort fees: tips for travelers",
                                },
                                {
                                    id: 9,
                                    name: "FAQs",
                                },
                            ].map((elemItem) => (
                                <li key={elemItem.id} className='text-sm font-normal text-blue-600 underline list-disc'>{elemItem.name}</li>
                            ))
                        }
                    </ul>
                </div>

                <div className='flex flex-col items-start gap-6 border-b border-gray-200 pb-5 w-full'>
                    <div className='flex flex-col w-full items-start gap-2'>
                        <h1 className='text-lg sm:text-2xl font-bold text-black' style={{
                            fontFamily: "'Roboto', sans-serif"
                        }}>What is a resort fee, anyway?</h1>

                        <div className='w-full h-[200px] sm:h-[400px]'>
                            <img src={blogDetails1} alt="resort fee" className='rounded-xl w-full h-full' />
                        </div>

                        <div className='flex flex-col items-start gap-4 w-full'>
                            <p className='text-sm font-normal text-black'>When booking a room, it's important to keep in mind that the price you see advertised may not tell the whole story – I had to learn this one the hard way! Increasingly, hotels and resorts are charging a separate resort fee in addition to the room rate and taxes, which can be frustrating (if not infuriating) to unsuspecting guests.</p>
                            <p className='text-sm font-normal text-black'>The intent behind the resort fee is to cover the cost of providing certain amenities to guests, such as the pool or fitness center, Wi-Fi, or transportation services. While such extras certainly enhance the guest experience, they can often feel like an unwelcome surprise when you’re forced to pay extra for them. Nowadays, the average price of a resort fee is around $35, and it’s typically charged per night, not per stay. Which can quickly derail a travel budget.</p>
                        </div>
                    </div>


                    <div className='flex flex-col w-full items-start gap-2'>
                        <h1 className='text-lg sm:text-2xl font-bold text-black' style={{
                            fontFamily: "'Roboto', sans-serif"
                        }}>Why do hotels charge a resort fee?</h1>

                        <div className='flex flex-col items-start gap-4 w-full'>
                            <p className='text-sm font-normal text-black'>The hotel industry is a notoriously challenging one. With the rise of Airbnb and other alternative accommodations, hotel and resort owners have developed strategic ways to remain competitive and earn revenue. One way is to keep room rates appealing to potential guests and encouraging them to book without necessarily considering other fees.</p>
                        </div>

                        <div className='flex flex-col items-start py-4 px-4 my-4 rounded-md bg-[#f5bfc3] w-full'>
                            <p style={{ fontFamily: "'Lobster Two', sans-serif" }} className='text-sm font-normal text-black'>However, travelers who are fed up with resort fees got a recent win. In 2024, the <span className='text-blue-500 underline'>Federal Trade Commission</span> announced rules around what it describes as “junk fees” – and, more specifically, that hotels and resorts are required to disclose such fees, which include resort fees, up front to customers. While this has helped create transparency around resort fees, it hasn’t eliminated them.</p>
                        </div>
                    </div>



                    <div className='flex flex-col w-full items-start gap-2'>
                        <h1 className='text-lg sm:text-2xl font-bold text-black' style={{
                            fontFamily: "'Roboto', sans-serif"
                        }}>What services and amenities do resort fees cover?</h1>

                        <div className='w-full h-[200px] sm:h-[400px]'>
                            <img src={blogDetails2} alt="resort fee" className='rounded-xl w-full h-full' />
                        </div>

                        <div className='flex flex-col items-start gap-4 w-full'>
                            <p className='text-sm font-normal text-black'>These fees go towards covering various services and amenities that are offered to enhance your hotel experience. This could include access to fitness centers, pools, and lounges, as well as free Wi-Fi and parking. Resort fees may also go towards providing complimentary breakfast, an airport shuttle service, and daily newspapers.</p>
                        </div>
                        <div className='flex flex-col items-start gap-2 w-full'>
                            <h1 className='text-lg sm:text-2xl font-bold text-black' style={{
                                fontFamily: "'Roboto', sans-serif"
                            }}>What is not included in a resort fee?</h1>
                            <p className='text-sm font-normal text-black'>However, you can’t assume that a resort fee is the only extra cash you might have to part with on top of your room rate. Additional services such as spa treatments, room service and other meals, or valet parking usually incur extra charges. It's best to check with your hotel or resort ahead of time to understand what is and isn't covered by the resort fee.</p>
                        </div>


                        <div className='flex flex-col items-start gap-2 w-full'>
                            <h1 className='text-lg sm:text-2xl font-bold text-black' style={{
                                fontFamily: "'Roboto', sans-serif"
                            }}>What is a destination fee and what is a destination amenity fee?</h1>
                            <p className='text-sm font-normal text-black'>While resort fees have become more commonplace, you might be confused by other terms that pop up during the booking process. Resort fee, destination fee, and destination amenity fee are all used interchangeably by hotels and resorts. Generally, resorts charge resort fees, while hotels charge destination fees or destination amenity fees for the same offerings. That said, the amount and variety of amenities and services on offer can vary significantly between properties.</p>
                            <p className='text-sm font-normal text-black'>In rare circumstances, you might see a resort fee and a destination fee charged at the same accommodation. This usually occurs at hotels and resorts in popular tourist destinations, including Hawaii, which capitalize on their amenities and sought-after location. It's important to carefully look for the fee breakdown when booking to understand exactly what you're paying for and why.</p>
                        </div>
                    </div>


                    <div className='flex flex-col w-full items-start gap-2'>
                        <h1 className='text-lg sm:text-2xl font-bold text-black' style={{
                            fontFamily: "'Roboto', sans-serif"
                        }}>What hotels have the worst resort fees?</h1>

                        <div className='w-full h-[200px] sm:h-[400px]'>
                            <img src={blogDetails3} alt="resort fee" className='rounded-xl w-full h-full' />
                        </div>

                        <div className='flex flex-col items-start gap-4 w-full'>
                            <p className='text-sm font-normal text-black'>Most large hotel chains now charge guests some sort of resort fee. Some of the worst average fees (from $30 to $50+ per night) relative to room rates include:</p>
                        </div>

                        <div className='flex flex-col ml-4 items-start gap-2 w-full'>
                            <li className='text-sm font-normal text-black list-disc'>IHG Hotels</li>
                            <li className='text-sm font-normal text-black list-disc'>Hilton</li>
                            <li className='text-sm font-normal text-black list-disc'>Marriott</li>
                        </div>

                        <div className='flex flex-col items-start gap-4 w-full'>
                            <p className='text-sm font-normal text-black'>But these fees also depend heavily on location. Popular tourist cities like Miami, Las Vegas, and New York typically boast the highest average fees, with some luxury resorts in those destinations charging more than $100 per night in resort fees.</p>
                        </div>
                    </div>


                    <div className='flex flex-col items-start gap-2 w-full'>
                        <h1 className='text-lg sm:text-2xl font-bold text-black' style={{
                            fontFamily: "'Roboto', sans-serif"
                        }}>Finding hotel chains without resort fees</h1>
                        <p className='text-sm font-normal text-black'>It’s almost impossible to find any major hotel and resort chains that does not charge resort fees these days. However, you can easily consider your options by using KAYAK’s price dropdown menu. On KAYAK you can choose whether to display:</p>
                        <div className='flex flex-col ml-4 items-start gap-2 w-full'>
                            <li className='text-sm font-normal text-black list-disc'>The total stay, including taxes and fees (which is the default)</li>
                            <li className='text-sm font-normal text-black list-disc'>Nightly total, including taxes and fees</li>
                            <li className='text-sm font-normal text-black'>This format means no more surprises.</li>
                        </div>
                        <p className='text-sm font-normal text-black'>Using travel reward programs or hotel loyalty programs is another strategic way to book a hotel without paying resort fees. For example, Hyatt waives resort fees when guests book with World of Hyatt loyalty points, as does Hilton for its Hilton Honors members.</p>
                        <p className='text-sm font-normal text-black'>Check your favorite hotel’s loyalty program to avoid resort fees on your next trip, which can offer significant savings for your repeat business.</p>
                        <Link to={"/"}>
                            <button className='py-2 cursor-pointer px-6 rounded-sm font-semibold bg-[var(--primary-color)] text-sm text-white'>Find stays and hotels</button>
                        </Link>
                    </div>


                    <div className='flex flex-col items-start gap-2 w-full'>
                        <h1 className='text-lg sm:text-2xl font-bold text-black' style={{
                            fontFamily: "'Roboto', sans-serif"
                        }}>Other hidden fees travelers may encounter</h1>
                        <p className='text-sm font-normal text-black'>Resort fees aren’t the only annoying extra expenses that travelers find themselves facing. In fine print underneath the base room rate, you may see more than one cost tacked onto the price. While resort fees are commonplace, so are other taxes and fees for certain destinations and services. Tourist taxes, early check-in fees, additional guest fees, and strict cancellation fees are all extra costs you may encounter when checking into a hotel.</p>
                        <h1 className='text-lg sm:text-2xl font-bold text-black' style={{
                            fontFamily: "'Roboto', sans-serif"
                        }}>Tourist tax</h1>
                        <div className='w-full h-[200px] sm:h-[400px]'>
                            <img src={blogDetails4} alt="resort fee" className='rounded-xl w-full h-full' />
                        </div>

                        <div className='flex flex-col items-start gap-4 w-full'>
                            <p className='text-sm font-normal text-black'>A tourist tax is an extra fee charged at your accommodation. It is typically imposed by the local, regional, or national government and can vary from country to country and even within different regions of a country. It is often assessed as a percentage of the total bill, or it can also be a set price per guest.</p>
                            <p className='text-sm font-normal text-black'>Tourist taxes are becoming increasingly popular to combat over-tourism and its impacts. Many European destinations have implemented such a tax for decades, but tourist taxes are also appearing in Asia and the Americas. Tourist taxes often support local infrastructure and other services that directly benefit tourists as well as local communities, such as street cleaning, waste management, and road maintenance.</p>
                            <p className='text-sm font-normal text-black'>High tourist taxes are increasingly common in popular destinations like Paris, Rome, Venice, Berlin, Amsterdam and Bali. Tourist tax can also apply to a whole country, such as Switzerland and Greece.</p>
                        </div>
                        <h1 className='text-lg sm:text-2xl font-bold text-black' style={{
                            fontFamily: "'Roboto', sans-serif"
                        }}>Early check-in/late check-out fees</h1>
                        <p className='text-sm font-normal text-black'>Many hotels will charge an extra fee if you want to check in early or check out late. Depending on how early or how late, you may even be required to book additional nights, which can add up quickly and increase the total cost of your stay.  </p>


                    </div>


                    <div className='flex flex-col items-start gap-2 w-full'>
                        <h1 className='text-lg sm:text-2xl font-bold text-black' style={{
                            fontFamily: "'Roboto', sans-serif"
                        }}>Additional guest fees</h1>
                        <div className='w-full h-[200px] sm:h-[400px]'>
                            <img src={blogDetails5} alt="resort fee" className='rounded-xl w-full h-full' />
                        </div>
                        <p className='text-sm font-normal text-black'>If you book for two people and show up with three, many hotels – especially those in Europe – will hit you with an additional guest fee. This can range from $20 up to $50 per night, depending on the hotel and its policy.</p>

                        <h1 className='text-lg sm:text-2xl font-bold text-black' style={{
                            fontFamily: "'Roboto', sans-serif"
                        }}>Cancellation fees</h1>
                        <div className='flex flex-col items-start gap-4 w-full'>
                            <p className='text-sm font-normal text-black'>Most hotels will charge a fee or percentage of your booking if you cancel your reservation within a certain amount of time prior to your arrival date. Some hotels may even charge a fee if you change your reservation after it has been made, so it's important to read the fine print.</p>
                        </div>
                        <div className='flex flex-col items-start py-4 px-4 my-4 rounded-md bg-[#f5bfc3] w-full'>
                            <p style={{ fontFamily: "'Lobster Two', sans-serif" }} className='text-sm font-normal text-black'>However, it’s a cinch to search on <Link className='text-blue-500 underline'>KAYAK for hotels</Link> that offer free cancellation. After selecting your preferred destination and dates, simply choose “Free cancellation” from the “Inclusions” filter in the dropdown menu.
                            </p>
                        </div>
                    </div>


                    <div className='flex flex-col items-start gap-2 w-full'>
                        <h1 className='text-lg sm:text-2xl font-bold text-black' style={{
                            fontFamily: "'Roboto', sans-serif"
                        }}>How to avoid resort fees: Tips for travelers</h1>
                        <div className='w-full h-[200px] sm:h-[400px]'>
                            <img src={blogDetails6} alt="resort fee" className='rounded-xl w-full h-full' />
                        </div>
                        <p className='text-sm font-normal text-black'>If you’re tired of being unpleasantly surprised by hidden resort fees, you can fortunately rely on some strategies to avoid or minimize these extra costs. A bit of research and savvy travel tips can go a long way in offering savings on your next stay.</p>
                        <div className='flex flex-col ml-4 items-start gap-4 w-full'>
                            <li className='text-sm list-disc font-normal text-black'>
                                <span className='text-sm font-bold'>Research, research, research</span>: Before booking your accommodation, make sure to check what fees the resort may charge. Most resorts will list their fees on their websites and you'll see these fees listed on KAYAK too.
                            </li>
                            <li className='text-sm list-disc font-normal text-black'>
                                <span className='text-sm font-bold'>Research, research, research</span>: Before booking your accommodation, make sure to check what fees the resort may charge. Most resorts will list their fees on their websites and you'll see these fees listed on KAYAK too.
                            </li>
                            <li className='text-sm list-disc font-normal text-black'>
                                <span className='text-sm font-bold'>Research, research, research</span>: Before booking your accommodation, make sure to check what fees the resort may charge. Most resorts will list their fees on their websites and you'll see these fees listed on KAYAK too.
                            </li>
                            <li className='text-sm list-disc font-normal text-black'>
                                <span className='text-sm font-bold'>Research, research, research</span>: Before booking your accommodation, make sure to check what fees the resort may charge. Most resorts will list their fees on their websites and you'll see these fees listed on KAYAK too.
                            </li>
                            <li className='text-sm list-disc font-normal text-black'>
                                <span className='text-sm font-bold'>Research, research, research</span>: Before booking your accommodation, make sure to check what fees the resort may charge. Most resorts will list their fees on their websites and you'll see these fees listed on KAYAK too.
                            </li>
                            <li className='text-sm list-disc font-normal text-black'>
                                <span className='text-sm font-bold'>Research, research, research</span>: Before booking your accommodation, make sure to check what fees the resort may charge. Most resorts will list their fees on their websites and you'll see these fees listed on KAYAK too.
                            </li>
                            <li className='text-sm list-disc font-normal text-black'>
                                <span className='text-sm font-bold'>Research, research, research</span>: Before booking your accommodation, make sure to check what fees the resort may charge. Most resorts will list their fees on their websites and you'll see these fees listed on KAYAK too.
                            </li>
                            <li className='text-sm list-disc font-normal text-black'>
                                <span className='text-sm font-bold'>Research, research, research</span>: Before booking your accommodation, make sure to check what fees the resort may charge. Most resorts will list their fees on their websites and you'll see these fees listed on KAYAK too.
                            </li>
                        </div>
                    </div>


                    <div className='flex flex-col items-start gap-2 w-full'>
                        <h1 className='text-lg sm:text-2xl font-bold text-black' style={{
                            fontFamily: "'Roboto', sans-serif"
                        }}>In conclusion</h1>
                        <p className='text-sm font-normal text-black'>Knowledge is key to saving your hard-earned money. By understanding why hotels charge resort fees and knowing how to avoid them, you can make an educated booking for your next getaway. While resort fees are the new normal, , take advantage of promotional packages, loyalty programs and special offers to avoid paying them whenever possible.</p>
                        <p className='text-sm font-normal text-black'>And don't forget when finding the perfect hotel on KAYAK, you can use price filters and features like Price Alerts to help you find deals quickly and easily – with no surprise fees.</p>
                    </div>

                </div>


                <div className='flex flex-col items-start gap-6 border-b border-gray-200 pb-5 w-full'>
                    <h1 className='text-lg sm:text-2xl font-bold text-black' style={{
                        fontFamily: "'Roboto', sans-serif"
                    }}>FAQs</h1>

                    <FAQAccordion />
                </div>

                <div className='grid py-10 max-[500px]:grid-cols-1 grid-cols-2 w-full gap-4 items-start'>
                    {shortData.map((ElemItem) => {
                        return (
                            <div key={ElemItem.id} className='flex bg-white shadow-lg border border-gray-200 flex-col w-full items-start group cursor-pointer rounded-lg gap-2 h-[350px] md:h-[420px]'>
                                <div className='h-40 md:h-60 w-full'>
                                    <img className='w-full h-full rounded-t-lg' src={ElemItem.image} alt="Article 1" />
                                </div>
                                <div className='flex px-2 flex-col items-start gap-1 w-full'>
                                    <p className='text-sm font-normal text-gray-500'>All about hotels</p>
                                    <h1 tyle={{
                                        fontFamily: "'Roboto', sans-serif"
                                    }} className='text-sm group-hover:underline line-clamp-2 w-full font-bold'>{ElemItem.title}</h1>
                                    <p className='text-sm line-clamp-2 w-full font-normal text-gray-500'>{ElemItem.description}</p>
                                    <div className='flex items-center w-full gap-1'>
                                        <span className='w-10 h-10 rounded-full'>
                                            <img className='w-full h-full rounded-full border border-gray-100' src={ElemItem.authorImage} alt="" />
                                        </span>
                                        <p className='text-sm line-clamp-1 font-normal text-gray-500'>{ElemItem.author} | {ElemItem.readTime}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>

                <div className='flex flex-col w-full items-start gap-2'>
                    <h1 className='text-lg sm:text-2xl font-bold text-black' style={{
                        fontFamily: "'Roboto', sans-serif"
                    }}>Want to know the world better? We got you covered.</h1>
                    <p className='text-sm font-normal text-black'>Sign up for our newsletter and get more travel inspiration straight to your inbox each week</p>
                    <div className='flex flex-col w-full items-stat gap-1'>
                        <label className='text-sm font-normal'>Email address</label>
                        <div className='flex items-center w-full gap-2 h-10'>
                            <input type="email" required className='border border-gray-200 rounded-md h-full w-full py-2 px-4' />
                            <button className='bg-[var(--primary-color)] whitespace-nowrap text-white py-2 px-5 rounded-md h-full  text-sm'>Sign Up</button>
                        </div>

                    </div>
                </div>
            </Container>
        </>
    )
}

export default BlogDetails