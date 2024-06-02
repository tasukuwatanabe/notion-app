import supabase from '../lib/supabase';


type Article = {
  id?: string;
  title: string;
  body: string;
};

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

export const insertArticle = async (newArticle: Article) => {
  const { data, error } = await supabase
    .from('articles')
    .insert(newArticle)
    .select();

  if (error) {
    console.log(error);
    return;
  }

  return data[0];
};

export const updateArticle = async ({ id, title, body}: Article) => {
  const { data, error } = await supabase
    .from('articles')
    .update({ title, body })
    .eq('id', id)
    .select();

  if (error) {
    console.log(error);
    return;
  }

  return data[0];
};

export const deleteArticle = async (id: string) => {
  const { error } = await supabase.from('articles').delete().match({ id })

  if (error) {
    console.log(error)
    return;
  }

  return 'deleted';
}