import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>首页</h1>
      <nav>
        <ul>
          <li>
            <Link to="/articles">文章列表</Link>
          </li>
          <li>
            <Link to="/users">用户列表</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Home;
