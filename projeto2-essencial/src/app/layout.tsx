import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const fonte = Montserrat({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Next.js Essencial",
  description: "Esquenta essencial",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={fonte.className}>{children}</body>
    </html>
  );
}
