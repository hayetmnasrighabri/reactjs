import { useState } from "react";

function App() {
  const [count, setCount] = useState(0)
    
  const Increment = () => {
      setCount (count + 1)
        console.log(setCount)
}
const Decrement = ()=>{
 setCount(count-1)
}
  return (
    <>
    <p>compteur: {count}</p>
   <button onClick={Increment}>increment</button>
   <button onClick={Decrement}>decrement</button>
   </>
  )
}

  
export default App;