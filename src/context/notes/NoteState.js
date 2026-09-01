import React , {useState} from "react";
import noteContext from "./noteContext";

const NoteState = (props) => {

    const a = {

        name: "Sanju",
        job: "tranning"
    };

    const [state, setState]=useState(a)
    const u = ()=> {
          
      
         setTimeout(() => {
            setState({
                name: "his work",
                job: "skills"

            
         })
        },2000);
    }
     return(

     <noteContext.Provider value={{state,u}}>
        {props.children}
     </noteContext.Provider>
     );
};

 export default NoteState;
 
