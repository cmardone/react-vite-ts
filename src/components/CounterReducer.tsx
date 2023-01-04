import { useReducer } from 'react'

const initialState = {
  counter: 0,
}

type ActionType =
  | { type: 'increment' }
  | { type: 'decrement' }
  | { type: 'reset' }
  | { type: 'custom'; payload: number }

const counterReducer = (state: typeof initialState, action: ActionType) => {
  switch (action.type) {
    case 'increment':
      return { ...state, counter: state.counter++ }
    case 'decrement':
      return { ...state, counter: state.counter-- }
    case 'custom':
      return { ...state, counter: action.payload }
    case 'reset':
      return initialState
    default:
      return state
  }
}

export const CounterReducer = () => {
  const [counterState, counterDispatch] = useReducer(counterReducer, initialState)
  return (
    <>
      <h2>Counter: {counterState.counter}</h2>
      <br />
      <button
        type='button'
        onClick={() => counterDispatch({ type: 'increment' })}
        className='btn btn-outline-primary mt-2'
      >
        +1
      </button>
      <button
        type='button'
        onClick={() => counterDispatch({ type: 'decrement' })}
        className='btn btn-outline-primary mt-2 ms-1'
      >
        -1
      </button>
      <button
        type='button'
        onClick={() => counterDispatch({ type: 'custom', payload: 100 })}
        className='btn btn-outline-primary mt-2 ms-1'
      >
        100
      </button>
      <button
        type='button'
        onClick={() => counterDispatch({ type: 'custom', payload: 200 })}
        className='btn btn-outline-primary mt-2 ms-1'
      >
        200
      </button>
      <button
        type='button'
        onClick={() => counterDispatch({ type: 'reset' })}
        className='btn btn-outline-danger mt-2 ms-1'
      >
        Reset
      </button>
    </>
  )
}
