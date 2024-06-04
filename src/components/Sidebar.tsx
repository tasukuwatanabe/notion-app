import { Link } from "react-router-dom";

import { type Articles } from "../type";

type SidebarProps = {
  articles: Articles;
};

export default function Sidebar({ articles }: SidebarProps) {
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
