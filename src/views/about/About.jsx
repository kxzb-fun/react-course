import { Link, Route, Routes} from "react-router-dom";
// import { Link, Route, Routes ,Outlet} from "react-router-dom";
import History from "./History";
import Team from "./Team";
function About() {
  return (
    <div>
      <h1>关于我们</h1>
      <nav>
        <Link to="/about/team">团队介绍</Link> | <Link to="/about/history">历史</Link>
      </nav>
      {/* <Outlet /> */}
      <Routes>
        <Route path="team" element={<Team />} />
        <Route path="history" element={<History />} />
      </Routes>
    </div>
  );
}

export default About;
