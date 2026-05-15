"use client";

import { motion } from "framer-motion";
import { categories } from "@/data/siteContent";
import { MotionSection } from "@/components/MotionSection";

export function CategoryCards() {
  return (
    <MotionSection className="section-shell py-20">
      <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
        <div>
          <p className="barbed-divider ml-[60px] text-xs font-black uppercase tracking-[0.2em] text-cherry">
            Featured categories
          </p>
          <h2 className="mt-4 max-w-3xl font-display text-5xl leading-none sm:text-6xl">
            Makeup, making, and little rituals.
          </h2>
        </div>
        <p className="max-w-md font-serif text-xl leading-7 text-ink/76">
          Cleaner portfolio sections with the same pink-card spirit: simple, direct, and easy to replace with final artwork later.
        </p>
      </div>

      <div className="grid gap-5 lg:grid-cols-3">
        {categories.map(({ title, description, Icon }, index) => (
          <motion.article
            key={title}
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: index * 0.06 }}
            whileHover={{ y: -3 }}
            className="group relative min-h-[280px] overflow-hidden border border-ink bg-blush p-6 transition-colors duration-200 hover:bg-powder"
          >
            <div className="relative flex h-full flex-col justify-between">
              <div className="grid h-14 w-14 place-items-center border border-ink bg-powder">
                <Icon size={28} strokeWidth={1.7} />
              </div>
              <div className="mt-16">
                <h3 className="font-display text-4xl leading-none">{title}</h3>
                <p className="mt-4 max-w-[30rem] text-base leading-7 text-ink/76">
                  {description}
                </p>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </MotionSection>
  );
}
