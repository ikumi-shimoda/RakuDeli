'use client'
import { useState } from 'react'

const BookSearch = () => {
  const [title, setTitle] = useState('')
  const [books, setBooks] = useState([])

  const fetchBooks = async (title: string) => {
    try {
      const res = await fetch(
        `https://app.rakuten.co.jp/services/api/BooksBook/Search/20170404?format=json&title=${title}&applicationId=${process.env.NEXT_PUBLIC_RAKUTEN_APP_ID}`
      )
      const data = await res.json()
      setBooks(data.Items || []) // 本のデータをセット
    } catch (error) {
      console.error(error)
    }
  }

  // Enterキーが押されたときに検索を実行
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      fetchBooks(title)
    }
  }

  const getBookByIsbn = async (isbn: string) => {
    const res = await fetch(
      `https://app.rakuten.co.jp/services/api/BooksBook/Search/20170404?format=json&isbn=${isbn}&applicationId=${process.env.NEXT_PUBLIC_RAKUTEN_APP_ID}`
    )
    const data = await res.json()
    console.log(data.Items[0].Item)
  }

  const registerBookShelf = async (isbn: string) => {
    console.log(isbn)
  }

  return (
    <div className='p-4'>
      <input
        type='text'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        onKeyDown={handleKeyDown} // Enterキーで検索
        placeholder='本のタイトルを入力'
        className='border p-2 rounded'
      />
      <div className='overflow-y-auto h-[400px] p-2'>
        {books.map((book: any, index) => (
          <div
            key={index}
            className='mb-2'
            onClick={() => registerBookShelf(book.Item.isbn)}
          >
            <p className='font-bold'>{book.Item.title}</p>
            <p>{book.Item.author}</p>
            <img src={book.Item.mediumImageUrl} alt={book.Item.title} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default BookSearch
