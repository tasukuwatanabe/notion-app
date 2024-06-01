import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router';

import type { Article } from '../type';
import { fetchArticle } from '../utils/supabaseFunctions';

export default function Article() {
  const [article, setArticle] = useState<Article | null>({
    id: 0,
    title: '',
    body: '',
  });
  const { id } = useParams();
  const { state } = useLocation();

  useEffect(() => {
    if (state) {
      setArticle(state.insertedArticle)
    } else {
      (async () => {
        const article = await fetchArticle(id!);
        setArticle(article || null);
      })();
    }
  }, [id]);

  return (
    <>
      {article ? (
        <div>
          <h1>{article.title}</h1>
          <div>{article.body}</div>
        </div>
      ) : (
        <div>Not Found</div>
      )}
    </>
  );
}
