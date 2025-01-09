import { useState, useEffect } from "react";

// 自定义 Hook：封装计时器逻辑
function useTimer(initialTime) {
  const [timeLeft, setTimeLeft] = useState(initialTime);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((time) => time - 1);
    }, 1000);

    // 清理计时器
    return () => clearInterval(interval);
  }, []);

  return timeLeft;
}

// 使用自定义 Hook 的组件
export function TimerA() {
  const timeLeft = useTimer(10); // 初始化为 10 秒
  return <div>Timer A: {timeLeft}</div>;
}

export function TimerB() {
  const timeLeft = useTimer(5); // 初始化为 5 秒
  return <div>Timer B: {timeLeft}</div>;
}

export function TimerC() {
    const timeLeft = useTimer(5); // 初始化为 5 秒
    return <div>Timer B: {timeLeft}</div>;
  }