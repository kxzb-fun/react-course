import About from "../../views/about/About";
import Team from "../../views/about/Team";
import History from "../../views/about/History";

// 嵌套路由
const aboutRoutes = [
  {
    path: "/about",
    element: <About />,
    // 嵌套路由
    children: [
      {
        path: "/about/team",
        element: <Team />,
      },
      {
        path: "/about/history",
        element: <History />,
      },
    ],
  },
];

export default aboutRoutes;
