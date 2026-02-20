import { useState, useEffect } from "react";
import { IoMdArrowUp } from "react-icons/io";

const ScrollTopBtn = () => {
    const [showBtn, setShowBtn] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            setShowBtn(window.scrollY > 500);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        showBtn && (
            <div className="md:py-3 py-1 px-4 z-50 text-xl text-black fixed  bottom-36 right-0 bg-gray-100 rounded-l-full shadow-lg cursor-pointer">
                <button
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    className="flex text-xs cursor-pointer items-center gap-1"
                >
                    <IoMdArrowUp /> Top
                </button>
            </div>
        )
    );
};

export default ScrollTopBtn;
