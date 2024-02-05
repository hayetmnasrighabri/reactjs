import { useState } from 'react';

export default function Form() {
  const [person, setPerson] = useState({
    name: 'Niki de saint phallé',
    artwork:{
    title: 'blue Nana',
    city: 'hamburg',
    image: 'https://i.imgur.com/Sd1AgUOm.jpg'
    }
  });
   const handlenameChange =(e)=>{
    setPerson({
      ...person,
      name: e.target.value
    })
   }
   const handleTitleChange=(e)=>{
    setPerson({
      ...person,
      artwork:{
        ...person.artwork,
        title:e.target.value
      }
    })
   }
   const handleCityChange=(e)=>{
    setPerson({
      ...person,
      artwork:{
        ...person.artwork,
        city: e.target.value
      }
    })
   }
   const handleImageChange=(e)=>{
      setPerson({
        ...person,
        artwork:{
          ...person.artwork,
          image:e.target.value
        }
      })
   }


  return (
    <>
      <label>
        name:
        <input
          value={person.name}
          onChange={handlenameChange}
        />
      </label>
       <br/>
       <br/>
       <br/>
      <label>
        title:
        <input
          value={person.artwork.title}
          onChange={handleTitleChange}
        />
      </label>
      <br/>
       <br/>
       <br/>
      <label>
        city:
        <input
          value={person.artwork.city}
          onChange={handleCityChange}
        />
      </label>
      <br/>
       <br/>
       <br/>
      <label>
        image:
        <input 
        value={person.artwork.image}
        onChange={handleImageChange}
        />
      </label>
      <br/>
       <br/>
       <br/>
       <img 
      src={person.artwork.image}
      alt={person.artwork.title}
      />
      <p>
        <i>{person.artwork.title}</i>
        {' by '}
        {person.name}
        <br />
        (located in {person.artwork.city})
      </p>
      
    </>
  )
}
