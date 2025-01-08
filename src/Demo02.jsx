// import { Fragment } from "react";
export default function Demo02() {
  const num = 10;
  function handleClick() {
    console.log(1);
  }
    // const obj = {a:100}
  return (
    // <Fragment>
    <>
      <div>
        <h2>Demo02</h2>
        {/* js表达式  逻辑运算 */}
        <p className="">{1 + 1}</p>
        {/* <p>{1 + 1 > 2 ? "aaa" : "bbb"}</p> */}
        {num}
        {/* onclick  */}
        <button onClick={handleClick}>click me</button>
      </div>
      <br />
      {/* <img src="" alt="" /> */}
      {/* {obj} */}

      <div>8888</div>
      <div>{null}</div>
      <div>{undefined}</div>
      <div>
        {false} + {true}
      </div>
    </>

    // </Fragment>
  );
}

// function foo(){
//     return [{}, {}]
// }
