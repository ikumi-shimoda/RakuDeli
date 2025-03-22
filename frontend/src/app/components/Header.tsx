import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

function Header() {
  const id = 2
  return (
    <div className='p-3 flex justify-between items-center'>
      <div>
        <Image src='/next.svg' alt='logo' width={100} height={100} />
      </div>
      <div>
        <Link href='/'>
          <button className='px-4 py-2 bg-blue-500 text-white rounded'>
            Home
          </button>
        </Link>
        <Link href='/test'>
          <button className='px-4 py-2 bg-blue-500 text-white rounded ml-2'>
            Test
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Header
