import React, { useState } from 'react'
import CarsDemo from './CarsDemo';

export default function MemoDemo() {
    const [counter, setCounter] = useState(0);
    const [cars, setCars] = useState(["tata", "honda", "maruti"]);
    return (
      <div>
        I am Demo Component
        <div>Counter is {counter}</div>
        <div>cars is {cars.join(',')}</div>
        <button onClick={() => setCounter(counter + 1)}>Increment Counter</button>
        <button onClick={() =>{setCars([...cars,'hundai'])}}>add a new car</button>
        <br />
        =====================================================================
        <CarsDemo cars={cars}></CarsDemo>
      </div>
    );
}
