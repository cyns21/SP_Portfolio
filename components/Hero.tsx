"use client";

import Image from "next/image";
import { BookOpen, Images } from "lucide-react";
import { motion } from "framer-motion";
import { siteContent } from "@/data/siteContent";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export function Hero() {
  return (
    <section
      id="home"
      className="section-shell grid items-center gap-12 pb-16 pt-28 lg:min-h-screen lg:grid-cols-[1.05fr_0.95fr] lg:pt-24"
    >
      <motion.div
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.1, delayChildren: 0.06 } }
        }}
        initial="hidden"
        animate="visible"
        className="relative"
      >
        <motion.div
          variants={fadeUp}
          transition={{ duration: 0.58, ease: [0.22, 1, 0.36, 1] }}
          className="mb-7 inline-flex items-center gap-3 border border-ink bg-blush px-4 py-2 text-sm font-black uppercase tracking-[0.16em]"
        >
          <Image
            src="/art/stars.png"
            alt=""
            width={22}
            height={24}
            className="asset-art h-5 w-5"
            aria-hidden="true"
          />
          {siteContent.handle}
        </motion.div>

        <motion.h1
          variants={fadeUp}
          transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl font-display text-[clamp(4.5rem,14vw,8.9rem)] leading-[0.86] tracking-normal"
        >
          Stephanie Ponce
        </motion.h1>

        <motion.p
          variants={fadeUp}
          transition={{ duration: 0.64, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 max-w-2xl font-serif text-2xl font-semibold leading-8 text-velvet sm:text-3xl"
        >
          {siteContent.tagline}
        </motion.p>

        <motion.p
          variants={fadeUp}
          transition={{ duration: 0.64, ease: [0.22, 1, 0.36, 1] }}
          className="mt-3 max-w-2xl font-serif text-xl leading-8 text-ink/78"
        >
          Clown-inspired details, fangirl devotion, and Los Angeles softness with a darker handmade edge.
        </motion.p>

        <motion.p
          variants={fadeUp}
          transition={{ duration: 0.64, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 max-w-2xl text-base leading-7 text-ink/75 sm:text-lg"
        >
          {siteContent.intro}
        </motion.p>

        <motion.div
          variants={fadeUp}
          transition={{ duration: 0.64, ease: [0.22, 1, 0.36, 1] }}
          className="mt-9 flex flex-col gap-3 sm:flex-row"
        >
          <a
            href="#gallery"
            className="focus-ring inline-flex items-center justify-center gap-3 border border-ink bg-ink px-6 py-3 text-sm font-black uppercase tracking-[0.13em] text-powder transition duration-200 hover:bg-cherry"
          >
            <Images size={18} />
            View Gallery
          </a>
          <a
            href="#blog"
            className="focus-ring inline-flex items-center justify-center gap-3 border border-ink bg-blush px-6 py-3 text-sm font-black uppercase tracking-[0.13em] transition duration-200 hover:bg-powder"
          >
            <BookOpen size={18} />
            Read Journal
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        className="relative mx-auto w-full max-w-[520px] lg:max-w-none"
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1], delay: 0.16 }}
      >
        <div className="relative border-[3px] border-ink bg-blush px-6 py-8 sm:px-8">
          <div className="mx-auto max-w-[360px]">
            <Image
              src="/art/heartwithswords.png"
              alt="Heart pierced with swords illustration"
              width={1254}
              height={1254}
              priority
              className="asset-art h-auto w-full"
            />
          </div>
          <div className="mt-4 text-center font-serif text-xl font-semibold leading-7">
            Makeup Artist, DIY Creator, Clown, Fangirl
            <span className="block">Los Angeles, CA</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
