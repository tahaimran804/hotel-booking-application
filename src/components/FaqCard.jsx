import { FaKaggle, FaTag } from 'react-icons/fa'
import { IoCheckmarkDoneCircle, IoInformation, IoSearchOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'
const FaqCard = () => {
    const FaqData = [
        {
            id: 1,
            title: "Search & discovery",
            paragraph: "Help with flight, hotel & car searches, plus our app, Explore & AI tools.",
            icon: <IoSearchOutline />,
            link: "#"
        },
        {
            id: 2,
            title: "Pricing & Price Alerts",
            paragraph: "General pricing, Price Forecast & Price Alert FAQs.",
            icon: <FaTag />,
            link: "#"
        },
        {
            id: 3,
            title: "Booking & checkout",
            paragraph: "Answers about bookings, payments & changing plans.",
            icon: <IoCheckmarkDoneCircle />,
            link: "#"
        },
        {
            id: 4,
            title: "About KAYAK",
            paragraph: "Who we are, what we do & how we protect your data.",
            icon: <IoInformation />,
            link: "#"
        },
    ]
    return (
        <>
            {FaqData.map((ElemItem) => {
                return <Link key={ElemItem.id} to={ElemItem.link}>
                    <div className='flex flex-col px-4 py-4 items-start gap-1 rounded-xl bg-white shadow-xl border border-gray-100'>
                        <span className='text-lg sm:text-2xl'>{ElemItem.icon}</span>
                        <h1 style={{ fontFamily: "'Roboto', sans-serif" }} className='text-lg sm:text-2xl text-black font-extrabold'>{ElemItem.title}</h1>
                        <p style={{ fontFamily: "'Roboto', sans-serif" }} className='text-xs sm:text-sm font-normal text-black'>{ElemItem.paragraph}</p>
                    </div>
                </Link>
            })}
        </>
    )
}
export default FaqCard