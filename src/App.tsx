import { useEffect, useState, FormEvent, ChangeEvent } from "react";
import { useNavigate, useParams } from "react-router";
import { Outlet } from "react-router-dom";

import { Button } from "./components/ui/button";
import type { Articles } from "./type";
import {
  fetchArticles,
  insertArticle,
  updateArticle,
  deleteArticle,
} from "./lib/supabase";
import RootLayout from "./layouts/Root";
import Sidebar from "./components/Sidebar";

function App() {
  const [articles, setArticles] = useState<Articles>([]);
  const [title, setTitle] = useState<string>("");
  const [body, setBody] = useState<string>("");

  const { articleId } = useParams();
  const navigate = useNavigate();
  // const { pathname } = useLocation();

  const handleInputTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleInputBody = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setBody(e.target.value);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!title) {
      alert("Article title can't be empty");
      return;
    }

    if (articleId) {
      // update
      const updatedArticle = await updateArticle({
        id: articleId,
        title,
        body,
      });

      if (updatedArticle) {
        navigate(`/articles/${updatedArticle.id}`);
        const fetchedArticles = await fetchArticles();
        setArticles(fetchedArticles || []);
      }
    } else {
      // create
      const createdArticle = await insertArticle({ title, body });

      if (createdArticle) {
        navigate(`/articles/${createdArticle.id}`);
        const fetchedArticles = await fetchArticles();
        setArticles(fetchedArticles || []);
      }
    }
  };

  const handleDelete = async () => {
    if (!articleId) return;

    const statusMessage = await deleteArticle(articleId);

    if (statusMessage === "deleted") {
      navigate("/articles");
      const fetchedArticles = await fetchArticles();
      setArticles(fetchedArticles || []);
    }
  };

  useEffect(() => {
    // if (pathname === "/") navigate("/articles");

    (async () => {
      const fetchedArticles = await fetchArticles();
      setArticles(fetchedArticles || []);

      if (articleId) {
        const matched = fetchedArticles?.filter(
          (article) => article.id === Number(articleId)
        )[0];
        if (matched) {
          setTitle(matched.title);
          setBody(matched.body);
        }
      } else {
        setTitle("");
        setBody("");
      }
    })();
  }, []);

  return (
    <RootLayout>
      <meta name="keywords" content="React" />
      <meta name="description" content="A React website" />
      <Sidebar articles={articles} />
      <div>
        <Button>Click me</Button>
        <p className="text-red-500 font-bold">Hello World</p>
        <Outlet
          context={{
            articles,
            title,
            setTitle,
            body,
            setBody,
            handleInputTitle,
            handleInputBody,
            handleSubmit,
            handleDelete,
          }}
        />
      </div>
    </RootLayout>
  );
}

export default App;
