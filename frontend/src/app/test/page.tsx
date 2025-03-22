import Link from 'next/link'
import React from 'react'

function page() {
  return (
    <div>
      <div>test配下のpage</div>
      <Link href='/test/1'>
        <button className='px-4 py-2 bg-blue-500 text-white rounded'>
          1のTest
        </button>
      </Link>
      <Link href='/test/2'>
        <button className='px-4 py-2 bg-blue-500 text-white rounded ml-2'>
          2のTest
        </button>
      </Link>
    </div>
  )
}

export default page
