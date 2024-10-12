import React from "react";
import "./Counter.css";

const Counter = () => {
  const [count, setCount] = React.useState(0);
  return (
    <div className="container">
      <div className="hero">
        <p id="para">You have clicked {count} times</p>
        <button
          id="btn"
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Click me
        </button>
      </div>
    </div>
  );
};

export default Counter;
