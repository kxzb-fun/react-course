import { BrowserRouter as Router, Routes, Route, Link , Navigate} from "react-router-dom";
// import routes from "./routes/index";
// import About from "./views/about/About";
import About from "./About";
import Home from "./Home";
const App = () => {
  const isAuth = false;
  return (
    <Router>
      <nav>
        <Link to="/">首页</Link> | 
        <Link to="/about/1">关于</Link>
      </nav>
      <Routes>
        {/* {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))} */}
        {/* ：user  定义形参的感受*/} 
        <Route path="/about/:user" element={isAuth ? <About/> : <Navigate replace to="/login" />} />

        <Route path="/" element={<Home />} />
        {/* <Route path="/login" element={<Login />} /> */}
        
      </Routes>
    </Router>
  );
};

export default App;
