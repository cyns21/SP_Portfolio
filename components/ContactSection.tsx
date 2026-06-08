"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Instagram, Mail, Music2 } from "lucide-react";
import { MotionSection } from "@/components/MotionSection";
import { siteContent } from "@/data/siteContent";

const contactLinks = [
  { label: "Email", value: siteContent.email, href: "mailto:" + siteContent.email, Icon: Mail },
  { label: "Instagram", value: siteContent.instagram, href: "https://www.instagram.com/violentdelight.666", Icon: Instagram },
  { label: "TikTok", value: siteContent.tiktok, href: "https://www.tiktok.com/@violentdelight.666", Icon: Music2 }
];

export function ContactSection() {
  return (
    <MotionSection id="contact" className="section-shell scroll-mt-24 py-20">
      <div className="relative overflow-hidden border-[3px] border-ink bg-blush p-6 sm:p-10">
        <div className="relative grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
          <div className="text-center lg:text-left"><div className="relative mx-auto mb-6 max-w-64 lg:mx-0"><Image src="/art/letslink.png" alt="Let's link chain heart illustration" width={1254} height={1254} className="asset-art h-auto w-full" /></div><h2 className="font-pirata text-5xl leading-none sm:text-6xl">Contact</h2><p className="mt-5 max-w-xl font-serif text-2xl leading-8 text-ink/78">For creative projects, collaborations, makeup inquiries, or just to say hi.</p></div>
          <div className="grid gap-4">{contactLinks.map(({ label, value, href, Icon }, index) => (<motion.a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noreferrer" : undefined} initial={{ opacity: 0, x: 16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.05 }} whileHover={{ x: 3 }} className="focus-ring group flex items-center gap-4 border border-ink bg-powder p-4 text-ink transition-colors duration-200 hover:bg-white"><span className="grid h-12 w-12 shrink-0 place-items-center bg-ink text-powder"><Icon size={23} /></span><span className="min-w-0"><span className="block text-xs font-black uppercase tracking-[0.18em] text-cherry">{label}</span><span className="block break-words font-serif text-2xl font-semibold leading-tight sm:text-3xl">{value}</span></span></motion.a>))}</div>
        </div>
      </div>
    </MotionSection>
  );
}
