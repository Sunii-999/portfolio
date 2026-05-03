'use client'

import { useEffect, useRef, useState } from "react";
import { profile } from "@/data/profile"; // Import your data

export default function Header() {
  const [isLoaded, setIsLoaded] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const loadGSAP = async () => {
      const loadScript = (src: string) => new Promise<void>(res => {
        const s = document.createElement('script'); s.src = src; s.onload = () => res(); document.head.appendChild(s);
      });
      try {
        await loadScript('https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js');
        setIsLoaded(true);
      } catch (e) {
        console.error("GSAP load failed", e);
      }
    };
    loadGSAP();
  }, []);

  useEffect(() => {
    if (!isLoaded) return;
    const gsap = (window as any).gsap;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      
      tl.from(".reveal-text", {
        y: 120,
        opacity: 0,
        duration: 1.4,
        ease: "expo.out",
        stagger: 0.1
      })
      .from(".reveal-sub", {
        opacity: 0,
        y: 20,
        duration: 1,
        ease: "power2.out"
      }, "-=0.8");

    }, containerRef);

    return () => ctx.revert();
  }, [isLoaded]);

  const educationFields = profile.education.map(edu => edu.field.toLowerCase());
  const formattedEducation = educationFields.length > 1 
    ? `${educationFields.slice(0, -1).join(', ')} and ${educationFields.slice(-1)}`
    : educationFields[0];

  return (
    <section ref={containerRef} className="relative h-screen flex flex-col justify-center px-8 md:px-16 lg:px-24">
      
      <div className="max-w-screen-2xl w-full mx-auto">
        <div className="overflow-hidden mb-4">
          <h1 className="reveal-text text-[28vw] md:text-[22vw] leading-[0.75] font-medium tracking-[-0.06em] uppercase">
            Sunii
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mt-12 md:mt-20 reveal-sub">
          {/* Identity Section */}
          <div className="md:col-span-4 lg:col-span-3">
            <span className="text-[10px] uppercase tracking-[0.3em] text-black/30 block mb-2">Name</span>
            <p className="text-xl md:text-2xl font-medium tracking-tight">{profile.name}</p>
          </div>

          {/* Statement Section */}
          <div className="md:col-span-6 lg:col-span-5 md:col-start-6 lg:col-start-5">
            <span className="text-[10px] uppercase tracking-[0.3em] text-black/30 block mb-2">Description</span>
            <p className="text-lg md:text-xl leading-relaxed font-light text-black/70 max-w-md">
              {profile.role} with a degree in <span className="text-black font-normal">{formattedEducation}</span>.
            </p>
          </div>

          {/* Availability Section */}
          <div className="md:col-span-2 md:col-start-11 hidden lg:block text-right">
            <span className="text-[10px] uppercase tracking-[0.3em] text-black/30 block mb-2">Availability</span>
            <p className="text-xs font-bold uppercase tracking-widest">Currently working</p>
          </div>
        </div>
      </div>

      {/* Decorative Scroll Line */}
      <div className="absolute right-8 bottom-12 hidden md:block">
         <div className="h-32 w-px bg-black/10 origin-top scale-y-0 reveal-sub" style={{ animation: 'scaleY 1.5s forwards ease-out 1s' }} />
      </div>
    </section>
  );
}