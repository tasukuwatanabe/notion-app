import { useEffect, useState } from 'react';
import { type Article } from './type';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Content from './components/Content';
import Sidebar from './components/Sidebar';

function App() {
  const [showingArticle, setShowingArticle] = useState<Article>({
    id: 0,
    title: ''
  })
  const [articles, setArticles] = useState([])

  useEffect(() => {
    fetch('http://localhost:8080/articles')
      .then(response => response.json())
      .then(data => {
        setArticles(data)
        if (data.length > 0) {
          setShowingArticle(data[0])
        }
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <Box sx={{ display: 'flex' }}>
      <Sidebar articles={articles} />
      <Container maxWidth={false} sx={{ maxWidth: '750px', paddingBlock: 10 }}>
        <Content article={showingArticle} />
      </Container>
    </Box>
  );
}

export default App;
