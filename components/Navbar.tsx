"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import { navItems, siteContent } from "@/data/siteContent";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-ink bg-powder/88 backdrop-blur-sm">
      <nav className="mx-auto flex h-18 w-[min(1120px,calc(100%-32px))] items-center justify-between py-4">
        <a href="#home" className="focus-ring group flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center border border-ink bg-blush transition-transform duration-300 group-hover:-rotate-3">
            <span className="font-pirata text-2xl leading-none">S</span>
          </span>
          <span className="hidden leading-tight sm:block">
            <span className="block font-pirata text-2xl">{siteContent.name}</span>
            <span className="block text-xs font-bold uppercase tracking-[0.16em] text-cherry">
              {siteContent.handle}
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-6 lg:flex">
          {/* Top navigation bar */}
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="focus-ring border-b border-transparent py-1 text-lg font-pirata uppercase tracking-[0.14em] transition hover:border-ink"
            >
              {item.label}
            </a>
          ))}
        </div>

        <button
          type="button"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="focus-ring grid h-11 w-11 place-items-center border border-ink bg-powder lg:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open ? (
        <div className="border-t border-ink bg-powder px-4 pb-5 pt-3 lg:hidden">
          <div className="mx-auto grid w-[min(1120px,100%)] gap-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="focus-ring border border-ink bg-blush px-4 py-3 font-pirata text-2xl"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
