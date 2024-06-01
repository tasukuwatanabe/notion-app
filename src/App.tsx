import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

import type { Articles } from './type';
import { fetchArticles } from './utils/supabaseFunctions';
import Sidebar from './components/Sidebar';

import { type FormEvent, type ChangeEvent } from 'react';
import { useNavigate } from 'react-router';
import { insertArticle } from './utils/supabaseFunctions';

function App() {
  const [articles, setArticles] = useState<Articles>([]);

  const [title, setTitle] = useState<string>('');
  const [body, setBody] = useState<string>('');
  const [insertedArticleId, setInsertedArticleId] = useState<string>('')

  const navigate = useNavigate()

  const handleInputTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleInputBody = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setBody(e.target.value);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement> ) => {
    e.preventDefault();

    const id = await insertArticle({title, body})

    if (id) {
      setTitle('')
      setBody('')
      setInsertedArticleId(id)
      navigate(`/articles/${id}`)
    }
  };

  useEffect(() => {
    (async () => {
      const articles = await fetchArticles()
      setArticles(articles || []);
    })()
  }, [insertedArticleId]);

  return (
    <Box sx={{ display: 'flex' }}>
      <Sidebar articles={articles} />
      <Container maxWidth={false} sx={{ maxWidth: '750px', paddingBlock: 10 }}>
        <Outlet context={{
          articles,
          title,
          body,
          handleInputTitle,
          handleInputBody,
          handleSubmit
        }} />
      </Container>
    </Box>
  );
}

export default App;
