import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Engineering Leadership Blog",
    template: "%s | Engineering Leadership Blog",
  },
  description: "Insights on engineering leadership, modern DevOps practices, and human-centered team building. Building better teams, one post at a time.",
  keywords: ["engineering leadership", "devops", "team building", "software engineering", "management"],
  authors: [{ name: "Vishal Kumar" }],
  creator: "Vishal Kumar",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://vk-blog.vercel.app",
    title: "Engineering Leadership Blog",
    description: "Insights on engineering leadership, modern DevOps practices, and human-centered team building.",
    siteName: "Engineering Leadership Blog",
  },
  twitter: {
    card: "summary_large_image",
    title: "Engineering Leadership Blog",
    description: "Insights on engineering leadership, modern DevOps practices, and human-centered team building.",
    creator: "@vishalkumar",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-white text-gray-900 antialiased">
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
