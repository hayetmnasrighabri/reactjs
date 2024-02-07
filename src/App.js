import { useState } from "react"

export default function Form(){
  const [firstname, setFirstname]=useState('')
  const[lastname, setLastname]=useState('')
  //const [fullname, setFullname]=useState('')
  const fullname=firstname+''+lastname
  const handleFirstnameChange=(e)=>{
    setFirstname(e.target.value)
    //setFullname(e.target.value+ '' +lastname)
  }
  const handleLatsnameChange=(e)=>{
    setLastname(e.target.value)
    //setFullname(firstname+ '' +e.target.value)
  }
  return(
   <>
   <h1>Let’s check you in</h1>
   <label>firstname:{''}
    <input
      value={firstname}
      onChange={handleFirstnameChange}
 ></input>
    </label>
    <br/>
    <br/>
    <br/>
<label>lastname:{''}
  <input
    value={lastname}
    onChange={handleLatsnameChange}
  ></input>
</label>
<p>Your ticket will be issued to:{fullname}</p>
   </>
  )
}