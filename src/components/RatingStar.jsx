import { IoIosStar, IoIosStarHalf, IoIosStarOutline } from "react-icons/io";

const RatingStar = ({ item }) => {
    console.log("Original rating:", item);

    let numericRating = 0;

    if (typeof item === "string") {
        switch (item.trim()) {
            case "OneStar":
                numericRating = 1;
                break;
            case "TwoStar":
                numericRating = 2;
                break;
            case "ThreeStar":
                numericRating = 3;
                break;
            case "FourStar":
                numericRating = 4;
                break;
            case "FiveStar":
                numericRating = 5;
                break;
            default:
                numericRating = 0;
        }
    } else if (typeof item.rating === "number") {
        numericRating = item.rating;
    }

    return (
        <div className="text-yellow-600 flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, index) => {
                const starNumber = index + 1;

                if (numericRating >= starNumber) {
                    return <IoIosStar key={index} />;
                } else if (numericRating >= starNumber - 0.5) {
                    return <IoIosStarHalf key={index} />;
                } else {
                    return <IoIosStarOutline key={index} />;
                }
            })}
        </div>
    );
};

export default RatingStar;
