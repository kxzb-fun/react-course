import { useContext } from "react";
import { LevelContext } from "./LevelContext";
// export default function Heading({ level, children }) {
export default function Heading({ children }) {
  // 此时的levle 不需要从组价中传递
  // useContext 告诉 React Heading 组件想要读取 level 的值 就是我们定义的这个变量LevelContext。
  const abc = useContext(LevelContext)
  console.log('context two abc: ',abc)
  switch (abc) {
    case 1:
      return <h1>{children}</h1>;
    case 2:
      return <h2>{children}</h2>;
    case 3:
      return <h3>{children}</h3>;
    case 4:
      return <h4>{children}</h4>;
    case 5:
      return <h5>{children}</h5>;
    case 6:
      return <h6>{children}</h6>;
    default:
      throw Error("未知的 level：" + abc);
  }
}
