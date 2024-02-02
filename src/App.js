import { useEffect, useState } from "react";

function App() {
  const [countone, setCountone]=useState(0)
  const [counttwo, setCounttwo]=useState(0)
   
  const incrementcountone=()=>{
    setCountone(countone+1)
  }
  const incrementcounttwo=()=>{
    setCounttwo(counttwo+1)
  }
  const isEven =()=>{
    let i = 0
    while (i < 200000000000000) i++
    return countone % 2===0 
  }
  return(
  <div>
     <button onClick={incrementcountone}>countone-{countone}</button>
     <p>{isEven() ? "Even" : "odd"}</p>
    <button onClick={incrementcounttwo}>counttwo-{counttwo}</button>
  </div>
  )
}
  
export default App; 