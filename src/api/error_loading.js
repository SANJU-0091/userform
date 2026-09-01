import React, { useEffect, useState} from "react";

function pd() {
    const [product, setProducts] = useState([]);

    //loading State
    const [loading, setloading] = useState(true);

    //error state

        const [error, setError] = useState("");


        useEffect(() => {

            fetch("https://fakestoreapi.com/products")
            .then((Response) => {

                //agar API response successful nhi hai 

                if (!Response.ok) {
                    throw new Error("Something went wrong");
                }
                    return Response.json();
                    
                
            })

        }) 
    }    