import React from "react";

export default function Ci(props) {
  return (
    <div>
      
   <button className="btn btn-primary"  onClick={() => props.data(props.count + 10)}>Child Calling</button>
    </div>
  );
}