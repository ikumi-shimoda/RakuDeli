import React from 'react'

function BookList() {
  const books = [
    {
      id: 1,
      title: '本のタイトル',
      comment: '本のコメント',
      cover_image: 'https://example.com/image.jpg',
    },
    {
      id: 2,
      title: '本のタイトル2',
      comment: '本のコメント2',
      cover_image: 'https://example.com/image2.jpg',
    },
    {
      id: 3,
      title: '本のタイトル3',
      comment: '本のコメント3',
      cover_image: 'https://example.com/image3.jpg',
    },
    {
      id: 4,
      title: '本のタイトル4',
      comment: '本のコメント4',
      cover_image: 'https://example.com/image4.jpg',
    },
    {
      id: 5,
      title: '本のタイトル5',
      comment: '本のコメント5',
      cover_image: 'https://example.com/image5.jpg',
    },
  ]
  return (
    <div>
      <div>MyBookList</div>

      <div className='grid grid-cols-4'>
        {books.map((book) => {
          return (
            <div key={book.id} className='border p-2 rounded shadow mt-2'>
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
