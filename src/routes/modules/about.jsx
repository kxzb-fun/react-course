import About from "../../views/about/About";
import Team from "../../views/about/Team";
import History from "../../views/about/History";

const aboutRoutes = [
  {
    path: "/about",
    element: <About />,
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
