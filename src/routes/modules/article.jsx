
import ArticleList from '../../views/article/ArticleList';
import ArticleDetail from '../../views/article/ArticleDetail';

const articleRoutes = [
  {
    path: '/articles',
    element: <ArticleList />
  },
  {
    path: '/articles/:id',
    element: <ArticleDetail />
  }
];

export default articleRoutes;