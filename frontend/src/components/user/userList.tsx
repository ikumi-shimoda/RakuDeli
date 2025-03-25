import React from 'react'
import { User } from '@/types/user'

function UserList({ user }: { user: User }) {
  return (
    <div>
      <p>ID: {user.id}</p>
      <p>ユーザー名: {user.name}</p>
      <p>メールアドレス: {user.email}</p>
      <p>作成日: {user.created_at}</p>
      <p>更新日: {user.updated_at}</p>
    </div>
  )
}

export default UserList
