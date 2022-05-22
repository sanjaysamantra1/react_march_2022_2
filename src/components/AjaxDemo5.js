import React, { useEffect } from "react";
import client from "../utils/api";

export default function AjaxDemo5() {
  useEffect(() => {
    client.get("/todos").then((response) => console.log(response.data));
  });
  return <div>AjaxDemo5 - using axios instance </div>;
}
