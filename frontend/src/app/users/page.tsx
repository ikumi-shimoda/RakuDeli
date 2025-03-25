'use client'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { User } from '@/types/user'
import UserList from '../../components/user/userList'

function Page() {
  const [data, setData] = useState<User | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post('http://localhost:8000/api/users')
        setData(response.data)
      } catch (error: any) {
        console.error(error.message)
      }
    }

    fetchData()
  }, [])

  return (
    <div>
      {/* 初期値がnullだから?つけないとエラーになる */}
      <h1>Message: {data?.message}</h1>
      {data?.users.map((user: User, index: number) => (
        <UserList key={index} user={user} />
      ))}
    </div>
  )
}

export default Page
