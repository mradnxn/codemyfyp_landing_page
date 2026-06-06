import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Refund Policy - CodeMyFYP",
  description:
    "Read the Refund & Cancellation Policy for CodeMyFYP services.",
  openGraph: {
    title: "Refund Policy - CodeMyFYP",
    description:
      "Refund & Cancellation Policy explaining conditions for refunds across our offerings.",
    siteName: "CodeMyFYP",
    type: "website",
  },
};

export default function RefundLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
