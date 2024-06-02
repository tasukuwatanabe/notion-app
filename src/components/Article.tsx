import { useOutletContext, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { Stack } from '@mui/system';

import type { Article } from '../type';

type FormContext = {
  title: string;
  body: string;
  handleDelete: () => void
};

export default function Article() {
  const { title, body, handleDelete } = useOutletContext<FormContext>();
  const { articleId } = useParams();

  return (
    <>
      {title ? (
        <Stack spacing={2}>
          <h1>{title}</h1>
          <div>{body}</div>
          <Stack direction='row' spacing={1}>
            <Link to={`/articles/${articleId}/edit`}>
              <Button variant='outlined'>Edit</Button>
            </Link>
            <Button variant='outlined' onClick={handleDelete}>Delete</Button>
          </Stack>
        </Stack>
      ) : (
        <div>Not Found</div>
      )}
    </>
  );
}
