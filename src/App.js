import { useRef } from "react";
 export default function CatFriends(){
  const firstCatRef=useRef(null)
  const secondCatRef=useRef(null)
  const thirdCatRef=useRef(null)

  const handleScrollFirstCat=()=>{
    firstCatRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center'
    })
  }
    const handleScrollToSecondCat=()=>{
      secondCatRef.current.scrollIntoView({
        behavior: 'smooth',
      block: 'nearest',
      inline: 'center'
      })
    }

   const handleScrollToThirdCat=()=> {
    thirdCatRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center'
    })
  }
  return(
    <>
    <nav>
      <button onClick={handleScrollFirstCat}>
          tom
      </button>
      <button onClick={handleScrollToSecondCat}>
      maru
      </button>
      <button onClick={handleScrollToThirdCat}>
      Jellylorum
      </button>
    </nav>
    <div>
      <ul>
        <li>
          <img 
          src="https://placekitten.com/g/200/200"
          alt="tom"
          ref={firstCatRef}/>
        </li>
        <li>
          <img 
          src="https://placekitten.com/g/300/200"
          alt="maru"
          ref={secondCatRef}/>
        </li>
        <li>
          <img
          src="https://placekitten.com/g/250/200"
          alt="Jellylorum"
          ref={thirdCatRef}/>
        </li>
      </ul>
    </div>
    </>
  )
 }
