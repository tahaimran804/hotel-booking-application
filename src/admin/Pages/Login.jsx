import React from 'react'
import Container from '../../components/Container'

const Login = () => {
    return (
        <Container>
            <div className='flex items-center justify-center w-full h-screen'>
                <div className='w-full sm:w-2/3 xl:w-2/6 h-auto py-4 px-4 bg-white shadow-lg border border-gray-100 rounded-md'>
                    <h1 style={{
                        fontFamily: "'Roboto', sans-serif"
                    }} className='text-2xl font-bold text-black'>Admin Login</h1>

                    <form className='w-full h-auto  flex flex-col items-start gap-4 py-4'>
                        <div className='flex w-full flex-col items-start gap-1'>
                            <label style={{
                                fontFamily: "'Roboto', sans-serif"
                            }} className='text-sm font-normal'>Admin Email</label>
                            <input type="email" required className=' outline-0 w-full py-2 px-2 rounded-md border border-gray-100' />
                        </div>
                        <div className='flex w-full flex-col items-start gap-1'>
                            <label style={{
                                fontFamily: "'Roboto', sans-serif"
                            }} className='text-sm font-normal'>Admin Password</label>
                            <input type="password" required className=' outline-0 w-full py-2 px-2 rounded-md border border-gray-100' />
                        </div>
                        <button className='py-2 px-4 rounded-md cursor-pointer bg-[var(--primary-color)] text-white  w-full'>Admin Login</button>
                    </form>
                </div>
            </div>
        </Container>
    )
}

export default Login