import { useEffect, useState, type FormEvent, type ChangeEvent } from 'react';
import { useNavigate, useParams } from 'react-router';
import { Outlet } from 'react-router-dom';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

import type { Articles } from './type';
import {
  fetchArticles,
  insertArticle,
  updateArticle,
  deleteArticle
} from './utils/supabaseFunctions';
import Sidebar from './components/Sidebar';

function App() {
  const [articles, setArticles] = useState<Articles>([]);
  const [title, setTitle] = useState<string>('');
  const [body, setBody] = useState<string>('');

  const { articleId } = useParams();
  const navigate = useNavigate();

  const handleInputTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleInputBody = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setBody(e.target.value);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!title) {
      alert("Article title can't be empty");
      return;
    }

    if (articleId) {
      // update
      const updatedArticle = await updateArticle({
        id: articleId,
        title,
        body,
      });

      if (updatedArticle) {
        navigate(`/articles/${updatedArticle.id}`);
        const fetchedArticles = await fetchArticles();
        setArticles(fetchedArticles || []);
      }
    } else {
      // create
      const createdArticle = await insertArticle({ title, body });

      if (createdArticle) {
        navigate(`/articles/${createdArticle.id}`);
        const fetchedArticles = await fetchArticles();
        setArticles(fetchedArticles || []);
      }
    }
  };

  const handleDelete = async () => {
    if (!articleId) return;

    const statusMessage = await deleteArticle(articleId)

    if (statusMessage === 'deleted') {
      navigate('/articles')
      const fetchedArticles = await fetchArticles();
      setArticles(fetchedArticles || []);
    }
  }

  useEffect(() => {
    (async () => {
      const fetchedArticles = await fetchArticles();
      setArticles(fetchedArticles || []);

      if (articleId) {
        const matched = fetchedArticles?.filter(
          (article) => article.id === Number(articleId)
        )[0];
        if (matched) {
          setTitle(matched.title);
          setBody(matched.body);
        }
      } else {
        setTitle('');
        setBody('');
      }
    })();
  }, [articleId]);

  return (
    <Box sx={{ display: 'flex' }}>
      <Sidebar articles={articles} />
      <Container maxWidth={false} sx={{ maxWidth: '750px', paddingBlock: 10 }}>
        <Outlet
          context={{
            articles,
            title,
            setTitle,
            body,
            setBody,
            handleInputTitle,
            handleInputBody,
            handleSubmit,
            handleDelete
          }}
        />
      </Container>
    </Box>
  );
}

export default App;
