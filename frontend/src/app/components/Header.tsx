import Link from 'next/link'
import React from 'react'

function Header() {
  const id = 2
  return (
    <div className='bg-cyan-500'>
      <h1>Header</h1>
      <Link href='/'>
        <button className='px-4 py-2 bg-blue-500 text-white rounded'>
          Home
        </button>
      </Link>
      <Link href='/test'>
        <button className='px-4 py-2 bg-blue-500 text-white rounded'>
          Test
        </button>
      </Link>
    </div>
  )
}

export default Header
