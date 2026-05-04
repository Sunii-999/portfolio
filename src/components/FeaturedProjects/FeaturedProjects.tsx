"use client";

import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { projects } from "@/data/projects"; // Adjust path as needed
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function FeaturedProjects() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  // Filter only featured projects
  const featuredProjects = projects.filter((p) => p.featured);

  useGSAP(
    () => {
      const pin = gsap.fromTo(
        sectionRef.current,
        { x: 0 },
        {
          x: () => -(sectionRef.current!.scrollWidth - window.innerWidth),
          ease: "none",
          scrollTrigger: {
            trigger: triggerRef.current,
            pin: true,
            scrub: 1,
            // Makes the scroll length proportional to the amount of content
            end: () => `+=${sectionRef.current!.scrollWidth}`,
            invalidateOnRefresh: true,
          },
        }
      );

      return () => {
        pin.kill();
      };
    },
    { scope: triggerRef }
  );

  return (
    <section className="overflow-hidden bg-[#0a0a0a] text-white">
      <div ref={triggerRef}>
        {/* Header Section */}
        <div className="flex items-end justify-between px-10 pt-32 pb-10">
          <div>
            <p className="mb-2 text-sm tracking-[0.2em] text-gray-500 uppercase">
              Selected Works
            </p>
            <h2 className="text-6xl font-bold tracking-tighter uppercase md:text-8xl">
              Featured
              <br />
              Projects
            </h2>
          </div>
          <div className="hidden max-w-xs pb-4 text-right text-gray-400 md:block">
            <p>
              An archive of my personal work. (professional projects are not
              shown here)
            </p>
          </div>
        </div>

        <div
          ref={sectionRef}
          className="flex h-[70vh] flex-nowrap items-center gap-10 px-10 pb-20"
        >
          {featuredProjects.map((project) => (
            <Link
              key={project.id}
              href={`/projects/${project.slug}`}
              className="group relative h-full w-[80vw] shrink-0 overflow-hidden rounded-sm bg-zinc-900 md:w-[45vw] lg:w-[35vw]"
            >
              <div className="relative h-full w-full scale-105 grayscale transition-all duration-700 ease-in-out group-hover:scale-100 group-hover:grayscale-0">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover opacity-80 transition-opacity group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-60" />
              </div>

              <div className="absolute bottom-0 left-0 w-full p-8">
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="border border-white/20 bg-black/30 px-2 py-1 text-[10px] tracking-widest uppercase backdrop-blur-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <h3 className="mb-2 text-3xl font-bold tracking-tight transition-transform duration-300 group-hover:translate-x-2">
                  {project.title}
                </h3>
                <p className="line-clamp-2 max-w-md text-sm font-light text-gray-300">
                  {project.description}
                </p>
              </div>
            </Link>
          ))}

          {/* "View All" Card at the end */}
          <div className="flex h-full w-[30vw] shrink-0 flex-col items-center justify-center border border-dashed border-zinc-700 transition-colors hover:border-white md:w-[20vw]">
            <Link
              href="/projects"
              className="text-xl font-medium tracking-widest uppercase underline-offset-8 hover:underline"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
