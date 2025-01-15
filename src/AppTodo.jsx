import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Outlet,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">首页11</Link> | <Link to="/about">关于22</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />}>
          <Route path="team" element={<Team />} />
          <Route path="history" element={<History />} />
        </Route>
      </Routes>
    </Router>
  );
}

function Home() {
  return <h1>首页</h1>;
}

function About() {
  return (
    <div>
      <h1>关于我们333</h1>
      <p>這是管與页面公公用的内容</p>
      <nav>
        <Link to="team">团队介绍</Link> | <Link to="history">历史</Link>
      </nav>
      {/* 嵌套路由出口 */}
      {/* <Route path="team" element={<Team />} />
      <Route path="history" element={<History />} /> */}
      <Outlet />
      {/* TODO */}
      {/* <Routes>
        <Route path="/about/team" element={<Team />} />
        <Route path="/about/history" element={<History />} />
      </Routes> */}
    </div>
  );
}

function Team() {
  return <h2>团队介绍</h2>;
}

function History() {
  return <h2>历史</h2>;
}

export default App;
