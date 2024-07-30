import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Timer from './Timer'
import Counter from './Counter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Timer />
      <Counter />
    </div>
  )
}

export default App
