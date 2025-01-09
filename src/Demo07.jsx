// // 在子组件中读取 props
// const Hello = ({name}) => {
//     // props 对象

//     // console.log(props)
//     return (
//       <div>
//         <p>
//           Hello {name}
//         </p>
//       </div>
//     )
//   }

//   const SayHello = () => {
//     return (
//       <div>
//         <h1>Greetings</h1>
//         {/* 将 props 传递给子组件 */}
//         <Hello name='Tom' />
//         <Hello name='Amy' />
//       </div>
//     )
//   }

const Hello = ({name,age}) => {
//   console.log(props);
  return (
    <div>
      <p>
        Hello {name}, you are {age} years old
      </p>
    </div>
  );
};

const SayHello = () => {
  const name = "Tom";
  const age = 10;

  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Amy" age={26 + 10} />
      <Hello name={name} age={age}  num={10}/>
    </div>
  );
};

export default SayHello;
