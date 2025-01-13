import { useParams,Link } from "react-router-dom";
import usersData from "../../data/users.json";

function UserDetail() {
  const users = usersData.users;

  const { id } = useParams();
  const user = users.find((user) => user.id === parseInt(id));

  if (!user) {
    return <p>用户未找到。</p>;
  }

  return (
    <div>
      <h1>{user.name}</h1>
      <p>邮箱：{user.email}</p>
      <p>简介：{user.bio}</p>
      <p>加入时间：{user.joinedAt}</p>
      <h2>文章列表</h2>
      <ul>
        {user.articles.map((article) => (
          <li key={article.id}>
            <Link to={`/articles/${article.id}`}>{article.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserDetail;
