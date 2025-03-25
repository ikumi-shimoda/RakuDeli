import React from 'react'

function page() {
  return (
    <div>
      <h1>本を登録</h1>
      <div className='flex flex-col'>
        <div>
          タイトル
          <input type='text' name='' id='' className='bg-gray-200  ' />
        </div>
        <div>
          コメント
          <textarea name='' id='' placeholder='本文を入力'></textarea>
        </div>
      </div>
    </div>
  )
}

export default page
