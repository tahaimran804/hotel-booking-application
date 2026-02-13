import React, { useState } from 'react'
import Container from "../../components/Container"
import AllFilters from '../../components/AllFilters'
import FiltersButtons from '../../components/FiltersButtons'
import HotelsList from '../../components/HotelsList'
import HotelsMap from '../../components/HotelMap'

const Hotels = () => {
    const [hoveredHotel, setHoveredHotel] = useState(null);

    return (
        <section className='bg-[#F0F3F5] w-full h-screen overflow-hidden'>
            <div className='grid grid-cols-12 h-full w-full'>
                <div className='col-span-12 lg:col-span-8 h-full overflow-y-auto no_scrollBar'>
                    <div className='flex px-4 flex-col gap-5 py-4'>
                        <AllFilters />
                        <FiltersButtons />
                        <div className='h-[300px] w-full lg:hidden flex'>
                            <HotelsMap setHoveredHotel={setHoveredHotel} hoveredHotel={hoveredHotel} />
                        </div>
                        <HotelsList />
                    </div>
                </div>

                <div className='col-span-4 h-screen w-full sticky top-0 lg:flex hidden'>
                    <HotelsMap setHoveredHotel={setHoveredHotel} hoveredHotel={hoveredHotel} />
                </div>
            </div>
        </section>
    )
}

export default Hotels
