const Login = () => {
  // 模拟用户登录状态
  let isLoggedIn = false;

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      {/* 条件渲染 */}
      {isLoggedIn ? (
        <div>
          <h1>欢迎回来，用户！</h1>
          <button>退出登录</button>
        </div>
      ) : (
        <div>
          <h1>请登录</h1>
          <button>登录</button>
        </div>
      )}
    </div>
  );
};

export default Login;
