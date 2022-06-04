import React, { useId } from "react";

export default function UseIdDemo() {
  const id = useId();
  const id2 = useId();
  const id3 = useId();
  const id4 = useId();
  return (
    <div>
      <label htmlFor={id2}>Do you like React?</label>
      <input id={id2} type="checkbox" name="react" />

      <label htmlFor={id + "-firstName"}>First Name</label>
      <input id={id3 + "-firstName"} type="text" />

      <label htmlFor={id + "-lastName"}>Last Name</label>
      <input id={id4 + "-lastName"} type="text" />
    </div>
  );
}
