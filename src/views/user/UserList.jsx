import usersData from "../../data/users.json";
import { Link } from "react-router-dom";
function UserList() {
    console.log(usersData)
  const users = usersData.users;
  console.log(users)
  return (
    <div>
      <h1>用户列表</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`/users/${user.id}`}>{user.name}-{user.email}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
