import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  return <div>Count is
      <button onClick={()=>{setCount(count-1)}}>DECREMENT</button>
        {count}
       <button onClick={()=>{setCount(count+1)}}>INCREMENT</button>
       </div>;
}
