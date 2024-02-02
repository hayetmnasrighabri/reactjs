import { useState } from "react";
import {sculptureList} from "./data"

export default function Gallery() {
  const [index, setIndex]= useState(0)
  const [showMore, setShowMore]= useState()

  const handleClick =()=> {
    setIndex(index+1)
  }

  const handleNextClick=()=>{
    setShowMore(!showMore)
  }
     let sculpture = sculptureList[index]
  return (
    <div>
     <button onClick={handleClick}>Next</button>
      <h1>{sculpture.name}
       by {sculpture.artist}
       </h1>
      <h2>{index+1} of {sculptureList.length}</h2>
      <img 
      src={sculpture.url}
      alt={sculpture.alt}
      />
      <button onClick={handleNextClick}>{showMore ? 'hide' : 'show'} details
      </button>
      {showMore &&<p> {sculpture.description}</p>}
      
     </div>
  )
}