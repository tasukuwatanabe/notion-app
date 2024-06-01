import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Articles from './components/Articles';
import Article from './components/Article';
import Form from './components/Form';

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: 'articles',
        element: <Articles />,
      },
      {
        path: 'articles/:id',
        element: <Article />,
      },
      {
        path: 'articles/new',
        element: <Form />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
