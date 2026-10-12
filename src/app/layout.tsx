import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const title = "Chad Harmer — AI & Platform Product Leader";
const description =
  "Product leader with 15+ years of enterprise product, platform and process work and hands-on experience designing, building and operating production AI products.";

export const metadata: Metadata = {
  metadataBase: new URL("https://chadharmer.com"),
  title: {
    default: title,
    template: "%s · Chad Harmer",
  },
  description,
  keywords: [
    "Chad Harmer",
    "AI Product Manager",
    "Platform Product Manager",
    "Principal Product Manager",
    "Product leadership",
    "RAG and retrieval",
    "AI evaluation",
    "Human-in-the-loop",
  ],
  authors: [{ name: "Chad Harmer" }],
  openGraph: {
    title,
    description,
    url: "https://chadharmer.com",
    siteName: "Chad Harmer",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
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
      <body className="min-h-full flex flex-col">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
