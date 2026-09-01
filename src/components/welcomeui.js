import React,{useState} from 'react'

export default function Ui() {
  const[isLoggedIn,setIsLoggedIn] = useState(true);
  if(isLoggedIn)
  { return (
    <div>
   <h1>WELCOME USER</h1>   
    <button onClick={() => setIsLoggedIn(false)}>
    Logout
</button>    
    </div>
  );
}

return(
    <div>
<h1>PLEASE LOGIN</h1>
<button onClick={() => setIsLoggedIn(true)}>
    Login
</button>
</div>
)
}