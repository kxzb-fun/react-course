import { useState, useEffect } from "react";


function Counter() {
  const [count, setCount] = useState(0); // 状态变量
  const [time, setTime] = useState(0);   // 时间状态

  // 纯函数：计算下一个计数
  function increment(current) {
    return current + 1;
  }

  // 使用 useEffect 处理副作用：计时器
  useEffect(() => {
    console.log("启动计时器");

    // 副作用：每秒更新时间
    const timer = setInterval(() => {
      setTime((prevTime) => prevTime + 1); // 更新时间
    }, 1000);

    // 清理函数：组件卸载时清除计时器
    return () => {
      console.log("清除计时器");
      clearInterval(timer);
    };
  }, []); // 空数组表示只运行一次

  return (
    <div>
      <h1>计数器：{count}</h1>
      <button onClick={() => setCount((current) => increment(current))}>
        增加计数
      </button>

      <h1>运行时间：{time} 秒</h1>
    </div>
  );
}

export default Counter;
