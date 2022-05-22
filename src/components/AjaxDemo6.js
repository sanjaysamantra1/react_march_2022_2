import React, { useEffect } from "react";
import axios from "axios";

export default function AjaxDemo6() {
  useEffect(() => {
    axios
      .all([
        axios.get("https://api.github.com/users/sanjaysamantra1"),
        axios.get("https://api.github.com/users/bhupalreddykokkanti007"),
        axios.get("https://api.github.com/users/google"),
      ])
      .then(([response1, response2, response3]) =>
        console.log(response1.data, response2.data, response3.data)
      );
  });
  return <div>AjaxDemo6 - using axios instance </div>;
}
