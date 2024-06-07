import { ReactNode } from "react";
import { useOutletContext } from "react-router-dom";
import { Helmet } from "react-helmet";

import type { Articles } from '../../type'
import Sidebar from "@/components/Sidebar";

type MainLayoutProps = {
  children: ReactNode;
};

type ArticlesContext = {
  articles: Articles;
};

export default function MainLayout({ children }: MainLayoutProps) {
  const { articles } = useOutletContext<ArticlesContext>();

  return (
    <div className="h-full bg-red-300">
      <Helmet>
        <meta name="keywords" content="React" />
        <meta name="description" content="A React website" />
        <meta name="robots" content="noindex" />
        <title>Notion App</title>
      </Helmet>
      <div>
        <Sidebar articles={articles} />
        {children}
      </div>
    </div>
  );
}
