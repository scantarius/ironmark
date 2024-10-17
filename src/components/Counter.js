import React, { useState } from "react";
import { AnimatedCounter } from "react-animated-counter";

const Counter = () => {
  const [counterValue, setCounterValue] = useState(50);

  const handleCounterUpdate = (increment) => {
    const delta = 50;
    setCounterValue(increment ? counterValue + delta : counterValue - delta);
  };

  return (
    <div>
      <AnimatedCounter
        value={counterValue}
        color="red"
        fontSize="40px"
        display="flex"
        justify-content="center"
        background-color="red"
        align-items="center"
      />
      <div>
        <button onClick={() => handleCounterUpdate(false)}>Decrement</button>
        <button onClick={() => handleCounterUpdate(true)}>Increment</button>
      </div>
    </div>
  );
};

export default Counter;
