import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Manish Kumar | Full-Stack Developer",
  description:
    "Full-Stack Developer specializing in NestJS, Next.js, and MongoDB. Building scalable healthcare software at Vitasoft Technologies.",
  keywords: [
    "Manish Kumar",
    "Full-Stack Developer",
    "NestJS",
    "Next.js",
    "MongoDB",
    "Healthcare Software",
  ],
  authors: [{ name: "Manish Kumar" }],
  openGraph: {
    title: "Manish Kumar | Full-Stack Developer",
    description:
      "Full-Stack Developer specializing in NestJS, Next.js, and MongoDB.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
