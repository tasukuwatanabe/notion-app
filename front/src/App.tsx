import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Content from './components/Content';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <Box sx={{ display: 'flex' }}>
      <Sidebar />
      <Container maxWidth={false} sx={{ maxWidth: '750px', paddingBlock: 10 }}>
        <Content />
      </Container>
    </Box>
  );
}

export default App;
