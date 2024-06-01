import { useEffect, useState } from 'react';
import supabase from './lib/supabase';
import type { Articles } from './type';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Sidebar from './components/Sidebar';
import { Outlet } from 'react-router-dom';

function App() {
  const [articles, setArticles] = useState<Articles>([]);

  useEffect(() => {
    getArticles();
  }, []);

  const getArticles = async () => {
    const { data: articles, error } = await supabase.from('articles').select();

    if (error) {
      console.log(error);
    } else {
      setArticles(articles);
    }
  };

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
