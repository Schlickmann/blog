/* eslint-disable @next/next/no-page-custom-font */
import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Blog 🤖",
  description: "A blog to vent my issues and share my solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <img src="/Cover.svg" alt="" className="cover" />
        {children}
      </body>
    </html>
  );
}
