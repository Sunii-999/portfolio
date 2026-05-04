import type { Metadata } from "next";
import AboutPage from "./content/AboutContent";

export const metadata: Metadata = {
  title: "About | Sunii - Developer",
  description:
    "Learn more about Stijn Walravens (Sunii), a Full-Stack Developer based in Belgium specializing in Next.js, React (& Native), TypeScript, and Rust. Experience building high-performance, scalable applications.",

  keywords: [
    "Stijn Walravens",
    "Sunii developer",
    "Full Stack Developer Belgium",
    "Next.js developer Belgium",
    "React developer portfolio",
    "Rust backend developer",
    "software engineer Belgium",
  ],

  openGraph: {
    title: "About Stijn Walravens – Full-Stack Developer",
    description:
      "Explore the experience, education, and technical expertise of Stijn Walravens (Sunii), a full-stack developer building modern web applications.",
    url: "https://www.sunii.me/about",
    siteName: "Sunii Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Stijn Walravens Portfolio",
      },
    ],
    locale: "en_US",
    type: "profile",
  },

  twitter: {
    card: "summary_large_image",
    title: "About Stijn Walravens – Full-Stack Developer",
    description:
      "Full-stack developer specializing in Next.js, React, TypeScript, and Rust.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return <AboutPage />;
}
