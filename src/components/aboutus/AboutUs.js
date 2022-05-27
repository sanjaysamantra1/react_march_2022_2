import React from "react";
import { useNavigate } from "react-router-dom";

export default function AboutUs() {
  const navigate = useNavigate();
  return <>
    <h1>This is about us component</h1>

    <button onClick={()=>{navigate(1)}}>next page</button>
  </>
}
