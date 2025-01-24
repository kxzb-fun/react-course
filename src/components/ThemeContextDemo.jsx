import  { createContext, useContext, useState } from "react";

// 创建一个 Theme Context
const ThemeContext = createContext();

// 顶层组件，负责提供主题和切换主题的方法
function ThemeApp() {
  const [theme, setTheme] = useState("light");

  // 切换主题
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    // 使用 Provider 将 theme 和 toggleTheme 传递下去
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div
        style={{
          backgroundColor: theme === "light" ? "#fff" : "#333",
          color: theme === "light" ? "#000" : "#fff",
          height: "100vh",
          padding: "20px",
        }}
      >
        <h1>Theme Switcher</h1>
        <ToggleThemeButton />
        <div>
          {[1,2,3,4,5].map(item=><Card key={item} />)}
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

// 一个组件：主题切换按钮
function ToggleThemeButton() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      style={{
        padding: "10px 20px",
        backgroundColor: theme === "light" ? "#000" : "#fff",
        color: theme === "light" ? "#fff" : "#000",
        border: "none",
        cursor: "pointer",
      }}
    >
      Switch to {theme === "light" ? "Dark" : "Light"} Mode
    </button>
  );
}

// 一个展示用的组件：卡片
function Card() {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      style={{
        marginTop: "20px",
        padding: "20px",
        borderRadius: "8px",
        backgroundColor: theme === "light" ? "#f9f9f9" : "#444",
        color: theme === "light" ? "#000" : "#fff",
      }}
    >
      This is a {theme === "light" ? "Light" : "Dark"} themed card.
    </div>
  );
}

export default ThemeApp;
