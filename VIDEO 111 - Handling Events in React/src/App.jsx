import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const [form, setForm] = useState({email: "", phone: ""});


  // onClick !
  const handleClick = () =>{
    alert("Hey I am clicked !");
  }
  

  // onMouseOver !
  const onMouseOver = () =>{
    alert("Hey I am MouseOver !");
  }


  // Input !
  const handleChange = (e) =>{
    setForm({...form, [e.target.name]:e.target.value})
    console.log(form)
  }

  return (
    <>

      <div className="button">
        <button onClick={handleClick} >Click me !</button>
      </div>

      <div className="red" onMouseOver={onMouseOver}>
        I am a red div !
      </div>

      <input type="text" name='email' value={form.email} onChange={handleChange} />
      <input type="text" name='phone' value={form.phone} onChange={handleChange} />

    </>
  )
}

export default App
