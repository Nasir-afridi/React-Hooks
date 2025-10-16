import React, { useEffect, useState } from "react";
import UseEffectCounter from "./UseEffectCounter";

const UseEffectProps = () => {
    const [counter, setCounter] = useState(0)
    const [datas, setDatas] = useState(0)

    useEffect(() => {
        handleFunction();
    }, [counter])

    useEffect(() => {
        handleData()
    }, [datas])

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
    </>
  );
};

export default UseEffectProps;
