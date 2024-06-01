import supabase from '../lib/supabase';

export const fetchArticles = async () => {
  const articles = await supabase.from('articles').select();

  return articles;
};

export const fetchArticle = async (articleId: string) => {
  const article = await supabase
    .from('articles')
    .select()
    .match({ id: articleId });

  return article;
};
