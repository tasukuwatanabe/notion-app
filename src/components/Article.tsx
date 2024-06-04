import { useOutletContext, useParams } from "react-router";
import { Link } from "react-router-dom";

import type { Article } from "../type";

type FormContext = {
  title: string;
  body: string;
  handleDelete: () => void;
};

export default function Article() {
  const { title, body, handleDelete } = useOutletContext<FormContext>();
  const { articleId } = useParams();

  return (
    <>
      {title ? (
        <div>
          <h1>{title}</h1>
          <div>{body}</div>
          <div>
            <Link to={`/articles/${articleId}/edit`}>
              <button>Edit</button>
            </Link>
            <button onClick={handleDelete}>Delete</button>
          </div>
        </div>
      ) : (
        <div>Not Found</div>
      )}
    </>
  );
}
