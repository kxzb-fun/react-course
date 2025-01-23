import { useState } from "react";
const Counter = ({ playerName }) => {
  const [count, setCount] = useState(0);
  return (
    <>
      <div>当前玩家{playerName}</div>
      <button onClick={() => setCount(count + 1)}>{count}</button>
    </>
  );
};

const App = () => {
  const list = [1,2,3,4]
  let [isPlayerA, setIsPlayerA] = useState(true);
  return (
    <>
      {/* {isPlayerA ? <Counter playerName="A" /> : <Counter playerName="B" />} */}
      {/* 第一种方法 */}
      {/* {isPlayerA && <Counter playerName="A" />}
      {!isPlayerA && <Counter playerName="B" />} */}
      {/* 第二种方式 */}
      {isPlayerA ? <Counter playerName="A" key="A"/> : <Counter playerName="B" key="B"/>}
      {/*  */}
{list.forEach((item)=>{
  return <div key={item}>{item}</div>
})}
      <div>
        <button onClick={() => setIsPlayerA(false)}>下一位</button>
      </div>
    </>
  );
};

export default App;
