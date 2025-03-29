'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import MyBookList from '@/components/book/MyBookList'

function MainComponent() {
  return (
    <div className='min-h-screen bg-white'>
      <main className='pt-32'>
        <section className='text-center px-8 py-32'>
          <h2 className='text-6xl md:text-7xl font-playfair text-[#1A1A1A] mb-8 relative inline-block'>
            <span className='relative z-10'>UniShelf</span>
            <span className='absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#B8860B]/0 via-[#B8860B]/20 to-[#B8860B]/0'></span>
          </h2>
          <div className='text-xl text-[#666666] font-light tracking-wider'>
            <Link href='/book/create'>
              <p>あなただけの本棚 +</p>
            </Link>
          </div>
        </section>

        <MyBookList />
      </main>

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
