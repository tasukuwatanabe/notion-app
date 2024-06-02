import { type Article } from '../type';

type ContentProps = {
  article: Article;
};

export default function Content({ article }: ContentProps) {
  return (
    <>
      <div>
        {article.title}
      </div>
      <div>
        {article.body}
      </div>
    </>
  );
}
