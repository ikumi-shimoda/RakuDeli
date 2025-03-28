'use client'
import React, { useState } from 'react'
import axios from 'axios'
import RakutenBookSearchInput from '@/components/rakuten/RakutenBookSearchInput'

function page() {
  const [title, setTitle] = useState('')
  const [comment, setComment] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setSuccess(false)

    if (!title.trim()) {
      setError('タイトルを入力してください')
      return
    }

    try {
      setSuccess(true)
      setTitle('')
      setComment('')
    } catch (err) {
      setError('登録に失敗しました。もう一度お試しください。')
      console.error(err)
    }
  }

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
    <main className='pt-32 px-4 max-w-2xl mx-auto'>
      <form
        onSubmit={handleSubmit}
        className='bg-white border border-[#B8860B]/10 rounded-sm shadow-[0_0_20px_rgba(184,134,11,0.05)] p-8 md:p-12'
      >
        <div className='mb-8'>
          <RakutenBookSearchInput />
          <label
            htmlFor='title'
            className='block text-sm font-light text-[#1A1A1A] mb-2'
          >
            タイトル<span className='text-[#B8860B] ml-1'>*</span>
          </label>
          <input
            type='text'
            id='title'
            name='title'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className='w-full px-4 py-3 border border-[#B8860B]/10 rounded-sm focus:outline-none focus:border-[#B8860B]/30 focus:ring-1 focus:ring-[#B8860B]/30 transition-all duration-300'
            placeholder='本のタイトルを入力'
          />
        </div>

        <div className='mb-8'>
          <label
            htmlFor='comment'
            className='block text-sm font-light text-[#1A1A1A] mb-2'
          >
            コメント
          </label>
          <textarea
            id='comment'
            name='comment'
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className='w-full px-4 py-3 border border-[#B8860B]/10 rounded-sm focus:outline-none focus:border-[#B8860B]/30 focus:ring-1 focus:ring-[#B8860B]/30 transition-all duration-300'
            placeholder='コメントを入力（任意）'
          />
        </div>

        {error && (
          <div className='mb-6 p-4 bg-red-50 border border-red-100 text-red-600 text-sm rounded-sm'>
            {error}
          </div>
        )}

        {success && (
          <div className='mb-6 p-4 bg-green-50 border border-green-100 text-green-600 text-sm rounded-sm'>
            本が正常に登録されました
          </div>
        )}

        <button
          type='submit'
          className='w-full bg-[#B8860B]/10 hover:bg-[#B8860B]/20 text-[#1A1A1A] font-light py-3 px-6 rounded-sm transition-all duration-300 hover:shadow-[0_0_20px_rgba(184,134,11,0.1)]'
          onClick={storeBook}
        >
          登録する
        </button>
      </form>
    </main>
  )
}

export default page
