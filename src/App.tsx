import { Counter } from './components/Counter'
import { CounterReducer } from './components/CounterReducer'
import { Form } from './components/Form'
import { ParentTimer } from './components/ParentTimer'
import { User } from './components/User'
const App = () => {
  return (
    <>
      <h1>React + TypeScript</h1>
      <hr />
      <h2>useState</h2>
      <hr />
      <Counter />
      <User />
      <h2>useEffect + useRef</h2>
      <hr />
      <ParentTimer />
      <h2>useReducer</h2>
      <hr />
      <CounterReducer />
      <h2>customHooks</h2>
      <hr />
      <Form />
    </>
  )
}

export default App
