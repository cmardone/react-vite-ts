import { useEffect, useRef, useState } from 'react'

type TimerProps = {
  milliseconds: number
}

export const Timer = ({ milliseconds }: TimerProps) => {
  const [seconds, setSeconds] = useState(0)
  const interval = useRef<number>()

  useEffect(() => {
    interval.current && clearInterval(interval.current)
    interval.current = setInterval(() => setSeconds((seconds) => seconds + 1), milliseconds)
  }, [milliseconds])

  return (
    <>
      <h4>
        Timer: <small>{seconds}</small>
      </h4>
    </>
  )
}
