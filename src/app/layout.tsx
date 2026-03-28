import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/main/Navbar/Navbar";
import "@/config/colors.css";
import "@/config/fonts.css";
import { Icon } from "@/components/Icon/Icon";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sunii | portfolio",
  description: "Portfolio of Sunii, a software engineer and designer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
          <Icon name="logo" width="48px" height="48px"/>
          <Navbar/>
        <main>
        {children}
        </main>
      </body>
    </html>
  );
}
