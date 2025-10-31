import React from "react";
import { useRef } from "react";

// iska use kisi be html element ko control krny kkk liye ya DOM ko manipulate krny kk liye kiya jata hai.
const UseRef = () => {
  const inputField = useRef(null);
  function inputHandler() {
    console.log(inputField);
    inputField.current.focus();
    inputField.current.style.color='red'
    inputField.current.placeholder='whats new boy'
  }
  return (
    <>
      <h1>Use Ref</h1>
      <input ref={inputField} type="text" placeholder="Enter user Name" />
      <button onClick={inputHandler}>Focus on input field</button>
    </>
  );
};

export default UseRef;
