'use client'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

function BookList() {
  useEffect(() => {
    fetchUserBooks()
  }, [])

  const [userBooks, setUserBooks] = useState([])
  const fetchUserBooks = async () => {
    const response = await axios.get('http://localhost:8000/api/user/books/', {
      params: {
        user_id: 1,
      },
    })
    setUserBooks(response.data.userBooks)
  }

  return (
    <div>
      <div>MyBookList</div>

      <div className='grid grid-cols-4'>
        {userBooks.map((book, index) => {
          return (
            <div key={book.id} className='border p-2 rounded shadow mt-2 '>
              <p className='font-bold truncate'>{book.title}</p>
              <p className='text-sm text-gray-600 truncate'>{book.comment}</p>
              <img
                className='w-full h-auto object-cover'
                src={book.cover_image}
                alt={book.title}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default BookList
