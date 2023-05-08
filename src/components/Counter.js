import React, { useState } from 'react'

const Counter = ({initialValue}) => {

  const [count,setCount] = useState(initialValue?initialValue:0)
  const increment = () => {
          
    setCount((prevCount)=>prevCount+1)
  }
  const decrement = () => {
    initialValue=initialValue-1;
    setCount(initialValue)

  }
  return (
    <div>
      <h1>My Counter</h1>
      <span>{count}</span>
      <button onClick={increment}>Add</button>
      <button onClick={decrement}>Sub</button>
    </div>
  )
}

export default Counter;