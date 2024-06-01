import { TextField } from '@mui/material';
import Button from '@mui/material/Button';
import { useOutletContext } from 'react-router';

type FormContext = {
  title: string,
  body?: string,
  handleInputTitle: () => void,
  handleInputBody: () => void,
  handleSubmit: () => void,
}

export default function Form() {
  const { title, body, handleInputTitle, handleInputBody, handleSubmit } = useOutletContext<FormContext>()

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
