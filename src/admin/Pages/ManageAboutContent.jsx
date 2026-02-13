import React, { useState } from 'react'
import HeadingComp from '../Components/HeadingComp'

const ManageAboutContent = () => {
    const [aboutData, setAboutData] = useState({
        title: "",
        subtitle: "",
        history: "",
        mission: "",
        vision: "",
        team: "",
        achievements: "",
    })
    const handleChange = (e) => {
        const { name, value } = e.target
        setAboutData(prev => ({ ...prev, [name]: value }))
    }
    const handleSave = (e) => {
        e.preventDefault()
        alert("About content saved successfully!")
    }
    return (
        <div className='flex flex-col items-start gap-5 w-full'>
            <HeadingComp PageHeading="Manage About Content" />
            <form
                className='w-full border border-gray-200 flex flex-col gap-6 bg-white p-6 rounded-xl shadow-md'
                onSubmit={handleSave}
            >
                <div className='flex flex-col gap-2'>
                    <label className='text-gray-700 font-medium'>Page Title</label>
                    <input
                        type='text'
                        name='title'
                        value={aboutData.title}
                        onChange={handleChange}
                        placeholder='Enter page title'
                        className='w-full border border-gray-300 rounded-lg p-3 focus:outline-none '
                    />
                </div>

                <div className='flex flex-col gap-2'>
                    <label className='text-gray-700 font-medium'>Subtitle</label>
                    <input
                        type='text'
                        name='subtitle'
                        value={aboutData.subtitle}
                        onChange={handleChange}
                        placeholder='Enter subtitle'
                        className='w-full border border-gray-300 rounded-lg p-3 focus:outline-none '
                    />
                </div>

                <div className='flex flex-col gap-2'>
                    <label className='text-gray-700 font-medium'>History</label>
                    <textarea
                        name='history'
                        value={aboutData.history}
                        onChange={handleChange}
                        placeholder='Write company history...'
                        rows={6}
                        className='w-full border border-gray-300 rounded-lg p-4 resize-none focus:outline-none '
                    />
                </div>

                <div className='flex flex-col gap-2'>
                    <label className='text-gray-700 font-medium'>Mission</label>
                    <textarea
                        name='mission'
                        value={aboutData.mission}
                        onChange={handleChange}
                        placeholder='Write mission statement...'
                        rows={5}
                        className='w-full border border-gray-300 rounded-lg p-4 resize-none focus:outline-none '
                    />
                </div>

                <div className='flex flex-col gap-2'>
                    <label className='text-gray-700 font-medium'>Vision</label>
                    <textarea
                        name='vision'
                        value={aboutData.vision}
                        onChange={handleChange}
                        placeholder='Write vision statement...'
                        rows={5}
                        className='w-full border border-gray-300 rounded-lg p-4 resize-none focus:outline-none '
                    />
                </div>

                <div className='flex flex-col gap-2'>
                    <label className='text-gray-700 font-medium'>Team</label>
                    <textarea
                        name='team'
                        value={aboutData.team}
                        onChange={handleChange}
                        placeholder='Write about team members...'
                        rows={5}
                        className='w-full border border-gray-300 rounded-lg p-4 resize-none focus:outline-none '
                    />
                </div>

                <div className='flex flex-col gap-2'>
                    <label className='text-gray-700 font-medium'>Achievements</label>
                    <textarea
                        name='achievements'
                        value={aboutData.achievements}
                        onChange={handleChange}
                        placeholder='Write key achievements...'
                        rows={5}
                        className='w-full border border-gray-300 rounded-lg p-4 resize-none focus:outline-none '
                    />
                </div>

                <button
                    type='submit'
                    className='bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition-colors font-semibold'
                >
                    Save All
                </button>
            </form>
        </div>
    )
}

export default ManageAboutContent
