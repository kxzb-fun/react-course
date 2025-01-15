// 目前，Heading 组件从 props 中读取 level：
// 删掉 level 参数并从你刚刚引入的 LevelContext 中读取值：
import { useContext } from "react";
import { LevelContext } from "./LevelContext.jsx";
// export default function Heading({ level, children }) {
export default function Heading({ children }) {
  const level = useContext(LevelContext);
  console.log(level);
  switch (level) {
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
      throw Error("未知的 level：" + level);
  }
}
