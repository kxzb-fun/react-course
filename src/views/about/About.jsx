// import { Link, Route, Routes} from "react-router-dom";
// import History from "./History";
// import Team from "./Team";
// // import { Link, Outlet } from "react-router-dom";
// function About() {
//   return (
//     <div>
//       <h1>关于我们</h1>
//       <nav>
//         <Link to="/about/team">团队介绍</Link> |{" "}
//         <Link to="/about/history">历史</Link>
//       </nav>
//       {/* <Outlet /> */}
//       <Routes>
//         <Route path="team" element={<Team />} />
//         <Route path="history" element={<History />} />
//       </Routes>
//     </div>
//   );
// }

// export default About;
import {useState} from "react";
import { Link, Route, Routes, Outlet } from "react-router-dom";
function About() {
  const [showDemoA, setShowDemoA] = useState(false);
  return (
    <div>
      <h1>关于我们</h1>
      {showDemoA ? <DemoA /> : <DemoB />}
      <button onClick={()=>setShowDemoA(true)}>展示demoA</button>
      <button onClick={()=>setShowDemoA(false)}>展示demoB</button>
      <nav>
        <Link to="/about/team">团队介绍</Link> |{" "}
        <Link to="/about/history">历史</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default About;

function DemoA(){
  return <div>demoA</div>
}

function DemoB(){
  return <div>demoB</div>
}