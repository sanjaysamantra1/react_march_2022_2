import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function ContactUs() {
  const navigate = useNavigate();
  
  const func1 = () => {
    //execute some code here
    alert('execute some code')
    navigate("/aboutus");
  };
  return (
    <div>
      ContactUs Component <br />
      <a href="/careers">go to careers</a> &nbsp;
      <Link to="/careers">go to careers</Link> &nbsp;
      <button onClick={()=>{navigate("/careers")}}>go to careers</button> &nbsp;
      <button onClick={func1}>Take me To product</button>
      <button onClick={()=>{navigate(-1)}}>previuos page</button>
    </div>
  );
}
