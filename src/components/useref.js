//import { useEffect, useRef, useState } from "react";

//export default function Ur() {
 
    

    //const [count, setcount] = useState(0);

    //const previouscount = useRef();

    //useEffect(() => {

       // previouscount.current = count;

   // }, [count]);
    //return (
       // <div>
            //<h1>Current: {count}</h1>
           // <h2>Previous: {previouscount.current}</h2>

            //<button onClick={() => setcount(count+1)}>
          //  Increment
       //   //  </button>
       // </div>
   // )

//}


import React,{ useRef} from 'react'

export default function Ur() {
  const inputRef = useRef();

  const handleClick = () => {
  inputRef.current.style.backgroundColor = "blue"};
  return (
    <div>
<input ref={inputRef} /> 
    <button onClick={handleClick}>
    Change background
    </button>
    </div>
  )
}

