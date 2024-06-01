import supabase from '../lib/supabase';

export const fetchArticles = async () => {
  const { data: articles, error } = await supabase.from('articles').select();

  if (error) {
    console.log(error)
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
    console.log(error); // TODO: ここで404エラーを発生させたい
    return;
  }

  if (article.length > 0) {
    return article[0];
  }
};
