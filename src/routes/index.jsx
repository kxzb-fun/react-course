// import ArticleList from '../views/article/ArticleList';
// import ArticleDetail from '../views/article/ArticleDetail';
// import UserList from '../views/user/UserList';
// import UserDetail from '../views/user/UserDetail';
// import Home from '../views/Home';
// const routes = [
//   {
//     path: '/',
//     element: <Home />
//   },
//   {
//     path: '/articles',
//     element: <ArticleList />
//   },
//   {
//     path: '/articles/:id',
//     element: <ArticleDetail />
//   },
//   {
//     path: '/users',
//     element: <UserList />
//   },
//   {
//     path: '/users/:id',
//     element: <UserDetail />
//   },
// ];

// export default routes;

import articleRoutes from "./modules/article";
import userRoutes from "./modules/user";
import homeRoutes from './modules/home';
import aboutRoutes from "./modules/about";
// import Home from "../views/Home";

// const indexRoutes = [
//   {
//     path: "/",
//     element: <Home />,
//   },
// ];
const routes = [...articleRoutes, ...userRoutes, ...homeRoutes,...aboutRoutes];

export default routes;
