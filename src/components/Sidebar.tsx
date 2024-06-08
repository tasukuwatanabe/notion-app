import { Link, useOutletContext } from "react-router-dom";

import { type Articles } from "../type";

type ArticlesContext = {
  articles: Articles;
};

export default function Sidebar() {
  const { articles } = useOutletContext<ArticlesContext>();

  return (
    <div>
      <div>
        {articles &&
          articles.map((article, index) => (
            <div key={`${article.title}-${index}`}>
              <Link to={`/articles/${article.id}`}>{article.title}</Link>
            </div>
          ))}
        <Link to="/articles/new">New Article</Link>
      </div>
    </div>
  );
}
