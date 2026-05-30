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
  title: "Full Stack Developer Projects Portfolio Dashboard",
  description:
    "A futuristic full-stack developer portfolio dashboard showcasing projects, skills, analytics, demos, and deployment links.",
  keywords: [
    "Full Stack Developer",
    "Projects Portfolio",
    "Developer Dashboard",
    "SaaS Dashboard",
    "E-Commerce Website",
    "AI Resume Analyzer",
    "Next.js Portfolio",
  ],
  authors: [{ name: "Ramsha Jawaid" }],
  openGraph: {
    title: "Full Stack Developer Projects Portfolio Dashboard",
    description:
      "Recruiter-ready dashboard for full-stack projects, AI integrations, skills, and deployments.",
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
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
