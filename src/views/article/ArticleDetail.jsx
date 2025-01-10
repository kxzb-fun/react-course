import { useParams } from "react-router-dom";
import articlesData from "../../data/articles.json";

const ArticleDetail = () => {
  // const { id } = useParams();
  const id = useParams().id;
  const article = articlesData.articles.find(
    (item) => item.id === parseInt(id)
  );

  if (!article) {
    return <h2>文章不存在！</h2>;
  }

  return (
    <div>
      <h1>{article.title}</h1>
      <p>
        作者: {article.author.name} ({article.author.email})
      </p>
      <p>发布时间: {article.publishedAt}</p>
      <article>{article.content}</article>
    </div>
  );
};

export default ArticleDetail;
