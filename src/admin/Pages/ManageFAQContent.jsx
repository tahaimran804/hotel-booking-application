import React, { useState } from 'react'
import HeadingComp from '../Components/HeadingComp'
import { AiFillDelete, AiFillEdit } from 'react-icons/ai'

const ManageFAQContent = () => {
    const [faqs, setFaqs] = useState([
        { id: 1, question: "What is your service?", answer: "We provide excellent service." },
        { id: 2, question: "How can I contact you?", answer: "You can contact via email or phone." }
    ])

    const [newFAQ, setNewFAQ] = useState({ question: "", answer: "" })
    const [editId, setEditId] = useState(null)

    const handleAddOrUpdate = (e) => {
        e.preventDefault()
        if (!newFAQ.question || !newFAQ.answer) return alert("Please fill both fields")

        if (editId) {
            setFaqs(prev =>
                prev.map(f => f.id === editId ? { ...f, question: newFAQ.question, answer: newFAQ.answer } : f)
            )
            setEditId(null)
        } else {
            setFaqs(prev => [...prev, { id: Date.now(), question: newFAQ.question, answer: newFAQ.answer }])
        }

        setNewFAQ({ question: "", answer: "" })
    }

    const handleEdit = (faq) => {
        setNewFAQ({ question: faq.question, answer: faq.answer })
        setEditId(faq.id)
    }

    const handleDelete = (id) => {
        if (window.confirm("Are you sure you want to delete this FAQ?")) {
            setFaqs(prev => prev.filter(f => f.id !== id))
        }
    }

    return (
        <div className='flex flex-col items-start gap-5 w-full'>
            <HeadingComp PageHeading="Manage FAQ Content" />

            {/* Add / Edit FAQ Form */}
            <form
                className='w-full flex flex-col gap-4 bg-white p-6 rounded-xl shadow-md'
                onSubmit={handleAddOrUpdate}
            >
                <label className='text-gray-700 font-medium'>Question</label>
                <input
                    type='text'
                    value={newFAQ.question}
                    onChange={(e) => setNewFAQ({ ...newFAQ, question: e.target.value })}
                    placeholder='Enter FAQ question'
                    className='w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500'
                />

                <label className='text-gray-700 font-medium'>Answer</label>
                <textarea
                    value={newFAQ.answer}
                    onChange={(e) => setNewFAQ({ ...newFAQ, answer: e.target.value })}
                    placeholder='Enter FAQ answer'
                    rows={5}
                    className='w-full border border-gray-300 rounded-lg p-4 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500'
                />

                <button
                    type='submit'
                    className='bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition-colors font-semibold'
                >
                    {editId ? "Update FAQ" : "Add FAQ"}
                </button>
            </form>

            {/* FAQ List */}
            <div className='w-full flex flex-col gap-4'>
                {faqs.map(faq => (
                    <div key={faq.id} className='bg-white p-4 rounded-xl shadow-md flex justify-between items-start gap-4'>
                        <div>
                            <p className='font-semibold text-gray-800'>{faq.question}</p>
                            <p className='text-gray-600 mt-1'>{faq.answer}</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <button onClick={() => handleEdit(faq)} className='text-yellow-500 hover:text-yellow-600'>
                                <AiFillEdit size={20} />
                            </button>
                            <button onClick={() => handleDelete(faq.id)} className='text-red-500 hover:text-red-600'>
                                <AiFillDelete size={20} />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ManageFAQContent
