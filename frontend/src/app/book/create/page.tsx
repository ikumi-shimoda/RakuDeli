'use client'
import React, { useState } from 'react'
import axios from 'axios'
import RakutenBookSearchInput from '@/components/Rakuten/RakutenBookSearchInput'

function page() {
  const [title, setTitle] = useState('')
  const [comment, setComment] = useState('')
  const storeBook = async () => {
    const response = await axios.post('http://localhost:8000/api/book/store', {
      user_id: 1,
      title: title,
      comment: comment,
      cover_image: 'test_path',
    })
    console.log(response)
  }
  return (
    <div>
      <h1>本を登録</h1>
      <div className='flex flex-col'>
        <div>
          <div>
            タイトル
            <input
              type='text'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div>
            コメント
            <textarea
              name=''
              id=''
              placeholder='本文を入力'
              onChange={(e) => setComment(e.target.value)}
            ></textarea>
          </div>
          <button
            className='bg-blue-500 text-white p-2 rounded'
            onClick={storeBook}
          >
            登録
          </button>
        </div>
        <div>
          <RakutenBookSearchInput />
        </div>
      </div>
    </div>
  )
}

export default page
