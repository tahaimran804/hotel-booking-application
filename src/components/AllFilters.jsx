import { IoFilter } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";
import { LuSofa } from "react-icons/lu";
import { hotelsData } from "../Data/Data";
const AllFilters = ({ hotelData }) => {
    const [openFilterSection, setOpenFilterSection] = useState(false)

    const filtersData = [
        {
            title: "Book with peace of mind",
            icon: true,
            items: [
                { id: 1, name: "Free cancellation", count: 7 },
                { id: 2, name: "Breakfast included", count: 7 },
            ]
        },

        {
            title: "Price",
            items: [
                { id: 1, name: "Rs 0 - Rs 5,900", count: 0 },
                { id: 2, name: "Rs 5,900 - Rs 11,800", count: 0 },
                { id: 3, name: "Rs 11,800 - Rs 17,700", count: 1 },
                { id: 4, name: "Rs 17,700 - Rs 23,600", count: 3 },
                { id: 5, name: "Rs 23,600 - Rs 29,500", count: 1 },
                { id: 6, name: "Rs 29,500 +", count: 5 },
            ]
        },

        {
            title: "Traveller review score",
            items: [
                { id: 1, name: "5.0+ Outstanding", count: 0 },
                { id: 2, name: "4.5+ Excellent", count: 1 },
                { id: 3, name: "4.0+ Very good", count: 1 },
                { id: 4, name: "3.5+ Good", count: 2 },
                { id: 5, name: "3.0+ Satisfactory", count: 1 },
            ]
        },

        {
            title: "Hotel star rating",
            items: [
                { id: 1, name: "5 stars", count: 3 },
                { id: 2, name: "4 stars", count: 0 },
                { id: 3, name: "3 stars", count: 2 },
                { id: 4, name: "2 stars", count: 1 },
                { id: 5, name: "1 star", count: 0 },
                { id: 6, name: "Unrated", count: 1 },
            ]
        },

        {
            title: "Amenities",
            items: [
                { id: 1, name: "Wi-Fi", count: 7 },
                { id: 2, name: "Airport shuttle", count: 7 },
                { id: 3, name: "Parking", count: 7 },
                { id: 4, name: "Fitness centre", count: 3 },
                { id: 5, name: "Pool", count: 1 },
                { id: 6, name: "Spa", count: 4 },
            ]
        },

        {
            title: "Accommodation type",
            items: [
                { id: 1, name: "Hotel", count: 7 },
                { id: 2, name: "Hostel", count: 0 },
                { id: 3, name: "Guest house", count: 0 },
                { id: 4, name: "Resort", count: 0 },
            ]
        }
    ];

    return (
        <>
            {openFilterSection && (
                <div
                    onClick={() => setOpenFilterSection(false)}
                    className="fixed inset-0 bg-black/40 all_Filter z-50"
                />
            )}

            <div className="flex items-center flex-wrap sm:flex-nowrap gap-1 sm:gap-3">
                <div
                    onClick={() => setOpenFilterSection(true)}
                    className="flex cursor-pointer border border-gray-200 py-3 px-4 rounded-md bg-[var(--primary-color)] text-white text-sm font-semibold items-center gap-2"
                >
                    <IoFilter />
                    <button>All filters</button>
                </div>

                <p className="text-sm">All taxes and fees included | {hotelData.length} results</p>
            </div>

            <div className={`w-full sm:w-80 bg-white h-screen fixed top-0 left-0 all_Filter transition-transform duration-500
      ${openFilterSection ? "translate-x-0" : "-translate-x-full"}`}>
                <section className="overflow-y-auto h-[85vh] px-4">
                    {filtersData.map((section, index) => (
                        <div key={index} className="border-b border-gray-200 py-3">

                            <h2 className="flex items-center gap-2 text-lg font-semibold">
                                {section.icon && <LuSofa />}
                                {section.title}
                            </h2>

                            {/* Items */}
                            <ul className="mt-3 flex flex-col gap-2">

                                {section.items.map((item) => (
                                    <li key={item.id} className="flex justify-between items-center">

                                        <div className="flex items-center gap-2">
                                            <input type="checkbox" />
                                            <label>{item.name}</label>
                                        </div>

                                        <p className="text-sm text-gray-500">{item.count}</p>

                                    </li>
                                ))}

                            </ul>

                        </div>
                    ))}

                </section>

                {/* Footer Buttons */}
                <div className="absolute bottom-0 left-0 w-full border-t border-gray-100 bg-white p-4 flex gap-3">
                    <button onClick={() => setOpenFilterSection(false)} className="text-black font-semibold">Clear</button>
                    <button className="bg-[var(--primary-color)] py-2 px-5 rounded-md w-full text-white">
                        Show {hotelsData.length} results
                    </button>
                </div>

            </div>
        </>
    );

}
export default AllFilters;
