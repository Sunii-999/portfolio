// app/layout.tsx

import type { Metadata } from "next";
import "./globals.css";
import ClientLayout from "./clientLayout/ClientLayout";

export const metadata: Metadata = {
  title: {
    default: "Sunii – Developer Portfolio",
    template: "%s | Sunii",
  },
  description:
    "Stijn Walravens (Sunii) is a Full-Stack Developer based in Belgium specializing in Next.js, React, TypeScript, and Rust. Building high-performance web applications and scalable software.",

  keywords: [
    "Stijn Walravens",
    "Sunii",
    "Full Stack Developer Belgium",
    "Next.js developer",
    "React developer",
    "TypeScript developer",
    "Rust backend developer",
    "software engineer Belgium",
    "web developer portfolio",
  ],

  authors: [{ name: "Stijn Walravens" }],
  creator: "Sunii",

  openGraph: {
    title: "Stijn Walravens – Full-Stack Developer",
    description:
      "Portfolio of Stijn Walravens (Sunii), building modern web applications with Next.js, React, and Rust.",
    url: "https://www.sunii.me",
    siteName: "Sunii Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sunii Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Stijn Walravens – Full-Stack Developer",
    description:
      "Full-stack developer specializing in Next.js, React, TypeScript, and Rust.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ClientLayout>{children}</ClientLayout>;
}
