"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { siteContent } from "@/data/siteContent";

const fadeUp = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } };

export function Hero() {
  return (
    <section id="home" className="section-shell grid items-center gap-12 pb-16 pt-28 lg:min-h-screen lg:grid-cols-[1.05fr_0.95fr] lg:pt-24">
      <motion.div variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1, delayChildren: 0.06 } } }} initial="hidden" animate="visible" className="relative">
          {/* Header in Home Page below. deleted the section adding the block that said violentdelight.666 that was here */}
        <motion.h1 variants={fadeUp} transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }} className="max-w-4xl font-pirata text-[clamp(4.5rem,14vw,8.9rem)] leading-[0.86] tracking-normal">Stephanie Ponce</motion.h1>
        <motion.p variants={fadeUp} transition={{ duration: 0.64, ease: [0.22, 1, 0.36, 1] }} className="mt-6 max-w-2xl font-serif text-2xl font-semibold leading-8 text-velvet sm:text-3xl">{siteContent.tagline}</motion.p>
        <motion.p variants={fadeUp} transition={{ duration: 0.64, ease: [0.22, 1, 0.36, 1] }} className="mt-3 max-w-2xl font-serif text-xl leading-8 text-ink/78">LA based creative...blah blah... little description about you.</motion.p>
         {/* Deleted buttons on about page. redundant */}
      </motion.div>
      <motion.div className="relative mx-auto w-full max-w-[520px] lg:max-w-none" initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1], delay: 0.16 }}>
        <div className="relative border-[3px] border-ink bg-blush px-6 py-8 sm:px-8">
          <div className="mx-auto max-w-[360px]"><Image src="/art/heartwithswords.png" alt="Heart pierced with swords illustration" width={1254} height={1254} priority className="asset-art h-auto w-full" /></div>
          <div className="mt-4 text-center font-serif text-xl font-semibold leading-7">Image of you here ^ I'm thinking<span className="block">Or we can add the tagline here "makeup, DIY, clown..."</span></div>
        </div>
      </motion.div>
    </section>
  );
}
