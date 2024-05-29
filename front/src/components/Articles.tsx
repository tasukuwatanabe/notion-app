import { useOutletContext } from 'react-router-dom';
import { ArticlesContext } from '../type';

export default function Articles() {
  const { articles } = useOutletContext<ArticlesContext>();

  return (
    <div>
      {articles.map((article, index) => (
        <div key={`${article.title}-${index}`}>
          <h1>{article.title}</h1>
          <div>{article.body}</div>
        </div>
      ))}
    </div>
  );
}
