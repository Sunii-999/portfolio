"use client";

import React, { useRef } from "react";
import { references } from "@/data/references";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function References() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

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
            end: () =>
              `+=${sectionRef.current!.scrollWidth - window.innerWidth}`,
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
    <section className="overflow-hidden bg-white mb-10">
      <div ref={triggerRef}>
        <div className="px-10 pt-20">
          <h1 className="mb-10 text-4xl font-bold tracking-tighter uppercase">
            Kind words
          </h1>
        </div>

        <div
          ref={sectionRef}
          className="flex h-[40vh] flex-nowrap gap-10 px-10"
        >
          {references.map((ref) => (
            <div
              key={ref.id}
              className="flex min-w-100 flex-col justify-between border-l border-gray-100 p-8 transition-colors hover:bg-gray-50"
            >
              <div>
                <h3 className="text-xl font-bold tracking-tight">{ref.name}</h3>
                <p className="text-[10px] tracking-widest text-gray-400 uppercase">
                  {ref.company}
                </p>
              </div>
              <p className="mt-10 text-2xl leading-relaxed font-light text-gray-600 italic">
                {ref.review}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
