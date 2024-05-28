import React from 'react'
import ComponentOne from './ComponentOne'

const Button = ({count}) => {
    return (
        <div>
            <button>
                <span><ComponentOne count = {count}/></span>Enter
            </button>
        </div>
    )
}

export default Button
