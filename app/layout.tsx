import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DataRadix - Engineering scalable, data-driven, cloud-native solutions",
  description: "IT Solutions & Technology Services for modern enterprises. Custom software development, data engineering, cloud & DevOps, AI & automation.",
  keywords: ["IT solutions", "data engineering", "cloud services", "software development", "DevOps"],
  icons: {
    icon: "favicon-dataradix.ico",
    shortcut: "favicon-dataradix.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}


