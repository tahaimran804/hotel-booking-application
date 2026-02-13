import React from 'react'
import Container from '../../components/Container'
import BlogBanner from "../../assets/BlogBanner.webp"
import ArticleImage from "../../assets/Blog.webp"
import ArticleImage1 from "../../assets/ArticleImage.webp"
import ArticleImage2 from "../../assets/ArticleImage1.webp"
import ArticleImage3 from "../../assets/ArticleImage2.webp"
import ArticleImage4 from "../../assets/ArticleImage3.webp"
import AuthorImage from "../../assets/PeopleImage.jpeg"
import AuthorImage1 from "../../assets/AuthorImage.jpeg"
import AuthorImage2 from "../../assets/AuthorImage1.jpeg"


const Blog = () => {
    const blogData = [
        {
            id: 1,
            category: "All about hotels",
            title: "The ultimate guide to visiting an onsen in Japan.",
            description:
                "Discover the best onsen in Japan, including historic ryokans, tranquil mountain escapes and luxurious stays.",
            author: "Chloe Gunning-Sherifi",
            readTime: "3 min read",
            image: ArticleImage,
            authorImage: AuthorImage,
        },
        {
            id: 2,
            category: "Hotel Tips",
            title: "How to find luxury hotels at budget prices.",
            description:
                "Learn smart comparison techniques and hidden booking strategies to enjoy premium hotels at lower costs.",
            author: "John Carter",
            readTime: "5 min read",
            image: ArticleImage1,
            authorImage: AuthorImage1,
        },
        {
            id: 3,
            category: "Travel Guide",
            title: "Best family-friendly hotels worldwide.",
            description:
                "Explore hotels offering kids activities, family suites, and relaxing environments for perfect vacations.",
            author: "Emily Watson",
            readTime: "4 min read",
            image: ArticleImage2,
            authorImage: AuthorImage2,
        },
        {
            id: 4,
            category: "Booking Tips",
            title: "When is the best time to book hotels?",
            description:
                "Understand seasonal hotel pricing trends and discover the best times to secure cheaper deals.",
            author: "Michael Brown",
            readTime: "6 min read",
            image: ArticleImage3,
            authorImage: AuthorImage1,
        },
        {
            id: 5,
            category: "Luxury Stays",
            title: "Top luxury hotels you must experience once.",
            description:
                "From private villas to sky-high penthouses, discover unforgettable luxury hotel experiences worldwide.",
            author: "Sophia Miller",
            readTime: "4 min read",
            image: ArticleImage4,
            authorImage: AuthorImage,
        },
        {
            id: 6,
            category: "Travel Planning",
            title: "How hotel comparison sites save your money.",
            description:
                "Learn how hotel comparison platforms help travelers compare prices and find the best booking partners.",
            author: "Daniel Cooper",
            readTime: "5 min read",
            image: ArticleImage1,
            authorImage: AuthorImage2,
        }
    ];

    return (
        <>
            <div className='w-full h-full lg:h-[400px] bg-[#192024] flex flex-col-reverse lg:grid lg:grid-cols-2 items-center'>
                <Container>
                    <div className='px-4 py-4 lg:px-10 flex flex-col items-start gap-2'>
                        <h1 className='text-lg sm:text-2xl md:text-4xl font-bold text-white' style={{
                            fontFamily: "'Roboto', sans-serif"
                        }}>All about hotels</h1>
                        <p className='text-xs md:text-sm font-normal text-white'>Choosing the right place to stay can make or break your trip. From understanding hotel types to scoring the best deals, knowing what to look for can mean the difference between a restful night and a travel nightmare. Here’s what you need to know before you book.</p>
                    </div>
                </Container>
                <div className='w-full h-[300px] sm:h-[400px]'><img src={BlogBanner} className='w-full h-full' alt="blog banner" /></div>
            </div>
            <Container>
                <div className='grid py-10 max-[500px]:grid-cols-1 grid-cols-2 lg:grid-cols-3 w-full gap-4 items-start'>
                    {blogData.map((ElemItem) => {
                        return (
                            <div key={ElemItem.id} className='flex bg-white shadow-lg border border-gray-200 flex-col w-full items-start group cursor-pointer rounded-lg gap-2 h-[420px]'>
                                <div className='h-60 w-full'>
                                    <img className='w-full h-full rounded-t-lg' src={ElemItem.image} alt="Article 1" />
                                </div>
                                <div className='flex px-2 flex-col items-start gap-1 w-full'>
                                    <p className='text-sm font-normal text-gray-500'>All about hotels</p>
                                    <h1 tyle={{
                                        fontFamily: "'Roboto', sans-serif"
                                    }} className='text-sm group-hover:underline line-clamp-2 w-full font-bold'>{ElemItem.title}</h1>
                                    <p className='text-sm line-clamp-2 w-full font-normal text-gray-500'>{ElemItem.description}</p>
                                    <div className='flex items-center w-full gap-1'>
                                        <span className='w-10 h-10 rounded-full'>
                                            <img className='w-full h-full rounded-full border border-gray-100' src={ElemItem.authorImage} alt="" />
                                        </span>
                                        <p className='text-sm line-clamp-1 font-normal text-gray-500'>{ElemItem.author} | {ElemItem.readTime}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </Container>
        </>
    )
}

export default Blog