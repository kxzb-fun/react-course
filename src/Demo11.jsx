import { useState } from "react";
const Demo11 = () => {
  //   const [left, setLeft] = useState(0);
  //   const [right, setRight] = useState(0);
  // data{username, uid , avat}
  const [clicks, setClicks] = useState({
    left: 0,
    right: 0,
  });
  //   setClicks({})
  // {
  // left: 0,
  // right: 0,
  // }

  const handleLeftClick = () => {
    // clicks.left+=1
    // console.log(clicks)
    // setClicks(clicks)
    // 解构赋值
    setClicks({
      ...clicks,
      left: clicks.left + 1,
    });
  };

  // 不要这样处理
  //   //   数据更新了 但是页面不更新
  //     const handleLeftClick = () => {
  //       clicks.left++;
  //       setClicks(clicks);
  //     };

  const handleRightClick = () => {
    setClicks({
      ...clicks,
      right: clicks.right + 1,
    });
  };

  return (
    <div>
      <p> {clicks.left} 左侧的值</p>
      <button onClick={handleLeftClick}>left</button>
      <button onClick={handleRightClick}>right</button>

      <p> {clicks.right} 左侧的值</p>
    </div>
  );
};

export default Demo11;
