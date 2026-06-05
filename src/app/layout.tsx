import type { Metadata } from "next";
import "./globals.css";
import "@fontsource/sora/600.css";
import "@fontsource/sora/700.css";

export const metadata: Metadata = {
  title: "CodeMyFYP | Build. Learn. Launch.",
  description:
    "CodeMyFYP is a unified ecosystem delivering software development, AI-powered solutions, academic innovation, internships, and career-focused programs.",

  keywords: [
    "CodeMyFYP",
    "IT Services",
    "Academic Projects",
    "Internships",
    "AI Solutions",
    "Web Development",
    "Software Development",
    "Digital Marketing",
    "Career Development",
  ],

  authors: [
    {
      name: "CodeMyFYP",
    },
  ],

  openGraph: {
    title: "CodeMyFYP",
    description:
      "Build. Learn. Launch. One ecosystem for technology, education, and innovation.",
    siteName: "CodeMyFYP",
    type: "website",
    locale: "en_US",
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
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}