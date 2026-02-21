import React, { useState } from 'react'
import HeadingComp from '../Components/HeadingComp'
import { AiFillDelete, AiFillEdit } from 'react-icons/ai'

const ManageBlogContent = () => {
    const [blogs, setBlogs] = useState([
        {
            id: 1,
            title: "My First Blog",
            description: "This is the first blog description",
            image: "",
            authorName: "John Doe",
            authorImage: "",
            category: "Tech",
            publishDate: "2026-02-13",
            tags: "React,JavaScript"
        }
    ])

    const [newBlog, setNewBlog] = useState({
        title: "",
        description: "",
        image: "",
        authorName: "",
        authorImage: "",
        category: "",
        publishDate: "",
        tags: ""
    })

    const [editId, setEditId] = useState(null)

    const handleAddOrUpdate = (e) => {
        e.preventDefault()
        if (!newBlog.title || !newBlog.description || !newBlog.authorName) {
            return alert("Please fill Title, Description, and Author Name")
        }

        if (editId) {
            // Update existing blog
            setBlogs(prev =>
                prev.map(b => b.id === editId ? { ...b, ...newBlog } : b)
            )
            setEditId(null)
        } else {
            // Add new blog
            setBlogs(prev => [...prev, { id: Date.now(), ...newBlog }])
        }

        setNewBlog({
            title: "",
            description: "",
            image: "",
            authorName: "",
            authorImage: "",
            category: "",
            publishDate: "",
            tags: ""
        })
    }

    const handleEdit = (blog) => {
        setNewBlog({ ...blog })
        setEditId(blog.id)
    }

    const handleDelete = (id) => {
        if (window.confirm("Are you sure you want to delete this blog?")) {
            setBlogs(prev => prev.filter(b => b.id !== id))
        }
    }

    return (
        <div className='flex flex-col items-start gap-5 w-full'>
            <HeadingComp PageHeading="Manage Blog Content" />
            <form
                className='w-full flex flex-col gap-4 bg-white p-6 rounded-xl shadow-md'
                onSubmit={handleAddOrUpdate}
            >
                <label className='text-gray-700 font-medium'>Blog Title</label>
                <input
                    type='text'
                    value={newBlog.title}
                    onChange={(e) => setNewBlog({ ...newBlog, title: e.target.value })}
                    placeholder='Enter blog title'
                    className='w-full border border-gray-300 rounded-lg p-3 focus:outline-none'
                />

                <label className='text-gray-700 font-medium'>Description</label>
                <textarea
                    value={newBlog.description}
                    onChange={(e) => setNewBlog({ ...newBlog, description: e.target.value })}
                    placeholder='Enter blog description'
                    rows={6}
                    className='w-full border border-gray-300 rounded-lg p-4 resize-none focus:outline-none'
                />

                <label className='text-gray-700 font-medium'>Blog Image</label>
                <input
                    type='file'
                    value={newBlog.image}
                    onChange={(e) => setNewBlog({ ...newBlog, image: e.target.files[0] })}
                    placeholder='Enter image URL'
                    className='w-full border border-gray-300 cursor-pointer rounded-lg p-3 focus:outline-none'
                />

                <label className='text-gray-700 font-medium'>Author Name</label>
                <input
                    type='text'
                    value={newBlog.authorName}
                    onChange={(e) => setNewBlog({ ...newBlog, authorName: e.target.value })}
                    placeholder='Enter author name'
                    className='w-full border border-gray-300 rounded-lg p-3 focus:outline-none'
                />

                <label className='text-gray-700 font-medium'>Author Image</label>
                <input
                    type='file'
                    value={newBlog.authorImage}
                    onChange={(e) => setNewBlog({ ...newBlog, authorImage: e.target.files[0] })}
                    placeholder='Enter author image'
                    className='w-full border border-gray-300 cursor-pointer rounded-lg p-3 focus:outline-none'
                />

                <label className='text-gray-700 font-medium'>Category</label>
                <input
                    type='text'
                    value={newBlog.category}
                    onChange={(e) => setNewBlog({ ...newBlog, category: e.target.value })}
                    placeholder='Enter category'
                    className='w-full border border-gray-300 rounded-lg p-3 focus:outline-none'
                />

                <label className='text-gray-700 font-medium'>Publish Date</label>
                <input
                    type='date'
                    value={newBlog.publishDate}
                    onChange={(e) => setNewBlog({ ...newBlog, publishDate: e.target.value })}
                    className='w-full border border-gray-300 rounded-lg p-3 focus:outline-none'
                />

                <label className='text-gray-700 font-medium'>Tags (comma separated)</label>
                <input
                    type='text'
                    value={newBlog.tags}
                    onChange={(e) => setNewBlog({ ...newBlog, tags: e.target.value })}
                    placeholder='React,JavaScript,...'
                    className='w-full border border-gray-300 rounded-lg p-3 focus:outline-none'
                />

                <button
                    type='submit'
                    className='bg-[var(--primary-color)] text-white px-6 py-3 rounded-lg hover:bg-[var(--primary-color)]/95 cursor-pointer transition-colors font-semibold'
                >
                    {editId ? "Update Blog" : "Add Blog"}
                </button>
            </form>

            {/* Blog List */}
            <div className='w-full flex flex-col gap-4 mt-6'>
                {blogs.map(blog => (
                    <div key={blog.id} className='bg-white p-4 rounded-xl shadow-md flex justify-between items-start gap-4'>
                        <div className='flex flex-col gap-2'>
                            <h3 className='font-semibold text-gray-800'>{blog.title}</h3>
                            <p className='text-gray-600'>{blog.description}</p>
                            <p className='text-sm text-gray-500'>Author: {blog.authorName} | Category: {blog.category}</p>
                            {blog.tags && <p className='text-sm text-gray-500'>Tags: {blog.tags}</p>}
                            {blog.publishDate && <p className='text-sm text-gray-500'>Published: {blog.publishDate}</p>}
                            {blog.image && <img src={blog.image} alt={blog.title} className='mt-2 w-48 h-32 object-cover rounded-md' />}
                            {blog.authorImage && <img src={blog.authorImage} alt={blog.authorName} className='mt-2 w-16 h-16 object-cover rounded-full' />}
                        </div>
                        <div className='flex items-center gap-2'>
                            <button onClick={() => handleEdit(blog)} className='text-[var(--primary-color)] cursor-pointer hover:text-[var(--primary-color)]/95'>
                                <AiFillEdit size={20} />
                            </button>
                            <button onClick={() => handleDelete(blog.id)} className='text-red-500 cursor-pointer hover:text-red-600'>
                                <AiFillDelete size={20} />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ManageBlogContent
