import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
      <div>This is count {count}</div>
      <button onClick={()=>{setCount(count + 1)}} >Upadte Count</button>

    </>
  )
}

export default App
