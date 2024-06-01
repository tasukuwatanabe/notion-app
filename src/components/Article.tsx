import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import type { Article } from '../type';
import { fetchArticle } from '../utils/supabaseFunctions';

export default function Article() {
  const [article, setArticle] = useState<Article>({
    id: 0,
    title: '',
    body: '',
  });
  const { id } = useParams();

  useEffect(() => {
    if (!id) return;

    (async () => {
      const article = await fetchArticle(id);
      if (article) setArticle(article)
    })();
  }, [id]);

  return (
    <div>
      <h1>{article.title}</h1>
      <div>{article.body}</div>
    </div>
  );
}
