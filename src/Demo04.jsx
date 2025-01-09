
import "./App.css";

const DynamicClassDemo =()=> {
  let isActive = false
  return (
    <div
      className={isActive ? "active-class" : "inactive-class"}
      >
      动态展示样式
    </div>
  );
}

export default DynamicClassDemo;