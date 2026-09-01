import React,{ useMemo, useState} from 'react'

const numb = new Array(40_000_000).fill(0).map((_,i)=>{
  return {
    index: i,
    nummagical: i === 20_000_000,
  };
});

 function Um() {
const [count, setCount] = useState(0);
const [number] = useState(numb);

const magical = useMemo(() => {
    console.log("Finding magical number....");

return number.find((item) => item.nummagical === true);
},[number]);
 return (
<div>
    <h1>Counter: {count}</h1>

    <button onClick={() => setCount(count +1)}>Increase</button>

    <button onClick={() => setCount(count -1)}>Decrease</button>

<h2>BIG NUMBER : {magical.index}</h2>
</div>
  );
}
export default Um;