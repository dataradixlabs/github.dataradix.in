import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "DataRadix — Engineering teams that build infrastructure at scale",
    template: "%s — DataRadix",
  },
  description:
    "Senior engineering teams embedded in your product. Custom software, data engineering, cloud & DevOps, AI automation. Built to scale.",
  keywords: [
    "data engineering",
    "cloud infrastructure",
    "custom software development",
    "DevOps",
    "backend engineering",
    "AI automation",
    "scalable systems",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "DataRadix",
    title: "DataRadix — Engineering teams that build infrastructure at scale",
    description:
      "Senior engineering teams embedded in your product. Custom software, data engineering, cloud & DevOps, AI automation. Built to scale.",
  },
  icons: {
    icon: "/favicon_io/favicon.ico",
    shortcut: "/favicon_io/favicon-16x16.png",
    apple: "/favicon_io/apple-touch-icon.png",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={`${inter.className} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}


