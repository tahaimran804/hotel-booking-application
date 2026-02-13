import React, { useState } from 'react'
import HeadingComp from '../Components/HeadingComp'
import { AiFillDelete, AiFillEdit } from 'react-icons/ai'

const ManageTermsContentConditions = () => {

    const [policies, setPolicies] = useState([
        {
            id: 1,
            title: "Information We Collect",
            content: "Sample privacy policy content..."
        }
    ])

    const [newPolicy, setNewPolicy] = useState({
        title: "",
        content: ""
    })

    const [editId, setEditId] = useState(null)

    // Add / Update Policy
    const handleAddOrUpdate = (e) => {
        e.preventDefault()

        if (!newPolicy.title || !newPolicy.content) {
            return alert("Please fill all fields")
        }

        if (editId) {
            setPolicies(prev =>
                prev.map(p =>
                    p.id === editId ? { ...p, ...newPolicy } : p
                )
            )
            setEditId(null)
        } else {
            setPolicies(prev => [
                ...prev,
                { id: Date.now(), ...newPolicy }
            ])
        }

        setNewPolicy({ title: "", content: "" })
    }

    // Edit
    const handleEdit = (policy) => {
        setNewPolicy(policy)
        setEditId(policy.id)
    }

    // Delete
    const handleDelete = (id) => {
        if (window.confirm("Delete this section?")) {
            setPolicies(prev => prev.filter(p => p.id !== id))
        }
    }

    return (
        <div className='flex flex-col items-start gap-5 w-full'>
            <HeadingComp PageHeading="Manage Terms Content Conditions" />
            <form
                onSubmit={handleAddOrUpdate}
                className='w-full bg-white p-6 rounded-xl shadow-md flex flex-col gap-4'
            >
                <label className='font-medium text-gray-700'>
                    Section Title
                </label>
                <input
                    type='text'
                    placeholder='Enter section title'
                    value={newPolicy.title}
                    onChange={(e) =>
                        setNewPolicy({ ...newPolicy, title: e.target.value })
                    }
                    className='border border-gray-300 rounded-lg p-3 focus:outline-none'
                />

                <label className='font-medium text-gray-700'>
                    Terms And Conditions Content
                </label>
                <textarea
                    rows={8}
                    placeholder='Enter terms and conditions content...'
                    value={newPolicy.content}
                    onChange={(e) =>
                        setNewPolicy({ ...newPolicy, content: e.target.value })
                    }
                    className='border border-gray-300 rounded-lg p-4 resize-none focus:outline-none'
                />

                <button
                    type='submit'
                    className='bg-orange-600 text-white py-3 rounded-lg hover:bg-orange-700 transition font-semibold'
                >
                    {editId ? "Update Section" : "Add Section"}
                </button>
            </form>

            {/* Policy List */}
            <div className='w-full flex flex-col gap-4 mt-6'>
                {policies.map(policy => (
                    <div
                        key={policy.id}
                        className='bg-white p-4 rounded-xl shadow-md flex justify-between gap-4'
                    >
                        <div className='flex flex-col gap-2'>
                            <h3 className='font-semibold text-gray-800'>
                                {policy.title}
                            </h3>
                            <p className='text-gray-600 whitespace-pre-line'>
                                {policy.content}
                            </p>
                        </div>

                        <div className='flex items-start gap-3'>
                            <button
                                onClick={() => handleEdit(policy)}
                                className='text-yellow-500 hover:text-yellow-600'
                            >
                                <AiFillEdit size={20} />
                            </button>

                            <button
                                onClick={() => handleDelete(policy.id)}
                                className='text-red-500 hover:text-red-600'
                            >
                                <AiFillDelete size={20} />
                            </button>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default ManageTermsContentConditions
