import type { Metadata } from "next";
import ProjectsPage from "./content/ProjectContent";

export const metadata: Metadata = {
  title: "Projects | Sunii - Developer",
  description:
    "Browse full-stack projects by Stijn Walravens (Sunii), including real-time applications, collaborative tools, and scalable web platforms built with Next.js, React, TypeScript, and Rust.",

  keywords: [
    "Stijn Walravens projects",
    "Sunii portfolio projects",
    "Next.js projects",
    "React applications portfolio",
    "full stack developer projects",
    "TypeScript projects",
    "Rust backend projects",
  ],

  openGraph: {
    title: "Projects – Sunii Portfolio",
    description:
      "Explore modern web applications and full-stack projects built with cutting-edge technologies.",
    url: "https://www.sunii.me/projects",
    siteName: "Sunii Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sunii Projects Portfolio",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Projects – Sunii Portfolio",
    description: "Full-stack projects built with Next.js, React, and Rust.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return <ProjectsPage />;
}
