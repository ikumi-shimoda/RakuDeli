'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import axios from 'axios'
import { Book } from '@/types/book'

function MainComponent() {
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
    <div className='min-h-screen bg-white'>
      <main className='pt-32'>
        <section className='text-center px-8 py-32'>
          <h2 className='text-6xl md:text-7xl font-playfair text-[#1A1A1A] mb-8 relative inline-block'>
            <span className='relative z-10'>UniShelf</span>
            <span className='absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#B8860B]/0 via-[#B8860B]/20 to-[#B8860B]/0'></span>
          </h2>
          <p className='text-xl text-[#666666] font-light tracking-wider'>
            <Link href='/book/create'>
              <div>あなただけの本棚 +</div>
            </Link>
          </p>
        </section>

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
      </main>

      <footer className='border-t border-[#B8860B]/10 mt-24 bg-gradient-to-b from-white to-[#B8860B]/[0.02]'>
        <div className='max-w-7xl mx-auto px-8 py-8'>
          <p className='text-center text-xs text-[#1A1A1A]/70 font-light tracking-wider'>
            © 2025 UniShelf. All rights reserved.
          </p>
        </div>
      </footer>

      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .grid > div {
          animation: fadeIn 0.7s ease-out forwards;
          opacity: 0;
        }
        .grid > div:nth-child(1) {
          animation-delay: 0.1s;
        }
        .grid > div:nth-child(2) {
          animation-delay: 0.2s;
        }
        .grid > div:nth-child(3) {
          animation-delay: 0.3s;
        }
        .grid > div:nth-child(4) {
          animation-delay: 0.4s;
        }
        .grid > div:nth-child(5) {
          animation-delay: 0.5s;
        }
        .grid > div:nth-child(6) {
          animation-delay: 0.6s;
        }
      `}</style>
    </div>
  )
}

export default MainComponent
