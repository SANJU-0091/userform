import React, {useState} from "react";

function local () {
    const [name, SetName] = useState(
        
     localStorage.getItem("name") || ""
    );

    const saveName = () => {
        localStorage.setItem("name", name);
        alert ("Name saved!");

    };

    const removName = () => {
        localStorage.removeItem("name");
        SetName("");
        alert("Name removed!");

    };

    return {
        
    }
}