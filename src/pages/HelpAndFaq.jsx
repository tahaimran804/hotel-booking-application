import React from 'react'
import Container from '../components/Container'
import FaqCard from '../components/FaqCard'
import Help_Hero from "../assets/Help_Hero.svg"


const HelpAndFaq = () => {
  return (
    <Container className='py-10 flex flex-col items-start gap-10'>
      <div className='w-full h-auto flex flex-col items-center gap-4'>
        <div className='w-[100px] sm:h-[200px]'>
          <img src={Help_Hero} alt="" className='w-full h-full' />
        </div>
        <div className='w-full flex flex-col items-center gap-1'>
          <h1 style={{ fontFamily: "'Roboto', sans-serif" }} className='text-2xl sm:text-4xl text-black font-extrabold'>How can we help?</h1>
          <p style={{ fontFamily: "'Roboto', sans-serif" }} className='w-full lg:w-2/5 text-center text-xs lg:text-sm font-normal text-black'>From searching to saving, we’ve got you. Find help with  managing your account, bookings, using our tools and making the most of KAYAK.</p>
        </div>
      </div>
      <div className='flex items-start flex-col gap-5 w-full justify-start'>
        <h1 style={{ fontFamily: "'Roboto', sans-serif" }} className='text-2xl text-black font-extrabold'>Browse by category.</h1>
        <div className='w-full grid grid-cols-1 lg:grid-cols-2 items-center gap-5'>
          <FaqCard />
        </div>
      </div>
    </Container >
  )
}

export default HelpAndFaq