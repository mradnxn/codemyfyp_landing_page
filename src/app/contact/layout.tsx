import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - CodeMyFYP",
  description:
    "Get in touch with CodeMyFYP IT & Software Solutions. We'd love to hear from you and build something amazing together.",
  openGraph: {
    title: "Contact Us - CodeMyFYP",
    description:
      "Contact CodeMyFYP for software development, IT consulting, academic projects, and AI solutions.",
    siteName: "CodeMyFYP",
    type: "website",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
