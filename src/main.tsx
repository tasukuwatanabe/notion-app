import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.tsx';
import Articles from './components/Articles.tsx';

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: '/articles',
        element: <Articles />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
