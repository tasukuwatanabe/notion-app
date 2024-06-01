import { type Article } from '../type';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';

type ContentProps = {
  article: Article;
};

export default function Content({ article }: ContentProps) {
  return (
    <>
      <CssBaseline />
      <Typography variant='h1' fontSize='40px' mb='30px'>
        {article.title}
      </Typography>
      <div>
        {article.body}
      </div>
    </>
  );
}
