import React from 'react'
import Link from 'next/link'
import { TestData } from '@/types/test'

function TestList({ data }: { data: TestData }) {
  return (
    <div className='test-list-wrapper'>
      <Link href={`/test/${data.id}`}>
        <button className='px-4 py-2 bg-blue-500 text-white rounded'>
          {data.title}
        </button>
      </Link>
    </div>
  )
}

export default TestList
