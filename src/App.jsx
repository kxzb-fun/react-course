import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
import TodoApp from "./components/TodoList";
import Home from "./Home";
import "./App.css";
import ArticleDetail from "./views/article/ArticleDetail";
import ArticleList from "./views/article/ArticleList";
const App = () => {
  const padding = {
    padding: 5,
  };

  return (
    <Router>
      <div>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          home
        </NavLink>
        {/* <a href=""></a> */}
        <Link style={padding} to="/todolist">
          todolist
        </Link>
        <Link style={padding} to="/articles">
          ArticleList
        </Link>
        <Link style={padding} to="/articles/:id">
          Article detail
        </Link>
      </div>

      {/* 真实的路由 */}

      <Routes>
        <Route path="/todolist" element={<TodoApp />} />
        <Route path="/articles" element={<ArticleList />} />
        <Route path="/" element={<Home />} />
        
        <Route path="/articles/:id" element={<ArticleDetail />} />
      </Routes>

      <div>
        <i>Todo app, Department of Computer Science 2025</i>
      </div>
    </Router>
  );
};

export default App;
