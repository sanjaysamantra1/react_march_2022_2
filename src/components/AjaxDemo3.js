import React, { useEffect } from "react";
import axios from "axios";

export default function AjaxDemo3() {
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
      console.log(response.data);
    });
  });
  return <div>AjaxDemo3</div>;
}
