import type { Metadata } from "next";
import "./globals.css";
import { maison, trumpGothic } from "./fonts/font";



export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${maison.variable} ${trumpGothic.variable} `}>{children}</body>
    </html>
  );
}
