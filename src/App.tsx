import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

import type { Articles } from './type';
import { fetchArticles } from './utils/supabaseFunctions';
import Sidebar from './components/Sidebar';

function App() {
  const [articles, setArticles] = useState<Articles>([]);

  useEffect(() => {
    (async () => {
      const articles = await fetchArticles()
      setArticles(articles || []);
    })()
  }, []);

  return (
    <Box sx={{ display: 'flex' }}>
      <Sidebar articles={articles} />
      <Container maxWidth={false} sx={{ maxWidth: '750px', paddingBlock: 10 }}>
        <Outlet context={{articles}} />
      </Container>
    </Box>
  );
}

export default App;
