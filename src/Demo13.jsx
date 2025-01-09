import { useState } from "react";

const Counter = () => {
   
    
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);
  const [allClicks, setAll] = useState([]);
  // 计算总数
  const [total, setTotal] = useState(0);

  const handleLeftClick = () => {
    // setAll(allClicks.concat("L"));
    // console.log('加1之前',left)
    // // state 是异步跟新的
    // setLeft(left + 1);
    // console.log('加1之后',left)

    // setTotal(left + right);

    setAll(allClicks.concat("L"));
    const updatedLeft = left + 1;
    setLeft(updatedLeft);
    setTotal(updatedLeft + right);
  };

  const handleRightClick = () => {
    setAll(allClicks.concat("R"));
    // setRight(right + 1);

    // setTotal(left + right);
    const updatedRight = right + 1;
    setRight(updatedRight);
    setTotal(updatedRight + left);
  };

  return (
    <div>
      {left}
      <button onClick={handleLeftClick}>left</button>
      <button onClick={handleRightClick}>right</button>
      {right}
      <p>{allClicks.join(" ")}</p>

      <p>total {total}</p>
    </div>
  );
};
export default Counter;
