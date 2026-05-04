"use client";

import React, { useState, useRef } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import "../globals.css";
import Image from "next/image";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const navLinks = [
  { name: "home", href: "/" },
  { name: "projects", href: "/projects" },
  { name: "about", href: "/about" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isOpen, setIsOpen] = useState(false);
  const container = useRef(null);
  const menuRef = useRef(null);
  const linksRef = useRef<HTMLAnchorElement[]>([]);

  useGSAP(
    () => {
      if (isOpen) {
        gsap.to(menuRef.current, {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power4.out",
          display: "flex",
        });
        gsap.fromTo(
          linksRef.current,
          { x: -30, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.5,
            stagger: 0.1,
            ease: "power2.out",
            delay: 0.2,
          }
        );
      } else {
        gsap.to(menuRef.current, {
          y: "-100%",
          opacity: 0,
          duration: 0.5,
          ease: "power4.in",
          display: "none",
        });
      }
    },
    { scope: container, dependencies: [isOpen] }
  );

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="bg-white text-black" ref={container}>
        <div className="fixed top-6 left-1/2 z-50 w-fit -translate-x-1/2">
          <nav className="flex items-center gap-6 rounded-full border border-black/5 bg-white/70 px-6 py-3 shadow-2xl shadow-black/5 backdrop-blur-xl">
            <Link href="/" className="text-lg font-bold tracking-tighter">
              <Image src="/mylogo.svg" alt="Logo" width={40} height={40} />
            </Link>

            <div className="hidden items-center gap-6 md:flex">
              <div className="h-4 w-px bg-black/10" />
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-xs font-medium tracking-widest text-zinc-500 uppercase transition-colors hover:text-black"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <button
              onClick={() => setIsOpen(true)}
              className="flex rounded-full p-1 transition-colors hover:bg-black/5 md:hidden"
            >
              <Menu size={20} />
            </button>
          </nav>
        </div>

        <div
          ref={menuRef}
          className="fixed inset-0 z-60 hidden -translate-y-full flex-col justify-between bg-black p-10 text-white opacity-0"
        >
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold tracking-tighter text-white">
              SUNII
            </span>
            <button onClick={() => setIsOpen(false)}>
              <X size={40} strokeWidth={1} />
            </button>
          </div>

          <nav className="flex flex-col gap-8">
            {navLinks.map((link, i) => (
              <Link
                key={link.name}
                href={link.href}
                ref={(el) => {
                  if (el) linksRef.current[i] = el;
                }}
                onClick={() => setIsOpen(false)}
                className="text-5xl font-light tracking-tight transition-all hover:italic"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <footer className="pb-6 text-sm opacity-50">
            <p>© 2026 SUNII. All rights reserved.</p>
          </footer>
        </div>

        <main className="min-h-screen w-full">{children}</main>
      </body>
    </html>
  );
}
