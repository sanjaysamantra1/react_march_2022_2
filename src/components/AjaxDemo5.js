import axios from "axios";
import React, { useEffect, useState } from "react";

export default function AjaxDemo5() {
  const [name,setName] = useState('sachin');
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/todos").then((response) => console.log(response.data));
  });
  return <div>AjaxDemo5 - using axios instance-
    <span>
      i am parent - {name} <span>i am child</span>
    </span>
  <button onClick={()=>setName('something else')}>update name</button>
  </div>;
}
