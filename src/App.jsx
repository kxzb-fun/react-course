import { BrowserRouter as Router, Route, Routes, Link, useRoutes } from "react-router-dom";
import routes from "./routes/index";
const App = () => {
  // const renderRoutes = (routeArray) => {
  //   console.log(routeArray);
  //   return routeArray.map(({ path, element, children }) => (
  //     <Route key={path} path={path} element={element}>
  //       {/* 递归调用了 路由渲染 */}
  //       {children && renderRoutes(children)}
  //     </Route>
  //   ));
  // };
  const RoutesComponent=()=> useRoutes(routes);

  return (
    <>
      <Router>
        <nav>
          <Link to="/">首页</Link> | <Link to="/about">关于</Link>
        </nav>
        {/* <Routes>{renderRoutes(routes)}</Routes> */}
        <RoutesComponent />
      </Router>
    </>
  );
};

export default App;
