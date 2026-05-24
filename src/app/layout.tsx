import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ia1construction.com"),
  title: "IA1 Construction | Quality Home Builds & Renovations — Serving the Triad, NC",
  description:
    "IA1 Construction delivers quality home builds, custom projects, new construction, and renovations across the Triad and surrounding areas of North Carolina. Licensed, bonded & insured. Get a free estimate today.",
  keywords: [
    "home builder Triad NC",
    "general contractor Winston-Salem",
    "quality home builds",
    "renovation Greensboro",
    "custom projects High Point",
    "residential construction North Carolina",
  ],
  openGraph: {
    title: "IA1 Construction | Quality Home Builds & Renovations",
    description:
      "Quality home builds, renovations, and custom projects across the Triad. Get your free estimate.",
    type: "website",
    locale: "en_US",
    siteName: "IA1 Construction",
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
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}>
      <body className="flex min-h-screen flex-col overflow-x-hidden">{children}</body>
      <GoogleAnalytics gaId="G-X9HTDVX2TP" />
    </html>
  );
}
