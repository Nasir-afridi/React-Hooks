import React, { useEffect, useState } from "react";
import UseEffectCounter from "./UseEffectCounter";

const UseEffectProps = () => {
    const [counter, setCounter] = useState(0)
    const [datas, setDatas] = useState(0)
    const [text, setText] = useState("")

    useEffect(() => {
        handleFunction();
    }, [counter])

    useEffect(() => {
        handleData()
    }, [datas])

    useEffect(() => {
      console.log("counter updated")
    }, [counter])

    useEffect(() => {
      console.log(`User Typed : ${text}`)
    }, [text])

    useEffect(() => {
      console.log("component Mounted")

      return () => {console.log("component unmounted")}
    }, [])

  function handleFunction() {
    console.log("UseEffectCounter called");
  }

  function handleData() {
    console.log("Data updated")
  }
  return (
    <>
      <UseEffectCounter counter = {counter} datas = {datas} />
      <button onClick={() => setCounter(counter + 1)}>Count</button>
      <button onClick={() => setDatas(datas + 1)}>Data </button>
      <p>user type : {text}</p>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
    </>
  );
};

export default UseEffectProps;
