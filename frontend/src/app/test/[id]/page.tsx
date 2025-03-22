'use client'

import React from 'react'
import { TestPageProps } from '@/types/test'

function Page({ params }: TestPageProps) {
  const { id } = React.use(params)

  return <div>静的ルートpage {id}</div>
}

export default Page
