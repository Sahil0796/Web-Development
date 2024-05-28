import React from 'react'
import { useContext } from 'react'
import ComponentOne from './ComponentOne'
import { counterContext } from '../context/context'


const Button = () => {
    const value = useContext(counterContext)
    return (
        <div>
            <button onClick={() => value.setCount((count) => count + 1)}>
                <span><ComponentOne/></span>Enter
            </button>
        </div>
    )
}

export default Button
