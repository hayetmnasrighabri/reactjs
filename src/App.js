import { useState } from "react";

function App() {
  const [count, setCount] = useState(0)

  const Increment = () => {
      setCount (count + 1)
        console.log(setCount)
}
  return (
    <>
    <p>compteur: {count}</p>
   <button onClick={Increment}>increment</button>
   </>
  )
}

  
export default App;