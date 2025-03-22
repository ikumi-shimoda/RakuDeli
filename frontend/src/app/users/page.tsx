'use client'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Page() {
  const [message, setMessage] = useState<string>('')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post('http://localhost:8000/api/users')
        setMessage(response.data.message)
      } catch (error: any) {
        console.log(error.message)
      }
    }

    fetchData()
  }, [])

  return (
    <div>
      <h1>{message}</h1>
    </div>
  )
}

export default Page
