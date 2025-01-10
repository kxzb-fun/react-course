import { Link, Outlet } from "react-router-dom";
import articlesData from "../../data/articles.json";

const ArticleList = () => {
  const articles = articlesData.articles;

  return (
    <div>
      <h1>文章列表</h1>
      <ul>
        {articles.map((article) => (
          <li key={article.id}>
            <h2>
              <Link to={`/articles/${article.id}`}>8888{article.title}</Link>
            </h2>
            <p>{article.summary}</p>
            <p>发布时间: {article.publishedAt}</p>
          </li>
        ))}

        {/* 子路由的渲染出口 */}
        <Outlet />
      </ul>
    </div>
  );
};

export default ArticleList;
