import React from 'react'

import { useparams} from "react-router-dom"

export default function employdata() {
    const {id} = useParams();
  return (
    <div style={{textAlign: "center"}}>
        <h1> Employee Detail</h1>

        <h2> Employee ID</h2>
    </div>
        
        
  )
}
