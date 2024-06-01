export type Article = {
  id: number;
  title: string;
  body?: string;
};

export type Articles = Article[] | null;
