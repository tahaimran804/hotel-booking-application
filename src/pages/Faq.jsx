import React, { useState } from 'react'
import Container from '../components/Container'
import { Link } from 'react-router-dom'
import { MdKeyboardArrowRight, MdKeyboardArrowDown } from 'react-icons/md'

const Faq = () => {

    const [activeIndex, setActiveIndex] = useState(null)

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index)
    }

    const faqData = [
        {
            question: "Can I book a flight for someone else?",
            answer: `Yes. You can book and pay for a flight for another person on KAYAK.

When booking for someone else, enter the passenger’s details exactly as they appear on their government-issued ID.

Checklist:
• Full legal name
• Date of birth, nationality and gender
• Travel dates and airports
• Airline preferences or frequent flyer numbers
• Contact details
• Special requests such as seat preferences or assistance

Important: Always double-check details before booking.`
        },
        {
            question: "How to book a flight for a large group?",
            answer: "You can contact airline group booking departments or use travel agencies that specialize in group reservations."
        },
        {
            question: "Can I book hotels and flights together?",
            answer: "Yes, many booking platforms allow you to book hotels and flights together as package deals."
        },
        {
            question: "Can I book an airport transfer?",
            answer: "Yes, airport transfers can usually be booked during or after flight booking."
        },
        {
            question: "How do I manage a flight reservation?",
            answer: "You can manage bookings through the airline or booking platform confirmation email."
        },
        {
            question: "Where can I find my booking confirmation?",
            answer: "Booking confirmations are usually sent to your registered email after successful booking."
        },
        {
            question: "I didn’t get my booking confirmation. What now?",
            answer: "Check spam folder or contact booking support."
        }
    ]

    return (
        <Container>
            <div className='flex items-center py-2 gap-1'>
                <Link className='text-sm font-normal text-gray-500' to={"/help-faq"}>Help Center</Link>
                <span className='text-gray-500'><MdKeyboardArrowRight /></span>
                <p className='text-sm font-normal text-gray-500'>Help Center – Booking and checkout</p>
            </div>

            <div className='w-full h-[250px] flex items-center justify-center'>
                <h1 style={{ fontFamily: "'Roboto', sans-serif" }} className='text-6xl font-extrabold'>
                    Booking and checkout.
                </h1>
            </div>

            <div className='flex flex-col py-5 justify-center items-start gap-5'>
                <h1 className='text-2xl py-2 border-b border-gray-200 w-full font-bold'>
                    Booking Process.
                </h1>
            </div>

            <div className='w-full flex flex-col gap-3 pb-5'>
                {faqData.map((item, index) => (
                    <div key={index} className='py-4 px-0 border-b border-gray-100 flex flex-col items-start w-full gap-2 rounded-lg'>
                        <button
                            onClick={() => toggleAccordion(index)}
                            className='w-full flex cursor-pointer justify-between items-center font-semibold text-left'
                        >
                            {item.question}

                            {activeIndex === index
                                ? <MdKeyboardArrowDown size={24} />
                                : <MdKeyboardArrowRight size={24} />
                            }
                        </button>

                        <div
                            className={`overflow-hidden transition-all duration-300 ${activeIndex === index ? "max-h-96 pt-0" : "max-h-0"
                                }`}
                        >
                            <p className='text-gray-600 whitespace-pre-line'>
                                {item.answer}
                            </p>
                        </div>

                    </div>
                ))}
            </div>
        </Container>
    )
}

export default Faq
