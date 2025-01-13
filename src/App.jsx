import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import routes from "./routes/index";
import About from "./views/about/About";

const App = () => {
  return (
    <Router>
      <nav>
        <Link to="/">首页</Link> | <Link to="/about">关于</Link>
      </nav>
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
        <Route path="/about/*" element={<About />} />
      </Routes>
    </Router>
  );
};

export default App;
