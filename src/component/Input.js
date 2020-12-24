
import React from 'react'

const Input = ({ type, onKeyDown, placeholder }, ref)  => {
    return (
        <div>
            <input ref={ref} type={type} onKeyDown={onKeyDown} placeholder={placeholder} />
        </div>
    )
    }
const forwaredInput = React.forwardRef(Input)

export default forwaredInput;





