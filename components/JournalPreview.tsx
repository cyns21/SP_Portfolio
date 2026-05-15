"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, BookOpen, CalendarDays } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";
import { MotionSection } from "@/components/MotionSection";

export function JournalPreview() {
  return (
    <MotionSection id="blog" className="section-shell scroll-mt-24 py-20">
      <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end"><div><p className="barbed-divider ml-[60px] text-xs font-black uppercase tracking-[0.2em] text-cherry">Blog / Journal</p><h2 className="mt-4 max-w-3xl font-display text-5xl leading-none sm:text-6xl">Process notes, lightly haunted.</h2></div><div className="chrome-edge flex max-w-sm items-center gap-4 p-4"><BookOpen size={24} /><p className="font-serif text-lg font-semibold leading-6">A quieter editorial area for tutorials, project notes, and inspiration logs.</p></div></div>
      <div className="grid gap-5 md:grid-cols-2">{blogPosts.map((post, index) => (<motion.article key={post.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.45, delay: index * 0.05 }} whileHover={{ y: -2 }} className="group relative overflow-hidden border border-ink bg-powder p-6 transition-colors duration-200 hover:bg-blush"><div className="relative"><div className="flex flex-wrap items-center gap-3 text-xs font-black uppercase tracking-[0.15em]"><span className="border border-ink bg-ink px-3 py-1 text-powder">{post.category}</span><span className="inline-flex items-center gap-2 text-ink/65"><CalendarDays size={14} />{post.date}</span></div><h3 className="mt-7 max-w-xl font-display text-4xl leading-none">{post.title}</h3><p className="mt-4 max-w-2xl text-base leading-7 text-ink/70">{post.excerpt}</p><span className="mt-7 inline-flex items-center gap-2 border-b border-ink pb-1 text-sm font-black uppercase tracking-[0.16em] transition group-hover:text-cherry">Read more<ArrowUpRight size={16} /></span></div></motion.article>))}</div>
    </MotionSection>
  );
}
