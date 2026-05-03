"use client";

import React, { useRef, use } from "react"; // Added use
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects"; // Verified path
import { ArrowLeft, Globe } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

interface Props {
  params: Promise<{ slug: string }>; // Types for Next.js 15
}

export default function ProjectDetailPage({ params }: Props) {
  // Unwrapping the params safely
  const resolvedParams = use(params);
  const project = projects.find((p) => p.slug === resolvedParams.slug);

  const containerRef = useRef(null);
  const imageRef = useRef(null);

  if (!project) {
    notFound();
  }

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      tl.fromTo(
        ".hero-image-wrap",
        { clipPath: "inset(100% 0% 0% 0%)", scale: 1.1 },
        { clipPath: "inset(0% 0% 0% 0%)", scale: 1, duration: 1.4 }
      ).fromTo(
        ".reveal-up",
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.1 },
        "-=0.6"
      );
    },
    { scope: containerRef }
  );

  return (
    <article ref={containerRef} className="min-h-screen bg-white pb-32">
      {/* Back Button */}
      <div className="fixed top-32 left-6 z-40 md:left-12">
        <Link
          href="/projects"
          className="group flex items-center gap-2 text-[10px] tracking-widest text-zinc-400 uppercase transition-colors hover:text-black"
        >
          <ArrowLeft
            size={14}
            className="transition-transform group-hover:-translate-x-1"
          />
          Back to Works
        </Link>
      </div>

      {/* --- HERO SECTION --- */}
      <section className="px-6 pt-48 md:px-12">
        <div className="mx-auto max-w-screen-2xl">
          <div className="mb-16 grid grid-cols-1 items-end gap-12 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <span className="reveal-up mb-4 block text-[10px] tracking-[0.3em] text-zinc-400 uppercase">
                {project.category} / {project.completionDate}
              </span>
              <h1 className="reveal-up text-5xl leading-[0.85] font-bold tracking-tighter uppercase md:text-7xl lg:text-9xl">
                {project.title.split("|")[0]}
              </h1>
            </div>

            <div className="pb-4 lg:col-span-4">
              <p className="reveal-up text-xl leading-relaxed font-light text-zinc-500 italic">
                {project.description}
              </p>
            </div>
          </div>

          {/* Mask Animated Hero Image */}
          <div className="hero-image-wrap relative aspect-video w-full overflow-hidden rounded-sm grayscale transition-all duration-1000 hover:grayscale-0">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* --- DETAILS SECTION --- */}
      <section className="mt-24 px-6 md:px-12">
        <div className="mx-auto grid max-w-screen-2xl grid-cols-1 gap-16 lg:grid-cols-12">
          {/* Sidebar Meta */}
          <aside className="space-y-12 lg:col-span-4">
            <div>
              <h4 className="mb-6 text-[10px] font-bold tracking-widest text-zinc-400 uppercase">
                Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-zinc-100 bg-zinc-50 px-3 py-1 text-[10px] tracking-tight text-zinc-600 uppercase"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="mb-6 text-[10px] font-bold tracking-widest text-zinc-400 uppercase">
                Project Links
              </h4>
              <div className="flex flex-col gap-4">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    className="flex items-center gap-3 text-sm hover:underline"
                  >
                    <Globe size={18} strokeWidth={1.5} /> Live Preview
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    className="flex items-center gap-3 text-sm hover:underline"
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                    Source Code
                  </a>
                )}
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <div className="prose prose-zinc max-w-none lg:col-span-8">
            <h4 className="mb-6 text-[10px] font-bold tracking-widest text-zinc-400 uppercase">
              Overview
            </h4>
            <p className="text-lg leading-loose font-light text-zinc-600">
              {project.readme
                ? `Content from ${project.readme}`
                : "Case study and technical documentation currently in progress."}
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}
