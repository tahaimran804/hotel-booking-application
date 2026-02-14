import React from 'react'

const AboutDetailsCard = ({ title, desc, image }) => {
    return (
        <div className='w-full flex flex-col-reverse md:grid md:grid-cols-2 gap-4 lg:gap-10 items-center'>
            <div className='w-full max-[400px]:h-[200px] h-[300px] md:h-[400px]'>
                <img src={image} className='w-full rounded-md h-full' alt="Explore-Everywhere-Article-Cards" />
            </div>
            <div className='flex flex-col items-start gap-2 w-full'>
                <h1 className='text-2xl lg:text-4xl font-bold' style={{ fontFamily: "'Roboto', sans-serif" }}>{title}</h1>
                <p className='text-sm lg:text-lg font-normal' style={{ fontFamily: "'Roboto', sans-serif" }}>
                    {desc}
                </p>
            </div>
        </div>
    )
}

export default AboutDetailsCard