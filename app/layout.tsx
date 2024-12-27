import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Pesanmudah.id",
  description: "Pesanmudah.id",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
