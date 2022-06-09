import React, { useState } from "react";
import Employees from "../employees/Employees";
// import Counter from "../counter/Counter";
// import UseReducerDemo from "../hooks/UseReducerDemo";
import MemoDemo from "../memo/MemoDemo";
import UseCallBackDemo from "../memo/UseCallBackDemo";
import UseMemoDemo from "../memo/UseMemoDemo";

export default function Home() {
  return (
    <div>
      Home Component
      <hr />
      {/* <Counter></Counter> */}
      {/* <UseReducerDemo></UseReducerDemo> */}
      {/* <MemoDemo></MemoDemo> */}
      {/* <UseMemoDemo></UseMemoDemo> */}
      {/* <UseCallBackDemo></UseCallBackDemo> */}
      <Employees></Employees>
    </div>
  );
}
