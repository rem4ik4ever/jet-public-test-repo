import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jetBrainsMono = JetBrains_Mono({
  weight: ['400', '500', '700'],
  style: ['normal'],
  subsets: ["latin"],
  display: 'swap',
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "Jet — AI platform that turns PRDs into shipped code",
  description: "Jet turns PRDs into scoped tasks and spawns coding agents that write code and open PRs. Teams ship up to 90% faster with observability and control.",
  openGraph: {
    title: "Jet — AI Engineering",
    description: "PRDs → tasks → code. Agent swarms open PRs so your team ships up to 90% faster.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin=""/>
        <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700&display=swap" rel="stylesheet"/>
      </head>
      <body
        className={`${jetBrainsMono.variable} antialiased bg-bg text-text min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}