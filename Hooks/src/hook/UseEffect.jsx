import { useEffect, useState } from 'react'

    /* 
    useEffect ek React Hook hai jo side effects handle karta hai
    Jaise: API calls, console logs, event listeners, DOM updates, etc.
    Iske andar likha code component ke render hone ke baad run hota hai
    */

    
    /* 
     Dependency Array ( [] ) ka matlab:
      - Empty array dene ka matlab hai ye effect sirf "component mount" hone par chalega (1 dafa).
      - Re-render hone par ye dobara nahi chalega.
      - Iska use tab hota hai jab hume code sirf ek hi dafa chalana ho (e.g. API call, initial setup).
    
     Agar array NA do (useEffect(() => {...})) :
      - To ye effect har render ke baad chalega.
      - Har bar jab component re-render hoga, ye dubara run karega.

     Agar array me koi value do (e.g. [count]) :
      - To ye effect tab chalega jab "count" ki value change hogi.
      - Example: agar count update hota hai to effect trigger hoga.
      - Iska use tab hota hai jab hume kisi specific state/prop change pe kuch karna ho.
  */

const UseEffect = () => { 
    const [count, setCount] = useState(0)
    const [data, setData] = useState(0)

    useEffect(() => {
        callOnce()
        counterUpdate()
    }, [count]) // empty array mein aik dafa he call hoga jobe call krwaingy haam.

    // count ko sirf count button pr update krna ho to array mein state variable ayga orr function useEffect mein.
    function counterUpdate() {
        console.log(count)
    }

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