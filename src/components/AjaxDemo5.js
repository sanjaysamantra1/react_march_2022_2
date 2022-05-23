import axios from "axios";
import React, { useEffect } from "react";

export default function AjaxDemo5() {
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/todos").then((response) => console.log(response.data));
  });
  return <div>AjaxDemo5 - using axios instance </div>;
}
