'use client'

import React from 'react'
import { TestPageProps } from '@/types/test'

function Page({ params }: TestPageProps) {
  const { id } = React.use(params)
  const testData: TestData[] = [
    {
      id: 0,
      title: 'test0',
    },
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
      <div>id: {testData[id].id}</div>
      <div>title: {testData[id].title}</div>
    </div>
  )
}

export default Page
