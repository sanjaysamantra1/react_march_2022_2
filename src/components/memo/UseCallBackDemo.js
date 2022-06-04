import React, { useCallback, useState } from "react";
import ToDoDemo from "./ToDoDemo";

export default function UseCallBackDemo() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const increment = () => {
    setCount((c) => c + 1);
  };
  const addTodo = useCallback(() => {
    setTodos((t) => [...t, "New Todo"]);
  }, []);
  //   const addTodo = () => {
  //     setTodos((t) => [...t, "New Todo"]);
  //   };

  return (
    <>
      <ToDoDemo todos={todos} addTodo={addTodo} />
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
      </div>
    </>
  );
}
