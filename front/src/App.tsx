import { useEffect, useState } from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Content from './components/Content';
import Sidebar from './components/Sidebar';

function App() {
  const [articles, setArticles] = useState([])

  useEffect(() => {
    fetch('http://localhost:8080/articles')
      .then(response => response.json())
      .then(data => {
        setArticles(data)
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <Box sx={{ display: 'flex' }}>
      <Sidebar articles={articles} />
      <Container maxWidth={false} sx={{ maxWidth: '750px', paddingBlock: 10 }}>
        <Content />
      </Container>
    </Box>
  );
}

export default App;
