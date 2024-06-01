import { type FormEvent, useState, type ChangeEvent } from 'react';
import { useNavigate } from 'react-router';
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';
import { insertArticle } from '../utils/supabaseFunctions';

export default function Form() {
  const [title, setTitle] = useState<string>('');
  const [body, setBody] = useState<string>('');

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
      navigate(`/articles/${id}`)
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        id='title'
        label='Title'
        variant='standard'
        style={{ marginBottom: '30px' }}
        onChange={handleInputTitle}
        value={title}
      />
      <div>
        <textarea name='' id='' rows={10} style={{ width: '100%' }} onChange={handleInputBody} value={body} />
      </div>
      <Button variant='contained' type='submit'>
        Submit
      </Button>
    </form>
  );
}
