import { Outlet, Link } from "react-router-dom";

const UserLayout = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      {/* 顶部导航栏 */}
      <header style={{ backgroundColor: "#f4f4f4", padding: "10px" }}>
        <h1>用户管理系统</h1>
        <nav>
          <Link to="/users" style={{ marginRight: "10px" }}>用户列表</Link>
          <Link to="/users/create">创建用户</Link>
        </nav>
      </header>

      {/* 主体内容区域 */}
      <main style={{ flex: 1, padding: "20px" }}>
        <Outlet /> {/* 渲染子路由内容 */}
      </main>

      {/* 页脚 */}
      <footer style={{ backgroundColor: "#f4f4f4", textAlign: "center", padding: "10px" }}>
        <p>&copy; 2025 用户管理系统</p>
      </footer>
    </div>
  );
};

export default UserLayout;
