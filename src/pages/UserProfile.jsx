import React, { useState } from 'react'
import Container from '../components/Container'
import { FaRegCircleUser } from 'react-icons/fa6'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { IoCloseOutline } from 'react-icons/io5'

const UserProfile = () => {
    const [deleteAccount, setDeleteAaccount] = useState(false)
    const UserProfile = [
        {
            idl: 1,
            name: "Account",
            icon: <FaRegCircleUser />,
            ur: "#"
        }
    ]

    return (
        <Container>
            <div className='grid grid-cols-12 gap-5 md:gap-10 items-start w-full h-full'>
                <div className='col-span-12 md:col-span-4 flex flex-col items-center gap-2 w-full py-0 md:py-10 px-2'>
                    <div className='flex flex-col w-full items-center py-10 gap-1'>
                        <span className='w-20 h-20 text-2xl flex items-center justify-center rounded-full bg-purple-600 text-white'>ME</span>
                        <div className='flex flex-col items-center'>
                            <h2 className='text-2xl font-semibold'>Hi there!</h2>
                            <p className='text-sm text-gray-500 font-semibold'>mebahe6344@newtrea.com</p>
                        </div>

                        <div className='flex flex-col items-center w-full gap-2'>
                            {UserProfile.map((elemItem) => {
                                return (<div className='flex border-b cursor-pointer border-gray-200 pb-2 items-center w-full gap-2 justify-between'>
                                    <li className='flex items-center gap-2 w-full'>
                                        <span>{elemItem.icon}</span>
                                        {elemItem.name}
                                    </li>
                                    <span className="text-xl text-balck"><MdKeyboardArrowRight /></span>
                                </div>
                                )
                            })}
                        </div>

                        <button className='w-full rounded-md items-center justify-center py-3 px-4 text-balck mt-4 bg-gray-100'>Logout</button>
                    </div>
                </div>
                <div className='col-span-12 md:col-span-8 py-0 md:py-10 w-full px-2'>
                    <div className='flex flex-col items-start gap-1'>
                        <h1
                            style={{
                                fontFamily: "'Roboto', sans-serif"
                            }}
                            className='text-2xl font-semibold text-black'>Account</h1>
                        <p className='text-sm text-gray-500'>
                            Manage your personal details, track your bookings, and access exclusive deals by signing into your account.
                        </p>
                    </div>
                    <div className='w-full flex-col my-4 gap-2 flex items-start'>
                        <span className='py-3 px-4  bg-gray-100 text-black font-semibold w-full'>General info</span>
                        <div className='flex flex-col items-start mt-2 w-full'>
                            <p className='text-sm text-gray-500'>
                                Email
                            </p>
                            <h1
                                style={{
                                    fontFamily: "'Roboto', sans-serif"
                                }}
                                className='text-lg font-semibold text-black'>mebahe6344@newtrea.com</h1>
                        </div>
                    </div>

                    <div className='w-full flex-col my-4 gap-2 flex items-start'>
                        <span className='py-3 px-4  bg-gray-100 text-black font-semibold w-full'>Subscriptions</span>
                        <div className='flex gap-2 items-center mt-2 w-full'>
                            <input type="checkbox" className='p-4 cursor-pointer w-4 h-4 border-0' />
                            <h1
                                style={{
                                    fontFamily: "'Roboto', sans-serif"
                                }}
                                className='text-sm font-normal text-black'>I'd like to get the latest travel deals, news and inspiration sent straight to my inbox.</h1>
                        </div>
                    </div>

                    <div className='w-full flex-col my-4 gap-2 flex items-start'>
                        <span className='py-3 px-4  bg-gray-100 text-black font-semibold w-full'>Account</span>
                        <div className='flex gap-2 items-center mt-2 w-full'>
                            <button
                                onClick={() => setDeleteAaccount(true)}
                                style={{
                                    fontFamily: "'Roboto', sans-serif"
                                }}
                                className='text-sm flex items-center justify-between hover:bg-gray-100 py-3 px-4 w-full cursor-pointer border-b border-gray-400 font-semibold text-black'>Delete Account <span className='text-2xl'><MdKeyboardArrowRight /></span></button>
                        </div>
                    </div>


                    {deleteAccount && (
                        <div
                            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
                            onClick={() => setDeleteAaccount(false)}
                        ></div>
                    )}

                    <div className="fixed max-[500px]:px-4 inset-0 z-50 flex items-center justify-center pointer-events-none">
                        <div
                            className={`max-[500px]:w-full relative flex flex-col items-start gap-4  w-[450px] rounded-lg bg-white py-6 px-5 shadow-2xl pointer-events-auto
              transform transition-all duration-500 ease-in-out
              ${deleteAccount ? "translate-y-0 " : "translate-y-[10000%]"}
          `}>

                            <span onClick={() => setDeleteAaccount(false)} className='text-lg cursor-pointer absolute top-2 right-2 text-black'><IoCloseOutline /></span>

                            <div className='flex flex-col w-full items-start gap-1'>
                                <h1
                                    style={{
                                        fontFamily: "'Roboto', sans-serif"
                                    }}
                                    className='text-2xl font-semibold text-black'>Are you sure?</h1>
                                <p className='text-sm text-gray-500'>
                                    Deleting your account is permanent and can’t be undone. You’ll lose access to your saved items, searches and subscription preferences.
                                </p>
                            </div>

                            <div className='flex flex-col w-full items-start gap-1'>
                                <button className='text-black cursor-pointer bg-gray-200 w-full py-2 px-4 rounded-md text-sm'>Yes Delete</button>
                                <button onClick={() => setDeleteAaccount(false)} className='w-full cursor-pointer text-sm font-semibold text-orange-600'>No Keep</button>
                            </div>



                        </div>
                    </div>



                </div>
            </div>
        </Container >
    )
}

export default UserProfile