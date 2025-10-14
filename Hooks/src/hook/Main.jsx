import React, { useState } from 'react'

const Main = () => {
  const [count , setCount] = useState(0)

  function increment() {
    setCount(count + 1)
  }

  function decrement() {
    setCount(count - 1)
  }

  function Reset() {
    setCount(0)
  }


  return (
    <>
    <p>Count is : {count}</p>
      <button onClick={increment}>Increase</button>
      <button onClick={decrement}>Decrease</button>
      <button onClick={Reset}>Reset</button>
    </>
  )
}

export default Main