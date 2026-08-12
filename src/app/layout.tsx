import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components";
import { GithubContext } from "@/context";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  title: "Мой блог",
  description: "Учебный проект - мой блог",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <GithubContext value={process.env.NEXT_PUBLIC_GITHUB_URL ?? ""}>
      <html lang="ru" className={`${openSans.variable}`}>
        <body>
          <Header />
          {children}
        </body>
      </html>
    </GithubContext>
  );
}
