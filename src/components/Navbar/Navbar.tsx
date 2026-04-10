"use client";

import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <div className="fixed top-6 left-1/2 z-50 -translate-x-1/2">
      <nav className="flex items-center gap-6 rounded-full border border-white/20 bg-white/10 px-6 py-3 backdrop-blur-xl shadow-xl">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/mylogo.svg"
            alt="Logo"
            width={28}
            height={28}
          />
        </Link>

        {/* Divider (optional) */}
        <div className="h-5 w-px bg-white/20" />

        {/* Nav Items */}
        <Link href="/" className="text-sm text-zinc-950 hover:text-zinc transition">
          Home
        </Link>

        <Link href="/projects" className="text-sm text-zinc-950 hover:text-zinc transition">
          Projects
        </Link>

        <Link href="/about" className="text-sm text-zinc-950 hover:text-zinc transition">
          About
        </Link>

      </nav>
    </div>
  );
}