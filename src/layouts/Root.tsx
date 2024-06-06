import { ReactNode } from "react";
import { Helmet } from "react-helmet";

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <div className="h-full bg-red-300">
      <Helmet>
        <meta name="robots" content="noindex" />
        <title>Notion App</title>
      </Helmet>
      {children}
    </div>
  );
}
