"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { profile } from "@/data/profile";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Header() {
  const [time, setTime] = useState("");
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const formatted = new Intl.DateTimeFormat("en-GB", {
        timeZone: "Europe/Brussels",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      }).format(now);
      setTime(formatted);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      // Apple-style entrance: Fade + slight slide up
      tl.fromTo(
        ".reveal-text",
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, stagger: 0.1 }
      )
        // Smooth image expansion
        .fromTo(
          imageRef.current,
          { scale: 1.1, opacity: 0 },
          { scale: 1, opacity: 1, duration: 1.5 },
          "-=0.8"
        )
        // Vertical lines reveal
        .fromTo(
          ".divider-line",
          { scaleY: 0 },
          { scaleY: 1, duration: 1, transformOrigin: "top" },
          "-=1"
        );
    },
    { scope: containerRef }
  );

  return (
    <header
      ref={containerRef}
      className="relative min-h-screen overflow-hidden bg-white px-6 md:px-12"
    >
      {/* Top Navigation Strip */}
      <div className="flex justify-between py-8 text-[10px] font-medium tracking-[0.2em] text-zinc-400 uppercase">
        <div className="flex items-center gap-4">
          <span className="text-black">©2026</span>
          <div className="divider-line h-4 w-px bg-zinc-200" />
          <span>Available for projects</span>
        </div>
        <div className="flex items-center gap-4">
          <span>{time} Brussels</span>
          <div className="divider-line h-4 w-px bg-zinc-200" />
          <span>Belgium</span>
        </div>
      </div>

      <div className="grid min-h-[80vh] grid-cols-1 items-center gap-12 lg:grid-cols-12">
        {/* Left Side: Typography */}
        <div className="relative z-10 lg:col-span-7">
          <div className="flex items-start gap-12">
            {/* Side Detail (Vertical Text) */}
            <div className="hidden flex-col items-center gap-8 py-4 md:flex">
              <span className="rotate-180 text-[10px] tracking-widest text-zinc-400 uppercase [writing-mode:vertical-lr]">
                {profile.role}
              </span>
              <div className="divider-line h-24 w-px bg-zinc-100" />
              <span className="rotate-180 text-[10px] tracking-widest text-zinc-400 [writing-mode:vertical-lr]">
                2026
              </span>
            </div>

            <div ref={textRef} className="space-y-6">
              <div className="mb-12 flex gap-12">
                <div>
                  <p className="reveal-text text-3xl font-light tracking-tight">
                    +10
                  </p>
                  <p className="reveal-text text-[9px] tracking-widest text-zinc-400 uppercase">
                    Projects Done
                  </p>
                </div>
                <div>
                  <p className="reveal-text text-3xl font-light tracking-tight">
                    1+
                  </p>
                  <p className="reveal-text text-[9px] tracking-widest text-zinc-400 uppercase">
                    Years Experience
                  </p>
                </div>
              </div>

              <h1 className="reveal-text text-8xl leading-[0.85] font-bold tracking-tighter text-black md:text-[10rem]">
                Sunii<span className="text-zinc-200">.</span>
              </h1>
              <p className="reveal-text max-w-md text-xl leading-relaxed font-light text-zinc-500 italic md:text-2xl">
                — {profile.name}, a {profile.role.toLowerCase()} based in
                Belgium.
              </p>

              <div className="reveal-text flex gap-4 pt-6 text-[10px] tracking-[0.2em] text-zinc-400 uppercase">
                <a
                  href={profile.contacts.github}
                  className="transition-colors hover:text-black"
                >
                  Github
                </a>
                <span>/</span>
                <a
                  href={profile.contacts.medium}
                  className="transition-colors hover:text-black"
                >
                  Medium
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="relative h-[60vh] w-full lg:col-span-5 lg:h-[85vh]">
          <div className="relative h-full w-full overflow-hidden rounded-sm grayscale transition-all duration-1000 hover:grayscale-0">
            <Image
              ref={imageRef}
              src="/img/Hirono.png"
              alt={profile.alias}
              fill
              className="object-cover object-top"
              priority
            />
            <div className="absolute inset-0 bg-linear-to-r from-white via-transparent to-transparent opacity-20" />
          </div>

          <div className="absolute right-0 -bottom-8 flex items-center gap-4 text-[10px] tracking-widest text-zinc-400 uppercase">
            <span>Scroll Down</span>
            <div className="h-px w-12 bg-zinc-200" />
          </div>
        </div>
      </div>

      <div className="h-32" />
    </header>
  );
}
