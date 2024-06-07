import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./main.css";
import App from "./App";
import Home from "./pages/Home";
import Articles from "./pages/Articles";
import Article from "./pages/Article";
import NewArticle from "./pages/NewArticle";
import EditArticle from "./pages/EditArticle";
import Login from "./pages/Login";
import Register from "./pages/Register";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "articles",
        element: <Articles />,
      },
      {
        path: "articles/:articleId",
        element: <Article />,
      },
      {
        path: "articles/new",
        element: <NewArticle />,
      },
      {
        path: "articles/:articleId/edit",
        element: <EditArticle />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
