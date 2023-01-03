import { useState } from 'react'

export interface User {
  uid: string
  name: string
}

export const User = () => {
  const [user, setUser] = useState<User>()

  const userLogin = () => {
    setUser({ uid: 'ABC123', name: 'Cristóbal Mardones Bucarey' })
  }

  return (
    <div className='mt-3'>
      <h3>User: useState</h3>
      <button type='button' className='btn btn-outline-primary' onClick={userLogin}>
        Login
      </button>
      <pre>{user ? JSON.stringify(user) : 'Not logged user'}</pre>
    </div>
  )
}
