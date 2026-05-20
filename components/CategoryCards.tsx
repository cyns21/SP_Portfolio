"use client";

import { motion } from "framer-motion";
import { categories } from "@/data/siteContent";
import { MotionSection } from "@/components/MotionSection";

export function CategoryCards() {
  return (
    <MotionSection className="section-shell py-20">
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
                <h3 className="font-pirata text-4xl leading-none">{title}</h3>
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
