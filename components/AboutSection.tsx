"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MotionSection } from "@/components/MotionSection";
import { siteContent, styleTags } from "@/data/siteContent";

export function AboutSection() {
  return (
    <MotionSection id="about" className="section-shell scroll-mt-24 py-20">
      <div className="grid gap-8 lg:grid-cols-[0.86fr_1.14fr] lg:items-stretch">
        <div className="relative grid min-h-[380px] place-items-center overflow-hidden border-[3px] border-ink bg-blush p-7 text-center">
          <Image
            src="/art/stars.png"
            alt="Silver star illustration"
            width={447}
            height={491}
            className="asset-art mb-5 h-auto w-32 opacity-90"
          />
          <div>
            <p className="font-display text-5xl leading-none sm:text-6xl">let’s make it personal.</p>
            <p className="mt-4 font-serif text-2xl font-semibold">{siteContent.handle}</p>
          </div>
        </div>

        <div className="brutal-card p-7 sm:p-10">
          <p className="barbed-divider ml-[60px] text-xs font-black uppercase tracking-[0.2em] text-cherry">
            Artist profile
          </p>
          <h2 className="mt-4 font-display text-5xl leading-none sm:text-6xl">
            Stephanie Ponce
          </h2>
          <p className="mt-7 font-serif text-2xl leading-9 text-ink/78">
            Stephanie Ponce is a creative artist exploring makeup, DIY design,
            baking, and clown-inspired visual storytelling. Her work blends soft
            feminine details with darker theatrical elements, creating a style
            that feels playful, handmade, dramatic, and a little dangerous.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {styleTags.map((tag, index) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.03 }}
                className="border border-ink bg-powder px-4 py-2 text-sm font-black uppercase tracking-[0.12em]"
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </MotionSection>
  );
}
