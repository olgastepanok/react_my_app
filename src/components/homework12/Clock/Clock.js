import { useState, useEffect } from 'react';

export function Clock() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    let timerID = setInterval( () => tick(), 1000 );
    return () => clearInterval(timerID);
  });

  function tick() {
    setDate(new Date());
  }
  return (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {date.toLocaleTimeString()}.</h2>
    </div>
  );
}