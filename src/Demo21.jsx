import { createContext, useState, useContext, memo } from "react";

// 创建一个 Context
const MyContext = createContext();

const GrandChild = () => {
  console.log("孙子组件渲染了");
  const value = useContext(MyContext); // 使用 Context
  return <div>孙子组件使用的 Context 值：{value}</div>;
};

// const Child = () => {
//   console.log("子组件渲染了");
//   return (
//     <div>
//       子组件
//       <GrandChild />
//     </div>
//   );
// };

// // 子组件  浅比较
const Child = memo(() => {
  console.log("子组件渲染了");
  return (
    <div>
      子组件
      <GrandChild />
    </div>
  );
});
Child.displayName = "Child";
// const Child = memo(function Child() {
//   console.log("子组件渲染了");
//   return (
//     <div>
//       子组件
//       <GrandChild />
//     </div>
//   );
// });

// 父组件
const Parent = () => {
  console.log("父组件渲染了");
  const [count, setCount] = useState(0);
  const [contextValue, setContextValue] = useState("初始值");

  return (
    <MyContext.Provider value={contextValue}>
      <div>
        父组件
        <button onClick={() => setCount((prev) => prev + 1)}>
          更新父组件状态 (不改变 Context)
        </button>
        <button onClick={() => setContextValue("更新后的值")}>
          更新 Context
        </button>
        <div>父组件状态：{count}</div>
        <Child />
      </div>
    </MyContext.Provider>
  );
};

export default Parent;
