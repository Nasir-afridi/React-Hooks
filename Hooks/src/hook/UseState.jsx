import { useState } from "react"
import React from 'react'

const UseState = () => {
      const [count , setCount] = useState(0)
      const [likes , setLikes] = useState(0)

  function increment() {
    setCount(count + 1)
  }

  function decrement() {
    setCount(count - 1)
  }

  function Reset() {
    setCount(0)
  }

   function LikesIncre() {
    setLikes(likes + 1)
  }
  return (
    <>
        <p>Count is : {count}</p>
        <button onClick={increment}>Increase</button>
        <button onClick={decrement}>Decrease</button>
        <button onClick={Reset}>Reset</button>
        <br />
        <br />
        <br />
        <br />
        <br />


        <p>Total Likes : {likes}</p>
        <button onClick={LikesIncre}>Likes</button>
    </>
  )
}

export default UseState