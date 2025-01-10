import { useState, useEffect } from "react";

const Counter = () => {
    // 有状态的数据
  const [counter, setCounter] = useState(0);
  // setInterval
  // 涉及到异步的操作  我们可以使用useEffect setTimeout 可以用来模拟后端接口调用
  useEffect(()=>{
    setTimeout(() => {
      setCounter(counter + 1)
      console.log('我触发了页面更新')
    }, 1000);
  },[counter])
  

  return <div>{counter}</div>;
};

export default Counter;

// function test(count){
//     const counter = count
//     function setCounter() {
//         console.log('我做了修改counter的值的逻辑')
//     }
//     return [counter,setCounter]
// }

// const res = test(0)
// console.log(res)
// const [a,b] = res
// console.log(a,b)

// const Counter = () => {
//   const [counter, setCounter] = useState(0);
//   const [msg, setMsg] = useState("hi");
//   //   函数 useState（0）

//   // 这里可以进行简写
//   const handleClick = () => {
//     console.log("clicked");
//     setCounter(counter + 1);
//   };
//   function handleMsg() {
//     setMsg("hello");
//   }

//   function test() {
//     // 逻辑
//     return ()=>{
//         console.log(1);
//     }
//   }


//   return (
//     <div>
//       <div>{msg}</div>
//       <button onClick={test()}>click me</button>
//       <div>{counter}</div>

//       <button onClick={handleClick}>plus</button>
//     </div>
//   );
// };

// export default Counter;
