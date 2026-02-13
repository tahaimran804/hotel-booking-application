import { IoIosStar, IoIosStarHalf, IoIosStarOutline } from "react-icons/io";
const RatingStar = ({ item }) => {
    return (
        <div className="text-yellow-600 flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, index) => {
                const starNumber = index + 1;

                if (item.rating >= starNumber) {
                    return <IoIosStar key={index} />; // Full star
                }
                else if (item.rating >= starNumber - 0.5) {
                    return <IoIosStarHalf key={index} />; // Half star
                }
                else {
                    return <IoIosStarOutline key={index} />; // Empty star
                }
            })}
        </div>

    )
}

export default RatingStar