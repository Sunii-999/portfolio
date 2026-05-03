"use client";

import { User } from "lucide-react";
import { references } from "@/data/references";

export default function References() {
  return (
    <div className="overflow-hidden bg-white">
      <div className="w-75 shrink-0">
        <span className="mb-4 block text-[10px] tracking-[0.3em] text-black/30 uppercase">
          Testimonials
        </span>
        <h2 className="text-6xl leading-none font-medium tracking-tighter uppercase">
          Kind <br /> Words
        </h2>
      </div>
      <div className="relative flex h-screen w-fit items-center gap-[10vw] px-[10vw]">
        {references.map((ref) => (
          <div
            key={ref.id}
            className="flex h-[60vh] w-[80vw] shrink-0 flex-col justify-between md:w-112.5"
          >
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black/5">
                  <User size={20} className="text-black/40" />
                </div>
                <div>
                  <h3 className="text-xl font-medium">{ref.name}</h3>
                  <p className="text-xs tracking-widest text-black/40 uppercase">
                    {ref.company}
                  </p>
                </div>
              </div>

              <p className="text-lg leading-relaxed font-light text-black/80 italic md:text-xl">
                &ldquo;{ref.review}&rdquo;
              </p>
            </div>

            <div className="border-t border-black/5 pt-8">
              <span className="text-[10px] tracking-widest text-black/30 uppercase">
                Project
              </span>
              <p className="text-sm font-medium uppercase">{ref.product}</p>
            </div>
          </div>
        ))}

        <div className="w-[10vw] shrink-0" />
      </div>
    </div>
  );
}
