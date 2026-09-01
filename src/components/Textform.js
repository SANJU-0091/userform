import React ,{useState}from 'react'
import PropTypes from 'prop-types'
export default function TextForms(props) {
  const click= ()=> {
    console.log("hello"+text)
    let newText=text.toUpperCase()
    setText(newText);
  }
   const handlethechange = (event)=> {
setText(event.target.value);
    console.log("onChange");
  }

const [text, setText] = useState("Enter Text");

console.log(useState);

                    
  return (
    
<div>
    <h1>{props.heading} </h1>
<div className="mb-3">
  <label for="myform" className="form-label" >Enter lowercase text here !</label>
  <textarea className="form-control" value={text} onChange={handlethechange} id="myform" rows="4"></textarea>
  <button className="btn btn-primary" onClick={click}  >CONVERT</button>
  
</div>
    </div>
  );
}


