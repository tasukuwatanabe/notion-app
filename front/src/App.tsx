import { useEffect, useState } from 'react';
import { ArticlesContext, type Article } from './type';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Sidebar from './components/Sidebar';
import { Outlet } from 'react-router-dom';

function App() {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    fetch('http://localhost:8080/articles')
      .then((response) => response.json())
      .then((data) => {
        setArticles(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Box sx={{ display: 'flex' }}>
      <Sidebar articles={articles} />
      <Container maxWidth={false} sx={{ maxWidth: '750px', paddingBlock: 10 }}>
        <Outlet context={{
          articles
        } satisfies ArticlesContext } />
      </Container>
    </Box>
  );
}

export default App;
