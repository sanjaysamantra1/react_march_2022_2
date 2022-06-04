import React from "react";

function CarsDemo(props) {
  console.log("cars demo render called");
  return (
    <div>
      cars Demo
      {props.cars.map((car) => {
        return <li>{car}</li>;
      })}
    </div>
  );
}
export default React.memo(CarsDemo);
