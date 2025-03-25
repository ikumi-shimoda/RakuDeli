import React from 'react'
import TestList from '../../components/test/TestList'
import { TestData } from '@/types/test'

function page() {
  const testData: TestData[] = [
    {
      id: 1,
      title: 'test1',
    },
    {
      id: 2,
      title: 'test2',
    },
  ]

  return (
    <div>
      <div>test配下のpage</div>
      <div className='flex flex-col'>
        {testData.map((data: TestData, index: number) => {
          return <TestList key={data.id} data={data} />
        })}
      </div>
    </div>
  )
}

export default page
