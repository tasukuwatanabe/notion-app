import { ReactNode } from "react";
import { Helmet } from "react-helmet";

import Navbar from "@/components/Navbar";

type MainLayoutProps = {
  children: ReactNode;
};

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="h-full">
      <Helmet>
        <meta name="keywords" content="React" />
        <meta name="description" content="A React website" />
        <meta name="robots" content="noindex" />
        <title>Notion App</title>
      </Helmet>
      <Navbar />
      {children}
    </div>
  );
}
