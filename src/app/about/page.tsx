"use client";

import React, { useRef } from "react";
import { profile } from "@/data/profile";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AboutPage() {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".reveal-item",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    },
    { scope: containerRef }
  );
  return (
    <main
      ref={containerRef}
      className="min-h-screen bg-white px-6 pt-48 pb-32 md:px-12"
    >
      <div className="mx-auto max-w-screen-2xl">
        <section className="mb-32 grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <p className="reveal-item mb-6 text-[10px] tracking-[0.3em] text-zinc-400 uppercase">
              About the developer
            </p>
            <h1 className="reveal-item text-6xl leading-[0.85] font-bold tracking-tighter uppercase md:text-8xl lg:text-[10rem]">
              {profile.name.split(" ")[0]}
              <br />
              <span className="text-zinc-200">
                {profile.name.split(" ")[1]}
              </span>
            </h1>
          </div>
          <div className="lg:col-span-4 lg:pt-24">
            <p className="reveal-item text-2xl leading-relaxed font-light text-zinc-500 italic">
              — A {profile.role} focusing on high-performance applications and
              intuitive digital design. Currently pushing boundaries at{" "}
              {profile.experience[0].company}.
            </p>
          </div>
        </section>

        {/* --- EXPERIENCE & EDUCATION GRID --- */}
        <section className="grid grid-cols-1 gap-16 border-t border-zinc-100 pt-20 lg:grid-cols-12">
          {/* Left: Experience */}
          <div className="space-y-20 lg:col-span-7">
            <div>
              <h2 className="reveal-item mb-12 text-[10px] font-bold tracking-[0.3em] text-black uppercase">
                Experience
              </h2>
              <div className="space-y-16">
                {profile.experience.map((exp, i) => (
                  <div key={i} className="reveal-item group">
                    <div className="mb-4 flex flex-col justify-between gap-4 md:flex-row md:items-start">
                      <div>
                        <h3 className="text-2xl font-bold tracking-tight">
                          {exp.company}
                        </h3>
                        <p className="text-sm tracking-widest text-zinc-400 uppercase">
                          {exp.position}
                        </p>
                      </div>
                      <span className="rounded-full border border-zinc-100 px-3 py-1 text-[10px] font-medium whitespace-nowrap text-zinc-300">
                        {exp.period}
                      </span>
                    </div>
                    <p className="max-w-2xl leading-relaxed font-light text-zinc-500">
                      {exp.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Education & Languages */}
          <div className="space-y-20 lg:col-span-4 lg:col-start-9">
            {/* Education */}
            <div>
              <h2 className="reveal-item mb-12 text-[10px] font-bold tracking-[0.3em] text-black uppercase">
                Education
              </h2>
              <div className="space-y-8">
                {profile.education.map((edu, i) => (
                  <div key={i} className="reveal-item">
                    <p className="mb-1 text-[10px] text-zinc-300">{edu.year}</p>
                    <h3 className="text-lg leading-tight font-bold tracking-tight">
                      {edu.institution}
                    </h3>
                    <p className="text-sm font-light text-zinc-500 italic">
                      {edu.field}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div>
              <h2 className="reveal-item mb-12 text-[10px] font-bold tracking-[0.3em] text-black uppercase">
                Languages
              </h2>
              <div className="grid grid-cols-2 gap-y-6">
                {profile.languages.map((lang, i) => (
                  <div key={i} className="reveal-item">
                    <p className="text-[10px] tracking-widest text-zinc-400 uppercase">
                      {lang.language}
                    </p>
                    <p className="text-lg font-light">{lang.level}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Details */}
            <div className="border-t border-zinc-50 pt-12">
              <h2 className="reveal-item mb-8 text-[10px] font-bold tracking-[0.3em] text-black uppercase">
                Le&apos;s Connect
              </h2>
              <div className="space-y-3 text-sm">
                <p className="reveal-item flex justify-between">
                  <span className="text-zinc-400">Email</span>
                  <a
                    href={`mailto:${profile.contacts.email}`}
                    className="hover:underline"
                  >
                    {profile.contacts.email}
                  </a>
                </p>
                <p className="reveal-item flex justify-between">
                  <span className="text-zinc-400">Github</span>
                  <a href={profile.contacts.github} className="hover:underline">
                    @sunii-999
                  </a>
                </p>
                <p className="reveal-item flex justify-between">
                  <span className="text-zinc-400">Phone</span>
                  <span>{profile.contacts.phone}</span>
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
