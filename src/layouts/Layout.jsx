import { Outlet, Link } from "react-router-dom";

const DefaultLayout = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      {/* 顶部导航栏 */}
      <header style={{ backgroundColor: "#282c34", color: "#fff", padding: "15px" }}>
        <h1>默认布局</h1>
        <nav>
          <Link to="/" style={{ color: "#fff", marginRight: "15px" }}>首页</Link>
          <Link to="/about" style={{ color: "#fff", marginRight: "15px" }}>关于我们</Link>
          <Link to="/contact" style={{ color: "#fff" }}>联系我们</Link>
        </nav>
      </header>

      {/* 主体内容区域 */}
      <main style={{ flex: 1, padding: "20px", backgroundColor: "#f4f4f4" }}>
        <Outlet /> {/* 渲染子路由内容 */}
      </main>

      {/* 页脚 */}
      <footer style={{ backgroundColor: "#282c34", color: "#fff", textAlign: "center", padding: "10px" }}>
        <p>&copy; 2025 默认布局公司</p>
      </footer>
    </div>
  );
};

export default DefaultLayout;
