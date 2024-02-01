import { useEffect, useState } from "react";

function App() {
  const[x, setX]=useState(0)
  //const[y, setY]= useState(0)
   
  useEffect(()=>{
     console.log("useeffect1")
  },[])
  return(
  <div>
    <p>{x}</p>
    <button onClick={()=>{setX(x+1)}}>count</button>
  </div>
  )
}
  
export default App; 