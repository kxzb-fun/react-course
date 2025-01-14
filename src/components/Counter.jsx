import { useState } from "react";
const Counter = ({ myColor }) => {
  const [count, setCount] = useState(0);
  return (
    <button
      onClick={() => setCount(count + 1)}
      style={{ color: myColor ? 'red' : "black" }}
    >
      {count}
    </button>
  );
};

export default Counter;
