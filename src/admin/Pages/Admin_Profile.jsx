import React, { useState } from 'react'
import HeadingComp from '../Components/HeadingComp'

const Admin_Profile = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        about: '',
        image: null
    })

    const [preview, setPreview] = useState(null)

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    const handleImageChange = (e) => {
        const file = e.target.files[0]
        if (file) {
            setFormData({ ...formData, image: file })
            setPreview(URL.createObjectURL(file))
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Updated Data:", formData)
        // Yahan API call lagegi
    }

    return (
        <div className='flex flex-col items-start gap-5 w-full'>
            <HeadingComp PageHeading="Admin Settings" />
            <div className="w-full mx-auto bg-white shadow-sm rounded-md py-4 px-4">
                <form onSubmit={handleSubmit} className="mt-6 space-y-6">

                    {/* Profile Image */}
                    <div className="flex flex-col justify-center items-start">
                        <div className="w-28 h-28 rounded-full overflow-hidden bg-gray-300 flex items-center justify-center">
                            {preview ? (
                                <img
                                    src={preview}
                                    alt="Preview"
                                    className="w-full h-full rounded-full object-cover"
                                />
                            ) : (
                                <div className="w-full h-full rounded-full bg-gray-300 flex items-center justify-center text-gray-600">
                                    No Image
                                </div>
                            )}
                        </div>

                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                            className="mt-4 text-center text-sm"
                        />
                    </div>


                    <div>
                        <label className="block text-sm font-semibold mb-1">
                            Admin Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Enter your name"
                            className="w-full px-4 py-2 border border-gray-200 rounded-lg outline-none"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-semibold mb-1">
                            New Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter your email"
                            className="w-full px-4 py-2 border border-gray-200 rounded-lg outline-none"
                        />
                    </div>


                    <div>
                        <label className="block text-sm font-semibold mb-1">
                            New Password
                        </label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Enter new password"
                            className="w-full px-4 py-2 border border-gray-200 rounded-lg outline-none"
                        />
                    </div>


                    <button
                        onClick={() => alert("Update Your Profile")}
                        className="w-full bg-[var(--primary-color)] cursor-pointer text-white py-2 rounded-lg hover:bg-[var(--primary-color)]/95 transition duration-300 font-semibold"
                    >
                        Update Profile
                    </button>

                </form>
            </div >
        </div >
    )
}

export default Admin_Profile