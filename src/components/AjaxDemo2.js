import React, { useEffect } from "react";

export default function AjaxDemo2() {
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((response) => response.json())
      .then((comments) => console.log(comments));
  });
  return <div>AjaxDemo2</div>;
}
