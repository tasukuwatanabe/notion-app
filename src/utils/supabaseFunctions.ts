import supabase from '../lib/supabase';

export const fetchArticles = async () => {
  const { data: articles, error } = await supabase.from('articles').select().order('id', { ascending: false });

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
    console.log(error); // TODO: ここで404エラーを発生させたい
    return;
  }

  if (article.length > 0) {
    return article[0];
  }
};

type insertingArticle = {
  title: string;
  body?: string;
};

export const insertArticle = async (NewArticle: insertingArticle) => {
  const { data, error } = await supabase
    .from('articles')
    .insert(NewArticle)
    .select('id')

  if (error) {
    console.log(error);
    return
  }

  if (data.length > 0) {
    return data[0].id;
  }
};
