import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Appbar from "@/components/Appbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Le Balance",
  description: "Check your solana account's balance with your publickey",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Appbar />
        {children}
      </body>
    </html>
  );
}
