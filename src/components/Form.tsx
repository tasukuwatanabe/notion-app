import { useOutletContext } from 'react-router';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

type FormContext = {
  title: string,
  body: string,
  handleInputTitle: () => void;
  handleInputBody: () => void;
  handleSubmit: () => void;
};

export default function Form() {
  const {
    title,
    body,
    handleInputTitle,
    handleInputBody,
    handleSubmit,
  } = useOutletContext<FormContext>();

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
      <textarea
        name=''
        id=''
        rows={10}
        style={{ width: '100%' }}
        onChange={handleInputBody}
        value={body}
      />
      <Button variant='contained' type='submit'>
        Submit
      </Button>
    </form>
  );
}
