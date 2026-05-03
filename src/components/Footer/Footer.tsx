import React from "react";
import { profile } from "@/data/profile";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-20 border-t border-gray-100 bg-white pt-20">
      <div className="px-10 pb-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Column 1: Say Hello */}
          <div className="space-y-4">
            <p className="text-[10px] font-medium tracking-widest text-gray-400 uppercase">
              Get in touch
            </p>
            <div className="flex flex-col gap-2">
              <a
                href={`mailto:${profile.contacts.email}`}
                className="text-xl transition-all hover:text-gray-500 hover:italic"
              >
                {profile.contacts.email}
              </a>
              <a
                href={`tel:${profile.contacts.phone.replace(/\s/g, "")}`}
                className="text-xl transition-all hover:text-gray-500 hover:italic"
              >
                {profile.contacts.phone}
              </a>
            </div>
          </div>

          {/* Column 2: Socials */}
          <div className="space-y-4">
            <p className="text-[10px] font-medium tracking-widest text-gray-400 uppercase">
              Social
            </p>
            <div className="flex flex-col gap-2">
              <a
                href={profile.contacts.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl transition-all hover:line-through"
              >
                GitHub
              </a>
              <a
                href={profile.contacts.medium}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl transition-all hover:line-through"
              >
                Medium
              </a>
            </div>
          </div>

          {/* Column 3: Current Status */}
          <div className="space-y-4">
            <p className="text-[10px] font-medium tracking-widest text-gray-400 uppercase">
              Status
            </p>
            <p className="text-xl leading-snug">
              Currently {profile.role} <br />
              at {profile.experience[0].company}
            </p>
          </div>

          {/* Column 4: Location/Time */}
          <div className="space-y-4 md:text-right lg:text-left">
            <p className="text-[10px] font-medium tracking-widest text-gray-400 uppercase">
              Location
            </p>
            <p className="text-xl">
              Roosdaal, BE <br />
              {new Date().toLocaleTimeString("en-GB", {
                hour: "2-digit",
                minute: "2-digit",
                timeZoneName: "short",
              })}
            </p>
          </div>
        </div>
      </div>

      {/* Massive Branding Section */}
      <div className="overflow-hidden border-t border-gray-100 px-4 pt-10 pb-10 whitespace-nowrap">
        <h2 className="text-[15vw] leading-[0.8] font-black tracking-tighter text-black uppercase">
          ©{currentYear.toString().slice(-2)} * {profile.alias.toUpperCase()}
        </h2>
      </div>

      {/* Legal/Small Print */}
      <div className="flex flex-col justify-between border-t border-gray-100 px-10 py-6 text-[10px] tracking-widest text-gray-400 uppercase md:flex-row">
        <p>Design & Code by {profile.name}</p>
        <p>Built with Next.js & GSAP</p>
        <p>All Rights Reserved</p>
      </div>
    </footer>
  );
}
