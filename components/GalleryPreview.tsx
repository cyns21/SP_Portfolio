"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { galleryItems } from "@/data/galleryItems";
import { MotionSection } from "@/components/MotionSection";

const categoryStyles = { Makeup: "bg-powder text-ink", DIY: "bg-ink text-powder", Baking: "bg-powder text-cherry" };
const artByCategory = { Makeup: "/art/heartwithswords.png", DIY: "/art/stars.png", Baking: "/art/letslink.png" };

export function GalleryPreview() {
  return (
    <MotionSection id="gallery" className="section-shell scroll-mt-24 py-20">
      <div className="mb-10 grid gap-5 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
        <div><p className="barbed-divider ml-[60px] text-xs font-black uppercase tracking-[0.2em] text-cherry">Gallery preview</p><h2 className="mt-4 font-pirata text-5xl leading-none sm:text-6xl">Portfolio cards without the plastic shine.</h2></div>
        <p className="max-w-2xl font-serif text-xl leading-8 text-ink/74 lg:justify-self-end">Flat placeholder artwork keeps the layout complete while making room for Stephanie’s real makeup photos, objects, and bakes.</p>
      </div>
      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {galleryItems.map((item, index) => (
          <motion.article key={item.title} initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.48, delay: (index % 3) * 0.05 }} whileHover={{ y: -3 }} className="group overflow-hidden border border-ink bg-powder transition-colors duration-200 hover:bg-blush">
            <div className="gallery-visual relative grid h-64 place-items-center overflow-hidden p-8"><Image src={artByCategory[item.category]} alt="" width={420} height={420} className="asset-art max-h-full w-auto opacity-80" aria-hidden="true" /><div className="absolute left-5 top-5 z-10 border border-ink bg-powder px-3 py-2 text-xs font-black uppercase tracking-[0.16em]">{item.category}</div></div>
            <div className="p-6"><span className={"inline-flex border border-ink px-3 py-1 text-xs font-black uppercase tracking-[0.16em] " + categoryStyles[item.category]}>{item.category}</span><h3 className="mt-4 font-pirata text-3xl leading-none">{item.title}</h3><p className="mt-3 text-sm leading-6 text-ink/70">{item.caption}</p></div>
          </motion.article>
        ))}
      </div>
    </MotionSection>
  );
}
