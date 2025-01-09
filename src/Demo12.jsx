import { useState } from "react";

const Counter = () => {
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);

  const [allClicks, setAll] = useState([]);

  const handleLeftClick = () => {
    // 不修改原数组的方式 去设置新的状态
    setAll(allClicks.concat("L"));
    // 直接操作的是我们的原来的师数组
    // allClicks.push("L");
    setLeft(left + 1);
  };

  const handleRightClick = () => {
    setAll(allClicks.concat("R"));
    setRight(right + 1);
  };

  return (
    <div>
      {left}
      <button onClick={handleLeftClick}>left</button>
      <button onClick={handleRightClick}>right</button>
      {right}

      <p>{allClicks.join(" ")}</p>
    </div>
  );
};

export default Counter;
