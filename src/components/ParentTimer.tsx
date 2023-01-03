import { Timer } from './Timer'
import { useState } from 'react'

export const ParentTimer = () => {
  const [milliseconds, setMilliseconds] = useState(1000)

  const setMsHandle = (ms = 1000) => {
    setMilliseconds(ms)
  }

  return (
    <>
      <span>Milliseconds: {milliseconds}</span>
      <br />
      <button className='btn btn-outline-success' type='button' onClick={() => setMsHandle()}>
        1000
      </button>
      <button
        className='btn btn-outline-success ms-1'
        type='button'
        onClick={() => setMsHandle(2000)}
      >
        2000
      </button>
      <Timer milliseconds={milliseconds} />
    </>
  )
}
