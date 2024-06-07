import { useOutletContext } from "react-router-dom";
import type { Articles } from "../type";

import MainLayout from "../components/layout/Main";

type ArticlesContext = {
  articles: Articles;
};

export default function Articles() {
  const { articles } = useOutletContext<ArticlesContext>();

  return (
    <MainLayout>
      {articles &&
        articles.map((article, index) => (
          <div key={`${article.title}-${index}`}>
            <h1>{article.title}</h1>
            <div>{article.body}</div>
          </div>
        ))
      }
    </MainLayout>
  );
}
