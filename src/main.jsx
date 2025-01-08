import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// 声明 把'./App.jsx'的内容拿过来
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
