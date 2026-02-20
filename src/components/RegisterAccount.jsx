import React, { useContext, useState } from "react";
import { IoClose } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";
import { OpenLoginFromContext } from "../Context/OpenLoginFrom";
import { IoIosArrowBack } from "react-icons/io";

const RegisterAccount = () => {
    const { openFrom, setOpenFrom } = useContext(OpenLoginFromContext);
    const [email, setEmail] = useState("");
    const [screen, setScreen] = useState("login");
    const handleContinue = () => {
        const userExists = checkEmailExists(email);
        if (!email) {
            alert("Please Enter Your Email");
            return;
        }
        if (!userExists) {
            setScreen("createAccount");
        } else {
            alert("Email exists! Proceed to login flow...");
        }
    };

    const checkEmailExists = (email) => {
        const existingEmails = ["test@example.com", "user@gmail.com"];
        return existingEmails.includes(email.toLowerCase());
    };

    return (
        <>
            {openFrom && (
                <div
                    className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
                    onClick={() => setOpenFrom(false)}
                ></div>
            )}

            <div className="fixed max-[500px]:px-4 inset-0 z-50 flex items-center justify-center pointer-events-none">
                <div
                    className={`max-[500px]:w-full w-[450px] rounded-2xl bg-white py-6 px-5 shadow-2xl pointer-events-auto
              transform transition-all duration-500 ease-in-out
              ${openFrom ? "translate-y-0 " : "translate-y-[10000%]"}
          `}
                >
                    <button
                        onClick={() => setOpenFrom(false)}
                        className="absolute cursor-pointer right-4 top-4 text-gray-500 hover:text-black text-2xl"
                    >
                        <IoClose />
                    </button>

                    {screen === "login" && (
                        <div className="flex flex-col items-start gap-5 w-full">
                            <div className="flex flex-col items-start gap-1 w-full">
                                <h2 className="text-lg sm:text-2xl font-semibold">
                                    Hey there. Let’s go places.
                                </h2>
                                <p className="text-gray-600 text-sm">
                                    Sign in to get exclusive deals, track prices and book faster.
                                </p>
                            </div>

                            <input
                                type="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-black"
                            />

                            <button
                                onClick={handleContinue}
                                className="w-full bg-[var(--primary-color)] text-white py-3 rounded-lg font-semibold hover:bg-[var(--primary-color)]/90 cursor-pointer transition"
                            >
                                Continue
                            </button>

                            <div className="w-full flex items-center gap-2 my-3">
                                <span className="w-full h-0.5 bg-gray-200"></span>
                                <p className="text-sm font-normal text-gray-500">or</p>
                                <span className="w-full h-0.5 bg-gray-200"></span>
                            </div>

                            <button className="w-full flex cursor-pointer items-center justify-center gap-2 border border-gray-300 py-3 rounded-lg hover:bg-gray-50 transition font-semibold">
                                <FcGoogle className="text-xl" />
                                Continue with Google
                            </button>

                            <p className="text-xs text-gray-500 text-center mt-3">
                                By adding your email you accept our{" "}
                                <span className="underline cursor-pointer">Terms of Use</span> and{" "}
                                <span className="underline cursor-pointer">Privacy Policy</span>.
                            </p>
                        </div>
                    )}

                    {screen === "createAccount" && (
                        <div className="flex flex-col items-start gap-5 w-full">
                            <span onClick={() => setScreen("login")} className="text-sm cursor-pointer font-normal text-black flex items-center gap-1"><IoIosArrowBack /> Back</span>
                            <div className="flex flex-col items-start gap-1 w-full">
                                <h2 className="text-lg sm:text-2xl font-semibold">
                                    Create your account
                                </h2>
                                <p className="text-gray-600 text-sm">
                                    We couldn’t find an account with this email. Let’s create one!
                                </p>
                            </div>

                            <div className="flex flex-col items-start w-full gap-2">
                                <input
                                    type="email"
                                    value={email}
                                    disabled
                                    className="w-full border border-gray-300 rounded-lg px-4 py-3 bg-gray-100 outline-none"
                                />
                                <input
                                    type="text"
                                    placeholder="Full Name"
                                    className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-black"
                                />
                                <input
                                    type="password"
                                    placeholder="Password"
                                    className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-black"
                                />
                            </div>

                            <button className="w-full bg-[var(--primary-color)] text-white py-3 rounded-lg font-semibold hover:bg-[var(--primary-color)]/90 cursor-pointer transition">
                                Create Account
                            </button>

                            <p className="text-xs text-gray-500 text-center mt-3">
                                By creating an account you accept our{" "}
                                <span className="underline cursor-pointer">Terms of Use</span> and{" "}
                                <span className="underline cursor-pointer">Privacy Policy</span>.
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default RegisterAccount;
