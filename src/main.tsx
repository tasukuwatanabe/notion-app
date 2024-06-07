import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./main.css";
import App from "./App";
import Home from "./pages/Home";
import Articles from "./pages/Articles";
import Article from "./pages/Article";
import Form from "./components/Form";

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
        element: <Form />,
      },
      {
        path: "articles/:articleId/edit",
        element: <Form />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
