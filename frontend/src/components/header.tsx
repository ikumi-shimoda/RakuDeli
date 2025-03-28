import React from 'react'
import Link from 'next/link'

function Header() {
  return (
    <header className='fixed w-full top-0 bg-white border-b border-[#B8860B]/10 shadow-[0_1px_0_0_rgba(184,134,11,0.05)] z-50'>
      <div className='max-w-7xl mx-auto px-8 py-6 flex justify-between items-center'>
        <h1 className="text-2xl font-playfair text-[#1A1A1A] relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[1px] after:bg-[#B8860B]/20">
          <Link href='/'>UniShelf</Link>
        </h1>
        <button className='px-6 py-2 text-sm text-[#1A1A1A] hover:text-[#B8860B] hover:shadow-[0_0_20px_rgba(184,134,11,0.1)] transition-all duration-300 font-light rounded-sm'>
          ログイン
        </button>
      </div>
    </header>
  )
}

export default Header
