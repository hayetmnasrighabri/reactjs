import { useRef } from "react";

export default function Counter(){
  let ref = useRef(0)
  const handleClick=()=>{
    ref.current= ref.current+1
    alert('you clicked' +ref.current+'time!')
  }
  return(
    <>
    <button onClick={handleClick}>
      click me
    </button>
    </>
  )
}