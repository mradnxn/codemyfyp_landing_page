import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Condition - CodeMyFYP",
  description:
    "Read the Terms and Conditions for using CodeMyFYP services including software development, academic projects, internships, and AI solutions.",
  openGraph: {
    title: "Terms and Condition - CodeMyFYP",
    description:
      "Terms and Conditions governing the use of CodeMyFYP IT & Software Solutions services.",
    siteName: "CodeMyFYP",
    type: "website",
  },
};

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
