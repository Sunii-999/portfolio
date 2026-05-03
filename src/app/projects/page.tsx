"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { projects, projectCategories, ProjectCategory } from "@/data/projects";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function ProjectsPage() {
  const [filter, setFilter] = useState<ProjectCategory>("All");
  const containerRef = useRef(null);

  const filteredProjects = projects.filter((project) =>
    filter === "All" ? true : project.category === filter
  );

  useGSAP(
    () => {
      gsap.fromTo(
        ".project-card",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: "power2.out" }
      );
    },
    { scope: containerRef, dependencies: [filter] }
  );

  return (
    <main
      ref={containerRef}
      className="min-h-screen bg-white px-6 pt-32 pb-20 md:px-12"
    >
      <header className="mb-20">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="mb-4 text-[10px] tracking-[0.3em] text-zinc-400 uppercase">
              Archive 2023 — 2026
            </p>
            <h1 className="text-7xl font-bold tracking-tighter uppercase md:text-9xl">
              Works<span className="text-zinc-200">.</span>
            </h1>
          </div>

          <nav className="flex flex-wrap gap-2 md:gap-4">
            {projectCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`rounded-full border px-4 py-1.5 text-[10px] tracking-widest uppercase transition-all ${
                  filter === cat
                    ? "border-black bg-black text-white"
                    : "border-zinc-100 bg-transparent text-zinc-400 hover:border-zinc-300"
                }`}
              >
                {cat}
              </button>
            ))}
          </nav>
        </div>
        <div className="mt-8 h-px w-full bg-zinc-100" />
      </header>

      <div className="grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((project) => (
          <Link
            key={project.id}
            href={`/projects/${project.slug}`}
            className="project-card group block"
          >
            <div className="relative mb-6 aspect-16/10 w-full overflow-hidden rounded-sm bg-zinc-50">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[9px] font-medium tracking-[0.2em] text-zinc-400 uppercase">
                  {project.category}
                </span>
                <span className="text-[9px] text-zinc-300">
                  {project.completionDate}
                </span>
              </div>

              <h2 className="text-xl font-bold tracking-tight decoration-1 underline-offset-4 group-hover:underline">
                {project.title}
              </h2>

              <p className="line-clamp-2 text-sm leading-relaxed font-light text-zinc-500">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                {project.technologies.slice(0, 3).map((tech) => (
                  <span
                    key={tech}
                    className="rounded-sm border border-zinc-100 px-2 py-0.5 text-[9px] text-zinc-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="py-40 text-center">
          <p className="font-light text-zinc-400 italic">
            No projects found in this category.
          </p>
        </div>
      )}
    </main>
  );
}
