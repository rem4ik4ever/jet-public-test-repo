import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://jet-ai.com'),
  title: "Jet — AI platform that turns PRDs into shipped code",
  description: "Jet turns PRDs into scoped tasks and spawns coding agents that write code and open PRs. Teams ship up to 90% faster with observability and control.",
  keywords: ["AI engineering", "coding agents", "PRD to code", "automation", "developer tools", "AI development"],
  authors: [{ name: "Jet Technologies" }],
  creator: "Jet Technologies",
  publisher: "Jet Technologies",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Jet — AI Engineering",
    description: "PRDs → tasks → code. Agent swarms open PRs so your team ships up to 90% faster.",
    type: "website",
    locale: "en_US",
    url: "https://jet-ai.com",
    siteName: "Jet",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "Jet — Ship 10× faster with AI Engineering",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jet — AI Engineering",
    description: "PRDs → tasks → code. Agent swarms open PRs so your team ships up to 90% faster.",
    images: ["/og.jpg"],
    creator: "@jet_ai",
  },
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-64x64.png", sizes: "64x64", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
