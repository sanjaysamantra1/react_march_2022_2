import React, { useEffect } from "react";

export default function AjaxDemo4() {
  useEffect(() => {
    async function f1() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const finaldata = await response.json();
      console.log(finaldata);
    }
    f1();
  });
  return <div>Fetch Data using async await</div>;
}
