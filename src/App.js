import { useState } from "react";

function App() {
  const [firstName, setFirstName]= useState()

  const handleChange=(e)=>{
     setFirstName(e.target.value)
  }
   const handleSubmit=(e)=>{
    e.preventDefault()
    console.log(new FormData(e.target))
   }

  
  return(
  
    <form onSubmit={handleSubmit}>
      <input type="text" name="firstName"  onChange={handleChange} /> 
      <button>envoyer</button>
    </form>
    
  
  )
}
  
export default App;