import type { Metadata } from "next";
import '../styles/globals.css'
import { Header } from "@/components/header/Header";

export const metadata: Metadata = {
  title: "Minhas Tarefas",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
