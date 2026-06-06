import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy - CodeMyFYP",
  description:
    "Read the Cookie Policy for CodeMyFYP to understand how we use cookies and tracking technologies.",
  openGraph: {
    title: "Cookie Policy - CodeMyFYP",
    description:
      "Cookie Policy explaining our use of cookies and how you can manage your preferences.",
    siteName: "CodeMyFYP",
    type: "website",
  },
};

export default function CookiePolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
