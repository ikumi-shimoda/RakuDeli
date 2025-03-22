import React from 'react'
import Link from 'next/link'
import { TestData } from '@/types/test'

function TestList({ testData }: { testData: TestData[] }) {
  return (
    <div className='mt-2'>
      {testData.map((data: TestData, index: number) => {
        return (
          <Link key={data.id} href={`/test/${data.id}`}>
            <button
              className={`px-4 py-2 bg-blue-500 text-white rounded ${
                index > 0 ? 'ml-2' : ''
              }`}
            >
              {data.title}
            </button>
          </Link>
        )
      })}
    </div>
  )
}

export default TestList
