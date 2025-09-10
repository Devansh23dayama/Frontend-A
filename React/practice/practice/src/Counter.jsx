import React from 'react'
import react,{useState} from 'react'

const Counter = () => {
    const [Count,setCount]= useState(10)
    const increment=()=>{setCount(Count +1)}
    const decrement=()=>{setCount(Count -1 )}
    const multiply=()=>{setCount(Count *2)}
    const divide=()=>{setCount(Count /2)}

  return (
    <div>
        <button onClick={increment}>+</button>
        <button onClick={multiply}>*</button>

        <p>{Count}</p>

        <button onClick={divide}>/</button>
        <button onClick={decrement}>-</button>

    </div>
  )
}

export default Counter