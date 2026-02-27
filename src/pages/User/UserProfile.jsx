import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";
import { MdKeyboardArrowRight } from "react-icons/md";

const UserProfile = () => {
    const [deleteAccount, setDeleteAccount] = useState(false)
    const [editName, setEditName] = useState(false);
    const [editPassword, setEditPassword] = useState(false);

    const [firstName, setFirstName] = useState("Taha");
    const [lastName, setLastName] = useState("Imran");

    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");

    return (
        <div className="col-span-12 md:col-span-8 lg:py-8 lg:px-4 w-full">
            <div className='flex flex-col items-start gap-1'>
                <h1
                    style={{ fontFamily: "'Roboto', sans-serif" }}
                    className='text-2xl font-semibold text-[var(--text-color)]'
                >
                    Account Settings
                </h1>

                <p className='text-sm text-[var(--muted-text-color)]'>
                    Manage your personal details, security settings and preferences.
                </p>
            </div>

            <div className="mt-8 border border-gray-200 rounded-lg p-5">
                <div
                    className="flex justify-between items-center cursor-pointer"
                    onClick={() => setEditName(!editName)}
                >
                    <div>
                        <p className="text-sm text-[var(--muted-text-color)]">
                            Name
                        </p>
                        <h2 className="font-semibold text-[var(--text-color)]">
                            {firstName} {lastName}
                        </h2>
                    </div>

                    {editName ? (
                        <span className="text-xl text-[var(--primary-color)]">
                            <IoIosArrowUp />
                        </span>
                    ) : (
                        <span className="text-xl text-[var(--primary-color)]">
                            <MdKeyboardArrowRight />
                        </span>
                    )}

                </div>

                {editName && (
                    <div className="mt-4 flex flex-col gap-3">

                        <input
                            type="text"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            placeholder="First Name"
                            className="border border-gray-200 rounded-md px-3 py-2 focus:border-[var(--primary-color)] outline-none"
                        />

                        <input
                            type="text"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            placeholder="Last Name"
                            className="border border-gray-200 rounded-md px-3 py-2 focus:border-[var(--primary-color)] outline-none"
                        />

                        <div className="flex gap-3 mt-2">
                            <button
                                onClick={() => alert("Save Changes")}
                                className="bg-[var(--primary-color)] text-white px-4 py-2 rounded-md"
                            >
                                Save Changes
                            </button>

                            <button
                                onClick={() => setEditName(false)}
                                className="border border-gray-200 px-4 py-2 rounded-md"
                            >
                                Cancel
                            </button>
                        </div>

                    </div>
                )}


                <div className='flex mt-4 flex-col gap-1 w-full'>
                    <label className='text-sm text-[var(--muted-text-color)]'>
                        Email
                    </label>
                    <input
                        type="email"
                        value="mebahe6344@newtrea.com"
                        disabled
                        className='bg-gray-100 border border-gray-200 rounded-md px-3 py-2 text-[var(--text-color)]'
                    />
                </div>

            </div>

            <div className="mt-6 border border-gray-200 rounded-lg p-5">

                <div
                    className="flex justify-between items-center cursor-pointer"
                    onClick={() => setEditPassword(!editPassword)}
                >
                    <div>
                        <p className="text-sm text-[var(--muted-text-color)]">
                            Password
                        </p>
                        <h2 className="font-semibold text-[var(--text-color)]">
                            ********
                        </h2>
                    </div>

                    {editPassword ? (
                        <span className="text-xl text-[var(--primary-color)]">
                            <IoIosArrowUp />
                        </span>
                    ) : (
                        <span className="text-xl text-[var(--primary-color)]">
                            <MdKeyboardArrowRight />
                        </span>
                    )}
                </div>

                {/* Password Inputs */}
                {editPassword && (
                    <div className="mt-4 flex flex-col gap-3">

                        <input
                            type="password"
                            value={currentPassword}
                            onChange={(e) => setCurrentPassword(e.target.value)}
                            placeholder="Current Password"
                            className="border border-gray-200 rounded-md px-3 py-2 focus:border-[var(--primary-color)] outline-none"
                        />

                        <input
                            type="password"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            placeholder="New Password"
                            className="border border-gray-200 rounded-md px-3 py-2 focus:border-[var(--primary-color)] outline-none"
                        />

                        <div className="flex gap-3 mt-2">
                            <button
                                onClick={() => alert("Password Change")}
                                className="bg-[var(--primary-color)] text-white px-4 py-2 rounded-md"
                            >
                                Change Password
                            </button>

                            <button
                                onClick={() => setEditPassword(false)}
                                className="border border-gray-200 px-4 py-2 rounded-md"
                            >
                                Cancel
                            </button>
                        </div>

                    </div>
                )}

            </div>
            <div className='w-full my-6 flex flex-col gap-4'>

                <span className='py-3 px-4 bg-[var(--border-color)] font-semibold w-full rounded-md'>
                    Subscriptions
                </span>

                <div className='flex gap-3 items-start'>
                    <input type="checkbox" className='mt-1 w-4 h-4 accent-[var(--primary-color)]' />
                    <p className='text-sm text-[var(--text-color)]'>
                        I'd like to receive travel deals, news and inspiration in my inbox.
                    </p>
                </div>

            </div>

            <div className='w-full my-6 flex flex-col gap-4'>

                <span className='py-3 px-4 bg-red-50 text-red-600 font-semibold w-full rounded-md'>
                    Danger Zone
                </span>

                <button
                    onClick={() => setDeleteAccount(true)}
                    className='py-3 px-4 border border-red-300 text-red-600 font-semibold rounded-md hover:bg-red-50 transition'
                >
                    Delete Account
                </button>

            </div>

            {deleteAccount && (
                <div
                    className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
                    onClick={() => setDeleteAccount(false)}
                />
            )}

            <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none px-4">
                <div
                    className={`w-full max-w-md bg-[var(--accent-color)] rounded-lg shadow-2xl p-6 pointer-events-auto
                    transform transition-all duration-500
                    ${deleteAccount ? "translate-y-0 opacity-100" : "translate-y-[200%] opacity-0"}
                    `}
                >

                    <span
                        onClick={() => setDeleteAccount(false)}
                        className='absolute top-3 right-3 text-xl cursor-pointer text-[var(--text-color)]'
                    >
                        <IoCloseOutline />
                    </span>

                    <h2 className='text-xl font-semibold text-[var(--text-color)]'>
                        Are you absolutely sure?
                    </h2>

                    <p className='text-sm mt-2 text-[var(--muted-text-color)]'>
                        This action cannot be undone. Deleting your account will permanently remove your saved items, bookings and preferences.
                    </p>

                    <div className='flex gap-3 mt-6'>
                        <button className='flex-1 bg-red-600 text-white py-2 rounded-md hover:opacity-90 transition'>
                            Yes, Delete
                        </button>

                        <button
                            onClick={() => setDeleteAccount(false)}
                            className='flex-1 border border-gray-200 py-2 rounded-md text-[var(--text-color)] hover:bg-gray-50 transition'
                        >
                            Cancel
                        </button>
                    </div>

                </div>
            </div>


        </div>
    );
};

export default UserProfile;