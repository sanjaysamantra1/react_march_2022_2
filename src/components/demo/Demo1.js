import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import useFetch from "../../utils/useFetch";
import { UserContext } from "../../utils/userContext";

export default function Demo1() {
  //   const [users, setUsers] = useState([]);

  //   useEffect(() => {
  //     axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
  //       setUsers(response.data);
  //       console.log(response.data);
  //     });
  //   }, [users]);

  const users = useFetch("https://jsonplaceholder.typicode.com/users");
  
  const userName = useContext(UserContext);

  return (
    <>
        username is - {userName}
        <div>Demo1</div>
        {
          <table className="table table-bordered">
            <tbody>
              {users.map((user, ind) => (
                <tr key={ind}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                </tr>
              ))}
            </tbody>
          </table>
        }
    </>
  );
}
