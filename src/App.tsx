import { Counter } from './components/Counter'
import { ParentTimer } from './components/ParentTimer'
import { User } from './components/User'
const App = () => {
  return (
    <>
      <h1>React + TypeScript</h1>
      <hr />
      <h2>useState</h2>
      <Counter />
      <User />
      <h2>useEffect + useRef</h2>
      <ParentTimer />
    </>
  )
}

export default App
