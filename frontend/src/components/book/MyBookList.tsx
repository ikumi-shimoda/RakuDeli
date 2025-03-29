'use client'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

function BookList() {
  useEffect(() => {
    fetchUserBooks()
  }, [])

  const [userBooks, setUserBooks] = useState([])

  const fetchUserBooks = async () => {
    const response = await axios.get('http://localhost:8000/api/user/books/', {
      params: {
        user_id: 1,
      },
    })
    setUserBooks(response.data.userBooks)
  }

  return (
    <section className='max-w-7xl mx-auto px-8 py-16'>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-12'>
        {userBooks.map((book: Book) => (
          <div
            key={book.id}
            className='group relative aspect-[3/4] bg-[#FAFAFA] hover:bg-[#F5F5F5] transition-all duration-700 border border-[#B8860B]/5 hover:border-[#B8860B]/20 rounded-sm overflow-hidden shadow-sm hover:shadow-[0_0_20px_rgba(184,134,11,0.05)]'
          >
            {/* <img
                  src={book.cover_image}
                  alt={book.title}
                  className='w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-all duration-700'
                /> */}
            <div className='absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-white/95 to-white/80 backdrop-blur-sm transform translate-y-full group-hover:translate-y-0 transition-all duration-700 border-t border-[#B8860B]/10'>
              <h3 className='text-[#1A1A1A] text-sm md:text-base font-light'>
                {book.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default BookList
