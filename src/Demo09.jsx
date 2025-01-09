const LeftCounter = ({ count }) => {
  //   console.log(count);
  //   count++;
  //   console.log(count);
  // count 的副本
  // 函数的传参  把这个值复制了一份

  const plusOne = () => {
    count++;
    console.log(count);
  };
  return (
    <div>
      <p>我是子组件 {count}</p>
      <br />
      <button onClick={plusOne}>+1</button>
    </div>
  );
};
const Counter = () => {
  let count = 18;
  return (
    <div>
      {count}
      <LeftCounter count={count} />
    </div>
  );
};

export default Counter;
