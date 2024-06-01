import supabase from '../lib/supabase';

export const getArticles = async () => {
  const { data, error } = await supabase.from('articles').select();

  if (error) {
    console.log(error)
    return []
  } else {
    return data
  }
}