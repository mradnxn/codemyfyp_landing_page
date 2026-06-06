import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - CodeMyFYP",
  description:
    "Read the Privacy Policy for CodeMyFYP IT & Software Solutions. Learn how we collect, use, and protect your data.",
  openGraph: {
    title: "Privacy Policy - CodeMyFYP",
    description:
      "Privacy Policy explaining our data collection, GDPR, and DPDP compliance.",
    siteName: "CodeMyFYP",
    type: "website",
  },
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
