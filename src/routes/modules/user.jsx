
import UserList from '../../views/user/UserList';
import UserDetail from '../../views/user/UserDetail';

const userRoutes = [
  {
    path: '/users',
    element: <UserList />
  },
  {
    path: '/users/:id',
    element: <UserDetail />
  }
];

export default userRoutes;