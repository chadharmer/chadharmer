import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://chadharmer.com"),
  title: {
    default: "Chad Harmer — Product Leader, Founder, Builder",
    template: "%s · Chad Harmer",
  },
  description:
    "Chad Harmer builds products and systems — AI workflows, marketplaces, and recruiting technology. Enterprise product leadership meets founder execution.",
  keywords: [
    "Chad Harmer",
    "Product Leader",
    "Founder",
    "AI workflows",
    "Marketplaces",
    "Recruiting technology",
    "Product strategy",
    "Systems design",
  ],
  authors: [{ name: "Chad Harmer" }],
  openGraph: {
    title: "Chad Harmer — Product Leader, Founder, Builder",
    description:
      "Enterprise product leadership meets founder execution. AI workflows, marketplaces, and systems that compound.",
    url: "https://chadharmer.com",
    siteName: "Chad Harmer",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chad Harmer — Product Leader, Founder, Builder",
    description:
      "Enterprise product leadership meets founder execution. AI workflows, marketplaces, and systems that compound.",
  },
};

export const viewport: Viewport = {
  themeColor: "#08090b",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
