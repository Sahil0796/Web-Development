import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-between bg-slate-700 text-white py-5'>
        <div className="logo"> 
            <span className='font-bold text-xl mx-10 cursor-pointer'>ToDos !</span>
        </div>
        <ul className="flex gap-10 mx-10">
            <li className='cursor-pointer hover:font-bold transition-all duration-70'>Home</li>
            <li className='cursor-pointer hover:font-bold transition-all duration-70'>Your Tasks</li>
        </ul>

    </nav>
  )
}

export default Navbar