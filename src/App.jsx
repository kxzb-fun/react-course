// import ClassNamedComponent from './Demo01'
import Demo03 from "./Demo03";
import './App.css'
const Hello = ()=>{
  return <div className="css-class">hello</div>
}
function App() {
  return <div>777
    <Hello/>
    {/* <ClassNamedComponent/> */}
    <Demo03/>
  </div>;
}
// 导出
export default App;
