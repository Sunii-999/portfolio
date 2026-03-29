import type { Metadata } from "next";
import { Google_Sans, Google_Sans_Code, Roboto_Condensed} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/main/Navbar/Navbar";
import "@/config/colors.css";
import "@/config/fonts.css";

const googleFont = Google_Sans({
  variable: "--font-google-sans",
  subsets: ["latin"],
});

const googleCodeFont = Google_Sans_Code({
  variable: "--font-google-code",
  subsets: ["latin"],
});

const robotCondensed = Roboto_Condensed({
  variable: "--font-roboto",
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
<html lang="en" className={`${googleFont.variable} ${googleCodeFont.variable} ${robotCondensed.variable}`}>   
  <body>
          <Navbar/>
        <main>
        {children}
        </main>
      </body>
    </html>
  );
}
