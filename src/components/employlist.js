import React from 'react'
import { Link } from 'react-router-dom';

export default function el() {
  
    const Employe = [
        {id: 1,
            name: "Aman",
            profiles: "Trainer",
        },
        {id: 2,
            name: "Amit",
            profiles: "Developer",
        },
           
         {id: 3,
            name: "Sanju",
            profiles: "Debugger",
        },
    ];
    
      return (
    <div style={{textAlign: "center"}}>
      <h1>EMPLOYES LIST</h1>
      {Employe.map((employe) =>(
        <div key={employe.id}>
        <Link to={`/employe/${employe.id}`}>
        <h3>{employe.name}</h3>
        </Link>
      <p>{employe.profiles}</p>
      </div>
      ))

      }
    </div>
  );
}