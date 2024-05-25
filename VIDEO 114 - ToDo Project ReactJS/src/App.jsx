import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
// import './App.css'
import { v4 as uuidv4 } from 'uuid';


function App() {

  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])


  const handleAdd = () => {
    setTodos([...todos, { id: uuidv4(), todo, isCompleted: false }])
    setTodo("")
    console.log(todos)
  }

  const handleChange = (e) => {
    setTodo(e.target.value)
  }


  const handleEdit = (e, id) => {
    let t = todos.filter(i => i.id === id)
    setTodo(t[0].todo)
    let newTodos = todos.filter(item => {
      return item.id !== id
    });
    setTodos(newTodos)
  }


  const handleDelete = (e, id) => {
    let newTodos = todos.filter(item => {
      return item.id !== id
    });
    setTodos(newTodos)

  }


  const handleCheckbox = (e) => {
    let id = e.target.name;
    let index = todos.findIndex(item => {
      return item.id === id;
    })
    let newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos)

  }




  return (
    <>
      <Navbar />
      <div className="container mx-auto my-5 rounded-xl p-5 bg-orange-400 min-h-[80vh]">

        <div className="addTodo my-5">

          <h2 className='text-lg font-bold'>Add a ToDo</h2>

          <input onChange={handleChange} value={todo} type="text" className='w-1/3' />

          <button onClick={handleAdd} className='bg-black p-3 py-1 text-white rounded-md mx-5 font-bold'>Save</button>

        </div>

        <h2 className='text-xl font-bold'>Your Todos</h2>

        <div className='todos'>
          {todos.length === 0 && <div className='m-5'>No ToDos to Display !</div>}

          {todos.map(item => {

            return <div key={item.id} className="todo flex my-4 justify-between items-center w-1/2">

              <div className='flex gap-5'>

                <input name={item.id} onChange={handleCheckbox} type="checkbox" value={item.isCompleted} id="" />

                <div className={item.isCompleted ? "line-through" : ""}>{item.todo}</div>

              </div>

              <div className="buttons">

                <button onClick={(e) => handleEdit(e, item.id)} className='bg-black p-3 py-1 text-white rounded-md mx-1 font-bold'>Edit</button>
                <button onClick={(e) => { handleDelete(e, item.id) }} className='bg-black p-3 py-1  text-white rounded-md mx-1 font-bold'>Delete</button>

              </div>
            </div>
          })}

        </div>
      </div>
    </>
  )
}

export default App
