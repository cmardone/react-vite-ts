import { useState } from 'react'

export const Counter = () => {
  const [counter, setCounter] = useState<number>(0)

  const addHandle = (increment = 1): void => {
    setCounter(counter + increment)
  }

  return (
    <div className='mt-3'>
      <h3>Counter</h3>
      <span>Value: {counter}</span>
      <br />
      <button type='button' onClick={() => addHandle()} className='btn btn-outline-primary mt-2'>
        +1
      </button>
      <button
        type='button'
        onClick={() => addHandle(2)}
        className='btn btn-outline-primary mt-2 ms-1'
      >
        +2
      </button>
      <button
        type='button'
        onClick={() => setCounter(0)}
        className='btn btn-outline-danger mt-2 ms-1'
      >
        Reset
      </button>
    </div>
  )
}
