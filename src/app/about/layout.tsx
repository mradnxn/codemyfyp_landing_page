import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - CodeMyFYP | Build. Learn. Launch.",
  description:
    "Learn about CodeMyFYP — a Bengaluru-based technology ecosystem delivering software development, AI solutions, academic projects, internships, and career programs.",
  openGraph: {
    title: "About Us - CodeMyFYP",
    description:
      "Building the future of technology and education. Meet the team behind CodeMyFYP.",
    siteName: "CodeMyFYP",
    type: "website",
    locale: "en_US",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
