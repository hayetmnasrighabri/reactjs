import { useState} from "react";

export default function Counter(){
  const [number, setNunber] = useState(0)
  return (
    <>
    <h1>{number}</h1>
    <button onClick={()=>{
      setNunber(number+5)
      setTimeout(()=>{
       alert(number)
    },1000)
    }}>+5</button>
    </>
  )
}