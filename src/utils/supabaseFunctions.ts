import supabase from '../lib/supabase';

export const fetchArticles = async () => {
  const { data: articles, error } = await supabase
    .from('articles')
    .select()
    .order('id', { ascending: false });

  if (error) {
    console.log(error);
    return;
  }

  return articles;
};

export const fetchArticle = async (articleId: string) => {
  const { data: article, error } = await supabase
    .from('articles')
    .select()
    .match({ id: articleId });

  if (error) {
    console.log(error)
    return;
  }

  return article[0];
};

type insertingArticle = {
  title: string;
  body?: string;
};

export const insertArticle = async (NewArticle: insertingArticle) => {
  const { data, error } = await supabase
    .from('articles')
    .insert(NewArticle)
    .select();

  if (error) {
    console.log(error);
    return;
  }

  return data[0];
};
