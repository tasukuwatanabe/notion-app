import { useOutletContext } from 'react-router';

type FormContext = {
  title: string;
  body: string;
  handleInputTitle: () => void;
  handleInputBody: () => void;
  handleSubmit: () => void;
};

export default function Form() {
  const { title, body, handleInputTitle, handleInputBody, handleSubmit } =
    useOutletContext<FormContext>();

  return (
    <form onSubmit={handleSubmit}>
      <input id='title' type='text' onChange={handleInputTitle} value={title} />
      <textarea
        name=''
        id=''
        rows={10}
        style={{ width: '100%' }}
        onChange={handleInputBody}
        value={body}
      />
      <button type='submit'>
        Submit
      </button>
    </form>
  );
}
