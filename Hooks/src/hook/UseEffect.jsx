import { useEffect, useState } from 'react'

const UseEffect = () => { 
    const [count, setCount] = useState(0)
    const [data, setData] = useState(0)

    useEffect(() => {
        callOnce()
    }, []) // empty array mein aik dafa he call hoga jobe call krwaingy haam.


    function callOnce() {
        console.log("first callonce called") 
    }
    

  return (
    <>

        {/* 
         Button click hone par setCount(1) chalega
         1st click: 0 → 1 (state change hui → re-render hua → callOnce phir chala)
         2nd click: 1 → 1 (state same → React normally re-render nahi karega)
         Lekin development mode (Vite/React 18) me kabhi kabhi extra re-render hota hai
         StrictMode hataane ke baad bhi ye dev environment me ho sakta hai.
         Production build (npm run build) me ye issue nahi hota.
       */}       
       
       <h1>Use</h1>
       <button onClick={() => setCount(1)}>counter : {count}</button>
       <button onClick={() => setData(1)}>Data : {data}</button>
    </>
  )
}

export default UseEffect